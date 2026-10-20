# Evergreen Aging Channel Companion Website

The official companion website for the YouTube channel **[Evergreen Aging](https://www.youtube.com/@evergreen_aging)** (`@evergreen_aging`).

## 🌿 Channel Mission & Editorial Identity

**Evergreen Aging** is an independent, non-commercial educational channel and website created to empower older adults (ages 50+, 60+, 70+) and family caregivers. We present our own practical movement routines, fall-prevention frameworks, and longevity concepts in our own warm, accessible voice.

### Editorial & Sourcing Hierarchy:
1. **Evergreen Aging First**: The channel's original lessons, chair exercises, morning mobility flows, and caregiver toolkits are front and center.
2. **Sources at the Bottom**: Upon accessing any lesson, myth breakdown, or toolkit, the supporting medical literature and clinical guidelines (Health Canada, Mayo Clinic, CDC STEADI, NIA/NIH, etc.) are cleanly listed at the bottom as footnotes and references for viewers, caregivers, and physicians to explore further.

---

## 🔑 Key Features

### 1. Radical Accessibility
- **1-Click Font Resizing (`A`, `A+`, `A++`)**: Instantly expands body text up to 22px with persistent memory.
- **High-Contrast Black & Gold Mode**: 1-click toggle (`👁️ High Contrast`) designed for low-vision seniors.
- **Text-to-Speech Engine (`🔊 Listen`)**: Clear, senior-paced spoken summaries using the Web Speech API.
- **Print-Ready Styles (`@media print`)**: Ink-friendly, uncluttered printouts for older adults who prefer paper.

### 2. Video Vault & Episode Lessons
- **Official Channel Exclusivity**: Strictly indexes videos published to the official `@evergreen_aging` channel.
- **Automated Daily Sync Engine**: Daily scheduled workflow automatically scans `@evergreen_aging`, scrapes new releases, and syncs titles, thumbnails, and public health citations without requiring any API keys.
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

### 3. Free Printable Health Toolkits
- **12-Point Home Fall-Proofing Environmental Safety Audit**
- **"Questions to Ask Your Doctor" Clinical Advocacy Sheet**
- **Caregiver & Family Support Guide**
- **Emergency Refrigerator Medical Sheet (Paramedic Protocol)**
*(All toolkits feature the Evergreen Aging checklist up top, with supporting public health standards cited at the bottom).*

### 4. Sources & Supporting Literature Directory
- Clean, numbered reference directory (`[1]`, `[2]`, `[3]`, etc.) located at the bottom of the homepage linking directly to:
  - *Public Health Agency of Canada (PHAC)*
  - *Mayo Clinic Health System*
  - *Centers for Disease Control and Prevention (CDC STEADI)*
  - *National Institute on Aging (NIA / NIH)*
  - *World Health Organization (WHO) & The Lancet*
  - *Osteoporosis Canada*

---

## 🚀 Running Locally

```bash
cd /Users/joshboushy/.gemini/antigravity/scratch/evergreen-aging
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

---

## 🌐 Free Hosting
- **GitHub Pages** (Settings -> Pages -> Branch: `main` root)
- **Netlify Drop** (drag-and-drop the `evergreen-aging` folder)
- **Vercel** (`vercel deploy`)
