# Rangdra Pangestu — Portfolio

This portfolio is built with Astro and published as a static site on Vercel.

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Run `npm run check` to check Astro and TypeScript. Run `npm run build` to generate the site in `dist/`, then `npm run start` to preview the build locally.

## Deployment

Vercel uses the Astro framework preset and default build settings. The static site needs no adapter. The legacy `/portofolio` and `/resume` routes redirect on Vercel and have static fallbacks in the build.
