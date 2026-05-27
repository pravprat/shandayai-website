# Deploy Shandayai on Cloudflare (static site)

This repo uses **static export** (`output: "export"` → `out/`). Do **not** use OpenNext or `opennextjs-cloudflare`.

## Recommended: Cloudflare **Pages** (simplest)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create** → **Pages** → **Connect to Git**
3. Select `pravprat/shandayai-website`
4. Build settings:

   | Field | Value |
   |-------|--------|
   | Framework preset | **None** |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Node.js version | `22` |

5. **Save and Deploy**
6. **Custom domains** → add `shandayai.com` and `www.shandayai.com`
7. In **DNS**, remove any Netlify records; point the domain to this Pages project

---

## If you used **Workers** + CI/CD (Workers Builds)

That flow uses a **Build command** + **Deploy command** ([docs](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)).

Cloudflare may auto-set:

```bash
npx opennextjs-cloudflare build   # WRONG for this repo
```

### Fix in dashboard

**Workers & Pages** → your **Worker** → **Settings** → **Build**

| Field | Set to |
|-------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy` |

(`npm run deploy` runs `wrangler deploy` and uploads `./out` per `wrangler.toml`.)

Clear any `opennextjs-cloudflare` command, then **Retry deployment**.

---

## Verify locally

```bash
npm run build
ls out/index.html
```

## After deploy

Test `https://<project>.pages.dev` before `https://shandayai.com`.
