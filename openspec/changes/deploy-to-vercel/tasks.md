## 1. Authenticate with Vercel

- [ ] 1.1 Invoke the Vercel MCP authenticate tool to establish a session
- [ ] 1.2 Confirm authentication succeeded (token valid, account accessible)

## 2. Create Vercel Project

- [ ] 2.1 Check if a Vercel project for "alshami" already exists via MCP
- [ ] 2.2 Create a new Vercel project with the Next.js framework preset if it does not exist
- [ ] 2.3 Confirm project is visible in the Vercel dashboard

## 3. Pre-deployment Checks

- [ ] 3.1 Run `npm run build` locally to verify `next build` passes with no errors
- [ ] 3.2 Review `next.config.ts` for any settings that could cause issues on Vercel (image domains, headers, etc.)

## 4. Deploy to Production

- [ ] 4.1 Trigger a production deployment via Vercel MCP
- [ ] 4.2 Monitor build logs until deployment completes
- [ ] 4.3 Capture the live production URL returned by Vercel

## 5. Verify Live Deployment

- [ ] 5.1 Open the production URL and confirm the homepage loads correctly
- [ ] 5.2 Verify navigation between pages works on the live deployment
- [ ] 5.3 Check browser console for any runtime errors on the live site
