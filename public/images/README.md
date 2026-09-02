# Image Directory Guide

This directory contains all portfolio images organized by category.
Drop your actual photos/certificates here and update the corresponding paths in `src/data/`.

## Folder Structure

```
public/images/
├── profile/          → Profile & headshots (e.g. profile.jpg)
├── awards/           → University recognition, ministry awards, INE elite student
├── certifications/   → eCPPT, eJPT, eWPT, CEH certificate images
├── speaking/         → Ask a Senior, speaking photos, stage photos
├── events/           → Tech Nexus, community events
├── experience/       → Inovasys, Mazloum Group, PWS, Duckurity logos/photos
├── projects/         → Project screenshots, API diagrams, Postman screenshots
├── research/         → Security research screenshots, writeup images
└── testimonials/     → Client/colleague photos (if real testimonials exist)
```

## Image Replacement Guide

For each image placeholder you see on the site:
1. Drop the real image into the correct folder
2. Update the `imagePath` in the relevant data file:
   - `src/data/certifications.ts` → certification images
   - `src/data/experience.ts` → company logos/photos
   - `src/data/projects.ts` → project screenshots
   - `src/data/recognition.ts` → awards, speaking events, proof wall
   - `src/data/siteConfig.ts` → profile photo

## Recommended Formats
- Use `.webp` for photos (best performance)
- Use `.jpg` as fallback
- Use `.png` for logos with transparency
- Profile photo: minimum 400×400px
- Certificate images: minimum 800×600px
- Project screenshots: minimum 1200×800px
