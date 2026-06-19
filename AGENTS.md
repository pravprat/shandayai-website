<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ShandayAI website — agent instructions

## Canonical branch

**Always work from `main`.** Pull before editing:

```bash
git checkout main
git pull origin main
```

For Cloud Agent runs, create feature branches as `cursor/<descriptive-name>-87ab`, then **merge or push to `main`** when done. Do not leave site changes only on stale side branches.

### Do not

- Edit `cursor/single-logo-image-87ab` or other old logo-only branches without merging `main` first
- Leave content changes uncommitted or unpushed
- Deploy from a branch that diverged from old SCRCA single-page nav (Vision / Platform / Architecture)

## Commit and push (required)

After every meaningful change:

```bash
git add <files>
git commit -m "Clear descriptive message"
git push origin main
```

**Co-author policy:** Cursor must not appear as product owner. Run `./scripts/install-git-hooks.sh` once per clone; the hook replaces `Co-authored-by: Cursor <cursoragent@cursor.com>` with `Co-authored-by: ShandayAI Agent <shandayaiagent@shandayai.com>` on agent commits.

Cloudflare Pages deploys from **`main`**. Unpushed commits or commits on orphan branches will **not** appear on shandayai.com.

## Site structure (current)

| Path | Purpose |
|------|---------|
| `/` | Homepage — two business lines + platform preview |
| `/advisory/` | AI Strategy & Architecture |
| `/platforms/` | ShandayAI Reliability Intelligence Platform (RCA Core, RCA Assist, full platform) |
| `/platforms/scrca/` | Redirects to `/platforms/` (legacy URL) |
| `/platforms/sip/` | Redirects to `/platforms/` (legacy URL) |
| `/blog/` | Technical notes |

**Emails:** `advisory@shandayai.com` (advisory), `platforms@shandayai.com` (platforms). See `src/app/components/contact.ts`.

## Logo and brand assets

- Header wordmark: `public/ShandayAI.png` (transparent PNG, navy `#030712` header)
- Favicon: `public/icon.png`
- Optional (add to `public/` before enabling in code): `Shandayai_icon.png`, `Shandayai_banner.png`
- Component: `src/app/components/ShandayaiLogo.tsx`
- Header: `src/app/components/SiteHeader.tsx` — must use AI Strategy / Platforms nav, not legacy anchor links
- Match header background `#030712` to logo; do not reintroduce a PNG with baked-in matte background

## Build and deploy

Static export (`output: "export"` → `out/`). **Not** OpenNext.

```bash
npm run build
```

Cloudflare: build command `npm run build`, output directory `out`. See `CLOUDFLARE_DEPLOY.md`.

## Copy rules

- No em dashes in user-facing copy
- Use **ShandayAI** (capital AI)
- Public platform names: **ShandayAI Reliability Intelligence Platform**, **ShandayAI RCA Core**, **ShandayAI RCA Assist**
- Do not use SCRCA, SIP, OSIP, OES, AI Gateway, Model Gateway, Agent Gateway, or Control Plane as public product names
- Use phrases like "designed for," "available through scoped pilots," and "deployment options" rather than claiming full production readiness

## Institutional memory

See `docs/PLATFORMS_NARRATIVE.md` for platforms page narrative, availability language, and structure rules.

See `docs/WEBSITE_EVOLUTION.md` for positioning history and decisions.
