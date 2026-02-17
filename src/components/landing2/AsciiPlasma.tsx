'use client';

import { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();

// Characters ordered by visual density: spaces = dark, # = bright
const shades = '    .₊˚:-=+#';
const shadesLength = shades.length;

function convertToChar(value: number) {
  return shades[Math.min(Math.floor(value * shadesLength), shadesLength - 1)];
}

function drawPlasma(t: number, cols: number, rows: number) {
  let output = '';
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      const r = (noise3D(x / 32, y / 32, t / 64) + 1) / 2;
      output += convertToChar(r);
    }
    output += '\n';
  }
  return output;
}

/**
 * AsciiPlasma — fills its parent container completely.
 * Parent must be position:relative (or absolute/fixed) with explicit dimensions.
 * Dark aesthetic: very dim characters against black background.
 */
export function AsciiPlasma() {
  const [plasma, setPlasma] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const FONT_SIZE = 14;
    const LINE_HEIGHT = 20;
    // Approximate char width: monospace char ~60% of font-size + letter-spacing
    const LETTER_SPACING = 4;
    const CHAR_WIDTH = FONT_SIZE * 0.6 + LETTER_SPACING;

    const getSize = () => {
      if (!containerRef.current) return { cols: 40, rows: 15 };
      const { width, height } = containerRef.current.getBoundingClientRect();
      return {
        cols: Math.ceil(width / CHAR_WIDTH) + 2, // +2 ensures edge coverage
        rows: Math.ceil(height / LINE_HEIGHT) + 1,
      };
    };

    let t = 0;
    let dims = getSize();

    const interval = setInterval(() => {
      dims = getSize();
      setPlasma(drawPlasma(t++, dims.cols, dims.rows));
    }, 1000 / 8); // 8 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <pre
        style={{
          whiteSpace: 'pre',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '4px',
          overflowX: 'hidden',
          // Very dim — coherent with dark Vista footer
          color: 'rgba(255, 255, 255, 0.15)',
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          userSelect: 'none',
        }}
      >
        {plasma}
      </pre>
    </div>
  );
}
