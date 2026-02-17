# Card Borders Research & Recommendation

## Problema Actual
- Fondo página: `#FFFFFF` (white)
- Fondo tarjetas: `#F2F2F2` (light gray)
- **Issue:** Contraste bajo entre tarjeta y página → bordes actuales no se sienten

## Bordes Actuales (Muchos!)
1. `border-black/[0.08]` - Borde inferior de imagen (separa imagen de texto)
2. `border-white/[0.15]` - Grid contenedor completo
3. `border-white/[0.15]` - Entre tarjetas (divisores internos)

## Research Findings (2024-2025 Best Practices)

### Tendencia Clara: Shadow > Borders

**Fuentes:**
- **Mockplus:** "Reduce the use of excessive borders and dividing lines for a clean, modern look"
- **Datarocks:** "If shadows define the areas, we don't need borders"
- **Eleken:** "Implement a subtle shadow or border for depth"
- **BricxLabs:** "Add borders OR subtle shadows to lift cards off the background"
- **Arounda:** "Light two-color palette and spacing between cards" (no mention of borders)

### Patrón Moderno (Medium, NYT, The Verge)
- ❌ NO usan borders internos
- ✅ SÍ usan box-shadow sutil en cada tarjeta
- ✅ Spacing/gaps definen separación (no borders)

## Recomendación del Equipo

### ✅ Opción A: Shadow Sutil (RECOMENDADO)
**Qué hacer:**
1. **Eliminar TODOS los borders** (grid, imagen, divisores)
2. **Agregar box-shadow sutil** a cada tarjeta individual
3. **Usar gaps** para separación (ya los tenemos)

**Ejemplo CSS:**
```css
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
```

**Hover:**
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08);
```

**Por qué es mejor:**
- ✅ Define contorno de tarjeta claramente (mejor que border actual)
- ✅ Limpia diseño (menos líneas, menos ruido)
- ✅ Patrón moderno que convierte bien (Medium, NYT)
- ✅ Hover elevación = affordance clara (clickeable)
- ✅ Reduce saturación visual → mejor foco en contenido

### ⚠️ Opción B: Border Más Oscuro
**Qué hacer:**
1. Mantener borders pero hacerlos más visibles
2. Cambiar `border-white/[0.15]` → `border-black/[0.15]` o mayor

**Por qué NO lo recomendamos:**
- ❌ Anticuado (tendencia 2024+ es shadows)
- ❌ Más saturación visual
- ❌ No mejora percepción de "tarjeta clickeable"

### ❌ Opción C: Mantener Todo Igual
No resuelve el problema reportado.

## Implementación Recomendada

### Cambios en `LatestSection.tsx`:

**ANTES:**
```tsx
// Grid con borders everywhere
<div className="grid ... border border-white/[0.15]">
  <div className="border-r border-white/[0.15]">
    <ArticleCard ... />
  </div>
</div>

// Imagen con border
<div className="... border-b border-black/[0.08]" />
```

**DESPUÉS:**
```tsx
// Grid SIN borders, solo gaps
<div className="grid ... gap-4">
  <ArticleCard ... />
</div>

// Tarjeta CON shadow
<a className="... shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08)]">
  ...
</a>

// Imagen SIN border
<div className="..." />
```

## Resultado Esperado
- Tarjetas se sienten como **objetos elevados** sobre la página
- Definición clara de contorno (mejor que ahora)
- Diseño más limpio y moderno
- Hover da sensación de "levantar" la tarjeta (depth)

## Referencias
- Material Design shadows: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`
- Tailwind shadows: https://tailwindcss.com/docs/box-shadow
- Medium, NYT, The Verge: todos usan este patrón
