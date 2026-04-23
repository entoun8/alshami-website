## Context

The Alshami site is a Next.js 15 App Router project using Tailwind CSS v4, Framer Motion, and shadcn/ui. It has no current hosting. The goal is to deploy it to Vercel using the Vercel MCP integration, which provides programmatic access to Vercel's API (project creation, deployment, environment variables) directly from within the Claude Code session.

## Goals / Non-Goals

**Goals:**
- Deploy the Alshami Next.js site to Vercel and obtain a live production URL
- Use Vercel MCP to authenticate and trigger the deployment programmatically
- Ensure `next build` succeeds in Vercel's build environment
- Verify the live deployment renders pages correctly

**Non-Goals:**
- Custom domain setup (can be done post-deploy via Vercel dashboard)
- CI/CD pipeline configuration beyond Vercel's default git integration
- Environment variable secrets (the site is informational with no secrets)
- Performance tuning or edge config at this stage

## Decisions

### 1. Use Vercel MCP for deployment
**Decision**: Authenticate via the Vercel MCP tool and deploy using it programmatically.  
**Rationale**: MCP gives direct API access without needing the Vercel CLI installed or manual dashboard steps. It's the fastest path from code to live URL in this session.  
**Alternative considered**: `vercel` CLI (`npx vercel --prod`) — valid fallback if MCP auth fails.

### 2. No additional `next.config.ts` changes upfront
**Decision**: Attempt deployment with the existing config; only adjust if Vercel's build reports errors.  
**Rationale**: The project uses standard Next.js App Router patterns. Vercel natively supports this with zero config.  
**Risk**: If remote image domains are needed (e.g., for next/image with external sources), an `images.remotePatterns` entry will be added reactively.

### 3. Framework preset: Next.js (automatic)
**Decision**: Rely on Vercel's automatic Next.js detection.  
**Rationale**: Vercel will auto-detect the framework, set `next build` as the build command, and `.next` as the output directory. No manual configuration needed.

## Risks / Trade-offs

- **[Risk] MCP auth token expiry or scope issues** → Mitigation: Fall back to `npx vercel --prod` CLI if MCP deployment fails
- **[Risk] Build errors on Vercel's Node version** → Mitigation: Check `package.json` engines field; Vercel defaults to Node 20 which matches Next.js 15 requirements
- **[Risk] Tailwind CSS v4 `@theme inline` not resolving at build time** → Mitigation: Tailwind v4 is PostCSS-based and builds fine in Vercel's environment; no special config needed

## Migration Plan

1. Authenticate with Vercel via MCP
2. Create a Vercel project linked to this codebase
3. Trigger a deployment
4. Confirm build succeeds and live URL is returned
5. Smoke-test the URL (homepage, navigation, key pages)

**Rollback**: Vercel keeps previous deployments; any prior working deploy can be re-promoted via the dashboard instantly.

## Open Questions

- None blocking. Custom domain and analytics can be addressed after the first successful deploy.
