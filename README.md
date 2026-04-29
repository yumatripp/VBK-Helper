# The Day

`theday.html` is the standalone event contract + wedding planning + timeline tool.

## GitHub / Cloudflare Pages

Recommended Cloudflare Pages settings:

- Build command: none
- Build output directory: `/`

The app will be available at:

- `/theday.html`

## Important

Do not store Spotify, Apple Music, Stripe, Discogs, or other API secrets inside `theday.html`.

Use the `/worker` folder for Cloudflare Worker API code.

## Next planned integrations

- Spotify OAuth
- Spotify playlist creation
- Apple Music developer token + Music User Token flow
- Playlist export from The Day to Spotify / Apple Music
