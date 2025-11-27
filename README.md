```markdown
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1SxNpsOiwHVkN-iwIEyrOLkm5ZX8W8m8-

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the Gemini API key for build/runtime:
   - For local dev, create a file `.env.local` with the variable:
     `VITE_GEMINI_API_KEY=your_gemini_api_key_here`
   - On Vercel or other hosts, set the environment variable **VITE_GEMINI_API_KEY** in project settings (for both Preview and Production if needed).
   NOTE: The app currently injects the key at build time into the frontend. This is convenient for testing but NOT SECURE for production. Prefer implementing a server-side proxy / serverless function to call Gemini and keep the key secret.
3. Run the app:
   `npm run dev`

Deployment notes:
- If the app shows a blank page after deployment, check the browser console (F12) for runtime errors and check the hosting build logs. Common cause: missing VITE_GEMINI_API_KEY at build time.
- Recommended: move Gemini calls to a backend endpoint to avoid exposing API key in client bundles.
```