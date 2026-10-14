# Verification

- Production build: TypeScript and Vite passed.
- Browser audit: 31 routes at 375px, 768px and 1440px (93 checks); no page errors, broken images or horizontal overflow.
- All six complete blog articles rendered, with roughly 300–350 words per guide.
- Additional checks cover 320px/1440px, mobile navigation, blog filtering, sector header switching and article section navigation.
- All five supplied team portrait files match the input archive byte for byte.
- All literal local image references resolve. Twelve legacy photographs were removed; nine new compressed editorial photographs are included.
- Live backend writes, email delivery and production publishing were not exercised. Public-page checks ran with external requests blocked.

The included dist folder is the compiled revision. See README.md for viewing and maintenance instructions.
