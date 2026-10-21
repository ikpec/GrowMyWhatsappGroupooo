# GrowMyWhatsAppGroup.com

A responsive, dark-green WhatsApp group growth website for GitHub Pages.

## Files
- `index.html` — landing page
- `signup.html` / `login.html` — Supabase authentication pages
- `dashboard.html` — signed-in dashboard
- `grow.html` — group details form that opens WhatsApp with a prepared message
- `css/` — styling
- `js/` — authentication and page behavior

## Deploy to GitHub Pages
1. Upload the contents of this folder into the root of your GitHub repository (not the ZIP file itself).
2. Open repository **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
4. Wait for GitHub Pages to publish the site.

## Supabase setup
1. In Supabase, open **Authentication → URL Configuration**.
2. Add your published GitHub Pages website URL to **Site URL** and **Redirect URLs** (include `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`).
3. Confirm that the project URL and publishable key in `js/config.js` are correct.
4. Never put an `sb_secret_...` key or service-role key in browser code. If a secret key was shared publicly, rotate it in Supabase.

Note: Supabase email confirmation settings affect whether new users can log in immediately. This starter site does not store submitted group requests in a database; the form opens WhatsApp so the user can send the request to the administrator.
