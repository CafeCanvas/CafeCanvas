# Vercel Deployment Guide

This project is configured for easy deployment on Vercel.

## Quick Deployment Steps

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository
2. **Connect Vercel**: Go to [vercel.com](https://vercel.com) and import your GitHub repository
3. **Auto-configuration**: Vercel will automatically detect this is a Vite project and use the correct settings
4. **Deploy**: Click deploy!

## Configuration Details

The project includes the following Vercel-specific configurations:

### vercel.json
- Build command: `npm run build`
- Output directory: `build`
- Install command: `npm install --legacy-peer-deps` (handles React 19 peer dependency issues)

### .npmrc
- `legacy-peer-deps=true` - Handles React 19 compatibility with older packages

### vite.config.js
- Code splitting for better performance
- Optimized build settings for Vercel
- Proper alias configuration

## Environment Variables

If you need to add environment variables:
1. In Vercel dashboard, go to Project Settings → Environment Variables
2. Add variables prefixed with `VITE_` (e.g., `VITE_API_URL`)
3. Redeploy

## Build Output

- Development server: `npm run dev` (port 3000)
- Production build: `npm run build` → `build/` directory
- Preview production: `npm run preview` (port 4173)

The build creates optimized chunks:
- `vendor.js` - React and React DOM
- `ui.js` - Radix UI components  
- `index.js` - Main application code
