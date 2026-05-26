# shandayai-website

Landing page for [shandayai.com](https://shandayai.com), built with Next.js and Tailwind CSS.

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

```bash
npm run build
```

The build is configured as a static export for Cloudflare Pages and writes to:

```text
out/
```

## Deployment

Deploy through Cloudflare Pages with:

```text
Build command: npm run build
Output directory: out
Node version: 22
```

Then connect the GoDaddy-managed domain:

- `shandayai.com`
- `www.shandayai.com`

## Project Files

- Landing page: `src/app/page.tsx`
- Metadata: `src/app/layout.tsx`
- Favicon: `public/icon.svg`

