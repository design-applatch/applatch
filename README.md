# Applatch Kids site (Astro)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

- Content lives in `src/data.ts` (features, FAQ, pricing, blog cards, links). Edit there, not in the page.
- Page layout: `src/pages/index.astro`. Quiz demo: `src/components/Quiz.astro`. Styles: `src/styles/global.css`.
- Images are hot-linked from applatch.com via Jetpack (`i0.wp.com`). For production, download them into `src/assets/` and switch to `astro:assets` `<Image>` for optimisation.
- Set `site` (and `base` if hosted in `/applatchkids`) in `astro.config.mjs`.

## To do
- Confirm pricing (`price` in `src/data.ts` and the toggle script in `index.astro`): live site shows £399 / £3999.
- Newsletter form is a stub; connect it to your email provider.
- About, Blog, Contact and blog posts still link to the WordPress site.
