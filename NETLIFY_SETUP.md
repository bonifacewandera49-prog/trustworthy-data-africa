# GitHub → Netlify deployment

1. Extract this ZIP. Put its contents in the GitHub folder used as the Netlify base directory. `package.json`, `netlify.toml`, `index.html` and `src/` must sit together in that directory.
2. Commit and push the updated files to the branch Netlify deploys.
3. Netlify build command: `npm run build`. Publish directory: `dist`. The included netlify.toml configures both and Node 22.
4. If this project is at the GitHub repository root, leave Base directory blank. If nested, set Base directory to the exact folder containing package.json; publish remains `dist`, relative to that base.
5. Trigger a fresh deploy and open its published HTTPS URL. Do not publish `src/` or the source project root. The root index.html is Vite input; only dist/index.html references compiled JavaScript.

## Connect your new Supabase project

The public pages, local articles and proposed events work without a backend. Missing or malformed backend settings no longer stop client initialization. Backend-dependent features need your own project.

In Netlify's environment variables, add:

- VITE_SUPABASE_URL: your new Supabase project's HTTPS URL.
- VITE_SUPABASE_PUBLISHABLE_KEY: its public publishable key (or legacy anon key).

These are browser-visible build-time values. Never use a secret or service-role key. Trigger a new build after adding or changing them. For local development, copy .env.example to .env and supply the same public values. The delivery deliberately excludes the previous project's .env.

The existing supabase/migrations files are included for review. They contain inherited schema AND sample event seed records; do not blindly apply the sample records as real company events. A new project's schema, auth roles, policies and backend functions still need provisioning and verification. Creating a Supabase project and adding keys alone does not complete that work. Several admin screens remain prototypes; contact/community forms prepare email drafts. The public site does not depend on that setup to display.

## If a deployment is still blank

Check the deploy log first: the build must finish successfully. In the deployed file listing, index.html and assets/ must be at the published root. A JavaScript request returning HTML usually means the wrong folder was published or a stale/missing bundle was requested. Share the Netlify URL and build log for a live diagnosis.

This site uses hash routes (for example /#/consultancy), so it does not need a catch-all rewrite for its existing internal links.

References: https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/ and https://docs.netlify.com/build/configure-builds/overview/
