# Vercel Deployment Guide

This guide will help you deploy the Holiday Hangout app to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect your repository:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will auto-detect the configuration

2. **Configure project settings (IMPORTANT):**
   - **Framework Preset:** Create React App (or "Other" if not available)
   - **Root Directory:** `./` (root directory)
   - **Build Command:** `cd client && npm install && npm run build`
   - **Output Directory:** `client/build`
   - **Install Command:** Leave as default (or `cd client && npm install` if needed)
   
   **Note:** These settings are required since `vercel.json` only handles routing, not build configuration.

3. **Environment Variables:**
   - No environment variables are required for this project

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (for first deployment)
   - Project name? **holiday-hangout** (or your preferred name)
   - Directory? **./client** (or leave as default and use vercel.json)
   - Override settings? **No**

## Project Structure for Vercel

```
holiday-hangout/
├── api/
│   └── info.js          # Serverless function for API
├── client/
│   ├── build/           # React build output (generated)
│   ├── public/
│   ├── src/
│   └── package.json
├── vercel.json          # Vercel configuration
└── package.json
```

## How It Works

1. **React App:** Built from the `client` directory and served as static files
2. **API Endpoint:** `/api/info` is handled by the serverless function in `api/info.js`
3. **Routing:** All non-API routes are served by `index.html` (React Router ready)

## Troubleshooting

### Build Fails

- Check that all dependencies are in `client/package.json`
- Verify Node.js version (Vercel uses Node 18.x by default)
- Check build logs in Vercel dashboard

### 404 Errors

- Ensure `vercel.json` is in the root directory
- Verify `outputDirectory` points to `client/build`
- Check that React app builds successfully

### API Not Working

- Verify `api/info.js` exists in the `api` folder
- Check that the API route is `/api/info` (not `/api/info.js`)
- Review function logs in Vercel dashboard

### Video Not Loading

- Ensure `background-video.mp4` is in `client/public/`
- Check file size (Vercel has limits on asset sizes)
- Verify the video path in the React component

## Custom Domain

After deployment, you can add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain and follow DNS configuration instructions

## Environment Variables

If you need to add environment variables later:
1. Go to project settings in Vercel
2. Navigate to "Environment Variables"
3. Add variables for Production, Preview, and Development

## Support

For more help, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

