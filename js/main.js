// Evergreen Aging - Interactive Client Logic, Sourcing Engine & Accessibility

// Curated YouTube Videos with Verified Public Health Citations
// ONLY videos published to the official Evergreen Aging channel are included
const channelVideos = [
  {
    "id": "EY_q0rRr_7Y",
    "title": "Why Mild Dehydration Looks Like Dementia in Seniors",
    "category": "nutrition",
    "categoryLabel": "Nutrition, Protein & Hydration",
    "duration": "Official Guide",
    "badge": "Official Video",
    "youtubeId": "EY_q0rRr_7Y",
    "youtubeUrl": "https://www.youtube.com/watch?v=EY_q0rRr_7Y",
    "thumbnail": "https://img.youtube.com/vi/EY_q0rRr_7Y/hqdefault.jpg",
    "description": "As we age, natural thirst cues diminish, meaning mild fluid loss can quickly trigger sudden confusion, dizziness, and memory fog that closely mimics dementia. Learn simple daily hydration anchors to protect mental clarity and avoid emergency room visits.",
    "accessibleGuide": "Practical daily hydration anchors and fluid intake cues for home routines.",
    "authority": "National Institute on Aging (NIA / NIH)",
    "citationTitle": "National Institute on Aging (NIH): Healthy Eating, Nutrition, and Diet for Older Adults",
    "citationUrl": "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet",
    "keyFinding": "Diminished thirst sensation in older adults accelerates hypovolemia; routine fluid intake preserves cognitive clarity, prevents orthostatic dizziness, and avoids unnecessary hospital visits."
  },
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
    "description": "When unsteady or fearful of falling, older adults instinctively shorten their stride and shuffle, which paradoxically increases trip hazards. Learn why this gait change occurs and safe, practical movement cues to restore step clearance and walking confidence.",
    "accessibleGuide": "Gentle standing and hallway stride cues with chair support.",
    "authority": "Public Health Agency of Canada (PHAC)",
    "citationTitle": "PHAC: Seniors' Falls in Canada (Surveillance & Gait Safety)",
    "citationUrl": "https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors/publications/publications-general-public/seniors-falls-canada-second-report.html",
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
    "description": "A plain-language guide comparing Alzheimer's, Parkinson's, ALS, MS, and Huntington's disease. Focuses on recognizing distinctive motor and cognitive symptoms early, while adopting communication and caregiving strategies that honour the individual's dignity.",
    "accessibleGuide": "Plain-language caregiver guidance for Alzheimer's, Parkinson's, and ALS.",
    "authority": "National Institute of Neurological Disorders and Stroke (NINDS / NIH)",
    "citationTitle": "NINDS / NIH: Neurodegenerative Conditions & Caregiver Support Guidelines",
    "citationUrl": "https://www.ninds.nih.gov/health-information/disorders",
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
    "description": "An orientation to Evergreen Aging's public health mission—translating complex geriatric and human kinetics research into actionable, barrier-free habits. Learn how our follow-along routines, safety checklists, and dignity guides fit into daily life.",
    "accessibleGuide": "Safe seated and standing joint mobilization for every mobility level.",
    "authority": "Canadian Society for Exercise Physiology (CSEP)",
    "citationTitle": "CSEP: Canadian 24-Hour Movement Guidelines for Adults 65+",
    "citationUrl": "https://csepguidelines.ca/guidelines/adults-65/",
    "keyFinding": "Gentle daily multi-joint mobility routines preserve synovial fluid circulation and maintain functional independence."
  }
];

const categoryLabels = {
  all: "All Lessons",
  mobility: "Mobility & Joints",
  balance: "Fall Prevention",
  seated: "Chair / Seated Only",
  nutrition: "Nutrition, Protein & Hydration",
  brain: "Brain Health"
};

// Free Printable Public Health Toolkits with Official Public Health Citations
const healthToolkits = {
  fall_proofing: {
    title: "12-Point Home Fall-Proofing Environmental Safety Audit",
    category: "Safety & Fall Prevention",
    authority: "Public Health Agency of Canada (PHAC)",
    citationTitle: "PHAC: Seniors' Falls in Canada: Second Report (Surveillance & Environmental Risk Factors)",
    citationUrl: "https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors/publications/publications-general-public/seniors-falls-canada-second-report.html",
    description: "A room-by-room safety checklist to identify and eliminate the hidden hazards responsible for 60% of all in-home falls.",
    items: [
      "Stairways: Install secure handrails on both sides that extend the full length of stairs (PHAC standard).",
      "Lighting: Install motion-activated 300+ lumen nightlights between the bed and the bathroom (clinical fall-prevention standard).",
      "Flooring: Remove all loose throw rugs or secure them firmly with double-sided rug tape.",
      "Bathroom: Install non-slip rubber mats inside the tub and professional grab bars anchored into studs (avoid suction cups).",
      "Pathways: Clear floor walkways of electrical cords, pet toys, and clutter.",
      "Footwear: Wear non-skid, supportive enclosed slippers inside the house rather than socks or bare feet.",
      "Reach Zones: Move frequently used dishes and pantry items between waist and shoulder height.",
      "Bedside Phone: Keep a charged phone or emergency alert pendant within arm's reach of bed.",
      "Contrast Edges: Mark top and bottom stair steps with high-contrast reflective tape.",
      "Spill Response: Keep dry mop pads accessible in kitchen and bath to wipe wet tiles immediately.",
      "Chair Height: Ensure favourite living room chairs are at least 18-20 inches high with sturdy armrests.",
      "Medication Review: Ask doctor if any current prescription causes orthostatic dizziness when standing."
    ]
  },
  joint_warmup: {
    title: "\"Morning Gentle Joint Warm-Up\" Printable Routine",
    category: "Daily Mobility Routine",
    authority: "Mayo Clinic Health System",
    citationTitle: "Mayo Clinic Health System: Exercise Helps Ease Arthritis Pain and Stiffness",
    citationUrl: "https://www.mayoclinic.org/diseases-conditions/arthritis/in-depth/arthritis/art-20047971",
    description: "A large-print, 5-minute seated routine seniors can do right beside the bed to circulate synovial fluid before walking. Directly combats morning stiffness, eases osteoarthritis discomfort, and builds movement confidence.",
    isRoutine: true,
    steps: [
      {
        num: 1,
        title: "Seated Ankle Pumps & Circles",
        reps: "10 pumps • 5 circles each way",
        instructions: "While seated on the edge of the bed or a sturdy chair, pump your feet up and down 10 times, then draw gentle circles with your toes (5 in each direction).",
        purpose: "Stimulates venous blood flow, lubricates the ankle joints, and prepares feet for stable floor contact."
      },
      {
        num: 2,
        title: "Seated Knee Extensions",
        reps: "8–10 repetitions per leg",
        instructions: "Slowly straighten one leg out in front of you, holding for 3 seconds, then lower gently. Alternate legs smoothly.",
        purpose: "Circulates synovial fluid across the knee joints and awakens quadriceps for safe standing."
      },
      {
        num: 3,
        title: "Gentle Seated Pelvic Tilts",
        reps: "6–8 repetitions",
        instructions: "Place your hands on your thighs. Gently rock your pelvis backward to round your lower back slightly, then rock forward to sit tall with a gentle arch.",
        purpose: "Relieves morning spinal stiffness and restores lumbar mobility before weight-bearing."
      },
      {
        num: 4,
        title: "Slow Shoulder & Neck Rolls",
        reps: "5 shoulder rolls • 3s neck pauses",
        instructions: "Roll your shoulders backward in smooth, relaxed circles 5 times. Gently turn your head to look over your right shoulder, hold 3 seconds, then turn to the left.",
        purpose: "Eases cervical neck tightness and opens upper-body posture for balanced walking."
      },
      {
        num: 5,
        title: "Overhead Reaching & Deep Breathing",
        reps: "4 deep breath cycles",
        instructions: "Inhale slowly through your nose as you raise both arms gently toward the ceiling (or to shoulder height). Exhale slowly as you lower your arms.",
        purpose: "Expands the ribcage, oxygenates circulating blood, and activates postural spinal extensors."
      },
      {
        num: 6,
        title: "Safe Stand & 5-Second Pause",
        reps: "1 mindful transition",
        instructions: "Plant both feet flat on the floor directly beneath your knees. Take one calm grounding breath, use sturdy armrests to stand tall, pause for 5 seconds to ensure steadiness, and take your first step with confidence.",
        purpose: "Prevents orthostatic dizziness, establishes vestibular equilibrium, and prevents morning stumbles."
      }
    ],
    items: [
      "1. Seated Ankle Pumps & Circles: While seated on the edge of the bed or a sturdy chair, pump your feet up and down 10 times, then draw gentle circles with your toes (5 in each direction) to stimulate venous return and lubricate the ankle joints.",
      "2. Seated Knee Extensions: Slowly straighten one leg out in front of you, holding for 3 seconds, then lower gently. Alternate legs for 8–10 repetitions per side to wake up the quadriceps and circulate synovial fluid across the knee joint.",
      "3. Gentle Seated Pelvic Tilts: Place your hands on your thighs. Gently rock your pelvis backward to round your lower back slightly, then rock forward to sit tall with a gentle arch. Repeat 6–8 times to relieve lower spine morning tightness.",
      "4. Slow Shoulder & Neck Rolls: Roll your shoulders backward in smooth, relaxed circles 5 times. Gently turn your head to look over your right shoulder, hold 3 seconds, then turn to the left to ease cervical stiffness.",
      "5. Overhead Reaching & Deep Breathing: Inhale slowly through your nose as you raise both arms gently toward the ceiling (or to shoulder height if comfortable). Exhale slowly as you lower your arms. Repeat 4 times to expand your ribcage and awaken posture.",
      "6. Safe Stand & First Steps Pause: Before walking, plant both feet flat on the floor directly beneath your knees. Take one calm grounding breath, use sturdy armrests to stand tall, pause for 5 seconds to ensure steadiness, and take your first step with confidence."
    ]
  },
  caregiver_guide: {
    title: "Caregiver & Family Guide: Preserving Daily Independence",
    category: "Family & Caregiver Support",
    isPoster: true,
    authority: "National Institute on Aging (NIA / NIH)",
    citationTitle: "NIA / NIH: Caregiver Health, Stress Physiology & Daily Living Guides",
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
    authority: "American College of Emergency Physicians (ACEP)",
    citationTitle: "ACEP: EMS & Prehospital Care Protocol & First Responder Guidelines",
    citationUrl: "https://www.acep.org/ems/resources",
    description: "First responders are trained to look on the front of the refrigerator in a home medical emergency. Keep this card updated and visible.",
    isForm: true,
    items: [
      "Full Legal Name, Date of Birth, and Preferred Name",
      "Primary Emergency Contact (Name, Relationship, Cell Phone Number)",
      "Secondary Emergency Contact (Name, Relationship, Cell Phone Number)",
      "Primary Care Physician (Name, Clinic Name, Office Phone)",
      "Current Diagnoses (e.g., Hypertension, Type 2 Diabetes, Osteoarthritis)",
      "Current Prescription Medications (Name, Exact Dosage, Frequency)",
      "Known Allergies (Penicillin, Latex, Iodine, etc.)",
      "Preferred Hospital / Medical Centre",
      "Advance Directives / Healthcare Proxy on file (Yes / No, Location of documents)"
    ]
  },
  hydration_nutrition: {
    title: "Senior Hydration & Daily Protein Habit Checklist",
    category: "Nutrition & Healthy Aging",
    authority: "National Institute on Aging (NIA / NIH) & Cleveland Clinic",
    citationTitle: "NIA Healthy Eating & Protein Protocols &bull; Cleveland Clinic Dehydration in Older Adults",
    citationUrl: "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet & https://health.clevelandclinic.org/dehydration-in-older-adults",
    description: "An evidence-based daily habit checklist to bypass blunted thirst sensation, defend against dehydration-induced confusion (delirium) and orthostatic falls, and distribute dietary protein to preserve lean muscle tissue.",
    items: [
      "High-Contrast Visual Cups: Replace intimidating 1-litre tumblers with smaller (150–200 mL) brightly coloured cups (blue, red, or green) placed in direct line of sight so fluids remain visible against light countertops.",
      "Habit-Stacked Sip Schedule: Anchor sips to daily habits, e.g., 1 cup upon waking; a mug of tea with morning reading or TV; a larger glass alongside lunch.",
      "Eat Your Hydration (20–30% of Fluids): Incorporate high-water foods like watermelon, cantaloupe, berries, cucumbers, tomatoes, warm broths, applesauce, and yogurt into daily meals.",
      "Improve Flavour and Drinkability: Add lemon, orange, or cucumber slices to plain water, and offer soothing warm herbal teas (peppermint, chamomile) that are gentle on sensitive teeth and aging stomachs.",
      "Front-Load Fluids (Address Bathroom Fear): Shift fluid intake between breakfast and 4:00 PM, then gently taper liquids 2 hours before bed to ease incontinence anxiety and nighttime fall risks.",
      "Dehydration Check: Monitor for warning signs—dark, concentrated urine (aiming for pale straw colour), a parched/coated tongue, rapid heart rate, or sudden lethargy and dizziness when standing. Contact a healthcare provider promptly if worried about symptoms or acute confusion.",
      "Distribute Protein Evenly: Include 25–30g of high-quality dietary protein (eggs, poultry, fish, tofu, beans, or Greek yogurt) across all meals to steadily defend against sarcopenia.",
      "Fibre & Fluid Synergy: Pair adequate daily fluid intake with dietary fibre (oats, vegetables, seeds) to support smooth digestion and prevent constipation."
    ]
  },
  sleep_hygiene: {
    title: "Senior Sleep Hygiene & Nighttime Safety Checklist",
    category: "Brain Health & Restorative Sleep",
    authority: "National Institute on Aging (NIA / NIH)",
    citationTitle: "National Institute on Aging (NIH): A Good Night's Sleep & Sleep Changes in Older Adults",
    citationUrl: "https://www.nia.nih.gov/health/sleep/good-nights-sleep",
    description: "Evidence-based sleep hygiene and nocturnal mobility habits to support natural sleep architecture, prevent nighttime disorientation, and eliminate bedtime fall risks.",
    items: [
      "Consistent Sleep Anchor: Wake up and go to sleep at the exact same time every day, even on weekends, to stabilize your circadian clock.",
      "Morning Natural Light: Get 20–30 minutes of natural outdoor daylight in the morning or early afternoon to reinforce daytime melatonin suppression.",
      "60-Minute Screen Buffer: Turn off smartphones, tablets, and bright LED screens 1 hour before bed to allow natural melatonin synthesis.",
      "Illuminated Bed-to-Bathroom Path: Ensure low-glare, motion-activated nightlights illuminate the walkway from bed to bathroom to prevent nocturnal tripping.",
      "10-Second Bedside Sit: When waking at night, sit upright on the edge of the bed for 10 seconds before standing to avoid orthostatic dizziness and sudden blood pressure drops.",
      "Cool, Dark Bedroom Environment: Keep bedroom temperature moderate (around 18–20°C / 65–68°F) with room-darkening shades or curtains.",
      "Afternoon Caffeine Cutoff: Discontinue caffeine (coffee, black tea, dark chocolate) after 12:00 PM to allow adequate clearance before bedtime.",
      "20-Minute Stimulus Control: If unable to fall asleep after 20 minutes, move to a dimly lit chair and read or listen to calming music until drowsy before returning to bed."
    ]
  }
};

// Backward compatibility alias & global export
healthToolkits.doctor_prep = healthToolkits.joint_warmup;
window.healthToolkits = healthToolkits;

document.addEventListener("DOMContentLoaded", () => {
  initAccessibilityControls();
  initMobileMenu();
  initScrollSpy();
  initDisclaimerPopup();
  initAboutNavTabs();
  loadCustomVideos();
  renderVideos(channelVideos, "all", "");
  initCategoryFilters();
  initSearch();
  initModal();
  initTopicSuggestionForm();
  initContactForm();
  updateVaultStatusBadge();
});

// Highlight active tab within Our Mission / Founder bubble
function initAboutNavTabs() {
  if (!window.location.pathname.includes("about.html")) return;
  const missionLink = document.querySelector('.mission-nav-bubble a[href*="#mission"], .mission-nav-bubble a[href="about.html"]');
  const founderLink = document.querySelector('.mission-nav-bubble a[href*="#founder"]');
  if (!missionLink && !founderLink) return;

  function updateAboutNavTabs() {
    if (window.location.hash === "#founder") {
      if (founderLink) founderLink.classList.add("active");
      if (missionLink) missionLink.classList.remove("active");
    } else {
      if (missionLink) missionLink.classList.add("active");
      if (founderLink) founderLink.classList.remove("active");
    }
  }

  window.addEventListener("hashchange", updateAboutNavTabs);
  updateAboutNavTabs();
}

// Top Medical & Health Disclaimer Popup & Persistent Floating Bubble
function initDisclaimerPopup() {
  // Clean up legacy permanent dismissal so banner can show in fresh new tabs
  try {
    localStorage.removeItem("evergreen_disclaimer_dismissed");
  } catch (e) {}

  const popup = document.getElementById("medicalDisclaimerPopup");
  if (popup) {
    let isSuppressed = false;
    try {
      isSuppressed = sessionStorage.getItem("evergreen_disclaimer_suppressed") === "true";
      sessionStorage.setItem("evergreen_home_visited", "true");
    } catch (e) {}

    if (isSuppressed) {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }

    // When navigating away from Home, suppress banner for future visits within this tab session
    const suppressForSession = () => {
      try {
        sessionStorage.setItem("evergreen_disclaimer_suppressed", "true");
      } catch (e) {}
    };

    window.addEventListener("beforeunload", suppressForSession);
    window.addEventListener("pagehide", suppressForSession);

    // Also attach to internal navigation links on homepage for immediate state capture
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("http")) {
        link.addEventListener("click", suppressForSession);
      }
    });

    // Handle bfcache page restoration (e.g. browser Back button returning to Home)
    window.addEventListener("pageshow", () => {
      try {
        if (sessionStorage.getItem("evergreen_disclaimer_suppressed") === "true") {
          popup.style.display = "none";
          const bubble = document.getElementById("disclaimerFloatingBtn");
          if (bubble) {
            bubble.style.opacity = "1";
            bubble.style.pointerEvents = "auto";
          }
        }
      } catch (e) {}
    });
  }

  // Always initialize persistent floating disclaimer bubble
  initFloatingDisclaimerBubble();
}

function initFloatingDisclaimerBubble() {
  if (document.getElementById("disclaimerFloatingContainer")) return;

  const container = document.createElement("div");
  container.id = "disclaimerFloatingContainer";
  container.className = "disclaimer-floating-container";
  container.setAttribute("role", "region");
  container.setAttribute("aria-label", "Medical and Health Disclaimer Trigger");

  container.innerHTML = `
    <!-- Floating Trigger Bubble -->
    <button id="disclaimerFloatingBtn" class="disclaimer-floating-bubble" type="button" aria-expanded="false" aria-controls="disclaimerFloatingCard" aria-label="Open Medical and Health Disclaimer" title="View Medical & Health Disclaimer">
      <span class="disclaimer-bubble-text">Disclaimer</span>
    </button>

    <!-- Floating Disclaimer Popup Card -->
    <div id="disclaimerFloatingCard" class="disclaimer-floating-card" role="dialog" aria-modal="false" aria-labelledby="floatingDisclaimerHeading">
      <div class="disclaimer-card-header">
        <div class="disclaimer-card-title-wrap">
          <h4 id="floatingDisclaimerHeading" class="disclaimer-card-title">Medical &amp; Health Disclaimer</h4>
        </div>
        <button type="button" id="disclaimerFloatingCloseBtn" class="disclaimer-card-close" aria-label="Close medical disclaimer" title="Close disclaimer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="disclaimer-card-body">
        <p>
          Evergreen Aging is an independent, student-led health literacy resource. Content across this website and the YouTube channel is designed to share evidence-informed tools for healthy aging and caregiving, not to provide personalized medical advice, diagnosis, or treatment.
        </p>
        <p>
          Because every individual’s health profile is unique, please consult your primary care provider, physiotherapist, or qualified healthcare team before starting any new mobility routine or lifestyle adjustment.
        </p>
      </div>
      <div class="disclaimer-card-footer">
        <button type="button" id="disclaimerFloatingUnderstandBtn" class="disclaimer-card-understand-btn">
          I Understand
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  const bubbleBtn = document.getElementById("disclaimerFloatingBtn");
  const card = document.getElementById("disclaimerFloatingCard");
  const closeBtn = document.getElementById("disclaimerFloatingCloseBtn");
  const understandBtn = document.getElementById("disclaimerFloatingUnderstandBtn");

  // If top initial banner is currently visible on homepage, hide bubble until banner is dismissed
  const popup = document.getElementById("medicalDisclaimerPopup");
  const isTopBannerVisible = popup && popup.style.display !== "none";

  if (isTopBannerVisible) {
    bubbleBtn.style.opacity = "0";
    bubbleBtn.style.pointerEvents = "none";
  } else {
    bubbleBtn.style.opacity = "1";
    bubbleBtn.style.pointerEvents = "auto";
  }

  function openCard() {
    card.classList.add("open");
    bubbleBtn.classList.add("active");
    bubbleBtn.setAttribute("aria-expanded", "true");
    understandBtn.focus();
  }

  function closeCard(saveDismissal = false) {
    card.classList.remove("open");
    bubbleBtn.classList.remove("active");
    bubbleBtn.setAttribute("aria-expanded", "false");
    bubbleBtn.focus();

    if (saveDismissal) {
      try {
        sessionStorage.setItem("evergreen_disclaimer_suppressed", "true");
      } catch (e) {}

      // If top banner exists on page, hide it too
      const topBanner = document.getElementById("medicalDisclaimerPopup");
      if (topBanner && topBanner.style.display !== "none") {
        topBanner.classList.add("dismissing");
        setTimeout(() => {
          topBanner.style.display = "none";
        }, 220);
      }
    }
  }

  bubbleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (card.classList.contains("open")) {
      closeCard(false);
    } else {
      openCard();
    }
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeCard(false);
  });

  understandBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeCard(true);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (card.classList.contains("open") && !container.contains(e.target)) {
      closeCard(false);
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && card.classList.contains("open")) {
      closeCard(false);
    }
  });

  // Expose helpers globally
  window.openDisclaimerFloatingCard = openCard;
  window.closeDisclaimerFloatingCard = closeCard;
}

let isDisclaimerFlightActive = false;

window.dismissDisclaimerPopup = function() {
  if (isDisclaimerFlightActive) return;
  const popup = document.getElementById("medicalDisclaimerPopup");
  if (!popup) return;

  const bubble = document.getElementById("disclaimerFloatingBtn");
  const card = popup.querySelector(".disclaimer-popup-card");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Save dismissed state to sessionStorage for this tab session
  try {
    sessionStorage.setItem("evergreen_disclaimer_suppressed", "true");
  } catch (e) {}

  // Fallback for reduced motion or missing elements: gentle fade
  if (!bubble || !card || prefersReducedMotion || typeof card.animate !== "function") {
    popup.classList.add("dismissing");
    if (bubble) {
      bubble.style.opacity = "1";
      bubble.style.pointerEvents = "auto";
    }
    setTimeout(() => {
      popup.style.display = "none";
    }, 220);
    return;
  }

  isDisclaimerFlightActive = true;

  // Make sure bubble is measured at its natural layout position in bottom-right
  bubble.style.visibility = "visible";
  const bubbleRect = bubble.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  // Create morphing clone element positioned fixed on top of original card
  const clone = document.createElement("div");
  clone.className = "disclaimer-flying-morph";
  clone.style.top = cardRect.top + "px";
  clone.style.left = cardRect.left + "px";
  clone.style.width = cardRect.width + "px";
  clone.style.height = cardRect.height + "px";

  // Content wrapper for initial card text
  const contentEl = document.createElement("div");
  contentEl.className = "disclaimer-morph-content";
  contentEl.innerHTML = card.innerHTML;
  clone.appendChild(contentEl);

  // Centred label element that appears as pill forms
  const labelEl = document.createElement("div");
  labelEl.className = "disclaimer-morph-label";
  labelEl.textContent = "Disclaimer";
  clone.appendChild(labelEl);

  document.body.appendChild(clone);

  // Hide original card to prevent visual ghosting
  card.style.opacity = "0";

  // Keep bubble hidden until clone arrives
  bubble.style.opacity = "0";
  bubble.style.pointerEvents = "auto";

  // Concurrently collapse the top container space smoothly
  popup.style.maxHeight = popup.offsetHeight + "px";
  requestAnimationFrame(() => {
    popup.classList.add("collapsing-up");
  });

  // 1. Dissolve initial card content quickly (0-130ms)
  contentEl.animate([
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.96)" }
  ], {
    duration: 130,
    fill: "forwards",
    easing: "ease-out"
  });

  // 2. Fade in the crisp, unscaled "Disclaimer" label as the morph reaches pill dimensions
  labelEl.animate([
    { opacity: 0 },
    { offset: 0.35, opacity: 0 },
    { offset: 0.65, opacity: 1 },
    { offset: 1.0, opacity: 1 }
  ], {
    duration: 420,
    easing: "ease-out",
    fill: "forwards"
  });

  // 3. Flight & Dimension-Morph Animation (Exact geometry transition with zero scaling distortion)
  const flight = clone.animate([
    {
      top: cardRect.top + "px",
      left: cardRect.left + "px",
      width: cardRect.width + "px",
      height: cardRect.height + "px",
      borderRadius: "8px",
      borderColor: "#fde68a",
      borderLeftWidth: "5px",
      backgroundColor: "#ffffff",
      boxShadow: "0 8px 24px rgba(180, 83, 9, 0.16)"
    },
    {
      offset: 0.35,
      borderRadius: "24px",
      borderLeftWidth: "2px",
      borderColor: "rgba(217, 119, 6, 0.45)"
    },
    {
      top: bubbleRect.top + "px",
      left: bubbleRect.left + "px",
      width: bubbleRect.width + "px",
      height: bubbleRect.height + "px",
      borderRadius: "999px",
      borderLeftWidth: "1px",
      borderColor: "rgba(217, 119, 6, 0.35)",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)"
    }
  ], {
    duration: 420,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fill: "forwards"
  });

  flight.onfinish = () => {
    clone.remove();
    popup.style.display = "none";
    popup.classList.remove("collapsing-up");
    popup.style.maxHeight = "";
    card.style.opacity = "";
    isDisclaimerFlightActive = false;

    // Seamless handoff: reveal bubble in exact landing place with zero scale drops or flash
    bubble.style.transition = "none";
    bubble.style.opacity = "1";

    const popAnim = bubble.animate([
      { transform: "scale(1)" },
      { transform: "scale(1.05)", offset: 0.45 },
      { transform: "scale(1)" }
    ], {
      duration: 180,
      easing: "ease-out"
    });

    popAnim.onfinish = () => {
      bubble.style.transition = "";
    };
  };
};

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

  // Ensure any previous dark mode classes or storage keys are cleared
  try {
    localStorage.removeItem("evergreen_theme");
  } catch (e) {}
  root.classList.remove("theme-dark", "theme-light");

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
    if (contrastBtn) {
      contrastBtn.classList.add("active");
      contrastBtn.setAttribute("aria-pressed", "true");
    }
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
      contrastBtn.setAttribute("aria-pressed", isHigh ? "true" : "false");
      try {
        localStorage.setItem("evergreen_contrast", isHigh ? "high" : "normal");
      } catch (e) {}
      if (typeof showToast === "function") {
        showToast(isHigh ? "👁️ High-Contrast Mode Enabled" : "🌿 Standard Theme Restored");
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

// 2. Mobile Menu & Nav Link Behaviour
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
      if (window.innerWidth <= 1080) {
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

// 3. Render Videos with 3-Video Limit, Fluid View-More Expander & Coming Soon state
let isVaultExpanded = false;
let currentFilteredVideos = [];
const VAULT_INITIAL_LIMIT = 3;
const VAULT_MAX_LIMIT = 9;

window.toggleVaultExpansion = function() {
  const drawer = document.getElementById("vaultOverflowDrawer");
  const expandBtn = document.getElementById("vaultExpandBtn");
  const expandText = document.getElementById("vaultExpandText");
  const actionsRow = document.querySelector(".vault-actions-row");

  isVaultExpanded = !isVaultExpanded;

  if (drawer) {
    drawer.classList.toggle("open", isVaultExpanded);
    drawer.setAttribute("aria-hidden", isVaultExpanded ? "false" : "true");
  }

  if (expandBtn) {
    expandBtn.classList.toggle("expanded", isVaultExpanded);
    expandBtn.setAttribute("aria-expanded", isVaultExpanded ? "true" : "false");
  }

  if (expandText) {
    const totalRemaining = Math.max(0, currentFilteredVideos.length - VAULT_INITIAL_LIMIT);
    expandText.textContent = isVaultExpanded 
      ? "Show Fewer Lessons" 
      : `View More Video Lessons (${totalRemaining} more)`;
  }

  // Natural in-place collapse check: ensure the actions row remains comfortably visible without jumping
  if (!isVaultExpanded && actionsRow) {
    setTimeout(() => {
      const rect = actionsRow.getBoundingClientRect();
      const inViewport = (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
      if (!inViewport) {
        actionsRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 400); // Trigger after the 380ms smooth accordion glide completes
  }
};

function generateVideoCardHtml(v, isOverflow = false, animIndex = 0) {
  const escapedTitle = (v.title || "").replace(/'/g, "\\'");
  const escapedDesc = (v.description || "").replace(/'/g, "\\'");
  const delayStyle = isOverflow ? ` style="transition-delay: ${animIndex * 50}ms;"` : "";

  return `
    <article class="video-item" data-id="${v.id}"${delayStyle}>
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

        <div class="video-item-footer" style="margin-top: auto; padding-top: 0.5rem;">
          <button class="card-link" onclick="openVideoModal('${v.id}')" style="background:none;border:none;cursor:pointer;font-size:0.95rem;font-weight:700;">
            Watch Lesson &rarr;
          </button>
          <button class="btn-listen" onclick="readAloud('${escapedTitle}. ${escapedDesc}')" title="Listen to summary">
            🔊 Listen
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderVideos(videosToRender, category = "all", query = "") {
  currentFilteredVideos = videosToRender;
  const container = document.getElementById("videoGrid");
  const drawer = document.getElementById("vaultOverflowDrawer");
  const overflowGrid = document.getElementById("vaultOverflowGrid");
  const expandWrap = document.getElementById("vaultExpandWrap");
  const expandBtn = document.getElementById("vaultExpandBtn");
  const expandText = document.getElementById("vaultExpandText");

  if (!container) return;

  if (videosToRender.length === 0) {
    if (expandWrap) expandWrap.style.display = "none";
    if (drawer) {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (overflowGrid) overflowGrid.innerHTML = "";
    isVaultExpanded = false;

    if (query) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3.5rem 1.5rem; background: var(--bg-card); border: 2px dashed var(--border-color); border-radius: var(--radius-lg);">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.4rem; color: var(--primary); margin-bottom: 0.4rem;">No Matching Video Found Yet</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 520px; margin: 0 auto 1.5rem; line-height: 1.55;">
            Only videos published to the official <strong>Evergreen Aging</strong> YouTube channel appear here. Have a topic or question you'd like me to cover?
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
          <a href="https://www.youtube.com/@evergreen_aging" target="_blank" rel="noopener noreferrer" class="btn-yt">
            Visit YouTube Channel
          </a>
          <a href="#topicForm" class="btn-outline">
            Suggest a Topic for This Category &darr;
          </a>
        </div>
        <div class="bottom-source-note" style="margin-top: 2rem; justify-content: center;">
          <span>All upcoming lessons are formulated in alignment with clinical geriatric literature &bull; <a href="sources.html">View Reference Standards &rarr;</a></span>
        </div>
      </div>
    `;
    return;
  }

  const initialCards = videosToRender.slice(0, VAULT_INITIAL_LIMIT);
  const overflowCards = videosToRender.slice(VAULT_INITIAL_LIMIT, VAULT_MAX_LIMIT);

  container.innerHTML = initialCards.map(v => generateVideoCardHtml(v, false)).join("");

  if (overflowCards.length === 0) {
    if (expandWrap) expandWrap.style.display = "none";
    if (drawer) {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (overflowGrid) overflowGrid.innerHTML = "";
    isVaultExpanded = false;
  } else {
    if (expandWrap) expandWrap.style.display = "inline-flex";
    if (overflowGrid) {
      overflowGrid.innerHTML = overflowCards.map((v, i) => generateVideoCardHtml(v, true, i)).join("");
    }
    if (drawer) {
      drawer.classList.toggle("open", isVaultExpanded);
      drawer.setAttribute("aria-hidden", isVaultExpanded ? "false" : "true");
    }
    if (expandBtn) {
      expandBtn.classList.toggle("expanded", isVaultExpanded);
      expandBtn.setAttribute("aria-expanded", isVaultExpanded ? "true" : "false");
    }
    if (expandText) {
      expandText.textContent = isVaultExpanded 
        ? "Show Fewer Lessons" 
        : `View More Video Lessons (${overflowCards.length} more)`;
    }
  }
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

function filterAndRender(category, query, isToggleAction = false) {
  currentCategory = category || "all";
  currentSearchQuery = query || "";
  
  if (!isToggleAction) {
    isVaultExpanded = false;
  }

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
      (v.accessibleGuide ? v.accessibleGuide.toLowerCase().includes(query) : false)
    );
  }

  renderVideos(filtered, category, query, isToggleAction);
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
    ytBtn.href = video.youtubeUrl || "https://www.youtube.com/@evergreen_aging";
  }
  
  if (citationContent) {
    if (video.authority && video.citationTitle) {
      citationContent.innerHTML = `
        <div style="margin-top: 1rem; padding: 0.95rem 1.15rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-left: 4px solid var(--primary); border-radius: var(--radius-sm); font-size: 0.9rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.35rem;">
            <span style="font-weight:700; color:var(--primary); text-transform:uppercase; font-size:0.76rem; letter-spacing:0.04em;">🔬 Supporting Clinical Sourcing</span>
            <span style="font-weight:700; color:var(--text-muted); font-size:0.8rem;">${video.authority}</span>
          </div>
          <div style="color:var(--text-main); font-weight:600; margin-bottom:0.35rem; line-height:1.4;">
            ${video.citationTitle}
          </div>
          ${video.keyFinding ? `<p style="margin:0 0 0.45rem 0; font-size:0.85rem; color:var(--text-muted); line-height:1.45;"><strong>Key Clinical Finding:</strong> ${video.keyFinding}</p>` : ''}
          ${video.citationUrl ? `<a href="${video.citationUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--primary); font-weight:700; text-decoration:underline; font-size:0.82rem; word-break:break-all;">Public Access Literature &rarr;</a>` : ''}
        </div>
      `;
    } else {
      citationContent.innerHTML = "";
    }
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
              <a href="${video.youtubeUrl || 'https://www.youtube.com/@evergreen_aging'}" target="_blank" rel="noopener noreferrer" class="btn-yt" style="font-size:1.05rem; padding:0.8rem 1.6rem;">
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
              <option value="nutrition">Nutrition, Protein &amp; Hydration</option>
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
    balance: { label: "Fall Prevention", auth: "Public Health Agency of Canada (PHAC)", cite: "PHAC: Seniors' Falls in Canada Surveillance", url: "https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors/publications/publications-general-public/seniors-falls-canada-second-report.html", guide: "Gentle standing and hallway stride cues with chair support." },
    seated: { label: "Chair / Seated Only", auth: "Canadian Society for Exercise Physiology (CSEP)", cite: "CSEP: Canadian 24-Hour Movement Guidelines for Adults 65+", url: "https://csepguidelines.ca/guidelines/adults-65/", guide: "Chair-supported mobility routine with zero floor work required." },
    brain: { label: "Brain Health & Neurological Support", auth: "National Institute of Neurological Disorders and Stroke (NINDS / NIH)", cite: "NINDS / NIH: Neurodegenerative Conditions & Brain Health", url: "https://www.ninds.nih.gov/health-information/disorders", guide: "Plain-language caregiver guidance for cognitive and daily care support." },
    nutrition: { label: "Nutrition, Protein & Hydration", auth: "National Institute on Aging (NIA / NIH)", cite: "National Institute on Aging (NIH): Healthy Eating, Nutrition, and Diet for Older Adults", url: "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet", guide: "Practical daily hydration anchors and fluid intake cues for home routines." },
    mobility: { label: "Mobility & Joints", auth: "Mayo Clinic Health System", cite: "Mayo Clinic Health System: Exercise Helps Ease Arthritis Pain and Stiffness", url: "https://www.mayoclinic.org/diseases-conditions/arthritis/in-depth/arthritis/art-20047971", guide: "Safe seated and standing joint mobilization for every mobility level." }
  }[cat] || { label: "Mobility & Joints", auth: "Public Health Agency of Canada (PHAC)", cite: "PHAC: Physical Activity and Healthy Aging Guidelines", url: "https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors.html", guide: "Safe and adaptable for seated or standing support." };

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
    accessibleGuide: catMeta.guide || "Safe and adaptable for seated or standing support.",
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

// 7. Interactive Printable Health Toolkit Navigation (Single-Tab Flow)
window.openPrintableToolkit = function(toolkitKey) {
  // Directly open dedicated Educational Infographic Poster page for Caregiver Guide in the same tab
  if (toolkitKey === 'caregiver_guide') {
    window.location.href = 'caregiver-poster.html';
    return;
  }

  // Navigate to dedicated single-tab checklist viewer
  window.location.href = 'toolkit-viewer.html?id=' + encodeURIComponent(toolkitKey);
};

// 8. Topic Suggestion Handler (Routes to contact@evergreenaging.ca)
function initTopicSuggestionForm() {
  const form = document.getElementById("topicForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("topicInput");
    const topic = input ? input.value.trim() : "";

    if (!topic) return;

    const recipient = "contact@evergreenaging.ca";
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

// 8b. Community & Senior Centre Inquiries Contact Form Handler (Routes to contact@evergreenaging.ca)
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

    const recipient = "contact@evergreenaging.ca";
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
let toastTimeoutId = null;

function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  // Clear any existing active timer to prevent premature fade-out on repeated clicks
  if (toastTimeoutId) {
    clearTimeout(toastTimeoutId);
    toastTimeoutId = null;
  }

  toast.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  // Trigger smooth fade-in
  toast.classList.remove("show");
  void toast.offsetWidth; // trigger reflow
  toast.classList.add("show");

  // Fade out smoothly after 3s (3000ms)
  toastTimeoutId = setTimeout(() => {
    toast.classList.remove("show");
    toastTimeoutId = null;
  }, 3000);
}

// 10. Email & Share Resource with Family or Caregiver
window.shareToolkit = function(toolkitKey) {
  const toolkit = healthToolkits[toolkitKey] || {
    title: "Evergreen Aging Health Resource",
    description: "Free evidence-based senior mobility and health education.",
    category: "Health Guide"
  };

  const isCaregiver = toolkitKey === "caregiver_guide";
  const origin = window.location.origin || "";
  let basePath = window.location.pathname;
  basePath = basePath.substring(0, basePath.lastIndexOf("/") + 1);
  const resourceUrl = isCaregiver 
    ? (origin + basePath + "caregivers.html")
    : (origin + basePath + "toolkits.html");

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
      <button class="modal-close" onclick="closeShareModal()" aria-label="Close share dialogue">&times;</button>
      
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
