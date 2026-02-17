# ASCII Plasma Animation — Research Doc
> Fuente: https://github.com/vistawtf/landing
> Archivo clave: `src/components/noise.tsx`
> Fecha: 2026-02-17

---

## 1. ¿Qué hace el efecto?

Una **grid de caracteres ASCII ordenados por densidad visual** (`    .₊˚:-=+#`) que anima como un plasma fluido, creando ondas y gradientes orgánicos en movimiento. Los caracteres más densos (`#`, `+`) parecen "brillar" y los más ligeros (`.`, espacio) parecen desvanecerse.

El efecto está en el footer: cubre toda la zona de 800px de altura. Encima se superpone un gradiente negro (`from-black/50 via-black/85 to-black`) que lo oscurece/suaviza, dando profundidad visual. El contenido del footer flota sobre la animación.

---

## 2. Implementación encontrada

| Detalle | Valor |
|---|---|
| **Archivo** | `src/components/noise.tsx` |
| **Componente** | `<Plasma>` |
| **Librería** | `simplex-noise` v4 (`createNoise3D`) |
| **Render** | `<pre>` HTML — NO canvas, NO WebGL |
| **Framework** | React (useState + useEffect) |
| **FPS** | 8fps (`setInterval` cada 125ms) |
| **Dimensiones** | width = screenWidth/10 chars, height = 50 filas |

---

## 3. Código completo del efecto

```tsx
// src/components/noise.tsx
import { useEffect, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();

// Caracteres ordenados de menor a mayor densidad visual
// Espacios al inicio = zonas oscuras, # al final = zonas brillantes
const shades = '    .₊˚:-=+#';
const shadesLength = shades.length;

// Convierte valor 0-1 a carácter ASCII correspondiente
function convertToChar(value: number) {
  return shades[Math.min(Math.floor(value * shadesLength), shadesLength - 1)];
}

// Genera el frame completo como string de texto
function drawPlasma(t: number) {
  let output = '';

  const windowWidth = Math.min(window.screen.width, window.innerWidth);
  const width = windowWidth / 10;   // columnas
  const height = 1000 / 20;        // 50 filas

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      // Ruido simplex 3D: x/32 y y/32 controlan el "zoom", t/64 controla velocidad
      let r = (noise3D(x / 32, y / 32, t / 64) + 1) / 2; // normalizado 0-1
      output += convertToChar(r);
    }
    output += '\n';
  }

  return output;
}

export function Plasma({ children }: { children?: React.ReactNode }) {
  const [plasma, setPlasma] = useState('');

  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      setPlasma(drawPlasma(t++)); // t incrementa cada frame
    }, 1000 / 8); // 8 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ overflow: 'hidden', maxWidth: '100dvw' }}
      className="relative h-[800px] border-t border-white/20"
    >
      {/* Gradiente negro encima para suavizar el ASCII */}
      <div className="absolute bg-gradient-to-b from-black/50 via-black/85 to-black w-full h-full" />

      {/* El ASCII plasma, detrás de todo (z-[-1]) */}
      <pre
        className="z-[-1] absolute top-0 left-0 font-mono w-full"
        style={{
          whiteSpace: 'pre',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '4px',  // espaciado clave para que se vea cuadrado
          overflowX: 'hidden',
          color: 'white'
        }}
      >
        {plasma}
      </pre>

      {/* Contenido del footer encima */}
      {children}
    </div>
  );
}
```

### Uso en el Footer:
```tsx
// src/components/footer.tsx
import { Plasma } from './noise';

export const Footer = () => (
  <Plasma>
    <div className="z-[100] relative ...">
      {/* contenido del footer */}
    </div>
  </Plasma>
);
```

---

## 4. Cómo funciona — análisis técnico

### Simplex Noise 3D
- `noise3D(x, y, z)` devuelve valores entre -1 y 1
- Se divide por 32 en x/y para hacer el patrón más "grande" (menos zoom)
- Se usa `t` como coordenada Z → animar en el tiempo crea movimiento fluido
- `t / 64` hace la animación más lenta y suave (si fuera `t / 8` sería muy rápida)

### Caracteres de densidad visual
```
'    .₊˚:-=+#'
 ^--- espacios = transparente/oscuro
              ^--- # = denso/brillante
```
12 caracteres totales (4 espacios + 8 símbolos). El valor de ruido 0.0–1.0 se mapea a índices 0–11.

### Render como `<pre>`
- No usa canvas. Genera un string gigante con `\n` y lo mete en `<pre>`
- `letterSpacing: '4px'` hace que los chars monoespaciados formen una grid cuadrada
- `lineHeight: '20px'` + `fontSize: '14px'` da proporción vertical similar a la horizontal
- ~8 FPS es suficiente para el efecto fluido sin costar demasiado CPU

---

## 5. Dependencias necesarias

```bash
npm install simplex-noise
# o
pnpm add simplex-noise
```

Solo **una dependencia**: `simplex-noise` v4+. El resto es React puro.

---

## 6. Cómo adaptarlo a Vista-Website

### Opción A: Copiar directamente (mínimos cambios)

1. **Instalar dependencia:**
   ```bash
   cd /path/to/vista-website
   npm install simplex-noise
   ```

2. **Crear componente** `src/components/AsciiPlasma.tsx`:
   ```tsx
   // Copiar el código de noise.tsx con ajustes de color/tamaño
   // Cambiar color de 'white' a el color de acento de Vista
   ```

3. **Adaptar al footer de Vista:**
   ```tsx
   // En NewsletterSection o FooterSection:
   <AsciiPlasma>
     <div className="relative z-10">
       {/* contenido */}
     </div>
   </AsciiPlasma>
   ```

### Opción B: Con personalización para Vista

**Ajustes recomendados:**

| Parámetro | Original vistawtf | Sugerido para Vista |
|---|---|---|
| `shades` | `'    .₊˚:-=+#'` | `'    .·:;+=*#@'` o igual |
| `color` | `white` | Color de acento de Vista |
| `fontSize` | `14px` | `12px` (más denso) o `14px` |
| `letterSpacing` | `4px` | `3px`–`5px` según gusto |
| FPS | `8` | `6`–`10` según perf |
| `height` | `800px` | Ajustar a diseño |
| Gradiente overlay | `from-black/50 via-black/85 to-black` | Adaptar a bg de Vista |
| Zoom (`/32`) | `x/32, y/32` | Más grande = `/48`, más pequeño = `/16` |
| Velocidad (`/64`) | `t/64` | Más lento = `/96`, más rápido = `/32` |

### Código adaptado para Vista (punto de partida):

```tsx
// src/components/AsciiPlasma.tsx
'use client'; // si usa Next.js App Router

import { useEffect, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

const noise3D = createNoise3D();
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

interface AsciiPlasmaProps {
  children?: React.ReactNode;
  height?: number;        // px, default 600
  fps?: number;           // default 8
  color?: string;         // default 'white'
  gradientOverlay?: string; // Tailwind classes para el overlay
}

export function AsciiPlasma({
  children,
  height = 600,
  fps = 8,
  color = 'white',
  gradientOverlay = 'bg-gradient-to-b from-black/50 via-black/85 to-black'
}: AsciiPlasmaProps) {
  const [plasma, setPlasma] = useState('');

  useEffect(() => {
    const cols = Math.floor(Math.min(window.screen.width, window.innerWidth) / 10);
    const rows = Math.floor(height / 20);
    let t = 0;

    const interval = setInterval(() => {
      setPlasma(drawPlasma(t++, cols, rows));
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [height, fps]);

  return (
    <div
      className="relative border-t border-white/20"
      style={{ overflow: 'hidden', maxWidth: '100dvw', height: `${height}px` }}
    >
      <div className={`absolute w-full h-full ${gradientOverlay}`} />
      <pre
        className="z-[-1] absolute top-0 left-0 font-mono w-full"
        style={{
          whiteSpace: 'pre',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '4px',
          overflowX: 'hidden',
          color,
        }}
      >
        {plasma}
      </pre>
      {children}
    </div>
  );
}
```

---

## 7. Performance considerations

- **CPU:** La generación del string es sincrónica en el hilo principal. A 8fps con ~60 columnas × 50 filas = 3000 chars por frame. Es ligero.
- **Re-renders:** `setPlasma` causa re-render cada frame. Con React 19 esto es fine para un componente aislado.
- **Mejora opcional:** Mover `drawPlasma` a un Web Worker para dejar el hilo principal libre. Probablemente innecesario.
- **SSR:** El `useEffect` protege la generación de plasma en cliente. En Next.js App Router agregar `'use client'`.

---

## 8. Alternativas encontradas (si no se quiere simplex-noise)

### Pure CSS approach (más limitado):
- Usar CSS `@keyframes` con `background-position` en un SVG noise filter
- Menos control, no es verdadero ASCII

### Canvas approach:
- Dibujar directamente en `<canvas>` con `fillText()` para cada char
- Más performante para grids muy grandes
- Más complejo de implementar

### La implementación de vistawtf es la ideal:
✅ Simple (~50 líneas)
✅ Sin canvas
✅ Una sola dependencia
✅ Resultado visual exactamente el deseado

---

*Investigación completada: 2026-02-17*
