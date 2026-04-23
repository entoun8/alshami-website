## Why

The Alshami website is built and ready but has no hosting — it needs to be deployed to a publicly accessible URL. Vercel is the natural choice for Next.js App Router projects, offering zero-config deployments, automatic CI/CD from git, and edge-optimised delivery.

## What Changes

- Connect the project repository to Vercel via the Vercel MCP integration
- Configure environment variables and project settings on Vercel
- Deploy the Next.js site to a production Vercel URL
- Validate the live deployment renders correctly

## Capabilities

### New Capabilities
- `vercel-deployment`: Hosting the Next.js site on Vercel with production deployment, project configuration, and live URL

### Modified Capabilities
<!-- No existing specs require requirement changes for this deployment change -->

## Impact

- **Infrastructure**: Project will be live on Vercel (vercel.com), connected to the GitHub repo for automatic deployments on push
- **Dependencies**: No new npm packages — Vercel handles the build via `next build`
- **Configuration**: May need `next.config.ts` adjustments for Vercel compatibility (e.g., image domains, headers)
- **External**: Vercel MCP is used to authenticate and trigger deployment programmatically
