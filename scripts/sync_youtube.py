#!/usr/bin/env python3
"""
Evergreen Aging - Automated YouTube Channel Video Sync Engine
Queries https://www.youtube.com/@evergreen_aging for newly published videos,
fetches official oEmbed metadata, and synchronizes the local video vault.
"""

import urllib.request
import re
import json
import os
import sys

CHANNEL_HANDLE = "@evergreen_aging"
CHANNEL_URL = f"https://www.youtube.com/{CHANNEL_HANDLE}"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_ROOT, "data")
OUTPUT_JSON = os.path.join(DATA_DIR, "videos.json")
MAIN_JS = os.path.join(PROJECT_ROOT, "js", "main.js")

CATEGORY_DEFAULTS = {
    "balance": {
        "categoryLabel": "Fall Prevention",
        "authority": "CDC STEADI & Public Health Agency of Canada",
        "citationTitle": "CDC STEADI Clinical Guidelines & Seniors' Falls in Canada",
        "citationUrl": "https://www.cdc.gov/steadi/",
        "keyFinding": "Targeted balance habits, stride training, and environmental modifications reduce home fall risk by over 40%."
    },
    "seated": {
        "categoryLabel": "Chair / Seated Only",
        "authority": "Health Canada & Mayo Clinic",
        "citationTitle": "Accessible Seated Mobility Standards for Older Adults",
        "citationUrl": "https://www.canada.ca/en/public-health/services/publications/healthy-living/physical-activity-tips-older-adults-65-years-older.html",
        "keyFinding": "Chair-supported routines safely maintain joint range of motion and cardiovascular circulation without fall risk."
    },
    "brain": {
        "categoryLabel": "Brain Health & Neurological Support",
        "authority": "National Institute on Aging (NIA / NIH) & Health Canada",
        "citationTitle": "NIA / NIH: Neurodegenerative Diseases & Alzheimer's Caregiving Guidelines",
        "citationUrl": "https://www.nia.nih.gov/health/alzheimers-and-dementia",
        "keyFinding": "Early understanding of neurological conditions and compassionate caregiver strategies preserve patient dignity and reduce home stress."
    },
    "nutrition": {
        "categoryLabel": "Nutrition, Protein & Hydration",
        "authority": "Health Canada & Mayo Clinic",
        "citationTitle": "Canada's Food Guide: Dietary Protein, Hydration & Sarcopenia Prevention in Older Adults",
        "citationUrl": "https://food-guide.canada.ca/en/",
        "keyFinding": "Adequate daily hydration prevents orthostatic dizziness, while consuming 1.2–1.6g of protein per kg of body weight daily stimulates muscle protein synthesis and counteracts sarcopenia."
    },
    "mobility": {
        "categoryLabel": "Mobility & Joints",
        "authority": "Health Canada & Mayo Clinic",
        "citationTitle": "Joint Preservation & Functional Mobility in Healthy Aging",
        "citationUrl": "https://www.canada.ca/en/public-health/services/publications/healthy-living/physical-activity-tips-older-adults-65-years-older.html",
        "keyFinding": "Gentle daily multi-joint mobility routines preserve synovial fluid circulation and maintain functional independence."
    }
}

def infer_category(title, desc=""):
    text = (title + " " + desc).lower()
    if any(k in text for k in ["dehydration", "hydration", "protein", "nutrition", "diet", "meal", "water", "fluid", "electrolytes", "vitamin"]):
        return "nutrition"
    if any(k in text for k in ["shuffle", "shuffling", "fall", "balance", "gait", "trip", "stumble", "steady"]):
        return "balance"
    if any(k in text for k in ["chair", "seated", "sitting", "wheelchair"]):
        return "seated"
    if any(k in text for k in ["neuro", "brain", "dementia", "alzheimer", "memory", "cognitive", "parkinson"]):
        return "brain"
    return "mobility"

def fetch_channel_videos():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    print(f"[*] Scanning official channel: {CHANNEL_URL}...")
    req = urllib.request.Request(CHANNEL_URL, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        print(f"[!] Error accessing channel page: {e}", file=sys.stderr)
        return []

    # Find all 11-char video IDs
    raw_vids = re.findall(r'\"videoId\":\"([a-zA-Z0-9_-]{11})\"', html)
    unique_vids = []
    for vid in raw_vids:
        if vid not in unique_vids:
            unique_vids.append(vid)

    print(f"[*] Discovered {len(unique_vids)} video IDs on channel page: {unique_vids}")
    
    videos = []
    for vid in unique_vids:
        try:
            oembed_url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json"
            oreq = urllib.request.Request(oembed_url, headers=headers)
            with urllib.request.urlopen(oreq, timeout=10) as oresp:
                meta = json.loads(oresp.read().decode("utf-8"))
                
                title = meta.get("title", f"Evergreen Aging Video ({vid})")
                author = meta.get("author_name", "Evergreen Aging")
                
                # Verify channel ownership
                if "evergreen" not in author.lower():
                    print(f"[-] Skipping non-channel video: {vid} (Author: {author})")
                    continue
                    
                cat = infer_category(title)
                cat_info = CATEGORY_DEFAULTS.get(cat, CATEGORY_DEFAULTS["mobility"])
                
                videos.append({
                    "id": vid,
                    "title": title,
                    "category": cat,
                    "categoryLabel": cat_info["categoryLabel"],
                    "duration": "Official Guide",
                    "badge": "Official Video",
                    "youtubeId": vid,
                    "youtubeUrl": f"https://www.youtube.com/watch?v={vid}",
                    "thumbnail": f"https://img.youtube.com/vi/{vid}/hqdefault.jpg",
                    "description": f"Official video lesson from Evergreen Aging focusing on evidence-based strategies to support older adults and family caregivers.",
                    "accessibleGuide": "Designed for safe home application with zero floor work required.",
                    "authority": cat_info["authority"],
                    "citationTitle": cat_info["citationTitle"],
                    "citationUrl": cat_info["citationUrl"],
                    "keyFinding": cat_info["keyFinding"]
                })
                print(f"[+] Synced video: [{vid}] {title} -> {cat_info['categoryLabel']}")
        except Exception as e:
            print(f"[!] Warning: Failed to fetch metadata for {vid}: {e}")

    return videos

def update_files(videos):
    if not videos:
        print("[!] No videos found to update.")
        return

    os.makedirs(DATA_DIR, exist_ok=True)
    
    # 1. Write data/videos.json
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(videos, f, indent=2, ensure_ascii=False)
    print(f"[✓] Saved {len(videos)} videos to {OUTPUT_JSON}")

    # 2. Update js/main.js channelVideos array
    if os.path.exists(MAIN_JS):
        with open(MAIN_JS, "r", encoding="utf-8") as f:
            content = f.read()

        videos_js = json.dumps(videos, indent=2, ensure_ascii=False)
        # Indent each line by 2 spaces
        indented_js = "\n".join("  " + line if line.strip() else "" for line in videos_js.split("\n"))
        
        replacement = f"const channelVideos = {videos_js};"
        new_content = re.sub(r"const channelVideos = \[[\s\S]*?\];", replacement, content)
        
        if new_content != content:
            with open(MAIN_JS, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"[✓] Synchronized {MAIN_JS} with {len(videos)} live channel videos.")
        else:
            print(f"[*] {MAIN_JS} is already up to date.")

if __name__ == "__main__":
    vids = fetch_channel_videos()
    if vids:
        update_files(vids)
        print("\n[✓] Video sync completed successfully!")
    else:
        print("\n[!] Sync completed with 0 updates.")
