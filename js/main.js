// Evergreen Aging - Interactive Client Logic, Sourcing Engine & Accessibility

// Curated YouTube Videos with Verified Public Health Citations
// ONLY videos published to the official Evergreen Aging channel are included
const channelVideos = [
  {
    "id": "QPn7uxOAiD4",
    "title": "Why Older Adults Shuffle When Walking (And How To Help)",
    "category": "balance",
    "categoryLabel": "Fall Prevention",
    "duration": "Official Guide",
    "badge": "Official Video",
    "youtubeId": "QPn7uxOAiD4",
    "youtubeUrl": "https://www.youtube.com/watch?v=QPn7uxOAiD4",
    "thumbnail": "https://img.youtube.com/vi/QPn7uxOAiD4/hqdefault.jpg",
    "description": "Official video lesson from Evergreen Aging focusing on evidence-based strategies to support older adults and family caregivers.",
    "accessibleGuide": "Designed for safe home application with zero floor work required.",
    "authority": "CDC STEADI & Public Health Agency of Canada",
    "citationTitle": "CDC STEADI Clinical Guidelines & Seniors' Falls in Canada",
    "citationUrl": "https://www.cdc.gov/steadi/",
    "keyFinding": "Targeted balance habits, stride training, and environmental modifications reduce home fall risk by over 40%."
  },
  {
    "id": "HDYnhxxh-Dk",
    "title": "5 Neurodegenerative Diseases Explained: A Guide for Caregivers",
    "category": "brain",
    "categoryLabel": "Brain Health & Neurological Support",
    "duration": "Official Guide",
    "badge": "Official Video",
    "youtubeId": "HDYnhxxh-Dk",
    "youtubeUrl": "https://www.youtube.com/watch?v=HDYnhxxh-Dk",
    "thumbnail": "https://img.youtube.com/vi/HDYnhxxh-Dk/hqdefault.jpg",
    "description": "Official video lesson from Evergreen Aging focusing on evidence-based strategies to support older adults and family caregivers.",
    "accessibleGuide": "Designed for safe home application with zero floor work required.",
    "authority": "National Institute on Aging (NIA / NIH) & Health Canada",
    "citationTitle": "NIA / NIH: Neurodegenerative Diseases & Alzheimer's Caregiving Guidelines",
    "citationUrl": "https://www.nia.nih.gov/health/alzheimers-and-dementia",
    "keyFinding": "Early understanding of neurological conditions and compassionate caregiver strategies preserve patient dignity and reduce home stress."
  },
  {
    "id": "QDtxZd36Zog",
    "title": "Introduction to Evergreen Aging",
    "category": "mobility",
    "categoryLabel": "Mobility & Joints",
    "duration": "Official Guide",
    "badge": "Official Video",
    "youtubeId": "QDtxZd36Zog",
    "youtubeUrl": "https://www.youtube.com/watch?v=QDtxZd36Zog",
    "thumbnail": "https://img.youtube.com/vi/QDtxZd36Zog/hqdefault.jpg",
    "description": "Official video lesson from Evergreen Aging focusing on evidence-based strategies to support older adults and family caregivers.",
    "accessibleGuide": "Designed for safe home application with zero floor work required.",
    "authority": "Health Canada & Mayo Clinic",
    "citationTitle": "Joint Preservation & Functional Mobility in Healthy Aging",
    "citationUrl": "https://www.canada.ca/en/public-health/services/publications/healthy-living/physical-activity-tips-older-adults-65-years-older.html",
    "keyFinding": "Gentle daily multi-joint mobility routines preserve synovial fluid circulation and maintain functional independence."
  }
];

const categoryLabels = {
  all: "All Lessons",
  mobility: "Mobility & Joints",
  balance: "Fall Prevention",
  seated: "Chair / Seated Only",
  nutrition: "Nutrition & Protein",
  brain: "Brain Health"
};

// Free Printable Public Health Toolkits with Official Public Health Citations
const healthToolkits = {
  fall_proofing: {
    title: "12-Point Home Fall-Proofing Environmental Safety Audit",
    category: "Safety & Fall Prevention",
    authority: "CDC STEADI & Public Health Agency of Canada (PHAC)",
    citationTitle: "CDC STEADI Home Fall Prevention Checklist & PHAC Seniors' Falls in Canada",
    citationUrl: "https://www.cdc.gov/steadi/",
    description: "A room-by-room safety checklist to identify and eliminate the hidden hazards responsible for 60% of all in-home falls.",
    items: [
      "Stairways: Install secure handrails on both sides that extend the full length of stairs (PHAC standard).",
      "Lighting: Install motion-activated 300+ lumen nightlights between the bed and the bathroom (CDC STEADI recommendation).",
      "Flooring: Remove all loose throw rugs or secure them firmly with double-sided rug tape.",
      "Bathroom: Install non-slip rubber mats inside the tub and professional grab bars anchored into studs (avoid suction cups).",
      "Pathways: Clear floor walkways of electrical cords, pet toys, and clutter.",
      "Footwear: Wear non-skid, supportive enclosed slippers inside the house rather than socks or bare feet.",
      "Reach Zones: Move frequently used dishes and pantry items between waist and shoulder height.",
      "Bedside Phone: Keep a charged phone or emergency alert pendant within arm's reach of bed.",
      "Contrast Edges: Mark top and bottom stair steps with high-contrast reflective tape.",
      "Spill Response: Keep dry mop pads accessible in kitchen and bath to wipe wet tiles immediately.",
      "Chair Height: Ensure favorite living room chairs are at least 18-20 inches high with sturdy armrests.",
      "Medication Review: Ask doctor if any current prescription causes orthostatic dizziness when standing."
    ]
  },
  doctor_prep: {
    title: "\"Questions to Ask Your Doctor\" Appointment Prep Sheet",
    category: "Clinical Advocacy",
    authority: "Mayo Clinic & American Geriatrics Society",
    citationTitle: "Mayo Clinic: Healthy Aging Guide & Medication Review Protocol",
    citationUrl: "https://www.mayoclinic.org/healthy-lifestyle/healthy-aging/in-depth/fall-prevention/art-20047358",
    description: "Maximize your 15-minute primary care visit by bringing this structured, evidence-based checklist to advocate for your mobility and healthspan.",
    items: [
      "Fall Risk: \"Can we conduct a 30-Second Chair Stand or Timed Up and Go (TUG) balance test today?\"",
      "Medication Audit: \"Are any of my blood pressure, sleep, or mood prescriptions causing dizziness or interacting poorly?\"",
      "Bone Density: \"Am I due for a DEXA bone density scan to assess my hip and lumbar spine bone mineral status?\"",
      "Vitamin D & B12: \"Can we check my serum 25-hydroxy Vitamin D and B12 levels on my next routine blood draw?\"",
      "Cardiovascular: \"What is my resting blood pressure target for my specific age and kidney health?\"",
      "Physical Therapy: \"Would you write me a referral for preventative physical therapy to improve gait stability and knee strength?\"",
      "Hearing & Vision: \"When should I schedule my annual hearing and macular vision screenings? (Hearing loss is a major fall risk factor).\""
    ]
  },
  caregiver_guide: {
    title: "Caregiver & Family Guide: Preserving Daily Independence",
    category: "Family & Caregiver Support",
    isPoster: true,
    authority: "National Institute on Aging (NIA / NIH) & Health Canada",
    citationTitle: "NIA / NIH: Caregiving Resources & Health Canada Functional Aging Framework",
    citationUrl: "https://www.nia.nih.gov/health/caregiving",
    description: "An evidence-based educational infographic poster for adult children, spouses, and caregivers. Focuses on autonomy preservation, positive language reframing, and safe daily mobility support.",
    items: [
      "The 10-Second Pause Rule: Before stepping in to assist with rising, shoes, or reaching, pause for 10 seconds to allow their motor cortex time to initiate movement.",
      "Language of Dignity: Reframe from \"You shouldn't do that\" to \"Take all the time you need, I am right beside you if you'd like a hand.\"",
      "Safe Ambulatory Support: Stand 45° behind to their weaker side. Never pull on arms or wrists (protects rotator cuff).",
      "Micro-Environment: Ensure primary chairs are firm and 18–20\" high with armrests; keep pathways clear without moving their personal items.",
      "Passive Hydration: Place a visible 32oz pitcher in plain sight to counter naturally blunted thirst sensation.",
      "Caregiver Respite: Taking 20 minutes daily for personal quiet or a walk is clinically necessary to prevent caregiver fatigue."
    ]
  },
  vital_card: {
    title: "Emergency Refrigerator Medical Information Sheet (Paramedic Protocol)",
    category: "Emergency Preparedness",
    authority: "American College of Emergency Physicians & Canadian Red Cross",
    citationTitle: "ACEP: Emergency Medical Information Protocol & First Responder Guidelines",
    citationUrl: "https://www.acep.org/",
    description: "First responders are trained to look on the front of the refrigerator in a home medical emergency. Keep this card updated and visible.",
    items: [
      "Full Legal Name, Date of Birth, and Preferred Name",
      "Primary Emergency Contact (Name, Relationship, Cell Phone Number)",
      "Secondary Emergency Contact (Name, Relationship, Cell Phone Number)",
      "Primary Care Physician (Name, Clinic Name, Office Phone)",
      "Current Diagnoses (e.g., Hypertension, Type 2 Diabetes, Osteoarthritis)",
      "Current Prescription Medications (Name, Exact Dosage, Frequency)",
      "Known Allergies (Penicillin, Latex, Iodine, etc.)",
      "Preferred Hospital / Medical Center",
      "Advance Directives / Healthcare Proxy on file (Yes / No, Location of documents)"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initAccessibilityControls();
  initMobileMenu();
  initScrollSpy();
  loadCustomVideos();
  renderVideos(channelVideos, "all", "");
  initCategoryFilters();
  initSearch();
  initModal();
  initTopicSuggestionForm();
  initContactForm();
  updateVaultStatusBadge();
});

// Load any custom videos added via the on-demand modal
function loadCustomVideos() {
  try {
    const custom = JSON.parse(localStorage.getItem("evergreen_custom_videos") || "[]");
    if (Array.isArray(custom) && custom.length > 0) {
      custom.forEach(item => {
        if (!channelVideos.some(v => v.id === item.id || v.youtubeId === item.youtubeId)) {
          channelVideos.unshift(item);
        }
      });
    }
  } catch (e) {
    console.warn("Could not load custom videos from storage", e);
  }
}

// 1. Accessibility Controls
function initAccessibilityControls() {
  const root = document.documentElement;
  const sizeButtons = document.querySelectorAll(".font-resizer .font-btn, [data-size]");
  const contrastBtn = document.getElementById("contrastToggle");

  let savedSize = "normal";
  try {
    savedSize = localStorage.getItem("evergreen_font_size") || "normal";
  } catch (e) {}
  applyFontSize(savedSize);

  let savedContrast = false;
  try {
    savedContrast = localStorage.getItem("evergreen_contrast") === "high";
  } catch (e) {}
  if (savedContrast) {
    root.classList.add("high-contrast");
    if (contrastBtn) contrastBtn.classList.add("active");
  }

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const size = btn.dataset.size;
      if (!size) return;
      applyFontSize(size);
      try {
        localStorage.setItem("evergreen_font_size", size);
      } catch (e) {}
      const sizeNames = { normal: "Standard Text Size", lg: "Large Text Size", xl: "Extra Large Text Size" };
      if (typeof showToast === "function") {
        showToast(`Text size set to ${sizeNames[size] || size}`);
      }
    });
  });

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      const isHigh = root.classList.toggle("high-contrast");
      contrastBtn.classList.toggle("active", isHigh);
      try {
        localStorage.setItem("evergreen_contrast", isHigh ? "high" : "normal");
      } catch (e) {}
      if (typeof showToast === "function") {
        showToast(isHigh ? "High-Contrast Black & Gold Mode Enabled" : "Standard Theme Restored");
      }
    });
  }

  function applyFontSize(size) {
    root.classList.remove("font-lg", "font-xl");
    if (size === "lg") {
      root.classList.add("font-lg");
      root.style.fontSize = "20px";
    } else if (size === "xl") {
      root.classList.add("font-xl");
      root.style.fontSize = "24px";
    } else {
      root.style.fontSize = "17px";
    }

    sizeButtons.forEach(b => {
      b.classList.toggle("active", b.dataset.size === size);
    });
  }
}

// Built-in Accessible Text-to-Speech Reader
window.readAloud = function(text) {
  if (!('speechSynthesis' in window)) {
    alert("Text-to-speech is not supported by your current browser.");
    return;
  }

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    showToast("Audio playback stopped.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  
  utterance.onstart = () => showToast("Reading aloud... Click again to stop.");
  utterance.onend = () => showToast("Audio playback complete.");

  window.speechSynthesis.speak(utterance);
};

// 2. Mobile Menu & Nav Link Behavior
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav-container") || document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = nav.classList.toggle("show");
    toggle.setAttribute("aria-expanded", isExpanded);
    toggle.textContent = isExpanded ? "✕" : "☰";
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("show") && !nav.contains(e.target) && e.target !== toggle) {
      nav.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }
  });

  const navLinks = nav.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1120) {
        nav.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#")) {
        const inPage = nav.querySelectorAll('.nav-link[href^="#"]');
        inPage.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

// 2b. ScrollSpy: Automatically switch active navigation tab as the user scrolls
function initScrollSpy() {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const inPageLinks = Array.from(nav.querySelectorAll('.nav-link[href^="#"]'));
  if (inPageLinks.length === 0) return;

  const header = document.querySelector(".site-header");

  const sections = [
    { id: "myths", el: document.getElementById("myths"), link: nav.querySelector('a[href="#myths"]') },
    { id: "toolkits", el: document.getElementById("toolkits"), link: nav.querySelector('a[href="#toolkits"]') },
    { id: "videos", el: document.getElementById("videos"), link: nav.querySelector('a[href="#videos"]') },
    { id: "caregivers", el: document.getElementById("caregivers"), link: nav.querySelector('a[href="#caregivers"]') },
    { 
      id: "references", 
      el: document.querySelector(".resources-section") || document.getElementById("references"), 
      link: nav.querySelector('a[href="#references"]') 
    }
  ].filter(item => item.el && item.link);

  if (sections.length === 0) return;

  function updateActiveSection() {
    const headerHeight = header ? header.offsetHeight : 70;
    const triggerPoint = headerHeight + 85;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    // 1. Bottom of page reached: highlight the final section (Sources)
    if (scrollY + windowHeight >= scrollHeight - 50) {
      setActive(sections[sections.length - 1].link);
      return;
    }

    // 2. In Hero header area (above first content section): clear in-page active tabs
    const firstRect = sections[0].el.getBoundingClientRect();
    if (firstRect.top > triggerPoint) {
      clearActive();
      return;
    }

    // 3. Inspect sections to find the one spanning across the trigger threshold
    for (let i = 0; i < sections.length; i++) {
      const currentRect = sections[i].el.getBoundingClientRect();
      const nextTop = (i < sections.length - 1)
        ? sections[i + 1].el.getBoundingClientRect().top
        : Infinity;

      if (currentRect.top <= triggerPoint && nextTop > triggerPoint) {
        setActive(sections[i].link);
        return;
      }
    }
  }

  function setActive(activeLink) {
    inPageLinks.forEach(link => {
      if (link === activeLink) {
        if (!link.classList.contains("active")) {
          link.classList.add("active");
          link.setAttribute("aria-current", "true");
        }
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  }

  function clearActive() {
    inPageLinks.forEach(link => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Run immediately and on full window load
  updateActiveSection();
  window.addEventListener("load", updateActiveSection);
}

// 3. Render Videos with Coming Soon state for empty categories
function renderVideos(videosToRender, category = "all", query = "") {
  const container = document.getElementById("videoGrid");
  if (!container) return;

  if (videosToRender.length === 0) {
    if (query) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: var(--bg-card); border: 2px dashed var(--border-color); border-radius: var(--radius-lg);">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.4rem; color: var(--primary); margin-bottom: 0.4rem;">No Matching Video Found Yet</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.55;">
            Only videos published to the official <strong>Evergreen Aging</strong> YouTube channel appear here. Have a topic or question you'd like us to cover?
          </p>
          <a href="#topicForm" class="btn-primary" style="display:inline-flex;">
            Suggest This Video Topic &darr;
          </a>
        </div>
      `;
      return;
    }

    const catName = categoryLabels[category] || "This Category";
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border: 2px dashed var(--accent); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);">
        <div style="width: 56px; height: 56px; background: var(--accent-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; font-size: 1.7rem;">
          ⏳
        </div>
        <span class="badge-pill" style="margin-bottom: 0.75rem;">Category in Production</span>
        <h3 style="font-size: 1.65rem; color: var(--primary); margin-bottom: 0.5rem;">Coming Soon</h3>
        <p style="color: var(--text-muted); font-size: 1.05rem; max-width: 580px; margin: 0 auto 1.75rem; line-height: 1.6;">
          Official video lessons for <strong>${catName}</strong> are currently being scripted and filmed for the Evergreen Aging YouTube channel.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="https://www.youtube.com/@evergreen_aging?sub_confirmation=1" target="_blank" rel="noopener noreferrer" class="btn-yt">
            Subscribe on YouTube for Release Alerts
          </a>
          <a href="#topicForm" class="btn-outline">
            Suggest a Topic for This Category &darr;
          </a>
        </div>
        <div class="bottom-source-note" style="margin-top: 2rem; justify-content: center;">
          <span>All upcoming lessons are formulated in alignment with clinical geriatric literature &bull; <a href="#references">View Reference Standards &darr;</a></span>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = videosToRender.map(v => `
    <article class="video-item" data-id="${v.id}">
      <div class="video-item-thumb" onclick="openVideoModal('${v.id}')">
        <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
        <div class="mini-play" aria-label="Play video">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span class="video-badge">${v.badge}</span>
        <span class="video-duration">${v.duration}</span>
      </div>
      <div class="video-item-info">
        <span class="video-meta-tag">${v.categoryLabel}</span>
        <h3 class="video-item-title">${v.title}</h3>
        <p class="video-item-desc">${v.description}</p>
        
        <div style="background:var(--bg-surface); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.82rem; margin-bottom: 0.75rem; color: var(--text-main);">
          ♿ <strong>Mobility note:</strong> ${v.accessibleGuide}
        </div>

        <div class="video-item-footer" style="margin-top: auto; padding-top: 0.5rem;">
          <button class="card-link" onclick="openVideoModal('${v.id}')" style="background:none;border:none;cursor:pointer;font-size:0.95rem;font-weight:700;">
            Watch Lesson &rarr;
          </button>
          <button class="btn-listen" onclick="readAloud('${v.title}. ${v.description}')" title="Listen to summary">
            🔊 Listen
          </button>
        </div>

        <!-- Supporting clinical source listed cleanly at the bottom -->
        <div class="bottom-source-note">
          <span>Supporting source: <strong>${v.authority}</strong></span>
          <a href="${v.citationUrl}" target="_blank" rel="noopener noreferrer">Verify &nearr;</a>
        </div>
      </div>
    </article>
  `).join("");
}

// 4. Video Category Filters
function initCategoryFilters() {
  const buttons = document.querySelectorAll(".cat-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.cat;
      const searchInput = document.getElementById("searchInput");
      const query = (searchInput?.value || "").toLowerCase().trim();

      filterAndRender(category, query);
    });
  });
}

// 5. Search
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activeCatBtn = document.querySelector(".cat-btn.active");
    const category = activeCatBtn ? activeCatBtn.dataset.cat : "all";
    filterAndRender(category, query);
  });
}

let currentCategory = "all";
let currentSearchQuery = "";

function filterAndRender(category, query) {
  currentCategory = category || "all";
  currentSearchQuery = query || "";
  let filtered = channelVideos;

  if (category && category !== "all") {
    filtered = filtered.filter(v => v.category === category);
  }

  if (query) {
    filtered = filtered.filter(v => 
      v.title.toLowerCase().includes(query) ||
      v.description.toLowerCase().includes(query) ||
      v.authority.toLowerCase().includes(query) ||
      v.citationTitle.toLowerCase().includes(query) ||
      v.categoryLabel.toLowerCase().includes(query) ||
      v.accessibleGuide.toLowerCase().includes(query)
    );
  }

  renderVideos(filtered, category, query);
}

// 6. Video Modal with Complete Visible Citations
function initModal() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("modalClose");
  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener("click", closeVideoModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeVideoModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeVideoModal();
    }
  });
}

window.openVideoModal = function(videoId) {
  const video = channelVideos.find(v => v.id === videoId || v.youtubeId === videoId) || 
                (videoId === "featured" ? (channelVideos.find(v => v.youtubeId === "HDYnhxxh-Dk") || channelVideos[0]) : null);
  if (!video) return;

  const modal = document.getElementById("videoModal");
  const title = document.getElementById("modalVideoTitle");
  const desc = document.getElementById("modalVideoDesc");
  const citationContent = document.getElementById("modalCitationContent");
  const playerWrap = document.getElementById("modalPlayerWrap");
  const ytBtn = document.getElementById("modalYtButton");

  if (title) title.textContent = video.title;
  if (desc) desc.textContent = video.description;
  if (ytBtn) {
    ytBtn.href = video.youtubeUrl || "https://www.youtube.com/@evergreen_aging?sub_confirmation=1";
  }
  
  if (citationContent) {
    citationContent.innerHTML = `
      <div class="modal-bottom-references">
        <h5>Sources &amp; Supporting Literature</h5>
        <p style="font-size:0.88rem; color:var(--text-main); margin-bottom:0.25rem;">
          <strong>${video.authority}:</strong> ${video.citationTitle}
        </p>
        <p style="font-size:0.82rem; color:var(--text-muted); font-style:italic; margin-bottom:0.4rem;">"${video.keyFinding}"</p>
        <a href="${video.citationUrl}" target="_blank" rel="noopener noreferrer" class="citation-link" style="font-size:0.84rem;">
          View Public Health Source (${video.authority}) &nearr;
        </a>
      </div>
    `;
  }

  if (playerWrap) {
    if (video.youtubeId) {
      playerWrap.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${video.youtubeId}?start=2&autoplay=1&rel=0" 
          title="${video.title}" 
          style="width:100%; height:100%; border:none;" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      `;
    } else {
      playerWrap.innerHTML = `
        <div style="width:100%; height:100%; position:relative; background:#0f1712; display:flex; flex-direction:column; align-items:center; justify-content:center; color:white; padding:2rem; text-align:center;">
          <img src="${video.thumbnail}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.35;">
          <div style="position:relative; z-index:2; max-width:600px;">
            <div style="font-size:0.85rem; font-weight:700; color:var(--accent); text-transform:uppercase; margin-bottom:0.5rem;">${video.categoryLabel} &bull; ${video.duration}</div>
            <h3 style="font-size:1.4rem; font-weight:800; margin-bottom:1rem; line-height:1.3;">${video.title}</h3>
            <p style="font-size:0.95rem; color:#d0dfd4; margin-bottom:1.5rem;">Watch this episode on the official Evergreen Aging channel with full chapter timestamps and exercises.</p>
            <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap;">
              <a href="${video.youtubeUrl || 'https://www.youtube.com/@evergreen_aging?sub_confirmation=1'}" target="_blank" rel="noopener noreferrer" class="btn-yt" style="font-size:1.05rem; padding:0.8rem 1.6rem;">
                <svg style="width:22px;height:22px;fill:currentColor;" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Watch on YouTube
              </a>
              <button onclick="readAloud('${video.title}. ${video.description}')" class="btn-outline" style="background:white; color:var(--primary); font-weight:700;">
                🔊 Listen to Lesson
              </button>
            </div>
          </div>
        </div>
      `;
    }
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
};

window.closeVideoModal = function() {
  const modal = document.getElementById("videoModal");
  const playerWrap = document.getElementById("modalPlayerWrap");
  if (modal) modal.classList.remove("open");
  if (playerWrap) playerWrap.innerHTML = "";
  document.body.style.overflow = "";
};

// Vault Status Update
function updateVaultStatusBadge() {
  // Live counter removed per preference
}

// Interactive Channel Sync (On-Demand)
window.syncChannelVideos = async function() {
  showToast("Checking @evergreen_aging YouTube channel for new releases...");
  
  try {
    const resp = await fetch("data/videos.json?t=" + Date.now());
    if (resp.ok) {
      const freshVideos = await resp.json();
      let added = 0;
      if (Array.isArray(freshVideos)) {
        freshVideos.forEach(fv => {
          const exists = channelVideos.some(cv => cv.id === fv.id || cv.youtubeId === fv.youtubeId);
          if (!exists) {
            channelVideos.unshift(fv);
            added++;
          }
        });
      }
      renderVideos(channelVideos, currentCategory, currentSearchQuery);
      updateVaultStatusBadge();
      if (added > 0) {
        showToast(`Sync complete! ${added} new video(s) added from @evergreen_aging.`);
      } else {
        showToast(`Video Vault is up to date (${channelVideos.length} official videos live).`);
      }
      return;
    }
  } catch (err) {}

  setTimeout(() => {
    renderVideos(channelVideos, currentCategory, currentSearchQuery);
    updateVaultStatusBadge();
    showToast(`Video Vault is up to date (${channelVideos.length} official videos live).`);
  }, 600);
};

// On-Demand Ingest: Add Video by Link or ID Modal
window.openAddVideoModal = function() {
  let modal = document.getElementById("addVideoModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "addVideoModal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-card" style="max-width: 520px;">
        <button class="modal-close" onclick="closeAddVideoModal()" aria-label="Close modal">&times;</button>
        <span class="badge-pill" style="margin-bottom:0.75rem;">Channel Video Importer</span>
        <h3 style="font-size:1.4rem; color:var(--primary); margin-bottom:0.5rem;">Add Channel Video to Vault</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:1.25rem; line-height:1.5;">
          Paste any video link or ID from the official <strong>@evergreen_aging</strong> YouTube channel to add it immediately to the Vault.
        </p>
        <form id="addVideoForm" onsubmit="submitNewVideo(event)" style="display:flex; flex-direction:column; gap:1rem;">
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">YouTube URL or Video ID:</label>
            <input type="text" id="newVideoUrl" placeholder="https://www.youtube.com/watch?v=... or 11-char ID" required style="width:100%; padding:0.75rem 1rem; border-radius:var(--radius-md); border:1.5px solid var(--border-color); font-size:0.95rem; background:var(--bg-surface); color:var(--text-main);">
          </div>
          <div>
            <label style="display:block; font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:0.35rem;">Topic Category:</label>
            <select id="newVideoCategory" style="width:100%; padding:0.75rem 1rem; border-radius:var(--radius-md); border:1.5px solid var(--border-color); font-size:0.95rem; background:var(--bg-surface); color:var(--text-main);">
              <option value="mobility">Mobility &amp; Joints</option>
              <option value="balance">Fall Prevention</option>
              <option value="seated">Chair / Seated Only</option>
              <option value="brain">Brain Health &amp; Neurological</option>
              <option value="nutrition">Nutrition &amp; Protein</option>
            </select>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:0.5rem;">
            <button type="button" onclick="closeAddVideoModal()" class="btn-outline" style="padding:0.6rem 1.2rem;">Cancel</button>
            <button type="submit" class="btn-primary" style="padding:0.6rem 1.4rem;">➕ Add to Vault</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  }
  modal.classList.add("open");
  const input = document.getElementById("newVideoUrl");
  if (input) input.focus();
};

window.closeAddVideoModal = function() {
  const modal = document.getElementById("addVideoModal");
  if (modal) modal.classList.remove("open");
};

window.submitNewVideo = async function(e) {
  e.preventDefault();
  const input = document.getElementById("newVideoUrl");
  const catSelect = document.getElementById("newVideoCategory");
  const raw = input.value.trim();
  const cat = catSelect.value;
  
  let vid = "";
  const match = raw.match(/(?:v=|\/embed\/|\/watch\?v=|youtu\.be\/|\/v\/|shorts\/)([a-zA-Z0-9_-]{11})/) || raw.match(/^([a-zA-Z0-9_-]{11})$/);
  if (match) {
    vid = match[1];
  } else {
    alert("Please enter a valid YouTube video URL or 11-character video ID.");
    return;
  }

  showToast("Fetching video details from YouTube...");
  
  let title = `Evergreen Aging Video (${vid})`;
  try {
    const oembedResp = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${vid}`);
    if (oembedResp.ok) {
      const odata = await oembedResp.json();
      if (odata.title) title = odata.title;
    }
  } catch (err) {}

  const catMeta = {
    balance: { label: "Fall Prevention", auth: "CDC STEADI & PHAC", cite: "CDC STEADI Fall Prevention Guidelines", url: "https://www.cdc.gov/steadi/" },
    seated: { label: "Chair / Seated Only", auth: "Health Canada & Mayo Clinic", cite: "Seated Physical Activity Standards", url: "https://www.canada.ca/" },
    brain: { label: "Brain Health & Neurological Support", auth: "NIA / NIH & Health Canada", cite: "NIA / NIH: Cognitive Vitality Guidelines", url: "https://www.nia.nih.gov/" },
    nutrition: { label: "Nutrition & Protein", auth: "Health Canada & Mayo Clinic", cite: "Canada Food Guide: Senior Protein Guidelines", url: "https://food-guide.canada.ca/" },
    mobility: { label: "Mobility & Joints", auth: "Health Canada & Mayo Clinic", cite: "Joint Preservation & Mobility Guidelines", url: "https://www.canada.ca/" }
  }[cat] || { label: "Mobility & Joints", auth: "Health Canada", cite: "Physical Activity Guidelines", url: "https://www.canada.ca/" };

  const newVidObj = {
    id: vid,
    title: title,
    category: cat,
    categoryLabel: catMeta.label,
    duration: "Official Guide",
    badge: "Official Video",
    youtubeId: vid,
    youtubeUrl: `https://www.youtube.com/watch?v=${vid}`,
    thumbnail: `https://img.youtube.com/vi/${vid}/hqdefault.jpg`,
    description: `Official video lesson from Evergreen Aging focusing on evidence-based strategies to support older adults and family caregivers.`,
    accessibleGuide: "Safe and adaptable for seated or standing support.",
    authority: catMeta.auth,
    citationTitle: catMeta.cite,
    citationUrl: catMeta.url,
    keyFinding: "Evidence-based routines practiced consistently maintain functional mobility and independence."
  };

  channelVideos.unshift(newVidObj);
  
  try {
    const custom = JSON.parse(localStorage.getItem("evergreen_custom_videos") || "[]");
    custom.unshift(newVidObj);
    localStorage.setItem("evergreen_custom_videos", JSON.stringify(custom));
  } catch (e) {}

  closeAddVideoModal();
  input.value = "";
  renderVideos(channelVideos, currentCategory, currentSearchQuery);
  updateVaultStatusBadge();
  showToast(`Added "${title}" to the Vault!`);
};

// 7. Interactive Printable Health Toolkit Viewer with Sources at Bottom
window.openPrintableToolkit = function(toolkitKey) {
  // Directly open dedicated Educational Infographic Poster page for Caregiver Guide
  if (toolkitKey === "caregiver_guide") {
    window.open("caregiver-poster.html", "_blank");
    return;
  }

  const toolkit = healthToolkits[toolkitKey];
  if (!toolkit) return;

  const printWindow = window.open("", "_blank");

  // Specialized Educational Infographic Poster Layout for Caregiver Guide
  if (toolkitKey === "caregiver_guide" || toolkit.isPoster) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${toolkit.title} - Evergreen Aging</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            color: #1a251f;
            background: #ffffff;
            padding: 2.5rem 2rem;
            max-width: 860px;
            margin: 0 auto;
            line-height: 1.5;
          }
          .print-btn {
            display: inline-block;
            font-size: 13pt;
            font-weight: 700;
            padding: 12px 24px;
            background: #1b4332;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-bottom: 2rem;
          }
          @media print {
            .print-btn { display: none !important; }
            body { padding: 0.5rem 1rem; max-width: 100%; }
          }
          
          /* Poster Header */
          .poster-header {
            display: flex;
            align-items: center;
            gap: 16px;
            border-bottom: 3px solid #1b4332;
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
          }
          .poster-logo {
            width: 56px;
            height: 56px;
            object-fit: cover;
            border-radius: 8px;
            border: 1px solid #c2d5c8;
            flex-shrink: 0;
          }
          .poster-title-area h1 {
            font-size: 20pt;
            color: #1b4332;
            line-height: 1.2;
            margin-bottom: 3px;
          }
          .poster-tagline {
            font-size: 10.5pt;
            font-weight: 700;
            color: #2d6a4f;
            text-transform: uppercase;
            letter-spacing: 0.04em;
          }
          
          /* Core Rule Callout Banner */
          .core-rule-banner {
            background: #eef7f2;
            border: 2px solid #52b788;
            border-radius: 8px;
            padding: 1.25rem 1.5rem;
            margin-bottom: 1.75rem;
          }
          .core-rule-tag {
            display: inline-block;
            background: #1b4332;
            color: #ffffff;
            font-size: 9pt;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 3px 8px;
            border-radius: 4px;
            margin-bottom: 0.5rem;
          }
          .core-rule-title {
            font-size: 14pt;
            font-weight: 800;
            color: #1b4332;
            margin-bottom: 0.4rem;
          }
          .core-rule-desc {
            font-size: 11pt;
            color: #24382c;
            line-height: 1.55;
          }

          /* Section Heading */
          .poster-section-title {
            font-size: 13pt;
            font-weight: 800;
            color: #1b4332;
            text-transform: uppercase;
            letter-spacing: 0.03em;
            border-bottom: 1.5px solid #d0dfd4;
            padding-bottom: 0.35rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          /* Dignity Communication Comparison Grid */
          .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 1.75rem;
          }
          .compare-card {
            border-radius: 8px;
            padding: 1rem;
            font-size: 10.5pt;
          }
          .avoid-col {
            background: #fff5f5;
            border: 1.5px solid #fecaca;
          }
          .avoid-col strong {
            color: #991b1b;
            display: block;
            margin-bottom: 0.35rem;
            font-size: 10pt;
          }
          .avoid-col p {
            color: #7f1d1d;
            text-decoration: line-through;
            text-decoration-color: #ef4444;
            line-height: 1.45;
          }
          .avoid-reason {
            font-size: 9pt;
            color: #b91c1c;
            margin-top: 0.35rem;
            font-style: italic;
          }
          .empower-col {
            background: #f0fdf4;
            border: 1.5px solid #bbf7d0;
          }
          .empower-col strong {
            color: #166534;
            display: block;
            margin-bottom: 0.35rem;
            font-size: 10pt;
          }
          .empower-col p {
            color: #14532d;
            font-weight: 600;
            line-height: 1.45;
          }
          .empower-reason {
            font-size: 9pt;
            color: #15803d;
            margin-top: 0.35rem;
          }

          /* 4 Pillars Infographic Grid */
          .pillars-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin-bottom: 1.75rem;
          }
          .pillar-card {
            background: #fbfdfc;
            border: 1.5px solid #cfe0d5;
            border-radius: 8px;
            padding: 1rem 1.15rem;
          }
          .pillar-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 0.5rem;
          }
          .pillar-icon {
            width: 28px;
            height: 28px;
            background: #1b4332;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 11pt;
            flex-shrink: 0;
          }
          .pillar-name {
            font-size: 11pt;
            font-weight: 800;
            color: #1b4332;
          }
          .pillar-card ul {
            list-style: none;
            padding-left: 0;
            margin: 0;
          }
          .pillar-card li {
            font-size: 10pt;
            color: #2b3e32;
            line-height: 1.45;
            margin-bottom: 0.35rem;
            padding-left: 14px;
            position: relative;
          }
          .pillar-card li::before {
            content: "•";
            color: #2d6a4f;
            font-weight: bold;
            position: absolute;
            left: 0;
          }

          /* Caregiver Oxygen Mask Rule Callout */
          .respite-banner {
            background: #fdf8eb;
            border: 1.5px solid #eed69b;
            border-radius: 8px;
            padding: 0.85rem 1.25rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .respite-icon {
            font-size: 18pt;
            flex-shrink: 0;
          }
          .respite-text h4 {
            font-size: 11pt;
            color: #7c4a1e;
            font-weight: 800;
            margin-bottom: 2px;
          }
          .respite-text p {
            font-size: 9.5pt;
            color: #5c3815;
            line-height: 1.4;
          }

          /* Footer & Sources */
          .poster-footer {
            border-top: 2px solid #1b4332;
            padding-top: 0.85rem;
            font-size: 9pt;
            color: #485c4f;
            line-height: 1.45;
          }
          .poster-source-box {
            background: #f4f8f5;
            border: 1px solid #d0dfd4;
            padding: 0.65rem 0.95rem;
            border-radius: 6px;
            margin-top: 0.5rem;
            font-size: 8.5pt;
            color: #2d4536;
          }
        </style>
      </head>
      <body>
        <button class="print-btn" onclick="window.print()">🖨️ Click to Print This Poster (Ink-Friendly Format)</button>
        
        <div class="poster-header">
          <img src="images/logo.jpg" alt="Evergreen Aging" class="poster-logo">
          <div class="poster-title-area">
            <h1>${toolkit.title}</h1>
            <div class="poster-tagline">Evergreen Aging &bull; Educational Infographic Poster for Families &amp; Caregivers</div>
          </div>
        </div>

        <!-- The Core Clinical Rule -->
        <div class="core-rule-banner">
          <span class="core-rule-tag">The Occupational Therapy Rule</span>
          <div class="core-rule-title">"Do With, Not For" — The 10-Second Pause</div>
          <p class="core-rule-desc">
            Taking over physical tasks prematurely accelerates muscle deconditioning and "learned helplessness". Before assisting an older adult with rising, buttoning, or reaching, <strong>pause for 10 seconds</strong>. Give their neural pathways time to initiate the motor command independently.
          </p>
        </div>

        <!-- Dignity Communication Comparison (Say This, Not That) -->
        <div class="poster-section-title">
          <span>🗣️ Communication Reframe: Phrases of Dignity</span>
        </div>
        <div class="comparison-grid">
          <div class="compare-card avoid-col">
            <strong>❌ Disempowering Phrasing:</strong>
            <p>"You shouldn't be doing that anymore, let me do it."</p>
            <div class="avoid-reason">Creates dependency &amp; feelings of burden.</div>
          </div>
          <div class="compare-card empower-col">
            <strong>✅ Empowering Alternative:</strong>
            <p>"Take all the time you need. I'm right here beside you if you'd like a hand."</p>
            <div class="empower-reason">Preserves autonomy and control.</div>
          </div>

          <div class="compare-card avoid-col">
            <strong>❌ Disempowering Phrasing:</strong>
            <p>"Be careful! You're going to fall!"</p>
            <div class="avoid-reason">Triggers fear reflex &amp; stiffens gait.</div>
          </div>
          <div class="compare-card empower-col">
            <strong>✅ Empowering Alternative:</strong>
            <p>"Let's pause and steady our feet together before our next step."</p>
            <div class="empower-reason">Promotes deliberate, calm balance habits.</div>
          </div>

          <div class="compare-card avoid-col">
            <strong>❌ Disempowering Phrasing:</strong>
            <p>"Just sit down and rest all day—don't exert yourself."</p>
            <div class="avoid-reason">Promotes joint stiffness &amp; muscle atrophy.</div>
          </div>
          <div class="compare-card empower-col">
            <strong>✅ Empowering Alternative:</strong>
            <p>"Let's walk over to the porch together so our knees stay loose."</p>
            <div class="empower-reason">Encourages functional synovial joint lubrication.</div>
          </div>

          <div class="compare-card avoid-col">
            <strong>❌ Disempowering Phrasing:</strong>
            <p>"Did you forget to drink your water again?"</p>
            <div class="avoid-reason">Feels patronizing; blunted thirst is biological.</div>
          </div>
          <div class="compare-card empower-col">
            <strong>✅ Empowering Alternative:</strong>
            <p>"I poured us both a cold glass with lemon—let's enjoy it together."</p>
            <div class="empower-reason">Uses hospitality instead of policing.</div>
          </div>
        </div>

        <!-- 4 Pillars of Daily Independence -->
        <div class="poster-section-title">
          <span>🏛️ 4 Pillars of Daily Autonomy &amp; Safe Mobility</span>
        </div>
        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-header">
              <div class="pillar-icon">1</div>
              <div class="pillar-name">Safe Ambulatory Support</div>
            </div>
            <ul>
              <li>Stand 45° behind to their weaker side; never pull wrists or arms.</li>
              <li>Provide verbal rhythm cues ("Heel, toe, heel, toe") to counter shuffling gait.</li>
              <li>Ensure supportive enclosed footwear with non-skid rubber soles indoors.</li>
            </ul>
          </div>

          <div class="pillar-card">
            <div class="pillar-header">
              <div class="pillar-icon">2</div>
              <div class="pillar-name">Micro-Environment Setup</div>
            </div>
            <ul>
              <li>Ensure favorite chairs are firm, 18–20 inches high, and have armrests.</li>
              <li>Keep walkways clear without rearranging their familiar personal items.</li>
              <li>Install high-lumen nightlights along the bed-to-bathroom nocturnal pathway.</li>
            </ul>
          </div>

          <div class="pillar-card">
            <div class="pillar-header">
              <div class="pillar-icon">3</div>
              <div class="pillar-name">Hydration &amp; Nutrition Anchors</div>
            </div>
            <ul>
              <li>Thirst perception naturally declines with age; place a visible 32oz pitcher in plain view.</li>
              <li>Pair light daily movement with 25–30g dietary protein to preserve lean muscle.</li>
              <li>Serve hydrating snacks like sliced citrus, berries, and warm herbal teas.</li>
            </ul>
          </div>

          <div class="pillar-card">
            <div class="pillar-header">
              <div class="pillar-icon">4</div>
              <div class="pillar-name">Dignity &amp; Cognitive Vitality</div>
            </div>
            <ul>
              <li>Engage in daily 10-minute collaborative discussions to stimulate executive function.</li>
              <li>Validate frustrations rather than correcting minor memory or date lapses.</li>
              <li>Celebrate daily micro-wins (walking to mailbox, preparing breakfast).</li>
            </ul>
          </div>
        </div>

        <!-- Respite Reminder for the Caregiver -->
        <div class="respite-banner">
          <div class="respite-icon">💡</div>
          <div class="respite-text">
            <h4>The Caregiver's Oxygen Mask Principle</h4>
            <p>
              Caregiver fatigue is a recognized clinical factor in home accidents. Taking 20 minutes daily for personal quiet, deep breathing, or a brisk walk is not selfish—it is necessary for compassionate, sustainable care.
            </p>
          </div>
        </div>

        <!-- Sources and clinical citations cleanly placed at the bottom -->
        <div class="poster-footer">
          <p><strong>Evergreen Aging:</strong> Independent Healthy Aging &amp; Senior Mobility Education &bull; https://www.youtube.com/@evergreen_aging</p>
          <div class="poster-source-box">
            <strong>Supporting Public Health Guidelines:</strong> Formulated in consultation with guidelines published by ${toolkit.authority} (<em>${toolkit.citationTitle}</em>). Public access URL: ${toolkit.citationUrl}
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    return;
  }

  // Standard Checklist layout for other toolkits (fall_proofing, doctor_prep, vital_card)
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${toolkit.title} - Evergreen Aging</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico">
      <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
      <style>
        * { box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          font-size: 14pt;
          line-height: 1.55;
          color: #111;
          padding: 2.5rem 2rem;
          max-width: 840px;
          margin: 0 auto;
          background: #ffffff;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .print-btn {
          font-size: 13pt;
          font-weight: 700;
          padding: 10px 22px;
          background: #1b4332;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .print-btn:hover { background: #2d6a4f; }
        .reset-btn {
          font-size: 11pt;
          font-weight: 600;
          padding: 8px 16px;
          background: transparent;
          color: #555;
          border: 1px solid #ccc;
          border-radius: 6px;
          cursor: pointer;
        }
        .reset-btn:hover { background: #f0f0f0; }
        .share-btn {
          font-size: 11pt;
          font-weight: 600;
          padding: 8px 16px;
          background: #f0f7f2;
          color: #1b4332;
          border: 1px solid #b7dfca;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .share-btn:hover { background: #d8f3dc; }
        .progress-pill {
          font-size: 11pt;
          font-weight: 700;
          color: #1b4332;
          background: #eef7f2;
          border: 1px solid #b7dfca;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-left: auto;
        }
        @media print {
          .header-actions { display: none !important; }
          body { padding: 0.5rem 1rem; max-width: 100%; }
          .checklist-item { page-break-inside: avoid; }
        }
        .doc-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
          border-bottom: 2.5px solid #1b4332;
          padding-bottom: 10px;
        }
        .doc-logo {
          width: 52px;
          height: 52px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #ccc;
          flex-shrink: 0;
        }
        .doc-title-area h1 {
          margin: 0;
          font-size: 19pt;
          color: #1b4332;
          line-height: 1.25;
        }
        .doc-category {
          font-size: 11pt;
          color: #334e3e;
          font-weight: 700;
          margin-top: 2px;
        }
        .doc-desc {
          font-size: 12pt;
          margin-bottom: 1.25rem;
          color: #222;
          background: #f8faf8;
          border-left: 3px solid #1b4332;
          padding: 0.75rem 1rem;
          border-radius: 0 4px 4px 0;
        }
        .interactive-tip {
          font-size: 10pt;
          color: #485c4f;
          margin-bottom: 0.85rem;
          font-style: italic;
        }
        ul.checklist-list {
          list-style: none;
          padding-left: 0;
          margin-bottom: 2rem;
        }
        .checklist-item {
          padding: 0.75rem 0.65rem;
          border-bottom: 1px solid #d5ded7;
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.12s ease-in-out;
          user-select: none;
        }
        .checklist-item:hover {
          background: #f4f8f5;
        }
        .checklist-item.checked {
          background: #fbfdfc;
        }
        .checklist-item.checked .item-text {
          color: #3b5042;
        }
        .box {
          width: 24px;
          height: 24px;
          border: 2px solid #1b4332;
          flex-shrink: 0;
          margin-top: 2px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          transition: all 0.15s ease-in-out;
          color: white;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .checklist-item.checked .box {
          background: #1b4332;
          border-color: #1b4332;
        }
        .box svg {
          display: none;
          width: 16px;
          height: 16px;
          stroke: #ffffff;
          stroke-width: 3.5;
          fill: none;
        }
        .checklist-item.checked .box svg {
          display: block;
        }
        .item-text {
          font-size: 12.5pt;
          line-height: 1.5;
          color: #1a251f;
        }
        .footer {
          margin-top: 2.5rem;
          font-size: 9.5pt;
          color: #485c4f;
          border-top: 1.5px solid #ccc;
          padding-top: 1rem;
          line-height: 1.45;
        }
        .source-box {
          background: #f4f8f5;
          border: 1px solid #d0dfd4;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          margin-top: 0.75rem;
          font-size: 9pt;
          color: #2d4536;
        }
      </style>
    </head>
    <body>
      <div class="header-actions">
        <button class="print-btn" onclick="window.print()">🖨️ Click to Print Checklist</button>
        <button class="reset-btn" onclick="resetChecklist()">↺ Clear Checks</button>
        <button class="share-btn" onclick="emailChecklist()">✉️ Email to Family</button>
        <div class="progress-pill" id="progressPill">0 of ${toolkit.items.length} completed</div>
      </div>
      
      <div class="doc-header">
        <img src="images/logo.jpg" alt="Evergreen Aging" class="doc-logo">
        <div class="doc-title-area">
          <h1>${toolkit.title}</h1>
          <div class="doc-category">Presented by Evergreen Aging &bull; ${toolkit.category}</div>
        </div>
      </div>

      <p class="doc-desc">${toolkit.description}</p>
      <div class="interactive-tip">💡 Tip: Click any box or row on your screen to mark an item complete. Checked items will print as completed.</div>
      
      <ul class="checklist-list" id="checklistList">
        ${toolkit.items.map((item, idx) => `
          <li class="checklist-item" id="item-${idx}" onclick="toggleCheck(${idx})" role="checkbox" aria-checked="false" tabindex="0" onkeydown="handleKey(event, ${idx})">
            <div class="box">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="item-text">${item}</div>
          </li>
        `).join("")}
      </ul>

      <!-- Sources and clinical citations cleanly placed at the bottom -->
      <div class="footer">
        <p><strong>Evergreen Aging:</strong> Independent healthy aging &amp; senior mobility education &bull; https://www.youtube.com/@evergreen_aging</p>
        <div class="source-box">
          <strong>Supporting Public Health Literature:</strong> Formulated in consultation with guidelines published by ${toolkit.authority} (<em>${toolkit.citationTitle}</em>). Access URL: ${toolkit.citationUrl}
        </div>
      </div>

      <script>
        const totalItems = ${toolkit.items.length};
        function toggleCheck(idx) {
          const item = document.getElementById('item-' + idx);
          if (!item) return;
          const isChecked = item.classList.toggle('checked');
          item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
          updateProgress();
        }

        function handleKey(e, idx) {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggleCheck(idx);
          }
        }

        function resetChecklist() {
          const items = document.querySelectorAll('.checklist-item');
          items.forEach(item => {
            item.classList.remove('checked');
            item.setAttribute('aria-checked', 'false');
          });
          updateProgress();
        }

        function updateProgress() {
          const checked = document.querySelectorAll('.checklist-item.checked').length;
          const pill = document.getElementById('progressPill');
          if (pill) {
            if (checked === totalItems && totalItems > 0) {
              pill.textContent = '🎉 All ' + totalItems + ' items completed!';
              pill.style.background = '#d8f3dc';
              pill.style.borderColor = '#52b788';
            } else {
              pill.textContent = checked + ' of ' + totalItems + ' completed';
              pill.style.background = '#eef7f2';
              pill.style.borderColor = '#b7dfca';
            }
          }
        }

        function emailChecklist() {
          const subject = encodeURIComponent("${toolkit.title} - Evergreen Aging");
          const body = encodeURIComponent("Hi,\\n\\nHere is the free printable health checklist from Evergreen Aging: \\"${toolkit.title}\\"\\n\\n" + window.location.href);
          window.location.href = "mailto:?subject=" + subject + "&body=" + body;
        }
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
};

// 8. Topic Suggestion Handler (Routes to joshuaboushy@gmail.com)
function initTopicSuggestionForm() {
  const form = document.getElementById("topicForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("topicInput");
    const topic = input ? input.value.trim() : "";

    if (!topic) return;

    const recipient = "joshuaboushy@gmail.com";
    const subject = encodeURIComponent("Evergreen Aging: Viewer Question / Topic Suggestion");
    const body = encodeURIComponent(
      `Hello Joshua,\n\nI have a health question / topic suggestion for Evergreen Aging:\n\n"${topic}"\n\n---\nSubmitted via Evergreen Aging Community Form\nWebsite: https://evergreenaging.ca`
    );

    showToast(`Opening your email client to send your question to ${recipient}...`);

    setTimeout(() => {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }, 350);

    input.value = "";
  });
}

// 8b. Community & Senior Center Inquiries Contact Form Handler (Routes to joshuaboushy@gmail.com)
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const orgInput = document.getElementById("contactOrg");
    const messageInput = document.getElementById("contactMessage");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const org = orgInput ? orgInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!message) return;

    const recipient = "joshuaboushy@gmail.com";
    const subject = encodeURIComponent(`Evergreen Aging Inquiry from ${name || "Community Member"}`);
    const bodyLines = [
      `Sender Name: ${name || "Not provided"}`,
      `Sender Email: ${email || "Not provided"}`,
      `Organization / Role: ${org || "None specified"}`,
      ``,
      `Message / Inquiry:`,
      `${message}`,
      ``,
      `---`,
      `Sent via Evergreen Aging (About & Community Inquiries Form)`
    ];

    showToast(`Opening your email client to send your inquiry to ${recipient}...`);

    setTimeout(() => {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    }, 350);

    form.reset();
  });
}

// 9. Toast Notification System
function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}

// 10. Email & Share Resource with Family or Caregiver
window.shareToolkit = function(toolkitKey) {
  const toolkit = healthToolkits[toolkitKey] || {
    title: "Evergreen Aging Health Resource",
    description: "Free evidence-based senior mobility and health education.",
    category: "Health Guide"
  };

  const isCaregiver = toolkitKey === "caregiver_guide";
  const baseUrl = window.location.href.split('#')[0].replace(/\/index\.html$/, '/').replace(/\/caregiver-poster\.html$/, '/');
  const resourceUrl = isCaregiver 
    ? (baseUrl.endsWith('/') ? baseUrl + 'caregiver-poster.html' : baseUrl + '/caregiver-poster.html')
    : (baseUrl.endsWith('/') ? baseUrl + 'index.html#toolkits' : baseUrl + '/index.html#toolkits');

  let shareModal = document.getElementById("shareModal");
  if (!shareModal) {
    shareModal = document.createElement("div");
    shareModal.id = "shareModal";
    shareModal.className = "modal-overlay";
    shareModal.setAttribute("role", "dialog");
    shareModal.setAttribute("aria-modal", "true");
    shareModal.setAttribute("aria-labelledby", "shareModalTitle");
    document.body.appendChild(shareModal);

    shareModal.addEventListener("click", (e) => {
      if (e.target === shareModal) closeShareModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && shareModal.classList.contains("open")) {
        closeShareModal();
      }
    });
  }

  const emailSubject = encodeURIComponent(`Evergreen Aging: ${toolkit.title}`);
  const emailBody = encodeURIComponent(
`Hi,

I thought you might find this free resource from Evergreen Aging helpful:

"${toolkit.title}"
${toolkit.description}

You can view, use, or print this guide online here:
${resourceUrl}

From Evergreen Aging — Free Public Health & Senior Mobility Education
YouTube Channel: https://www.youtube.com/@evergreen_aging`
  );

  const mailtoLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;

  shareModal.innerHTML = `
    <div class="modal-card share-modal-card">
      <button class="modal-close" onclick="closeShareModal()" aria-label="Close share dialog">&times;</button>
      
      <div class="share-modal-header">
        <span class="share-modal-icon">✉️</span>
        <div>
          <span class="badge-pill" style="margin-bottom:0.35rem;">Family &amp; Caregiver Sharing</span>
          <h3 id="shareModalTitle" class="share-modal-title">Share Resource with Family</h3>
        </div>
      </div>

      <div class="share-resource-preview">
        <span class="share-preview-badge">${toolkit.category || 'Health Guide'}</span>
        <h4 class="share-preview-title">${toolkit.title}</h4>
        <p class="share-preview-desc">${toolkit.description}</p>
      </div>

      <div class="share-action-list">
        <a href="${mailtoLink}" class="share-action-btn email-share-btn">
          <div class="share-btn-icon">📧</div>
          <div class="share-btn-text">
            <strong>Send via Email Draft</strong>
            <span>Opens your email app with a pre-written message and link</span>
          </div>
          <span class="share-btn-arrow">&rarr;</span>
        </a>

        <button type="button" class="share-action-btn copy-share-btn" id="btnCopyShareLink" onclick="copyShareLink('${resourceUrl}')">
          <div class="share-btn-icon" id="copyShareIcon">🔗</div>
          <div class="share-btn-text">
            <strong id="copyShareLabel">Copy Direct Link</strong>
            <span id="copyShareSub">Copies direct link to clipboard for texting or messaging</span>
          </div>
          <span class="share-btn-badge" id="copyBadge">Copy</span>
        </button>
      </div>

      <div class="share-link-box">
        <label for="shareLinkInput" class="share-link-label">Direct Link:</label>
        <div class="share-link-row">
          <input type="text" id="shareLinkInput" value="${resourceUrl}" readonly onclick="this.select()">
          <button type="button" class="btn-copy-inline" onclick="copyShareLink('${resourceUrl}')">Copy</button>
        </div>
      </div>

      <div class="share-modal-footer">
        <span>🌿 100% Free &bull; No registration or account required</span>
        <button type="button" class="btn-outline" onclick="closeShareModal()" style="padding:0.45rem 1rem;">Done</button>
      </div>
    </div>
  `;

  shareModal.classList.add("open");
};

window.closeShareModal = function() {
  const shareModal = document.getElementById("shareModal");
  if (shareModal) shareModal.classList.remove("open");
};

window.copyShareLink = function(url) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => handleCopySuccess());
  } else {
    const input = document.getElementById("shareLinkInput");
    if (input) {
      input.select();
      document.execCommand("copy");
      handleCopySuccess();
    }
  }
};

function handleCopySuccess() {
  const label = document.getElementById("copyShareLabel");
  const sub = document.getElementById("copyShareSub");
  const icon = document.getElementById("copyShareIcon");
  const badge = document.getElementById("copyBadge");
  
  if (label) label.textContent = "✅ Link Copied to Clipboard!";
  if (sub) sub.textContent = "You can now paste into an email, text message, or notes.";
  if (icon) icon.textContent = "✅";
  if (badge) {
    badge.textContent = "Copied!";
    badge.style.background = "#1b4332";
    badge.style.color = "#ffffff";
  }

  showToast("Link copied to clipboard! Ready to share with family.");

  setTimeout(() => {
    if (label) label.textContent = "Copy Direct Link";
    if (sub) sub.textContent = "Copies direct link to clipboard for texting or messaging";
    if (icon) icon.textContent = "🔗";
    if (badge) {
      badge.textContent = "Copy";
      badge.style.background = "";
      badge.style.color = "";
    }
  }, 4000);
}
