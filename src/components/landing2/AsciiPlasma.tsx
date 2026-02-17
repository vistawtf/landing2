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

const BASE_RADIUS = 50;
const CLICK_RADIUS = 100;

// Base color components (rgba(228, 226, 216, 0.55))
const BASE_R = 228, BASE_G = 226, BASE_B = 216;
// Orange target components (#FF5233 = rgb(255, 82, 51))
const ORANGE_R = 255, ORANGE_G = 82, ORANGE_B = 51;

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

function interpolatedColor(intensity: number): string {
  const r = Math.round(BASE_R + (ORANGE_R - BASE_R) * intensity);
  const g = Math.round(BASE_G + (ORANGE_G - BASE_G) * intensity);
  const b = Math.round(BASE_B + (ORANGE_B - BASE_B) * intensity);
  return `rgba(${r}, ${g}, ${b}, 0.55)`;
}

/**
 * AsciiPlasma — fills its parent container completely.
 * Parent must be position:relative (or absolute/fixed) with explicit dimensions.
 * Dark aesthetic: very dim characters against black background.
 * Hover: characters within 50px of cursor glow orange (#FF5233).
 * Click (held): radius expands smoothly to 100px and holds; releases back to 50px.
 */
export function AsciiPlasma() {
  const [plasma, setPlasma] = useState<string[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  // Ref instead of state — mouse moves don't trigger re-renders;
  // colors update on the next 8fps plasma tick (≤125ms lag, imperceptible here).
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  // Radius: smoothly animates between BASE_RADIUS and CLICK_RADIUS
  const radiusRef = useRef<number>(BASE_RADIUS);
  const isClickRef = useRef<boolean>(false);

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
      // Contraction only — expansion is handled instantly on mousedown
      if (!isClickRef.current && radiusRef.current > BASE_RADIUS) {
        radiusRef.current = Math.max(BASE_RADIUS, radiusRef.current - 6);
      }

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
        isClickRef.current = false;
      }}
      onMouseDown={() => {
        isClickRef.current = true;
        radiusRef.current = CLICK_RADIUS; // salto instantáneo
      }}
      onMouseUp={() => {
        isClickRef.current = false;
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
              let color: string;

              if (mouse) {
                const charCenterX = colIdx * CHAR_WIDTH + CHAR_WIDTH / 2;
                const charCenterY = rowIdx * LINE_HEIGHT + LINE_HEIGHT / 2;
                const dist = Math.sqrt(
                  (charCenterX - mouse.x) ** 2 + (charCenterY - mouse.y) ** 2
                );
                color = dist < radiusRef.current ? '#FF5233' : interpolatedColor(0);
              } else {
                color = interpolatedColor(0);
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
