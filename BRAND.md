# Digital MBSE Solutions LLC — Brand, Style & Content Guide

Source of truth for the digitalmbse.com website and any Digital MBSE marketing copy.

## 1. Positioning

**Tagline / intro (canonical):**
> Digital MBSE Solutions is a specialized engineering consulting firm delivering advanced solutions across Model-Based Systems Engineering (MBSE), Artificial Intelligence, Robotics, and Physical AI.

- Hero eyebrow: `MBSE · AI · Robotics · Physical AI`
- Hero headline: "Engineering consulting for complex, intelligent systems"
- Location: **Pennsylvania** (never a town or street address).
- Robot-as-a-Service (RaaS) and high-hazard-cell work is *one application* under AI, Robotics & Physical AI — never the headline.

## 2. Color palette (from `css/styles.css`)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0a0e17` | Page background (near-black) |
| `--bg-alt` | `#0f172a` | Alternating section background |
| `--surface` | `#111827` | Cards, figures, callouts |
| `--surface-raised` | `#1e293b` | Raised surfaces |
| `--text` | `#f8fafc` | Body text (off-white) |
| `--text-muted` | `#94a3b8` | Secondary text |
| `--white` | `#ffffff` | Headings, button text |
| `--accent` | `#2563eb` | Primary blue (buttons, numbers, callout bar) |
| `--accent-bright` | `#3b82f6` | Links, nav underline, area numbers |
| `--accent-hover` | `#1d4ed8` | Button hover |
| link hover | `#60a5fa` | Link hover |
| eyebrow | `#93c5fd` | Hero eyebrow text |
| `--border` | `#1e3a5f` | Card/section borders |
| `--border-soft` | `#334155` | Soft dividers |
| footer bg | `#060912` | Footer |
| CTA gradient | `#0f172a → #1e3a5f → #1e40af` (135°) | CTA band |

Scheme is strictly **blue / black / white**. No other accent colors.

## 3. Typography

- Font stack: `"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif` (no web fonts).
- Body: 1.05rem, line-height 1.65.
- Hero H1: `clamp(1.85rem, 4vw, 2.55rem)`, weight 700, white, max 20ch.
- Page-hero H1: `clamp(1.6rem, 3vw, 2.1rem)`.
- Section H2: `clamp(1.45rem, 2.5vw, 1.85rem)`, white; area H2 `clamp(1.35rem, 2.4vw, 1.7rem)`.
- Eyebrow / pills / logo-sub: uppercase, 0.72–0.8rem, letter-spacing 0.04–0.08em, weight 600.
- Nav: 0.9rem, weight 500, muted; active/hover = white with 2px bright-blue underline.
- Sentence case for headings ("Our approach", not "Our Approach"), except proper service names.

## 4. Layout & spacing

- Max content width 1100px (`.container`).
- Sections: 3.25rem vertical padding; alternate `.section` and `.section-alt`.
- Section header: max 42rem; H2 + one muted sentence.
- Grids: `.grid-2`, `.grid-3` (1.25rem gap); collapse to one column on mobile.
- Radius 10px (cards/figures), 8px (buttons), 999px (pills).
- Shadow: `0 1px 3px rgba(0,0,0,.35), 0 12px 32px rgba(0,0,0,.28)`.

## 5. Components

- **Buttons:** `.btn-primary` (solid blue, white text), `.btn-secondary` (transparent, bright-blue border), `.btn-outline`. Header CTA: "Start a conversation" → contact.html.
- **Cards:** surface background, 1px border, H3 + muted paragraph. One card per sub-service.
- **Area numbers:** `01`–`06` in bright blue (`.area-num` / `.card-icon`) beside the area title.
- **Checklists:** `.list-check` for short capability bullets.
- **Stack rows:** numbered blue circles (`.stack-row`, `.stack-num`) for process steps (Approach page).
- **Callout:** left 4px blue bar on surface — for a short invitation, never a disclaimer.
- **CTA band:** blue gradient, centered H2 + one sentence + "Go to Contact" button at the bottom of every page except Contact.
- **Nav (all pages):** Home · Capabilities · Approach · Systems Engineering · Additive Lab · About · Contact + header CTA.
- **Footer:** company name + one-line descriptor ("Engineering consulting across MBSE, AI, Robotics, and Physical AI. Pennsylvania."), Services column linking to the six capability anchors, Navigate column, © line.

## 6. Imagery

- Reuse existing `images/*.png`: `hero-raas-cell.png`, `forward-deployed-engineering.png`, `systems-engineering-consulting.png`, `fdm-printer-farm.png`, `fdm-printer-single.png`, `printed-fixture.png`.
- Wrap in `<figure class="media">`; aspect 4:3 (`.media-tall`) or 1:1 (`.media-square`); rounded with border and shadow.
- Descriptive `alt` text always. **No captions** that mention generation tools or "illustrative"; captions optional and plain.
- No product logos or identifiable branded equipment.

## 7. Voice & tone

- Plain, confident, engineering-precise. Short sentences. Active voice.
- Describe what we do and how; no hype ("revolutionary", "world-class"), no superlatives without substance.
- No disclaimers, hedges, or "draft/preview" language.
- Team-level framing: "we", "our team". No individual names or former employers.
- Never invent customers, partners, contracts, or lab relationships.

## 8. Glossary

| Term | Usage |
|---|---|
| **MBSE** | Model-Based Systems Engineering. Spell out on first use per page. |
| **SysML/UML** | Modeling languages for system models. |
| **FDE accelerator** | Our proprietary Forward Deployed Engineering accelerator — tooling and AI-enabled pipelines for rapid software delivery. "Forward deployed engineering" = engineers embedded with the client team. |
| **Physical AI** | Machine learning deployed onto physical hardware that senses and acts in the real world. |
| **Digital twin** | High-fidelity model connected to system models / live data for monitoring, prediction, optimization. Lowercase unless starting a sentence. |
| **HIL / SIL** | Hardware-in-the-loop / software-in-the-loop testing. Spell out HIL on first use. |
| **V&V** | Verification & validation. Write `V&amp;V` in HTML. |
| **RaaS** | Robot-as-a-Service. Application example only, not a headline. |
| **Labs** | Say "research labs" or "labs" — never a specific agency or lab name. |

## 9. Page structure

| Page | Title | Content |
|---|---|---|
| `index.html` | Digital MBSE \| MBSE, AI, Robotics & Physical AI Engineering Consulting | Hero (tagline), six-area grid → capabilities anchors, model-driven section, Why us, CTA |
| `capabilities.html` | Capabilities & Core Services | All six areas, numbered 01–06, card per sub-service |
| `approach.html` | Approach | Discover → Model → Simulate → Build → Verify; forward deployed engineering; where we apply it |
| `systems-consulting.html` | Systems & Software Architecture | Area 02 deep dive |
| `additive-manufacturing.html` | Prototyping & Rapid Manufacturing | Area 05 deep dive, lab gallery |
| `about.html` | About | Tagline, team experience, principles, company (Pennsylvania) |
| `contact.html` | Contact | "Contact details coming soon"; legal name + Pennsylvania |

Capability anchors: `#product-development`, `#systems-software-architecture`, `#ai-robotics-physical-ai`, `#simulation-digital-twins`, `#prototyping-manufacturing`, `#verification-validation-testing`.

## 10. Do / Don't

**Do**
- Use the canonical service taxonomy below, wording close to verbatim.
- Say "research labs" or "labs".
- Frame experience at team level ("an experienced team in robotics, surgical robotics and medtech software, nuclear engineering, systems engineering, software verification, and regulated product development").
- Keep blue / black / white; reuse existing images.
- Use "Pennsylvania" as the location.

**Don't**
- Publish personal contact info (email, phone, address, LinkedIn). Contact page says contact details are coming soon.
- Name any government agency, sponsor, or specific lab (say "research labs" or "labs").
- Publish Phase I/II plans, pitches, or roadmaps about our own company.
- Add a "proof points" section.
- Name specific robotic devices or products, or equipment brands; cite power plant statistics.
- Add disclaimers of any kind, or "Generated by…"/"Illustrative" captions.
- Add draft/preview notices.
- Name individuals or their employers.
- Invent customers, partners, or lab relationships.

## 11. Canonical service taxonomy (content source of truth)

Capabilities & Core Services

Digital MBSE Solutions is a specialized engineering consulting firm delivering advanced solutions across Model-Based Systems Engineering (MBSE), Artificial Intelligence, Robotics, and Physical AI.

0. Product Development & Roadmapping
- End-to-End Product Engineering: Comprehensive product development services from initial concept exploration and early-stage engineering through implementation.
- Discovery & Requirements Workshops: Collaborative discovery sessions for greenfield projects to elicit business objectives, conduct mission analysis, and define target customer use cases.
- Human Factors & User Research: Human factors engineering combined with user feedback studies and iterative design activities to optimize user experience and product ergonomics.
- Roadmapping & Specification: Translation of research insights into structured product feature catalogs, long-term development roadmaps, and detailed prototype requirements.

1. Systems & Software Architecture
- End-to-End Systems Engineering: Comprehensive system architecture design, requirements definition, functional decomposition, and interface control management.
- Model-Based Systems Engineering (MBSE): Development of robust SysML/UML system models to streamline engineering workflows and maintain single-source-of-truth traceability.
- Software Architecture & Enterprise Acceleration: Scalable enterprise software architecture leveraging our proprietary FDE accelerator and AI-enabled development pipelines for rapid deployment.

2. AI, Robotics & Physical AI Integration
- Robotics & Autonomous Systems: Custom software and system development for autonomous robotics, motion control, perception systems, and computer vision integration.
- Physical AI & Smart Edge Systems: Deployment of machine learning algorithms onto physical hardware for real-time edge processing, adaptive control, and intelligent sensing.

3. Simulation, Digital Twins & Emulation
- Digital Twin Creation: Development of high-fidelity digital twins connected to system models for real-time monitoring, predictive analytics, and operational optimization.
- Custom Simulators & Emulators: Design and implementation of tailored simulation and emulation environments for rapid virtual testing and hardware-in-the-loop (HIL) verification.

4. Prototyping & Rapid Manufacturing
- In-House Additive Manufacturing Lab: Rapid prototyping, proof-of-concept fabrication, and custom component manufacturing leveraging our dedicated additive lab facilities.
- Hardware-Software Integration: Seamless merging of custom physical prototypes with embedded software and sensor networks.

5. Verification, Validation & Testing Services
- Full-Suite V&V Testing: Rigorous integration testing, system-level validation, custom test fixture design, and automated test execution to ensure quality and compliance.

On the website, areas 0–5 display as **01–06**.
