@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

:root {
  --bg: #eceae5;
  --bg-soft: #f6f4f1;
  --panel: #f5f3f0;
  --panel-strong: #090909;
  --ink: #0d0d0d;
  --muted: #5d5d5d;
  --line: rgba(13, 13, 13, 0.14);
  --white: #ffffff;
  --shadow: rgba(17, 17, 17, 0.08);
  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans: 'Inter', 'Segoe UI', sans-serif;
  --mono: 'SFMono-Regular', 'Consolas', monospace;
  --max-width: 1200px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  line-height: 1.5;
  overflow-x: hidden;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.film-grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  z-index: 99;
}

.container {
  width: min(var(--max-width), calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(236, 234, 229, 0.78);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 78px;
}

.brand-mark {
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}

.brand-dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #d34f4f;
  box-shadow: 0 0 0 6px rgba(211, 79, 79, 0.1);
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.nav-link {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color 0.2s ease, opacity 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--ink);
}

main {
  display: block;
}

.hero {
  position: relative;
  min-height: 72vh;
  display: flex;
  align-items: flex-end;
  background: #111;
  overflow: hidden;
}

.inner-hero {
  min-height: 62vh;
}

.hero-media,
.hero-overlay {
  position: absolute;
  inset: 0;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(110%) brightness(0.55);
}

.hero-overlay {
  background: linear-gradient(180deg, rgba(10,10,10,0.36), rgba(10,10,10,0.78));
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 6rem 0 4rem;
  color: var(--white);
}

.hero-content.narrow {
  max-width: 900px;
}

.hero-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.18);
}

.eyebrow {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero .eyebrow,
.hero .eyebrow.subtle,
.hero .live-indicator,
.hero .kicker {
  color: rgba(255,255,255,0.82);
}

.hero .eyebrow { font-size: 0.68rem; }

.live-indicator {
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.kicker {
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 1rem;
}

.display-title {
  margin: 0;
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(3.1rem, 7vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  max-width: 980px;
}

.lede-home {
  max-width: 600px;
  margin-top: 1.5rem;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.4;
  color: rgba(255,255,255,0.8);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0.95rem 1.4rem;
  border: 1px solid transparent;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--white);
  color: var(--ink);
}

.btn-secondary {
  border-color: rgba(255,255,255,0.4);
  color: var(--white);
  background: transparent;
}

.section-block {
  padding: 5.5rem 0;
}

.section-alt {
  background: var(--bg-soft);
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.2rem;
}

.split-heading {
  display: grid;
  grid-template-columns: 1fr 2.3fr;
  gap: 2rem;
  align-items: start;
}

.section-title,
.page-title {
  margin: 0;
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.section-intro-text,
.header-copy {
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 700px;
  color: var(--muted);
}

.section-intro-text + .section-intro-text {
  margin-top: 1.2rem;
}

.feature-grid,
.feed-grid,
.participacion-grid,
.tool-grid,
.category-grid,
.team-grid {
  display: grid;
  gap: 2rem;
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.info-card {
  background: rgba(255,255,255,0.3);
  border: 1px solid var(--line);
  padding: 1.7rem 1.5rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-index {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
}

.feature-card h3,
.info-card h2 {
  margin: 0 0 0.8rem;
  font-size: 1.5rem;
  line-height: 1.1;
}

.feature-card p,
.info-card p,
.info-card li {
  font-size: 0.95rem;
  color: var(--muted);
}

.feed-grid {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.feed-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  background: #111;
  min-height: 260px;
  grid-column: span 4;
  box-shadow: 0 10px 25px var(--shadow);
}

.feed-card.large-card {
  grid-column: span 6;
  min-height: 420px;
}

.feed-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(110%);
  transition: transform 0.4s ease, filter 0.4s ease;
}

.feed-card:hover img {
  transform: scale(1.03);
  filter: grayscale(0%) contrast(103%);
}

.feed-card-body {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.2rem 1.2rem 1.3rem;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,0.74));
  color: var(--white);
}

.feed-card-body h3 {
  margin: 0.4rem 0 0;
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  line-height: 1.1;
}

.eyebrow.tiny {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.7);
}

.quote-panel-block {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.quote-panel {
  position: relative;
  background: #0d0d0d;
  color: var(--white);
  padding: 4rem 4rem 3rem;
  border: 1px solid var(--line);
}

.quote-mark {
  position: absolute;
  left: 2rem;
  top: -1.5rem;
  font-family: var(--serif);
  font-size: 14rem;
  line-height: 1;
  color: rgba(255,255,255,0.05);
}

.quote-panel blockquote {
  position: relative;
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
  max-width: 760px;
}

.quote-panel blockquote em {
  font-style: italic;
  color: rgba(255,255,255,0.7);
}

.quote-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.76);
}

.quote-meta .line {
  width: 52px;
  height: 1px;
  background: rgba(255,255,255,0.4);
}

.quote-panel .btn {
  margin-top: 2rem;
}

.page-header {
  padding: 5rem 0 2rem;
}

.page-title {
  margin-top: 0.7rem;
}

.project-overview {
  max-width: 1000px;
}

.team-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.team-card {
  position: relative;
  overflow: hidden;
  background: #111;
  min-height: 360px;
  border: 1px solid var(--line);
}

.team-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.team-card .card-meta {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1rem 1.1rem 1.2rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.78));
  color: var(--white);
}

.team-card .card-meta strong {
  font-size: 1rem;
}

.team-card .card-meta span {
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
}

.wide-card {
  grid-column: 1 / -1;
  width: min(60%, 640px);
  margin: 0 auto;
}

.axis-section {
  border-top: 1px solid var(--line);
}

.axis-layout {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

.reverse-layout {
  grid-template-columns: 1fr 1.05fr;
}

.axis-figure {
  position: relative;
  overflow: hidden;
  background: #111;
  border: 1px solid var(--line);
  min-height: 420px;
}

.axis-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(105%);
}

.figure-meta {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.72));
  color: var(--white);
}

.figure-meta span,
.figure-meta small {
  font-family: var(--mono);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.58rem;
}

.axis-copy h2 {
  margin: 0.9rem 0 1.4rem;
  font-family: var(--serif);
  font-size: clamp(2.2rem, 4vw, 3.6rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
  font-weight: 600;
}

.detail-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--line);
  padding-top: 1.2rem;
}

.detail-list li {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 1rem;
  align-items: baseline;
  font-size: 0.96rem;
  color: var(--muted);
}

.detail-list strong {
  font-family: var(--mono);
  color: var(--ink);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.alt-axis {
  background: #e8e3df;
}

.category-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.category-card {
  position: relative;
  display: block;
  min-height: 320px;
  overflow: hidden;
  border: 1px solid var(--line);
  background: #111;
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.72);
}

.category-overlay {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.2rem 1.2rem 1.4rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.78));
  color: var(--white);
}

.category-overlay h2 {
  margin: 0.5rem 0 0.2rem;
  font-size: 1.5rem;
  line-height: 1.1;
}

.category-overlay p {
  margin: 0;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.75);
}

.full-card {
  background: linear-gradient(135deg, #111, #212121);
  display: flex;
  align-items: stretch;
}

.full-card-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 1.4rem;
  color: var(--white);
}

.full-card-inner h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1;
}

.full-card-inner p {
  margin: 0;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.8);
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.7rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--line);
}

.nav-chip {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink);
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.filter-btn {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  padding: 0.65rem 0.8rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--ink);
  color: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.6rem;
}

.gallery-card {
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.28);
  overflow: hidden;
  cursor: pointer;
}

.gallery-card-frame {
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.gallery-card-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(60%);
}

.gallery-card:hover img {
  filter: grayscale(0%);
}

.gallery-card-meta {
  padding: 0.9rem 0.9rem 1rem;
}

.meta-folio {
  display: block;
  margin-bottom: 0.3rem;
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.meta-title {
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.3;
}

.gallery-modal {
  position: fixed;
  inset: 0;
  display: none;
  z-index: 90;
}

.gallery-modal.active {
  display: block;
}

.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.72);
}

.modal-window {
  position: relative;
  z-index: 1;
  width: min(1100px, calc(100% - 2rem));
  margin: 4vh auto;
  background: #f5f3f0;
  border: 1px solid var(--line);
  box-shadow: 0 30px 80px rgba(0,0,0,0.35);
}

.modal-close-btn,
.modal-nav-btn {
  position: absolute;
  top: 1rem;
  z-index: 5;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.7);
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--ink);
}

.modal-close-btn {
  right: 1rem;
  font-size: 2rem;
}

.modal-nav-btn {
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
}

.modal-nav-btn.prev { left: 1rem; }
.modal-nav-btn.next { right: 1rem; }

.modal-body {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
}

.modal-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 560px;
}

.modal-placard-panel {
  padding: 2rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
}

.placard-header {
  margin-bottom: 1.3rem;
}

.placard-label {
  font-family: var(--mono);
  font-size: 0.54rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.placard-title {
  margin: 0.5rem 0 0;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.08;
  font-family: var(--serif);
  letter-spacing: -0.04em;
}

.placard-meta-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 0.8rem 0;
}

.placard-meta-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  font-size: 0.8rem;
}

.placard-meta-label,
.placard-footer span {
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--muted);
}

.placard-description {
  font-size: 0.95rem;
  color: var(--muted);
}

.placard-description em {
  font-style: italic;
}

.placard-footer {
  padding-top: 0.8rem;
  border-top: 1px solid var(--line);
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.schedule-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;
  background: rgba(255,255,255,0.25);
  border: 1px solid var(--line);
  padding: 1.6rem 1.5rem;
}

.schedule-date-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid var(--line);
  padding-right: 1rem;
}

.schedule-day {
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1;
}

.schedule-month {
  margin-top: 0.5rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.schedule-badge {
  display: inline-flex;
  align-self: flex-start;
  margin-top: 1rem;
  padding: 0.35rem 0.55rem;
  background: rgba(0,0,0,0.04);
  border: 1px solid var(--line);
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.schedule-time-location {
  margin-bottom: 0.7rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.schedule-title {
  margin: 0 0 0.6rem;
  font-size: clamp(1.35rem, 2vw, 1.75rem);
  line-height: 1.15;
}

.schedule-desc {
  margin: 0;
  color: var(--muted);
  max-width: 680px;
}

.schedule-action {
  margin-top: 1.2rem;
  padding-top: 0.9rem;
  border-top: 1px dashed rgba(13,13,13,0.2);
}

.btn-register,
.badge-free {
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.btn-register {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--white);
}

.badge-free {
  color: var(--muted);
}

.participacion-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.info-card li {
  position: relative;
  padding-left: 0.9rem;
}

.info-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--ink);
}

.location-box {
  max-width: 980px;
  padding: 2rem 2rem 2.2rem;
  background: rgba(255,255,255,0.25);
  border: 1px solid var(--line);
}

.location-box h3 {
  margin: 0.7rem 0 0.8rem;
  font-size: 1.55rem;
}

.location-grid {
  display: grid;
  gap: 0.75rem;
  color: var(--muted);
}

.location-grid a {
  text-decoration: underline;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: #0b0b0b;
  color: rgba(255,255,255,0.8);
  padding: 1.4rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .split-heading,
  .axis-layout,
  .reverse-layout,
  .modal-body {
    grid-template-columns: 1fr;
  }

  .three-up,
  .team-grid,
  .participacion-grid,
  .category-grid {
    grid-template-columns: 1fr;
  }

  .feed-card,
  .feed-card.large-card {
    grid-column: span 6;
  }

  .brand-mark {
    letter-spacing: 0.12em;
  }
}

@media (max-width: 720px) {
  .site-nav {
    justify-content: flex-start;
  }

  .header-inner {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
  }

  .hero {
    min-height: 60vh;
  }

  .hero-content {
    padding-top: 5rem;
  }

  .feed-card,
  .feed-card.large-card {
    grid-column: span 12;
  }

  .schedule-item {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .schedule-date-col {
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding-right: 0;
    padding-bottom: 0.8rem;
  }

  .quote-panel {
    padding: 3rem 1.25rem 2rem;
  }

  .toolbar {
    align-items: flex-start;
  }
}
