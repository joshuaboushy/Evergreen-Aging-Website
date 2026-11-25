# Evergreen Aging Channel Companion Website

The official companion website for the YouTube channel **[Evergreen Aging](https://www.youtube.com/@evergreen_aging)** (`@evergreen_aging`).

## 🌿 Channel Mission & Editorial Identity

**Evergreen Aging** is an independent, non-commercial educational channel and website created to empower older adults (ages 50+, 60+, 70+) and family caregivers. We present our own practical movement routines, fall-prevention frameworks, and longevity concepts in our own warm, accessible voice.

### Editorial & Sourcing Hierarchy:
1. **Evergreen Aging First**: The channel's original lessons, chair exercises, morning mobility flows, and caregiver toolkits are front and centre.
2. **Sources at the Bottom**: Upon accessing any lesson, myth breakdown, or toolkit, the supporting medical literature and clinical guidelines (PHAC, Mayo Clinic, Osteoporosis Canada, NIA/NIH, etc.) are cleanly listed at the bottom as footnotes and references for viewers, caregivers, and physicians to explore further.

---

## 🔑 Key Features

### 1. Barrier-Free Accessibility
- **Scalable Typography (`A`, `A+`, `A++`)**: Instantly expands body text up to 22px with persistent memory for older eyes.
- **Dedicated Low-Vision Viewing Mode**: 1-click high-contrast toggle (`👁️ High Contrast`) optimized for visual clarity.
- **Full Screen-Reader Compatibility**: Semantic HTML5 landmarks, explicit ARIA dialog roles, and 100% descriptive image alt text.
- **Print-Ready Styles (`@media print`)**: Ink-friendly, uncluttered 1-page Letter printouts for older adults who prefer paper.

### 2. Video Vault & Episode Lessons
- **Channel Exclusivity**: Strictly indexes videos published to the `@evergreen_aging` YouTube channel.
- **Automated Daily Sync Engine**: Daily scheduled workflow automatically scans `@evergreen_aging`, scrapes new releases, and syncs titles, thumbnails, and supporting citations without requiring any API keys.
- **On-Demand Sync & Ingest**: 1-click "Check for New Uploads" and "Add Video by Link" tools right in the UI for instant additions upon release.
- **Dynamic "Coming Soon" States**: Categories without active videos display clean release alert CTAs rather than placeholder/stock cards.
- **Interactive Player**: Modal player with embedded YouTube stream and supporting literature at the bottom.

---

## 🔄 Automated Video Syncing

### Option 1: Automated Daily Sync via GitHub Actions (Recommended)
When published to GitHub, the included workflow at `.github/workflows/daily_youtube_sync.yml` automatically triggers once daily at midnight (`00:00 UTC`), runs the Python sync script, and commits any new uploads to the live site automatically with zero ongoing maintenance.

### Option 2: Manual / On-Demand Sync
Run the sync script anytime in your terminal:
```bash
python3 scripts/sync_youtube.py
```
Or click the **"🔄 Check for New Uploads"** button directly in the website's Video Vault header!

### 3. Free Printable Health Toolkits (6 Current Guides)
- **12-Point Home Fall-Proofing Environmental Safety Audit**
- **"Morning Gentle Joint Warm-Up" Printable Routine**
- **Emergency Refrigerator Medical Information Sheet** *(with Ontario MOH DNR-C legal notice & local-only fill-in privacy)*
- **Senior Hydration & Daily Protein Habit Checklist** *(with CKD / fluid-restriction clinical caveats)*
- **Senior Sleep Hygiene & Nighttime Safety Checklist**
- **Caregiver & Family Guide: Preserving Daily Independence** *(printable Letter-size poster)*
*(All toolkits feature the Evergreen Aging guide up top, with supporting public health and peer-reviewed references cited at the bottom).*

### 4. Sources & Supporting Literature Directory (`[1]`–`[21]`)
- Clean, individually numbered reference directory located on the Sources page (`sources.html`) linking directly to verified DOIs and agency resources:
  - *Public Health Agency of Canada (PHAC)*
  - *Canadian Institute for Health Information (CIHI)*
  - *Canadian Society for Exercise Physiology (CSEP)*
  - *Osteoporosis Canada*
  - *Ontario Ministry of Health (MOH) & Paramedic Association of Canada (PAC)*
  - *Ontario Caregiver Organization (OCO)*
  - *McMaster Optimal Aging Portal*
  - *National Institute on Aging (NIA / NIH) & NINDS / NIH*
  - *Mayo Clinic Health System & Cleveland Clinic*
  - *World Health Organization (WHO) & US CDC*
  - *Peer-Reviewed Sarcopenia & Protein Literature (EWGSOP2, PROT-AGE, Moore et al., Mamerow et al., Kortebein et al., Morley)*

---

## 🚀 Running Locally

```bash
cd evergreen-aging
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 🌐 Free Hosting
- **GitHub Pages** (Settings -> Pages -> Branch: `main` root)
- **Netlify Drop** (drag-and-drop the `evergreen-aging` folder)
- **Vercel** (`vercel deploy`)
