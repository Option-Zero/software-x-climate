# Cloudflare Pages Deployment Guide

This repository is configured to deploy to Cloudflare Pages, providing free hosting with support for multiple developers, unlimited bandwidth, and server-side rendering via Cloudflare Workers.

## Prerequisites

- Cloudflare account (free tier is sufficient)
- GitHub repository connected to Cloudflare Pages
- Airtable API key for the companies database

## Local Development

### Install Dependencies

```bash
pnpm install
```

### Environment Variables

Create a `.dev.vars` file in the project root (this file is gitignored):

```bash
NEXTJS_ENV=development
AIRTABLE_API_KEY=your_api_key_here
```

### Run Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`.

## Deployment to Cloudflare Pages

**Choose your deployment method:**

| Feature | GitHub Actions (Option 1) | Git Integration (Option 2) | Manual CLI (Option 3) |
|---------|---------------------------|---------------------------|----------------------|
| **Setup complexity** | Medium | Easy | Easy |
| **Auto-deploy on push** | ✅ Yes | ✅ Yes | ❌ Manual |
| **Preview deployments** | ✅ Yes | ✅ Yes | ❌ No |
| **Build visibility** | GitHub Actions logs | Cloudflare Pages logs | Local terminal |
| **Secrets management** | GitHub Secrets | Cloudflare Env Vars | Local .dev.vars |
| **Best for** | Teams, CI/CD | Simple setup | Testing, one-off deploys |

**Recommendation:** Use GitHub Actions (Option 1) for production deployments with better control and visibility. Use Git Integration (Option 2) for simpler setup if you prefer Cloudflare-native tooling.

---

### Option 1: Automatic Deployment via GitHub Actions (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to Cloudflare Pages on every push to `main` and creates preview deployments for pull requests.

**Setup Steps:**

1. **Get Cloudflare API Credentials**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **My Profile** > **API Tokens**
   - Create a new API token with **"Cloudflare Pages — Edit"** permissions
   - Note your **Account ID** from the Workers & Pages section

2. **Add GitHub Secrets**
   - Go to your GitHub repository **Settings** > **Secrets and variables** > **Actions**
   - Click **New repository secret** and add the following:
     - `CLOUDFLARE_API_TOKEN`: Your API token from step 1
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
     - `AIRTABLE_API_KEY`: Your Airtable API key

3. **Create Cloudflare Pages Project**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** > **Create**
   - Click **Pages** > **Create a project**
   - Choose **Direct Upload** (not Git integration)
   - Name your project: `software-x-climate`
   - You don't need to upload anything - GitHub Actions will handle deployments

4. **Deploy**
   - Push to the `main` branch or merge a PR
   - GitHub Actions will automatically build and deploy
   - Check the **Actions** tab in GitHub to monitor deployment progress
   - Your site will be available at `https://software-x-climate.pages.dev`

### Option 2: Cloudflare Pages Git Integration

This option uses Cloudflare's automatic Git integration. A post-build script ensures all worker dependencies are properly bundled.

**Setup Steps:**

1. **Create Cloudflare Pages Project**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** > **Pages**
   - Click **Create a project** > **Connect to Git**
   - Select your GitHub repository
   - Authorize Cloudflare to access the repository

2. **Configure Build Settings**
   - **Framework preset**: None (or leave as custom)
   - **Build command**: `pnpm run pages:build:git`
   - **Build output directory**: `.open-next/assets`
   - **Root directory**: (leave blank)
   - **Node version**: 20 or later

3. **Set Environment Variables**
   - In the Cloudflare Pages project settings, go to **Settings** > **Environment variables**
   - Add the following variable:
     - `AIRTABLE_API_KEY`: Your Airtable API key (mark as secret)

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - Future pushes to `main` will trigger automatic deployments
   - Preview deployments are created for all pull requests

**How it works:**
The `pages:build:git` script runs the OpenNext build and then copies the worker file and all its dependencies into the `.open-next/assets` directory, allowing Cloudflare's bundler to find everything it needs.

### Option 3: Manual Deployment via CLI

1. **Authenticate with Wrangler**

```bash
npx wrangler login
```

2. **Build the Application**

```bash
pnpm run pages:build
```

3. **Deploy**

```bash
pnpm run pages:deploy
```

## Architecture Notes

### Server-Side Features

This application uses the following server-side features that work with Cloudflare Workers:

1. **API Routes** (`src/app/api/companies/route.ts`)
   - Fetches company data from Airtable at runtime
   - Uses the Airtable REST API (compatible with Workers)
   - Environment variables stored securely in Cloudflare

2. **Server-Side Redirects** (`next.config.js`)
   - Homepage redirects to `/frameworks/drawdown-solutions-sectors`
   - Dynamic cohort-specific redirects
   - External link redirects

3. **Image Optimization**
   - Remote images from Airtable CDN
   - Configured via `next.config.js`

### Airtable Integration

The Airtable API integration works seamlessly with Cloudflare Workers because:
- It uses standard HTTP requests (no Node.js-specific APIs)
- The Airtable SDK is compatible with the Workers runtime
- Environment variables are securely managed through Cloudflare

## Cost & Limits

### Cloudflare Pages Free Tier

- **Builds**: 500 builds/month (sufficient for 2 developers)
- **Requests**: 100,000 requests/day
- **Bandwidth**: Unlimited
- **Developers**: Unlimited team members
- **Preview Deployments**: Unlimited
- **Build Concurrency**: 1 (builds queue if multiple pushes occur)

For 2 developers with ~5 pushes/day each:
- Expected usage: ~200 builds/month
- Well within free tier limits ✅

### When to Upgrade

The **Pro plan** ($20/month) provides:
- 5,000 builds/month
- 5 concurrent builds
- Priority support

Most projects stay on the free tier indefinitely.

## Troubleshooting

### Build Fails in Local Environment

If you see font fetch errors during local builds, this is expected in sandboxed environments. The build will work correctly in Cloudflare's CI/CD environment where network access is available.

### Environment Variables Not Working

1. For local development: Use `.dev.vars` file
2. For preview/production: Set in Cloudflare Dashboard under **Settings** > **Environment variables**
3. Ensure variables are marked as "Secret" for sensitive data

### Preview Deployment Not Created

- Ensure GitHub integration is properly configured
- Check that the branch is not the production branch
- Verify build settings are correct in Cloudflare Dashboard

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [OpenNext Cloudflare Documentation](https://opennext.js.org/cloudflare)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)

## Support

For issues specific to:
- **Cloudflare deployment**: Check [Cloudflare Community](https://community.cloudflare.com/)
- **Next.js configuration**: See [Next.js Documentation](https://nextjs.org/docs)
- **Project-specific issues**: Open an issue in this repository
