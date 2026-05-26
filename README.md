# Best Guides in Turkey (Draft v1)

Premium-style landing page draft for selling guided Turkey experiences to international tourists.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS (v4)
- Lucide Icons

## Positioning Research Used in This Draft
1. International travelers for Turkey often need direct local guidance and itinerary confidence.
2. Premium audience expects private, personalized, high-touch planning.
3. WhatsApp-first communication reduces friction and improves conversion for cross-border leads.
4. Website should focus on trust, curated packages, and direct lead capture (not online checkout).

## Local Setup

Install dependencies (already done once during setup):
```bash
npm install
```

Optional environment variable for WhatsApp:
```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=905xxxxxxxxx
```

Run dev server for local network testing:
```bash
npm run dev
```

This serves on `0.0.0.0:3000`, so devices on your local network can open:

```text
http://YOUR_LOCAL_IP:3000
```

Find your local IP on macOS:
```bash
ipconfig getifaddr en0
```

## Current Scope (Draft v1)
- English-language premium homepage
- Signature tour sections
- Click-through Istanbul tour detail page (`/istanbul`) with landmark gallery
- Click-through Cappadocia tour detail page (`/cappadocia`) with landmark gallery
- Click-through Aegean Coast tour detail page (`/aegean-coast`) with landmark gallery
- WhatsApp CTA-driven lead flow
- TÜRSAB license image placeholder section
- No on-site payment flow

## Backup Created
- `backups/pre-istanbul-gallery-20260509-0131.tar.gz`
- `backups/pre-cappadocia-aegean-gallery-20260509-0216.tar.gz`

## Scripts
- `npm run dev` → LAN testing (`0.0.0.0:3000`)
- `npm run dev:localhost` → only local machine (`127.0.0.1:3000`)
- `npm run lint`
- `npm run build`

## Next Iteration Ideas
- Real tour detail pages
- Real photos and media optimization
- Multi-language support (EN default, optional TR/AR/RU)
- WhatsApp lead tagging and CRM integration
