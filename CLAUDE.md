# Vista Landing — Claude Context

## Commands

```bash
npm run dev          # dev server
npm run build        # prebuild corre fetch-rss.js automáticamente
npm run fetch-rss    # regenerar public/rss-articles.json manualmente
npm run lint
```

## Architecture

Next.js 16 static export (`output: 'export'`). Dos mundos de componentes:
- `src/components/` — legacy (Footer, Hero, etc.) usado en /about, /services
- `src/components/sections/` — diseño activo de la homepage

Routes: `/`, `/about`, `/services`, `/archive`, `/llms`

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | URLs sociales y de sitio — **nunca hardcodear**, siempre importar de aquí |
| `src/lib/rss.ts` | Tipos y helpers de RSS (RSS_FEED_URL, ARCHIVE_API_URL) |
| `public/rss-articles.json` | Cache de artículos generado en build; commiteado al repo |
| `scripts/fetch-rss.js` | Script Node CJS que llama Apify + RSS directo como fallback |

## Environment

`APIFY_API_TOKEN` — requerido en build para fetch-rss. Sin él, hace fallback a RSS directo.

## Gotchas

- `scripts/fetch-rss.js` es **CommonJS** (`require`), no puede importar de `src/lib/constants.ts` — dejar comentario `// keep in sync with src/lib/constants.ts`
- `public/rss-articles.json` se commitea — cambios en el script requieren re-correr `npm run fetch-rss`
