# stdlr.com

A single responsive page showing the Leslie Nielsen “Nothing to see here” meme.

## Development

Run `npm install`, then `npm run dev`. Build with `npm run build`.

## Image source

- Source post: https://mobile.x.com/Dominic2306/status/1529413521401847808
- Original image: https://pbs.twimg.com/media/FTmQ5y5XEAE7Be1.jpg
- Stored locally in `public/nothing-to-see-here.jpg` without modification.

## GitHub Pages

GitHub Pages serves `index.html` directly from `main / (root)`, with `.nojekyll` disabling Jekyll. No Node.js build is needed for this entry point. The domain is configured in `CNAME`. Keep its markup and styles aligned with `app/page.tsx` and `app/globals.css` when changing the Sites preview.
