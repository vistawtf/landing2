'use client';

import { Fragment, useEffect, useRef, useState, type CSSProperties } from 'react';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();

const SHADES = '   .:-=+*#%@';
const SHADES_LENGTH = SHADES.length;

const FONT_SIZE = 14;
const LINE_HEIGHT = 20;
const LETTER_SPACING = 4;
// Monospace char ~60% of font-size + letter-spacing
const CHAR_WIDTH = FONT_SIZE * 0.6 + LETTER_SPACING;

const BASE_RADIUS = 50;
const CLICK_RADIUS = 100;
const TARGET_FPS = 12;
const FRAME_INTERVAL_MS = 1000 / TARGET_FPS;

const BASE_R = 228;
const BASE_G = 226;
const BASE_B = 216;
const BASE_A = 0.55;
const HOVER_R = 255;
const HOVER_G = 82;
const HOVER_B = 51;
const HOVER_A = 0.8;

const PRE_STYLE: CSSProperties = {
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
};

function convertToChar(value: number) {
  return SHADES[Math.min(Math.floor(value * SHADES_LENGTH), SHADES_LENGTH - 1)];
}

function mixColor(intensity: number) {
  // Solid circle: characters inside the radius get full orange, outside get base color.
  // No gradient fade — hard cutoff at intensity > 0.
  if (intensity > 0) {
    return `rgba(${HOVER_R}, ${HOVER_G}, ${HOVER_B}, ${HOVER_A.toFixed(3)})`;
  }
  return `rgba(${BASE_R}, ${BASE_G}, ${BASE_B}, ${BASE_A.toFixed(3)})`;
}

function drawPlasma(tick: number, cols: number, rows: number): string[][] {
  const grid: string[][] = [];
  for (let row = 0; row < rows; row++) {
    const rowChars: string[] = [];
    for (let col = 0; col < cols; col++) {
      const value = (noise3D(row / 32, col / 32, tick / 64) + 1) / 2;
      rowChars.push(convertToChar(value));
    }
    grid.push(rowChars);
  }
  return grid;
}

export function AsciiPlasma() {
  const [plasma, setPlasma] = useState<string[][]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [radiusSq, setRadiusSq] = useState<number>(BASE_RADIUS * BASE_RADIUS);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const radiusRef = useRef<number>(BASE_RADIUS);
  const targetRadiusRef = useRef<number>(BASE_RADIUS);
  const isClickRef = useRef<boolean>(false);

  const sizeRef = useRef<{ cols: number; rows: number }>({ cols: 40, rows: 15 });
  const rafRef = useRef<number | null>(null);
  const lastFrameTsRef = useRef<number>(0);
  const tickRef = useRef<number>(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateSize = () => {
      const { width, height } = node.getBoundingClientRect();
      sizeRef.current = {
        cols: Math.ceil(width / CHAR_WIDTH) + 2,
        rows: Math.ceil(height / LINE_HEIGHT) + 1,
      };
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    intersectionObserver.observe(node);
    return () => intersectionObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const loop = (ts: number) => {
      if (!document.hidden && ts - lastFrameTsRef.current >= FRAME_INTERVAL_MS) {
        lastFrameTsRef.current = ts;

        const targetRadius = targetRadiusRef.current;
        const currentRadius = radiusRef.current;
        if (Math.abs(targetRadius - currentRadius) > 0.25) {
          radiusRef.current = currentRadius + (targetRadius - currentRadius) * 0.08;
        } else {
          radiusRef.current = targetRadius;
        }

        setMousePos(mousePosRef.current);
        setRadiusSq(radiusRef.current * radiusRef.current);

        const { cols, rows } = sizeRef.current;
        setPlasma(drawPlasma(tickRef.current++, cols, rows));
      }

      rafRef.current = window.requestAnimationFrame(loop);
    };

    rafRef.current = window.requestAnimationFrame(loop);
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isVisible]);

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
        targetRadiusRef.current = BASE_RADIUS;
      }}
      onMouseDown={() => {
        isClickRef.current = true;
        // Instantly snap to click radius (bypass lerp)
        radiusRef.current = CLICK_RADIUS;
        targetRadiusRef.current = CLICK_RADIUS;
      }}
      onMouseUp={() => {
        isClickRef.current = false;
        // Smoothly lerp back to base radius
        targetRadiusRef.current = BASE_RADIUS;
      }}
    >
      <pre style={PRE_STYLE}>
        {plasma.map((row, rowIdx) => {
          return (
            <Fragment key={rowIdx}>
              {row.map((char, colIdx) => {
                let color = mixColor(0);

                if (mousePos) {
                  const charCenterX = colIdx * CHAR_WIDTH + CHAR_WIDTH / 2;
                  const charCenterY = rowIdx * LINE_HEIGHT + LINE_HEIGHT / 2;
                  const dx = charCenterX - mousePos.x;
                  const dy = charCenterY - mousePos.y;
                  const distSq = dx * dx + dy * dy;
                  if (distSq < radiusSq) {
                    const intensity = 1 - distSq / radiusSq;
                    color = mixColor(intensity);
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
          );
        })}
      </pre>
    </div>
  );
}
