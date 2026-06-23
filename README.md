# IMPORTANT — DO NOT DEPLOY THIS PROJECT TO spectralvideography.com

This Next.js project (main branch) uses a **different design** (dark/gold Nimbetics theme) that is NOT the Spectral Videography production site.

## Production Site

The **correct** production site for spectralvideography.com is on the **`html-site` branch**:
- HTML/CSS/JS, orange (#F47E3E) + charcoal blue (#2F4858) theme
- Includes hero2.mp4, Supabase contact form, admin dashboard at /admin/

**To deploy the correct site:**
```bash
git checkout html-site
netlify deploy --prod --dir=. --site=83b1857d-7633-43d9-bbb1-626dba028ea0 --no-build
```

## This Project (main branch)

This is a Next.js rewrite experiment. It has a Supabase admin backend wired in (`app/admin/page.tsx`). It is NOT connected to spectralvideography.com and should NOT be deployed there.
