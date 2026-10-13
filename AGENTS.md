# Project rules

- Use the shared Embla-backed carousel components for homepage work and sector collections so swipe, keyboard, and arrow navigation share one implementation.
- Deduplicate React and React DOM and prebundle the carousel with React in Vite so lazy dependency discovery cannot mix React hook dispatchers in the preview.