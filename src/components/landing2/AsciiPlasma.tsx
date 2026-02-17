'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();

// Characters ordered by visual density: spaces = dark, # = bright
const shades = '    .₊˚:-=+#';
const shadesLength = shades.length;

const FONT_SIZE = 14;
const LINE_HEIGHT = 20;
const LETTER_SPACING = 4;
// Monospace char ~60% of font-size + letter-spacing
const CHAR_WIDTH = FONT_SIZE * 0.6 + LETTER_SPACING; // ~12.4px

const BASE_COLOR = 'rgba(228, 226, 216, 0.55)';
const HOVER_COLOR = '#FF5233';
const HOVER_RADIUS = 80;

function convertToChar(value: number) {
  return shades[Math.min(Math.floor(value * shadesLength), shadesLength - 1)];
}

function drawPlasma(t: number, cols: number, rows: number): string[][] {
  const grid: string[][] = [];
  for (let x = 0; x < rows; x++) {
    const row: string[] = [];
    for (let y = 0; y < cols; y++) {
      const r = (noise3D(x / 32, y / 32, t / 64) + 1) / 2;
      row.push(convertToChar(r));
    }
    grid.push(row);
  }
  return grid;
}

/**
 * AsciiPlasma — fills its parent container completely.
 * Parent must be position:relative (or absolute/fixed) with explicit dimensions.
 * Dark aesthetic: very dim characters against black background.
 * Hover: characters within ~80px of cursor glow orange (#FF5233).
 */
export function AsciiPlasma() {
  const [plasma, setPlasma] = useState<string[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  // Ref instead of state — mouse moves don't trigger re-renders;
  // colors update on the next 8fps plasma tick (≤125ms lag, imperceptible here).
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const getSize = () => {
      if (!containerRef.current) return { cols: 40, rows: 15 };
      const { width, height } = containerRef.current.getBoundingClientRect();
      return {
        cols: Math.ceil(width / CHAR_WIDTH) + 2, // +2 ensures edge coverage
        rows: Math.ceil(height / LINE_HEIGHT) + 1,
      };
    };

    let t = 0;

    const interval = setInterval(() => {
      const dims = getSize();
      setPlasma(drawPlasma(t++, dims.cols, dims.rows));
    }, 1000 / 8); // 8 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-[#111]"
      aria-hidden="true"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mousePosRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }}
      onMouseLeave={() => {
        mousePosRef.current = null;
      }}
    >
      <pre
        style={{
          whiteSpace: 'pre',
          fontSize: `${FONT_SIZE}px`,
          lineHeight: `${LINE_HEIGHT}px`,
          letterSpacing: `${LETTER_SPACING}px`,
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          userSelect: 'none',
        }}
      >
        {plasma.map((row, rowIdx) => (
          <Fragment key={rowIdx}>
            {row.map((char, colIdx) => {
              const mouse = mousePosRef.current;
              let color = BASE_COLOR;
              if (mouse) {
                const charCenterX = colIdx * CHAR_WIDTH + CHAR_WIDTH / 2;
                const charCenterY = rowIdx * LINE_HEIGHT + LINE_HEIGHT / 2;
                const dist = Math.sqrt(
                  (charCenterX - mouse.x) ** 2 + (charCenterY - mouse.y) ** 2
                );
                if (dist < HOVER_RADIUS) {
                  color = HOVER_COLOR;
                }
              }
              return (
                <span key={colIdx} style={{ color }}>
                  {char}
                </span>
              );
            })}
            {'\n'}
          </Fragment>
        ))}
      </pre>
    </div>
  );
}
