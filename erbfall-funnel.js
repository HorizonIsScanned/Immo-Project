/*! ============================================================
 * IMMOBILIEN ERBFALL-FUNNEL (Immobilienpunkt)
 * Selbst-injizierendes Bundle: Styles + App in EINER Datei.
 * Generiert aus immobilien-konfigurator-v2.html via
 * build-webflow-embed.py — Aenderungen idealerweise im Master,
 * dann neu bauen. Direkte Edits funktionieren aber auch: Das
 * File ist bewusst unminifiziert.
 * Einbindung: siehe README.md (Loader-Snippet fuer Webflow).
 * ============================================================ */

/* ---- Styles (werden beim Laden in <head> injiziert) ---- */
(function () {
  var css = `
/* =========================================================
   IMMOBILIENPUNKT PROPERTY FUNNEL — V2
   Single consolidated design system. No override layers.

   Brand:      Navy #051B4C on pure white
   Type:       Georgia only — Headlines UND UI/Labels/Controls
               (beide Font-Variablen zeigen bewusst auf Georgia;
               Achtung: keine bw-Tokens in Kommentaren VOR dem
               Root-Selektor nennen, sonst verschiebt sich das
               Rename-Mapping des Builds)
   Grid:       4px spacing · radii 10 / 14 / 999
   Motion:     cubic-bezier(.22,1,.36,1), 150–420ms
   ========================================================= */

#bw-property-funnel {
  /* Color */
  --bw-navy: #051B4C;
  --bw-navy-hover: #0A245D;
  --bw-tint: #EEF1F7;         /* selected fill */
  --bw-panel: #F5F7FA;        /* icon circles, illustration panels */
  --bw-muted: #5C677D;        /* secondary text */
  --bw-soft: #8A93A6;         /* placeholders, tertiary */
  --bw-line: #DCE1EA;
  --bw-line-strong: #B9C2D2;
  --bw-track: #E8ECF2;
  --bw-white: #FFFFFF;
  --bw-error: #B42318;

  /* Type: ausschließlich Georgia — beide Variablen bleiben bestehen,
     damit jede bestehende font-family-Zuweisung weiter greift. */
  --bw-serif: Georgia, "Times New Roman", serif;
  --bw-sans: Georgia, "Times New Roman", serif;

  /* Shape + motion */
  --bw-radius: 14px;
  --bw-radius-small: 10px;
  --bw-ease: cubic-bezier(.22, 1, .36, 1);
  --bw-shadow-hover: 0 8px 24px rgba(5, 27, 76, .08);

  width: 100%;
  margin: 0;
  background: var(--bw-white);
  color: var(--bw-navy);
  font-family: var(--bw-sans);
  font-size: 16px;
  line-height: 1.5;
  /* Härtung gegen geerbte Webflow-Stile (z. B. text-align des Hero-Wrappers) */
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: clip;
  container-type: inline-size;
}

#bw-property-funnel *,
#bw-property-funnel *::before,
#bw-property-funnel *::after {
  box-sizing: border-box;
}

#bw-property-funnel button,
#bw-property-funnel input {
  font-family: var(--bw-sans);
  -webkit-tap-highlight-color: transparent;
}

/* =========================================================
   APP SHELL
   ========================================================= */

#bw-property-funnel .bw-app {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: calc(16px + env(safe-area-inset-top, 0px)) 20px 36px;
}

/* =========================================================
   PROGRESS
   ========================================================= */

#bw-property-funnel .bw-progress {
  margin-bottom: 24px;
}

#bw-property-funnel .bw-progress__meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  font-family: var(--bw-sans);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-progress__track {
  height: 2px;
  overflow: hidden;
  border-radius: 99px;
  background: var(--bw-track);
}

#bw-property-funnel .bw-progress__bar {
  height: 100%;
  width: 0%;
  border-radius: inherit;
  background: var(--bw-navy);
  transition: width 420ms var(--bw-ease);
}

/* =========================================================
   SCREEN
   ========================================================= */

#bw-property-funnel .bw-screen {
  animation: bw-enter 320ms var(--bw-ease) both;
}

#bw-property-funnel .bw-screen--no-anim {
  animation: none;
}

@keyframes bw-enter {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* =========================================================
   STEP HEADER
   ========================================================= */

#bw-property-funnel .bw-header {
  margin: 0 0 18px;
}

#bw-property-funnel .bw-header__eyebrow,
#bw-property-funnel .bw-situation-eyebrow {
  margin: 0 0 8px;
  font-family: var(--bw-sans);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-header__title,
#bw-property-funnel .bw-success h1 {
  margin: 0;
  font-family: var(--bw-serif);
  font-size: 26px;
  font-size: clamp(24px, calc(10px + 3.4cqw), 34px);
  line-height: 1.12;
  font-weight: 700;
  letter-spacing: -.02em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-header__description {
  max-width: 560px;
  margin: 10px 0 0;
  font-family: var(--bw-sans);
  font-size: 15px;
  line-height: 1.5;
  color: var(--bw-muted);
}

/* =========================================================
   CHOICE ROWS  (intention, inheritance, condition)
   ========================================================= */

#bw-property-funnel .bw-choice-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

#bw-property-funnel .bw-choice {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 56px;
  padding: 12px 14px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius);
  background: var(--bw-white);
  color: var(--bw-navy);
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -.01em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition:
    border-color 180ms var(--bw-ease),
    background 180ms var(--bw-ease),
    box-shadow 180ms var(--bw-ease),
    transform 180ms var(--bw-ease);
}

#bw-property-funnel .bw-choice:hover {
  border-color: var(--bw-line-strong);
  transform: translateY(-1px);
  box-shadow: var(--bw-shadow-hover);
}

#bw-property-funnel .bw-choice:active {
  transform: translateY(0);
}

/* Ein Fokus-Stil für alle klickbaren Karten und Buttons */
#bw-property-funnel .bw-choice:focus-visible,
#bw-property-funnel .bw-situation-card:focus-visible,
#bw-property-funnel .bw-property-card:focus-visible,
#bw-property-funnel .bw-house-type-card:focus-visible,
#bw-property-funnel .bw-button:focus-visible,
#bw-property-funnel .bw-back:focus-visible {
  outline: 3px solid rgba(5, 27, 76, .22);
  outline-offset: 2px;
}

#bw-property-funnel .bw-choice--selected {
  border-color: var(--bw-navy);
  background: var(--bw-tint);
}

#bw-property-funnel .bw-choice__icon {
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bw-panel);
  color: var(--bw-navy);
  transition: background 180ms var(--bw-ease);
}

#bw-property-funnel .bw-choice__icon svg {
  width: 18px;
  height: 18px;
  display: block;
}

#bw-property-funnel .bw-choice--selected .bw-choice__icon {
  background: var(--bw-white);
}

#bw-property-funnel .bw-choice__label {
  flex: 1;
  min-width: 0;
}

#bw-property-funnel .bw-choice__chevron {
  flex: 0 0 auto;
  color: var(--bw-soft);
  font-size: 20px;
  line-height: 1;
  transition: color 180ms var(--bw-ease), transform 180ms var(--bw-ease);
}

#bw-property-funnel .bw-choice:hover .bw-choice__chevron {
  color: var(--bw-navy);
  transform: translateX(2px);
}

#bw-property-funnel .bw-choice__check {
  flex: 0 0 22px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid var(--bw-line-strong);
  border-radius: 50%;
  color: transparent;
  transition:
    border-color 180ms var(--bw-ease),
    background 180ms var(--bw-ease),
    color 180ms var(--bw-ease);
}

#bw-property-funnel .bw-choice__check svg {
  width: 12px;
  height: 12px;
  display: block;
}

#bw-property-funnel .bw-choice--selected .bw-choice__check {
  border-color: var(--bw-navy);
  background: var(--bw-navy);
  color: var(--bw-white);
}

/* Kompakte Zahlen-Auswahl (Erbenanzahl) */
#bw-property-funnel .bw-count-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

#bw-property-funnel .bw-count {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius-small);
  background: var(--bw-white);
  color: var(--bw-navy);
  font-family: var(--bw-sans);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition:
    border-color 150ms var(--bw-ease),
    background 150ms var(--bw-ease);
}

#bw-property-funnel .bw-count:hover {
  border-color: var(--bw-line-strong);
}

#bw-property-funnel .bw-count--selected {
  border-color: var(--bw-navy);
  background: var(--bw-tint);
}

/* =========================================================
   STEP 1 — EDITORIAL INTRO
   ========================================================= */

#bw-property-funnel .bw-situation-layout {
  display: grid;
  grid-template-columns: 1fr;
}

#bw-property-funnel .bw-situation-hero {
  height: 160px;
  overflow: hidden;
  border-radius: var(--bw-radius);
  background: var(--bw-panel);
}

#bw-property-funnel .bw-situation-hero img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

/* Fallback: ohne konfiguriertes Hero-Bild volle Breite für den Inhalt */
#bw-property-funnel .bw-situation-layout--no-hero {
  grid-template-columns: 1fr !important;
}

#bw-property-funnel .bw-situation-content {
  display: flex;
  flex-direction: column;
  padding: 20px 0 0;
}

#bw-property-funnel .bw-situation-content h1 {
  margin: 0;
  font-family: var(--bw-serif);
  font-size: 26px;
  font-size: clamp(24px, calc(10px + 3.4cqw), 34px);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -.025em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-situation-lead {
  max-width: 560px;
  margin: 10px 0 18px;
  font-family: var(--bw-sans);
  font-size: 15px;
  line-height: 1.55;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-situation-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

#bw-property-funnel .bw-situation-card {
  position: relative;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 76px;
  padding: 12px 14px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius);
  background: var(--bw-white);
  color: var(--bw-navy);
  text-align: left;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition:
    border-color 180ms var(--bw-ease),
    background 180ms var(--bw-ease),
    box-shadow 180ms var(--bw-ease),
    transform 180ms var(--bw-ease);
}

#bw-property-funnel .bw-situation-card:hover {
  border-color: var(--bw-line-strong);
  transform: translateY(-1px);
  box-shadow: var(--bw-shadow-hover);
}

#bw-property-funnel .bw-situation-card--selected {
  border-color: var(--bw-navy);
  background: var(--bw-tint);
}

#bw-property-funnel .bw-situation-card__number {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: var(--bw-panel);
  color: var(--bw-navy);
  transition: background 180ms var(--bw-ease);
}

#bw-property-funnel .bw-situation-card--selected .bw-situation-card__number {
  background: var(--bw-white);
}

#bw-property-funnel .bw-situation-card__number svg {
  width: 20px;
  height: 20px;
  display: block;
}

#bw-property-funnel .bw-situation-card__title {
  display: block;
  font-family: var(--bw-sans);
  font-size: 16px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -.01em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-situation-card__description {
  display: block;
  margin-top: 2px;
  font-family: var(--bw-sans);
  font-size: 13px;
  line-height: 1.45;
  font-weight: 400;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-situation-card__arrow {
  justify-self: end;
  color: var(--bw-soft);
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  transition: color 180ms var(--bw-ease), transform 180ms var(--bw-ease);
}

#bw-property-funnel .bw-situation-card:hover .bw-situation-card__arrow {
  color: var(--bw-navy);
  transform: translateX(2px);
}

#bw-property-funnel .bw-situation-helper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  font-family: var(--bw-sans);
  font-size: 12px;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-situation-helper svg {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
}

/* =========================================================
   PROPERTY TYPE + HOUSE TYPE CARDS
   Mobile: compact horizontal rows.
   Desktop: three-column cards with illustration panel.
   ========================================================= */

#bw-property-funnel .bw-property-options,
#bw-property-funnel .bw-house-type-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

#bw-property-funnel .bw-property-card,
#bw-property-funnel .bw-house-type-card {
  position: relative;
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  align-items: stretch;
  width: 100%;
  min-height: 84px;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius);
  background: var(--bw-white);
  color: var(--bw-navy);
  text-align: left;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition:
    border-color 180ms var(--bw-ease),
    background 180ms var(--bw-ease),
    box-shadow 180ms var(--bw-ease),
    transform 180ms var(--bw-ease);
}

#bw-property-funnel .bw-property-card:hover,
#bw-property-funnel .bw-house-type-card:hover {
  border-color: var(--bw-line-strong);
  transform: translateY(-1px);
  box-shadow: var(--bw-shadow-hover);
}

#bw-property-funnel .bw-property-card--selected,
#bw-property-funnel .bw-house-type-card--selected {
  border-color: var(--bw-navy);
  background: var(--bw-tint);
}

#bw-property-funnel .bw-property-card__visual,
#bw-property-funnel .bw-house-type-card__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 12px;
  background: var(--bw-panel);
  border-right: 1px solid var(--bw-line);
}

#bw-property-funnel .bw-property-card__visual svg,
#bw-property-funnel .bw-house-type-card__visual svg {
  width: 100%;
  height: auto;
  max-height: 68px;
  overflow: visible;
}

#bw-property-funnel .bw-house-type-card__visual img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 68px;
  object-fit: contain;
  border: 0;
}

/* Fallback: ohne konfiguriertes Bild volle Breite für den Kartentext */
#bw-property-funnel .bw-house-type-card--no-visual {
  grid-template-columns: 1fr;
}

#bw-property-funnel .bw-property-card__body,
#bw-property-funnel .bw-house-type-card__body {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 10px 34px 10px 14px;
}

#bw-property-funnel .bw-property-card__title,
#bw-property-funnel .bw-house-type-card__title {
  display: block;
  font-family: var(--bw-sans);
  font-size: 15px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: -.01em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-property-card__description {
  display: block;
  margin-top: 2px;
  padding: 0;
  font-family: var(--bw-sans);
  font-size: 12px;
  line-height: 1.4;
  font-weight: 400;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-property-card__arrow,
#bw-property-funnel .bw-house-type-card__arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--bw-soft);
  font-size: 20px;
  line-height: 1;
  opacity: 1;
  transition: color 180ms var(--bw-ease);
}

#bw-property-funnel .bw-property-card:hover .bw-property-card__arrow,
#bw-property-funnel .bw-house-type-card:hover .bw-house-type-card__arrow {
  color: var(--bw-navy);
}

#bw-property-funnel .bw-house-type-unknown {
  display: inline-block;
  margin-top: 16px;
  padding: 6px 0;
  border: 0;
  background: transparent;
  color: var(--bw-muted);
  font-size: 13px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  transition: color 150ms var(--bw-ease);
}

#bw-property-funnel .bw-house-type-unknown:hover {
  color: var(--bw-navy);
}

/* =========================================================
   BUTTONS + NAVIGATION
   ========================================================= */

#bw-property-funnel .bw-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  padding: 0 22px;
  border: 0;
  border-radius: 999px;
  background: var(--bw-navy);
  color: var(--bw-white);
  font-family: var(--bw-sans);
  font-size: 15px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: .01em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition:
    background 180ms var(--bw-ease),
    transform 180ms var(--bw-ease);
}

#bw-property-funnel .bw-button:hover {
  background: var(--bw-navy-hover);
  transform: translateY(-1px);
}

#bw-property-funnel .bw-button:active {
  transform: scale(.985);
}

#bw-property-funnel .bw-button:disabled {
  opacity: .45;
  cursor: default;
}

#bw-property-funnel .bw-navigation {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 14px;
}

#bw-property-funnel .bw-navigation__right {
  display: flex;
}

#bw-property-funnel .bw-navigation__right .bw-button {
  width: 100%;
}

/* Zurück-Leiste oben: auf jedem Schritt ab dem zweiten sichtbar,
   ohne dass der Nutzer ans Seitenende scrollen muss. */
#bw-property-funnel .bw-topnav {
  display: flex;
  margin: 0 0 10px -12px;
}

#bw-property-funnel .bw-back {
  padding: 8px 12px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--bw-muted);
  font-family: var(--bw-sans);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 150ms var(--bw-ease);
}

#bw-property-funnel .bw-back:hover {
  color: var(--bw-navy);
}

/* =========================================================
   FORMS
   ========================================================= */

#bw-property-funnel .bw-form-card {
  max-width: 640px;
  padding: 20px 16px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius);
  background: var(--bw-white);
}

#bw-property-funnel .bw-form-grid--three,
#bw-property-funnel .bw-location-row--city {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 16px;
}

#bw-property-funnel .bw-field {
  margin-bottom: 14px;
}

#bw-property-funnel .bw-field__label {
  display: block;
  margin-bottom: 6px;
  font-family: var(--bw-sans);
  font-size: 12px;
  line-height: 1.3;
  font-weight: 600;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-field__input {
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius-small);
  background: var(--bw-white);
  color: var(--bw-navy);
  font-family: var(--bw-sans);
  font-size: 16px;
  outline: none;
  appearance: none;
  transition:
    border-color 150ms var(--bw-ease),
    box-shadow 150ms var(--bw-ease);
}

#bw-property-funnel .bw-field__input::placeholder {
  color: var(--bw-soft);
  opacity: 1;
}

#bw-property-funnel .bw-field__input:hover {
  border-color: var(--bw-line-strong);
}

#bw-property-funnel .bw-field__input:focus {
  border-color: var(--bw-navy);
  box-shadow: 0 0 0 3px rgba(5, 27, 76, .08);
}

#bw-property-funnel .bw-field__input--error {
  border-color: var(--bw-error);
}

#bw-property-funnel .bw-field__error {
  margin: 10px 0 0;
  font-family: var(--bw-sans);
  font-size: 14px;
  line-height: 1.45;
  color: var(--bw-error);
}

#bw-property-funnel .bw-field__hint {
  margin-top: 8px;
  font-family: var(--bw-sans);
  font-size: 13px;
  line-height: 1.5;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-section-label {
  margin: 18px 0 10px;
  font-family: var(--bw-sans);
  font-size: 13px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: .02em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-required-note {
  margin-top: 8px;
  font-family: var(--bw-sans);
  font-size: 12px;
  color: var(--bw-muted);
}

/* =========================================================
   ADDRESS AUTOCOMPLETE
   ========================================================= */

#bw-property-funnel .bw-address-autocomplete {
  position: relative;
  z-index: 30;
}

#bw-property-funnel .bw-address-suggestions {
  position: absolute;
  z-index: 100;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 6px;
  border: 1px solid rgba(5, 27, 76, .10);
  border-radius: var(--bw-radius);
  background: rgba(255, 255, 255, .98);
  box-shadow:
    0 20px 50px rgba(5, 27, 76, .12),
    0 3px 12px rgba(5, 27, 76, .06);
  overflow: hidden;
  animation: bw-pop 180ms var(--bw-ease) both;
}

@keyframes bw-pop {
  from { opacity: 0; transform: translateY(-5px) scale(.99); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

#bw-property-funnel .bw-address-suggestion {
  position: relative;
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 62px;
  padding: 9px 10px;
  border: 0;
  border-radius: var(--bw-radius-small);
  background: transparent;
  color: var(--bw-navy);
  font-family: var(--bw-sans);
  text-align: left;
  cursor: pointer;
  transition: background-color 140ms ease;
}

#bw-property-funnel .bw-address-suggestion + .bw-address-suggestion {
  margin-top: 2px;
}

#bw-property-funnel .bw-address-suggestion:hover {
  background: var(--bw-panel);
}

#bw-property-funnel .bw-address-suggestion:active {
  background: var(--bw-tint);
}

#bw-property-funnel .bw-address-suggestion:focus-visible {
  outline: 2px solid rgba(5, 27, 76, .28);
  outline-offset: -2px;
}

#bw-property-funnel .bw-address-suggestion__icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bw-panel);
  color: var(--bw-navy);
}

#bw-property-funnel .bw-address-suggestion__copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

#bw-property-funnel .bw-address-suggestion__main {
  display: block;
  overflow: hidden;
  font-size: 15px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -.005em;
  color: var(--bw-navy);
  text-overflow: ellipsis;
  white-space: nowrap;
}

#bw-property-funnel .bw-address-suggestion__meta {
  display: block;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-address-suggestion__chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bw-soft);
  font-size: 20px;
  line-height: 1;
  transition: color 140ms ease, transform 140ms ease;
}

#bw-property-funnel .bw-address-suggestion:hover .bw-address-suggestion__chevron {
  color: var(--bw-navy);
  transform: translateX(2px);
}

#bw-property-funnel .bw-address-state {
  min-height: 54px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  color: var(--bw-muted);
  font-family: var(--bw-sans);
  font-size: 13px;
  font-weight: 500;
}

#bw-property-funnel .bw-address-state__spinner {
  width: 14px;
  height: 14px;
  border: 1.5px solid var(--bw-line);
  border-top-color: var(--bw-navy);
  border-radius: 50%;
  animation: bw-spin 700ms linear infinite;
}

@keyframes bw-spin {
  to { transform: rotate(360deg); }
}

#bw-property-funnel .bw-address-state--empty {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  min-height: 62px;
}

#bw-property-funnel .bw-address-state--empty small {
  color: var(--bw-soft);
  font-size: 11px;
}

#bw-property-funnel .bw-address-status {
  margin-top: 8px;
  font-family: var(--bw-sans);
  font-size: 12px;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-address-status--success {
  color: var(--bw-muted);
  font-weight: 500;
}

/* =========================================================
   LEAD / CONTACT
   ========================================================= */

#bw-property-funnel .bw-lead-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  align-items: start;
}

/* Report-Vorschau: gestapelte Seiten, Werte als Platzhalter-Balken —
   zeigt das Ergebnis, ohne Zahlen zu behaupten. */
#bw-property-funnel .bw-report {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
}

#bw-property-funnel .bw-report::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 12px;
  right: -7px;
  bottom: -7px;
  border: 1px solid var(--bw-line);
  border-radius: 12px;
  background: var(--bw-panel);
}

#bw-property-funnel .bw-report__page {
  position: relative;
  padding: 18px 16px 16px;
  border: 1px solid var(--bw-line);
  border-radius: 12px;
  background: var(--bw-white);
  box-shadow: 0 18px 44px rgba(5, 27, 76, .12);
}

#bw-property-funnel .bw-report__eyebrow {
  font-size: 9px;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--bw-soft);
}

#bw-property-funnel .bw-report__name {
  margin-top: 3px;
  font-family: var(--bw-serif);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -.01em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-report__address {
  margin-top: 2px;
  overflow: hidden;
  font-size: 11px;
  color: var(--bw-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
}

#bw-property-funnel .bw-report__summary {
  margin-top: 8px;
  font-size: 11px;
  line-height: 1.4;
  font-weight: 500;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-report__badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

#bw-property-funnel .bw-report__badge {
  padding: 3px 9px;
  border-radius: 999px;
  background: var(--bw-tint);
  font-size: 9.5px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-report__note {
  margin-top: 12px;
  font-size: 10.5px;
  line-height: 1.45;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-report__divider {
  height: 1px;
  margin: 12px 0 2px;
  background: var(--bw-line);
}

#bw-property-funnel .bw-report__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 11px;
  font-size: 11px;
  font-weight: 500;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-report__value {
  flex: 0 0 58px;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--bw-tint), var(--bw-line));
}

#bw-property-funnel .bw-report__range {
  position: relative;
  height: 6px;
  margin-top: 7px;
  border-radius: 3px;
  background: var(--bw-track);
}

#bw-property-funnel .bw-report__range::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 22%;
  right: 30%;
  border-radius: inherit;
  background: var(--bw-navy);
}

#bw-property-funnel .bw-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 14px;
  font-family: var(--bw-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-trust span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

#bw-property-funnel .bw-trust span::before {
  content: "✓";
  font-size: 12px;
  color: var(--bw-navy);
}

/* Vorteile unter der Report-Vorschau: vertikal, bündig zur Karte */
#bw-property-funnel .bw-trust--stack {
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 300px;
  margin: 20px auto 0;
}

#bw-property-funnel .bw-field__optional {
  font-weight: 400;
  color: var(--bw-soft);
}

#bw-property-funnel .bw-privacy {
  margin-top: 12px;
  font-family: var(--bw-sans);
  font-size: 12px;
  line-height: 1.55;
  color: var(--bw-soft);
}

/* =========================================================
   SUCCESS
   ========================================================= */

#bw-property-funnel .bw-success {
  max-width: 560px;
  margin: 24px auto 0;
  padding: 32px 24px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius);
  background: var(--bw-white);
  text-align: center;
}

#bw-property-funnel .bw-success__icon {
  width: 52px;
  height: 52px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bw-tint);
  color: var(--bw-navy);
}

#bw-property-funnel .bw-success__icon svg {
  width: 20px;
  height: 20px;
  display: block;
}

#bw-property-funnel .bw-success h1 {
  font-size: 24px;
  font-size: clamp(22px, 4cqw, 28px);
}

#bw-property-funnel .bw-success p {
  margin: 12px auto 0;
  max-width: 420px;
  font-family: var(--bw-sans);
  font-size: 16px;
  line-height: 1.55;
  color: var(--bw-muted);
}

/* =========================================================
   DESKTOP
   ========================================================= */

@container (min-width: 701px) {

  #bw-property-funnel .bw-app {
    padding: 24px 32px 48px;
  }

  #bw-property-funnel .bw-progress {
    margin-bottom: 32px;
  }

  #bw-property-funnel .bw-header {
    margin-bottom: 22px;
  }

  #bw-property-funnel .bw-form-card {
    padding: 24px;
  }

  #bw-property-funnel .bw-form-grid--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  /* Zustand-Auswahl in der Formularkarte: zweispaltig statt vier
     voller Zeilen untereinander */
  #bw-property-funnel .bw-form-card .bw-choice-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  #bw-property-funnel .bw-location-row--city {
    grid-template-columns: .6fr 1.4fr;
  }

  #bw-property-funnel .bw-navigation {
    flex-direction: row;
    justify-content: flex-end;
  }

  #bw-property-funnel .bw-navigation__right {
    justify-content: flex-end;
    width: 100%;
  }

  #bw-property-funnel .bw-navigation__right .bw-button {
    width: auto;
    min-width: 200px;
  }

  /* Property + house-type: three-column cards with panels */
  #bw-property-funnel .bw-property-options,
  #bw-property-funnel .bw-house-type-options {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  #bw-property-funnel .bw-property-card,
  #bw-property-funnel .bw-house-type-card {
    display: flex;
    flex-direction: column;
    min-height: 224px;
  }

  #bw-property-funnel .bw-property-card__visual,
  #bw-property-funnel .bw-house-type-card__visual {
    height: 124px;
    flex: 0 0 124px;
    padding: 14px 14px 0;
    align-items: flex-end;
    border-right: 0;
    border-bottom: 1px solid var(--bw-line);
  }

  #bw-property-funnel .bw-house-type-card__visual {
    align-items: center;
    padding: 14px 20px 8px;
  }

  #bw-property-funnel .bw-property-card__visual svg,
  #bw-property-funnel .bw-house-type-card__visual svg {
    max-height: 108px;
    max-width: 150px;
  }

  #bw-property-funnel .bw-house-type-card__visual img {
    max-height: 100px;
  }

  #bw-property-funnel .bw-property-card__body,
  #bw-property-funnel .bw-house-type-card__body {
    flex: 1;
    justify-content: flex-start;
    padding: 14px 34px 16px 16px;
  }

  #bw-property-funnel .bw-property-card__arrow,
  #bw-property-funnel .bw-house-type-card__arrow {
    top: auto;
    bottom: 16px;
    transform: none;
  }

  /* Report links als Blickfang, Formular rechts als Handlung —
     der Report-Schritt bekommt dafür mehr Containerbreite. */
  #bw-property-funnel .bw-app--report {
    max-width: 940px;
  }

  #bw-property-funnel .bw-lead-layout {
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 36px;
  }
}

/* Step 1 desktop: editorial split layout */
@container (min-width: 960px) {

  #bw-property-funnel .bw-app--situation {
    max-width: 1180px;
  }

  #bw-property-funnel .bw-situation-layout {
    grid-template-columns: minmax(0, 42%) minmax(0, 58%);
    gap: clamp(32px, 4cqw, 64px);
    align-items: center;
  }

  #bw-property-funnel .bw-situation-hero {
    height: 400px;
    min-height: 0;
    border-radius: 18px;
  }

  #bw-property-funnel .bw-situation-content {
    max-width: 600px;
    padding: 12px 0;
  }

  #bw-property-funnel .bw-situation-content h1 {
    font-size: clamp(26px, calc(6px + 2.2cqw), 36px);
    line-height: 1.1;
    letter-spacing: -.03em;
  }

  #bw-property-funnel .bw-situation-lead {
    font-size: 15px;
    margin: 10px 0 18px;
  }

  #bw-property-funnel .bw-situation-card {
    grid-template-columns: 44px minmax(0, 1fr) 18px;
    min-height: 76px;
    padding: 12px 16px;
  }

  #bw-property-funnel .bw-situation-card__number {
    width: 44px;
    height: 44px;
  }

  #bw-property-funnel .bw-situation-card__title {
    font-size: 16px;
  }
}

/* Small phones */
@container (max-width: 380px) {

  #bw-property-funnel .bw-app {
    padding-left: 16px;
    padding-right: 16px;
  }

  #bw-property-funnel .bw-situation-hero {
    height: 140px;
  }

  #bw-property-funnel .bw-property-card,
  #bw-property-funnel .bw-house-type-card {
    grid-template-columns: 78px minmax(0, 1fr);
  }

  /* Ohne Bild bleibt die Karte einspaltig — sonst quetscht die
     78px-Bildspalte den Text zusammen. */
  #bw-property-funnel .bw-house-type-card--no-visual {
    grid-template-columns: 1fr;
  }
}

/* =========================================================
   KOMPAKT-MODUS (window.BW_FUNNEL_COMPACT = true)
   Für schmale Embed-Spalten (z. B. Hero-Karte): Wrapper liefert
   das Padding, Schritt 1 kommt ohne Fortschrittsleiste.
   ========================================================= */

#bw-property-funnel.bw-compact .bw-app {
  max-width: none;
  padding: 4px 2px 20px;
}

#bw-property-funnel.bw-compact .bw-app--situation .bw-progress {
  display: none;
}

#bw-property-funnel.bw-compact .bw-progress {
  margin-bottom: 18px;
}

#bw-property-funnel.bw-compact .bw-header {
  margin-bottom: 14px;
}

#bw-property-funnel.bw-compact .bw-situation-content {
  padding-top: 2px;
}

#bw-property-funnel.bw-compact .bw-situation-lead {
  margin: 8px 0 14px;
}

#bw-property-funnel.bw-compact .bw-situation-card {
  min-height: 64px;
  padding: 10px 12px;
}

#bw-property-funnel.bw-compact .bw-situation-helper {
  margin-top: 12px;
}

#bw-property-funnel.bw-compact .bw-form-card {
  padding: 16px 12px;
}

#bw-property-funnel.bw-compact .bw-choice-grid,
#bw-property-funnel.bw-compact .bw-property-options,
#bw-property-funnel.bw-compact .bw-house-type-options {
  gap: 8px;
}

#bw-property-funnel.bw-compact .bw-lead-layout {
  gap: 16px;
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  #bw-property-funnel .bw-screen,
  #bw-property-funnel .bw-address-suggestions {
    animation: none;
  }

  #bw-property-funnel *,
  #bw-property-funnel *::before,
  #bw-property-funnel *::after {
    transition-duration: 0ms !important;
  }
}
`;
  var tag = document.createElement("style");
  tag.textContent = css;
  document.head.appendChild(tag);
})();

/* ---- App ---- */
(function () {
  "use strict";

  /* =========================================================
     CONFIGURATION
     ========================================================= */

  const SCRIPT_BASE = (function () {
    const s = document.currentScript;
    return s && s.src ? s.src.replace(/\/[^/]*$/, "/") : "";
  })();

  const CONFIG = {
    funnelName: "inheritance_property",

    leadWebhookUrl: "https://script.google.com/macros/s/AKfycbyev7rNvjZRK2xkEAcMOXCULNwHxfSvr8jsICZGKQvng9CMWiZOlr-i8GpRmTdN249Z_g/exec",

    assets: window.BW_FUNNEL_ASSETS || {
      hero: SCRIPT_BASE + "hero-rheinhessen.jpg",
      houseDetached: SCRIPT_BASE + "haus-freistehend.png",
      houseSemiDetached: SCRIPT_BASE + "haus-doppelhaushaelfte.png",
      houseTerraced: SCRIPT_BASE + "haus-reihenhaus.png",
      houseTwoFamily: "",
      houseMultiFamily: ""
    },

    /* Authoritative funnel sequence. Conditional steps are filtered
       dynamically by getActiveSteps(). */
    steps: [
      "situation",
      "timing",
      "property_type",
      "house_type",
      "location",
      "property_details",
      "inheritance",
      "heirs",
      "financing",
      "intention",
      "priority",
      "contact"
    ]
  };

  /* =========================================================
     ICON SET
     ========================================================= */

  function bwIcon(body, viewBox, strokeWidth) {
    return '<svg viewBox="' + (viewBox || "0 0 24 24") +
      '" fill="none" stroke="currentColor" stroke-width="' + (strokeWidth || "1.7") +
      '" stroke-linecap="round" stroke-linejoin="round">' + body + "</svg>";
  }

  const BW_ICONS = {
    check: bwIcon('<path d="M3 12.5l5.2 5L21 5.5"/>'),
    arrow: bwIcon('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    person: bwIcon('<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6"/>'),
    people: bwIcon('<circle cx="9" cy="8" r="3"/><circle cx="16.5" cy="9" r="2.5"/><path d="M3.5 20c.6-3.7 2.5-5.5 5.5-5.5s4.9 1.8 5.5 5.5M14 14.8c2.9-.7 5.1 1.2 6 5.2"/>'),
    help: bwIcon('<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.7 2.7 0 1 1 4.4 2.1c-1.3 1-2 1.5-2 3"/><path d="M12 17.5h.01"/>'),
    tag: bwIcon('<path d="M4 5h8l7 7-7 7-8-8V5Z"/><circle cx="8" cy="9" r="1.2"/>'),
    key: bwIcon('<circle cx="8.5" cy="15.5" r="4"/><path d="m11.5 12.5 7-7M15 7l2 2M17 5l2 2"/>'),
    banknote: bwIcon('<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9h.01M18 15h.01"/>'),
    agree: bwIcon('<path d="m4 12 4.5 4.5L20 5"/>'),
    split: bwIcon('<path d="M5 5v14M5 12h7M12 12l6-6M12 12l6 6"/>'),
    conflict: bwIcon('<path d="M7 4v16M17 4v16M7 8h10M7 16h10"/>'),
    lock: bwIcon('<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>')
  };

  const SITUATION_ICONS = {
    value: bwIcon('<path d="M4 17 10 11l4 4 6-7"/><path d="M15 8h5v5"/>'),
    sell_or_keep: BW_ICONS.people,
    unsure: BW_ICONS.help,
    lock: BW_ICONS.lock
  };

  /* =========================================================
     TRANSITION / SESSION / ATTRIBUTION
     ========================================================= */

  let isTransitioning = false;
  let suppressEnterAnimation = false;
  let lastProgressPct = 0;

  function createSessionId() {
    return "bw_" + Date.now().toString(36) + "_" +
      Math.random().toString(36).substring(2, 10);
  }

  function getAttribution() {
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      utmTerm: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || ""
    };
  }

  /* =========================================================
     CENTRAL STATE
     ========================================================= */

  const state = {
    sessionId: createSessionId(),
    startedAt: Date.now(),
    currentStep: null,
    stepStartedAt: null,

    situation: null,
    timing: null,
    propertyType: null,
    houseType: null,

    address: {
      street: "",
      postalCode: "",
      city: "",
      selectedAddress: null
    },

    property: {
      livingSpace: "",
      plotSize: "",
      yearBuilt: "",
      floor: "",
      condition: null,
      usage: null,
      rentalIncome: "",
      monthlyColdRent: "",
      units: "",
      numberOfUnits: ""
    },

    inheritance: null,

    heirs: {
      count: null,
      agreement: null,
      familyTakeover: null
    },

    finance: {
      financing: null,
      remainingDebt: null,
      encumbrance: null
    },

    intention: null,
    priority: [],

    contact: {
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    },

    attribution: getAttribution()
  };

  /* =========================================================
     TRACKING
     ========================================================= */

  function track(eventName, properties = {}) {
    const payload = {
      event: eventName,
      funnel_name: CONFIG.funnelName,
      session_id: state.sessionId,
      timestamp: new Date().toISOString(),
      ...properties
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }

  /* =========================================================
     STEP HELPERS
     ========================================================= */

  function getActiveSteps() {
    return CONFIG.steps.filter(function (step) {
      if (step === "house_type") return state.propertyType === "house";
      if (step === "heirs") return state.inheritance === "multiple_heirs";
      return true;
    });
  }

  function getStepNumber(step) {
    const index = getActiveSteps().indexOf(step);
    return index >= 0 ? index + 1 : 0;
  }

  function getTotalSteps() {
    return getActiveSteps().length;
  }

  function enterStep(step) {
    if (!step) return;

    state.currentStep = step;
    state.stepStartedAt = Date.now();

    track("step_viewed", {
      step: step,
      step_number: getStepNumber(step),
      total_steps: getTotalSteps()
    });

    render();

    const funnelRoot = document.getElementById("bw-property-funnel");
    if (funnelRoot) {
      const funnelTop = funnelRoot.getBoundingClientRect().top + window.pageYOffset;
      if (window.pageYOffset > funnelTop + 8) {
        window.scrollTo({
          top: Math.max(funnelTop - 8, 0),
          behavior: "auto"
        });
      }
    }
  }

  function exitStep(extra = {}) {
    if (!state.currentStep || !state.stepStartedAt) return;

    const durationSeconds = (Date.now() - state.stepStartedAt) / 1000;

    track("step_completed", {
      step: state.currentStep,
      step_number: getStepNumber(state.currentStep),
      duration_seconds: Math.round(durationSeconds * 10) / 10,
      ...extra
    });

    state.stepStartedAt = null;
  }

  function goNext(data = {}) {
    const activeSteps = getActiveSteps();
    const currentIndex = activeSteps.indexOf(state.currentStep);

    exitStep(data);

    if (currentIndex === -1) {
      enterStep(activeSteps[0]);
      return;
    }

    const nextStep = activeSteps[currentIndex + 1];

    if (!nextStep) {
      return;
    }

    enterStep(nextStep);
  }

  function goBack() {
    if (isTransitioning) return;

    track("back_clicked", { step: state.currentStep });

    const activeSteps = getActiveSteps();
    const currentIndex = activeSteps.indexOf(state.currentStep);

    if (currentIndex <= 0) return;

    enterStep(activeSteps[currentIndex - 1]);
  }

  /* =========================================================
     STATE RESET FOR CONDITIONAL ROUTING
     ========================================================= */

  function clearHouseSpecificState() {
    state.houseType = null;
  }

  function clearHeirsState() {
    state.heirs.count = null;
    state.heirs.agreement = null;
    state.heirs.familyTakeover = null;
  }

  function clearRentalState() {
    state.property.rentalIncome = "";
    state.property.monthlyColdRent = "";
  }

  function clearUnusedPropertyState() {
    const t = state.propertyType;

    if (t !== "apartment") state.property.floor = "";

    if (t !== "house" && t !== "multi_family" && t !== "land") {
      state.property.plotSize = "";
    }

    if (t !== "commercial" && t !== "multi_family") {
      state.property.numberOfUnits = "";
      state.property.units = "";
    }

    if (state.property.usage !== "rented") {
      clearRentalState();
    }
  }

  function selectOption(step, value) {
    if (isTransitioning) return;

    if (step === "propertyType") {
      state.propertyType = value;
      clearHouseSpecificState();
      clearUnusedPropertyState();
    } else if (step === "houseType") {
      state.houseType = value;
    } else if (step === "situation") {
      state.situation = value;
    } else if (step === "timing") {
      state.timing = value;
    } else if (step === "inheritance") {
      state.inheritance = value;
      if (value !== "multiple_heirs") clearHeirsState();
    } else if (step === "intention") {
      state.intention = value;
    } else {
      state[step] = value;
    }

    track("option_selected", {
      step: step,
      answer: value
    });

    if (step === "propertyType" && value !== "house") {
      state.houseType = null;
    }

    if (step === "inheritance" && value !== "multiple_heirs") {
      clearHeirsState();
    }

    suppressEnterAnimation = true;
    render();
    suppressEnterAnimation = false;

    isTransitioning = true;
    window.setTimeout(function () {
      isTransitioning = false;
      goNext({ answer: value });
    }, 180);
  }

  /* =========================================================
     RENDER ROOT
     ========================================================= */

  function render() {
    const root = document.getElementById("bw-property-funnel");
    if (!root) return;

    root.innerHTML =
      '<div class="bw-app ' +
      (state.currentStep === "situation"
        ? "bw-app--situation"
        : state.currentStep === "contact"
          ? "bw-app--report"
          : "") +
      '">' +
      renderTopBack() +
      renderProgress() +
      '<main class="bw-screen' +
      (suppressEnterAnimation ? " bw-screen--no-anim" : "") +
      '">' +
      renderCurrentScreen() +
      "</main></div>";

    const bar = root.querySelector(".bw-progress__bar");
    if (bar) {
      const target = bar.getAttribute("data-target") || "0";
      lastProgressPct = parseFloat(target);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          bar.style.width = target + "%";
        });
      });
    }
  }

  function renderProgress() {
    const current = getStepNumber(state.currentStep);
    const total = getTotalSteps();
    const percentage = total > 0 ? (current / total) * 100 : 0;

    return `
      <div class="bw-progress" aria-label="Funnel-Fortschritt">
        <div class="bw-progress__meta">
          <span>Schritt ${current} von ${total}</span>
          <span>${Math.round(percentage)} %</span>
        </div>
        <div class="bw-progress__track">
          <div class="bw-progress__bar"
               style="width:${lastProgressPct}%"
               data-target="${percentage}"></div>
        </div>
      </div>
    `;
  }

  function renderCurrentScreen() {
    switch (state.currentStep) {
      case "situation": return renderSituationScreen();
      case "timing": return renderTimingScreen();
      case "property_type": return renderPropertyTypeScreen();
      case "house_type": return renderHouseTypeScreen();
      case "location": return renderLocationScreen();
      case "property_details": return renderPropertyDetailsScreen();
      case "inheritance": return renderInheritanceScreen();
      case "heirs": return renderHeirsScreen();
      case "financing": return renderFinancingScreen();
      case "intention": return renderIntentionScreen();
      case "priority": return renderPriorityScreen();
      case "contact": return renderContactScreen();
      default: return renderSituationScreen();
    }
  }

  /* =========================================================
     FORM HELPERS
     ========================================================= */

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function updateField(path, value) {
    const parts = path.split(".");
    let target = state;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!target[parts[i]]) target[parts[i]] = {};
      target = target[parts[i]];
    }

    target[parts[parts.length - 1]] = value;

    if (path === "property.usage" && value !== "rented") {
      clearRentalState();
    }

    if (path === "property.livingSpace" ||
        path === "property.plotSize" ||
        path === "property.yearBuilt" ||
        path === "property.floor" ||
        path === "property.rentalIncome" ||
        path === "property.monthlyColdRent" ||
        path === "property.numberOfUnits" ||
        path === "property.units" ||
        path === "address.postalCode" ||
        path === "address.city") {
      trackField(path, value);
    }
  }

  function trackField(field, value) {
    track("field_updated", {
      field: field,
      has_value: Boolean(String(value || "").trim())
    });
  }

  function renderTopBack() {
    if (getStepNumber(state.currentStep) <= 1) return "";

    return `
      <div class="bw-topnav">
        <button type="button" class="bw-back"
          onclick="window.BWPropertyFunnel.back()"
          aria-label="Zum vorherigen Schritt zurück">
          ← Zurück
        </button>
      </div>
    `;
  }

  function renderContinueButton(label = "Weiter") {
    return `
      <div class="bw-navigation">
        <div class="bw-navigation__right">
          <button type="button" class="bw-button"
            onclick="window.BWPropertyFunnel.continueCurrent()">
            ${label}
          </button>
        </div>
      </div>
    `;
  }

  function choiceTarget(field) {
    switch (field) {
      case "condition": return [state.property, "condition"];
      case "usage": return [state.property, "usage"];
      case "heirsCount": return [state.heirs, "count"];
      case "heirsAgreement": return [state.heirs, "agreement"];
      case "familyTakeover": return [state.heirs, "familyTakeover"];
      case "financing": return [state.finance, "financing"];
      case "remainingDebt": return [state.finance, "remainingDebt"];
      case "encumbrance": return [state.finance, "encumbrance"];
      default: return null;
    }
  }

  function getChoiceValue(field) {
    const target = choiceTarget(field);
    return target ? target[0][target[1]] : state[field];
  }

  function setChoice(field, value) {
    if (field === "priority") {
      const list = state.priority;

      if (value === "unknown") {
        state.priority = list.includes("unknown") ? [] : ["unknown"];
      } else {
        const index = list.indexOf(value);

        if (index >= 0) {
          list.splice(index, 1);
        } else {
          list.push(value);
          const unknownIndex = list.indexOf("unknown");
          if (unknownIndex >= 0) list.splice(unknownIndex, 1);
        }
      }

      track("option_selected", {
        step: state.currentStep,
        answer: value,
        multi_select: true
      });

      suppressEnterAnimation = true;
      render();
      suppressEnterAnimation = false;
      return;
    }

    const target = choiceTarget(field);

    if (!target) {
      setNestedChoice(field, value);
      return;
    }

    target[0][target[1]] = value;

    if (field === "financing" && value !== "yes") {
      state.finance.remainingDebt = null;
    }

    if (field === "usage" && value !== "rented") {
      clearRentalState();
    }

    track("option_selected", {
      step: state.currentStep,
      answer: value
    });

    suppressEnterAnimation = true;
    render();
    suppressEnterAnimation = false;
  }

  function setNestedChoice(field, value) {
    if (field === "timing") state.timing = value;
    else if (field === "propertyType") state.propertyType = value;
    else if (field === "intention") state.intention = value;
  }

  /* =========================================================
     SITUATION
     ========================================================= */

  function renderSituationScreen() {
    const heroImage = window.BW_FUNNEL_COMPACT ? "" : CONFIG.assets.hero;
    const selected = state.situation;

    return `
      <div class="bw-situation-layout${heroImage ? "" : " bw-situation-layout--no-hero"}">
        ${heroImage ? `
          <div class="bw-situation-hero" aria-hidden="true">
            <img src="${esc(heroImage)}" alt="">
          </div>
        ` : ""}

        <section class="bw-situation-content">
          <h1>Wobei können wir Ihnen gerade helfen?</h1>

          <div class="bw-situation-options"
               role="group"
               aria-label="Wobei können wir Ihnen helfen?"
               style="margin-top:18px">

            ${renderSituationCard(
              "value",
              "↗ Wert der Immobilie",
              "Was ist sie wert?",
              selected === "value"
            )}

            ${renderSituationCard(
              "together",
              "⚖ Gemeinsam geerbt",
              "Was ist jetzt sinnvoll?",
              selected === "together"
            )}

            ${renderSituationCard(
              "undecided",
              "◇ Noch keine Entscheidung",
              "Verkaufen · behalten · vermieten",
              selected === "undecided"
            )}
          </div>

          <div class="bw-situation-helper">
            ${SITUATION_ICONS.lock}
            <span>Ihre Angaben werden vertraulich behandelt.</span>
          </div>
        </section>
      </div>
    `;
  }

  function renderSituationCard(value, title, description, isSelected) {
    const icons = {
      value: SITUATION_ICONS.value,
      together: SITUATION_ICONS.sell_or_keep,
      undecided: SITUATION_ICONS.unsure
    };

    return `
      <button type="button"
        class="bw-situation-card ${isSelected ? "bw-situation-card--selected" : ""}"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('situation','${value}')">

        <span class="bw-situation-card__number" aria-hidden="true">
          ${icons[value]}
        </span>

        <span>
          <span class="bw-situation-card__title">${esc(title)}</span>
          <span class="bw-situation-card__description">${esc(description)}</span>
        </span>

        <span class="bw-situation-card__arrow" aria-hidden="true">›</span>
      </button>
    `;
  }

  /* =========================================================
     TIMING
     ========================================================= */

  function renderTimingScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Situation</div>
        <h1 class="bw-header__title">Wie lange ist der Erbfall ungefähr her?</h1>
      </div>

      <div class="bw-choice-grid" role="group" aria-label="Zeitpunkt des Erbfalls">
        ${renderChoice("timing", "lt_6w", "Weniger als 6 Wochen")}
        ${renderChoice("timing", "w6_m6", "6 Wochen bis 6 Monate")}
        ${renderChoice("timing", "m6_y2", "6 Monate bis 2 Jahre")}
        ${renderChoice("timing", "gt_2y", "Mehr als 2 Jahre")}
        ${renderChoice("timing", "unknown", "Ich weiß es nicht genau")}
      </div>
    `;
  }

  /* =========================================================
     PROPERTY TYPE / HOUSE TYPE
     ========================================================= */

  function renderPropertyTypeScreen() {
    const selected = state.propertyType;

    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Immobilie</div>
        <h1 class="bw-header__title">Um welche Immobilie geht es?</h1>
      </div>

      <div class="bw-property-options" role="group" aria-label="Immobilientyp">
        ${renderPropertyCard("house", "Haus", "Ein- oder Mehrfamilienhaus", selected === "house")}
        ${renderPropertyCard("apartment", "Eigentumswohnung", "", selected === "apartment")}
        ${renderPropertyCard("multi_family", "Mehrfamilienhaus", "", selected === "multi_family")}
        ${renderPropertyCard("commercial", "Gewerbeimmobilie", "", selected === "commercial")}
        ${renderPropertyCard("land", "Grundstück", "", selected === "land")}
      </div>
    `;
  }

  const PROPERTY_VISUALS = {
    house: function () {
      return bwIcon('<path d="m3 11 9-7 9 7v9H3z"/><path d="M9 20v-5h6v5"/>', "0 0 24 24", "1.5");
    },
    apartment: function () {
      return bwIcon('<path d="M5 21V4h14v17M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"/>', "0 0 24 24", "1.5");
    },
    multi_family: function () {
      return bwIcon('<path d="M4 21V5h8v16M12 21V3h8v18M7 8h2M15 7h2M7 12h2M15 11h2M7 16h2M15 15h2"/>', "0 0 24 24", "1.5");
    },
    commercial: function () {
      return bwIcon('<path d="M3 21h18M5 21V8l7-4 7 4v13M8 12h2M14 12h2M8 16h2M14 16h2"/>', "0 0 24 24", "1.5");
    },
    land: function () {
      return bwIcon('<path d="M4 19 9 7l5 7 3-5 3 10M3 20h18"/>', "0 0 24 24", "1.5");
    }
  };

  function renderPropertyCard(value, title, description, isSelected) {
    return `
      <button type="button"
        class="bw-property-card ${isSelected ? "bw-property-card--selected" : ""}"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('propertyType','${value}')">

        <span class="bw-property-card__visual" aria-hidden="true">
          ${PROPERTY_VISUALS[value]()}
        </span>

        <span class="bw-property-card__body">
          <span class="bw-property-card__title">${esc(title)}</span>
          ${description ? `<span class="bw-property-card__description">${esc(description)}</span>` : ""}
        </span>

        <span class="bw-property-card__arrow" aria-hidden="true">›</span>
      </button>
    `;
  }

  const HOUSE_TYPE_IMAGES = {
    detached: CONFIG.assets.houseDetached,
    semi_detached: CONFIG.assets.houseSemiDetached,
    terraced: CONFIG.assets.houseTerraced,
    two_family: CONFIG.assets.houseTwoFamily,
    multi_family: CONFIG.assets.houseMultiFamily
  };

  function renderHouseIllustration() {
    return bwIcon(
      '<path d="m3 11 9-7 9 7v9H3z"/><path d="M9 20v-5h6v5"/><path d="M7 11h2M15 11h2"/>',
      "0 0 24 24",
      "1.5"
    );
  }

  function renderHouseTypeScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Immobilie</div>
        <h1 class="bw-header__title">Welcher Haustyp ist es?</h1>
      </div>

      <div class="bw-house-type-options" role="group" aria-label="Haustyp">
        ${renderHouseTypeCard("detached", "Einfamilienhaus", "Freistehendes Haus", state.houseType === "detached")}
        ${renderHouseTypeCard("terraced", "Reihenhaus", "Haus in einer Reihenhauszeile", state.houseType === "terraced")}
        ${renderHouseTypeCard("semi_detached", "Doppelhaushälfte", "Eine von zwei verbundenen Haushälften", state.houseType === "semi_detached")}
        ${renderHouseTypeCard("two_family", "Zweifamilienhaus", "Haus mit zwei Wohneinheiten", state.houseType === "two_family")}
        ${renderHouseTypeCard("multi_family", "Mehrfamilienhaus", "Haus mit mehreren Wohneinheiten", state.houseType === "multi_family")}
      </div>

      <button type="button"
        class="bw-house-type-unknown"
        onclick="window.BWPropertyFunnel.selectOption('houseType','unknown')">
        Weiß ich nicht
      </button>
    `;
  }

  function renderHouseTypeCard(value, title, description, isSelected) {
    const visual = HOUSE_TYPE_IMAGES[value]
      ? `<img src="${esc(HOUSE_TYPE_IMAGES[value])}" alt="">`
      : renderHouseIllustration();

    return `
      <button type="button"
        class="bw-house-type-card ${isSelected ? "bw-house-type-card--selected" : ""}"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('houseType','${value}')">

        <span class="bw-house-type-card__visual" aria-hidden="true">${visual}</span>

        <span class="bw-house-type-card__body">
          <span class="bw-house-type-card__title">${esc(title)}</span>
          <span class="bw-property-card__description">${esc(description)}</span>
        </span>

        <span class="bw-house-type-card__arrow" aria-hidden="true">›</span>
      </button>
    `;
  }

  /* =========================================================
     LOCATION
     ========================================================= */

  function renderLocationScreen() {
    const a = state.address;

    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Die Lage</div>
        <h1 class="bw-header__title">Wo befindet sich die Immobilie?</h1>
        <p class="bw-header__description">Damit können wir Ihre Immobilie genauer einschätzen.</p>
      </div>

      <div class="bw-form-card">
        <div class="bw-field bw-address-autocomplete">
          <label class="bw-field__label" for="bw-street">Straße + Hausnummer</label>
          <input id="bw-street"
            class="bw-field__input"
            autocomplete="street-address"
            value="${esc(a.street)}"
            placeholder="z. B. Goethestraße 12"
            oninput="window.BWPropertyFunnel.handleStreetInput(this.value)"
            onblur="window.BWPropertyFunnel.trackField('address.street', this.value)">

          <div id="bw-address-suggestions"
               class="bw-address-suggestions"
               hidden
               role="listbox"
               aria-label="Adressvorschläge"></div>

          <div id="bw-address-status" class="bw-address-status" aria-live="polite"></div>
        </div>

        <div class="bw-location-row--city">
          <div class="bw-field">
            <label class="bw-field__label" for="bw-postal">PLZ</label>
            <input id="bw-postal"
              class="bw-field__input"
              inputmode="numeric"
              maxlength="5"
              autocomplete="postal-code"
              value="${esc(a.postalCode)}"
              placeholder="z. B. 55218"
              oninput="window.BWPropertyFunnel.updateField('address.postalCode', this.value.replace(/[^0-9]/g,'').slice(0,5))"
              onblur="window.BWPropertyFunnel.trackField('address.postalCode', this.value)">
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-city">Ort</label>
            <input id="bw-city"
              class="bw-field__input"
              autocomplete="address-level2"
              value="${esc(a.city)}"
              placeholder="z. B. Mainz"
              oninput="window.BWPropertyFunnel.updateField('address.city', this.value)"
              onblur="window.BWPropertyFunnel.trackField('address.city', this.value)">
          </div>
        </div>

        <div class="bw-required-note">
          Je genauer die Adresse, desto genauer können wir die Immobilie einschätzen.
        </div>

        <div id="bw-validation-error" class="bw-field__error" style="display:none" aria-live="polite"></div>
      </div>

      ${renderContinueButton()}
    `;
  }

  /* =========================================================
     PROPERTY DETAILS
     ========================================================= */

  function renderPropertyDetailsScreen() {
    const p = state.property;
    const t = state.propertyType;
    const isLand = t === "land";
    const isApartment = t === "apartment";
    const isCommercial = t === "commercial";
    const isMultiFamily = t === "multi_family" || (t === "house" && state.houseType === "multi_family");

    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Immobilie</div>
        <h1 class="bw-header__title">Ein paar Angaben zu Ihrer Immobilie</h1>
        <p class="bw-header__description">Damit können wir Ihre Immobilie genauer einschätzen.</p>
      </div>

      <div class="bw-form-card">
        <div class="bw-form-grid--three">
          ${!isLand ? `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-living">${isCommercial ? "Nutzfläche" : "Wohnfläche / Nutzfläche"}</label>
              <input id="bw-living"
                class="bw-field__input"
                inputmode="decimal"
                placeholder="${isCommercial ? "z. B. 400 m²" : "z. B. 150 m²"}"
                value="${esc(p.livingSpace)}"
                oninput="window.BWPropertyFunnel.updateField('property.livingSpace', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.livingSpace', this.value)">
            </div>
          ` : `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-plot">Grundstücksgröße</label>
              <input id="bw-plot"
                class="bw-field__input"
                inputmode="decimal"
                placeholder="z. B. 600 m²"
                value="${esc(p.plotSize)}"
                oninput="window.BWPropertyFunnel.updateField('property.plotSize', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.plotSize', this.value)">
            </div>
          `}

          ${isApartment ? `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-floor">Etage</label>
              <input id="bw-floor"
                class="bw-field__input"
                inputmode="text"
                placeholder="z. B. 2. OG"
                value="${esc(p.floor)}"
                oninput="window.BWPropertyFunnel.updateField('property.floor', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.floor', this.value)">
            </div>
          ` : ""}

          ${!isLand ? `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-year">Baujahr</label>
              <input id="bw-year"
                class="bw-field__input"
                inputmode="numeric"
                maxlength="4"
                placeholder="z. B. 1980"
                value="${esc(p.yearBuilt)}"
                oninput="window.BWPropertyFunnel.updateField('property.yearBuilt', this.value.replace(/[^0-9]/g,'').slice(0,4))"
                onblur="window.BWPropertyFunnel.trackField('property.yearBuilt', this.value)">
            </div>
          ` : ""}

          ${(t === "house" || t === "multi_family") && !isLand ? `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-plot">Grundstücksgröße</label>
              <input id="bw-plot"
                class="bw-field__input"
                inputmode="decimal"
                placeholder="z. B. 600 m²"
                value="${esc(p.plotSize)}"
                oninput="window.BWPropertyFunnel.updateField('property.plotSize', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.plotSize', this.value)">
            </div>
          ` : ""}

          ${isCommercial ? `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-plot-commercial">Grundstücksgröße <span class="bw-field__optional">(optional)</span></label>
              <input id="bw-plot-commercial"
                class="bw-field__input"
                inputmode="decimal"
                placeholder="z. B. 800 m²"
                value="${esc(p.plotSize)}"
                oninput="window.BWPropertyFunnel.updateField('property.plotSize', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.plotSize', this.value)">
            </div>
          ` : ""}
        </div>

        ${isLand ? "" : `
          <div class="bw-section-label">Wie ist der Zustand?</div>
          <div class="bw-choice-grid" role="group" aria-label="Zustand">
            ${renderChoice("condition", "very_good", "Sehr gut")}
            ${renderChoice("condition", "good", "Gut")}
            ${renderChoice("condition", "renovation_needed", "Renovierungsbedürftig")}
            ${renderChoice("condition", "refurbishment_needed", "Sanierungsbedürftig")}
          </div>
        `}

        <div class="bw-section-label">Wie wird die Immobilie aktuell genutzt?</div>
        <div class="bw-choice-grid" role="group" aria-label="Aktuelle Nutzung">
          ${renderChoice("usage", "self_used", "Selbst genutzt")}
          ${renderChoice("usage", "family_used", "Von einem Familienmitglied bewohnt")}
          ${renderChoice("usage", "rented", "Vermietet")}
          ${renderChoice("usage", "vacant", "Leerstehend")}
          ${renderChoice("usage", "unknown", "Weiß ich nicht")}
        </div>

        ${p.usage === "rented" ? `
          <div class="bw-field" style="margin-top:18px">
            <label class="bw-field__label" for="bw-rent">Wie hoch ist die monatliche Kaltmiete ungefähr?</label>
            <input id="bw-rent"
              class="bw-field__input"
              inputmode="decimal"
              placeholder="z. B. 1.500 €"
              value="${esc(p.rentalIncome || p.monthlyColdRent)}"
              oninput="window.BWPropertyFunnel.updateField('property.rentalIncome', this.value);window.BWPropertyFunnel.updateField('property.monthlyColdRent', this.value)"
              onblur="window.BWPropertyFunnel.trackField('property.rentalIncome', this.value)">
          </div>
        ` : ""}

        ${isMultiFamily ? `
          <div class="bw-field" style="margin-top:18px">
            <label class="bw-field__label" for="bw-units">Wie viele Wohneinheiten hat das Gebäude?</label>
            <input id="bw-units"
              class="bw-field__input"
              inputmode="numeric"
              placeholder="z. B. 6"
              value="${esc(p.numberOfUnits || p.units)}"
              oninput="window.BWPropertyFunnel.updateField('property.numberOfUnits', this.value.replace(/[^0-9]/g,'').slice(0,3));window.BWPropertyFunnel.updateField('property.units', this.value.replace(/[^0-9]/g,'').slice(0,3))"
              onblur="window.BWPropertyFunnel.trackField('property.numberOfUnits', this.value)">
          </div>
        ` : ""}

        <div id="bw-validation-error" class="bw-field__error" style="display:none" aria-live="polite"></div>
      </div>

      ${renderContinueButton()}
    `;
  }

  function renderChoice(field, value, label) {
    const current = getChoiceValue(field);
    const selected = Array.isArray(current)
      ? current.includes(value)
      : current === value;

    return `
      <button type="button"
        class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.setChoice('${field}','${value}')">
        <span class="bw-choice__label">${esc(label)}</span>
        <span class="bw-choice__check" aria-hidden="true">${BW_ICONS.check}</span>
      </button>
    `;
  }

  /* =========================================================
     INHERITANCE
     ========================================================= */

  function renderInheritanceScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Situation</div>
        <h1 class="bw-header__title">Wie ist die Erbsituation aktuell?</h1>
      </div>

      <div class="bw-choice-grid" role="group" aria-label="Erbsituation">
        ${renderIconChoice("inheritance", "sole_heir", "person", "Ich bin alleiniger Erbe")}
        ${renderIconChoice("inheritance", "multiple_heirs", "people", "Wir sind mehrere Erben")}
        ${renderIconChoice("inheritance", "unclear", "help", "Noch nicht vollständig geklärt")}
      </div>
    `;
  }

  function renderIconChoice(field, value, icon, label) {
    const current = getChoiceValue(field);
    const selected = current === value;

    return `
      <button type="button"
        class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.selectOption('${field}','${value}')">
        <span class="bw-choice__icon" aria-hidden="true">${BW_ICONS[icon] || ""}</span>
        <span class="bw-choice__label">${esc(label)}</span>
        <span class="bw-choice__check" aria-hidden="true">${BW_ICONS.check}</span>
      </button>
    `;
  }

  /* =========================================================
     HEIRS
     ========================================================= */

  function renderHeirsScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Erbengemeinschaft</div>
        <h1 class="bw-header__title">Erbengemeinschaft</h1>
      </div>

      <div class="bw-form-card">
        <div class="bw-section-label" style="margin-top:0">Wie viele Erben gibt es ungefähr?</div>

        <div class="bw-count-row" role="group" aria-label="Anzahl der Erben">
          ${renderCountChoice("2", "2", "2 Erben")}
          ${renderCountChoice("3", "3", "3 Erben")}
          ${renderCountChoice("4", "4", "4 Erben")}
          ${renderCountChoice("5plus", "5+", "5 oder mehr Erben")}
        </div>

        <div class="bw-section-label">Wie sind sich die Erben aktuell einig?</div>
        <div class="bw-choice-grid" role="group" aria-label="Einigkeit der Erben">
          ${renderChoice("heirsAgreement", "agreed", "Wir sind uns grundsätzlich einig")}
          ${renderChoice("heirsAgreement", "undecided", "Wir haben noch keine Entscheidung getroffen")}
          ${renderChoice("heirsAgreement", "different", "Wir haben unterschiedliche Vorstellungen")}
          ${renderChoice("heirsAgreement", "dispute", "Es gibt bereits Streit")}
        </div>

        <div class="bw-section-label">Möchte jemand aus der Familie die Immobilie möglicherweise selbst übernehmen?</div>
        <div class="bw-choice-grid" role="group" aria-label="Familienübernahme">
          ${renderChoice("familyTakeover", "yes", "Ja")}
          ${renderChoice("familyTakeover", "no", "Nein")}
          ${renderChoice("familyTakeover", "unknown", "Noch unklar")}
        </div>

        <div id="bw-validation-error" class="bw-field__error" style="display:none" aria-live="polite"></div>
      </div>

      ${renderContinueButton()}
    `;
  }

  function renderCountChoice(value, label, ariaLabel) {
    const selected = state.heirs.count === value;

    return `
      <button type="button"
        class="bw-count ${selected ? "bw-count--selected" : ""}"
        aria-pressed="${selected}"
        aria-label="${esc(ariaLabel)}"
        onclick="window.BWPropertyFunnel.setChoice('heirsCount','${value}')">
        ${esc(label)}
      </button>
    `;
  }

  /* =========================================================
     FINANCING
     ========================================================= */

  function renderFinancingScreen() {
    const f = state.finance;

    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Finanzierung</div>
        <h1 class="bw-header__title">Finanzierung &amp; Belastungen</h1>
      </div>

      <div class="bw-form-card">
        <div class="bw-section-label" style="margin-top:0">
          Gibt es noch eine Finanzierung für die Immobilie?
        </div>

        <div class="bw-choice-grid" role="group" aria-label="Finanzierung">
          ${renderChoice("financing", "no", "Nein")}
          ${renderChoice("financing", "yes", "Ja")}
          ${renderChoice("financing", "unknown", "Weiß ich nicht")}
        </div>

        ${f.financing === "yes" ? `
          <div class="bw-section-label">Wie hoch ist die ungefähre Restschuld?</div>
          <div class="bw-choice-grid" role="group" aria-label="Restschuld">
            ${renderChoice("remainingDebt", "lt_100k", "Unter 100.000 €")}
            ${renderChoice("remainingDebt", "k100_250", "100.000–250.000 €")}
            ${renderChoice("remainingDebt", "k250_500", "250.000–500.000 €")}
            ${renderChoice("remainingDebt", "gt_500k", "Über 500.000 €")}
            ${renderChoice("remainingDebt", "unknown", "Weiß ich nicht")}
          </div>
        ` : ""}

        <div class="bw-section-label">Gibt es besondere Belastungen oder Rechte?</div>
        <div class="bw-choice-grid" role="group" aria-label="Belastungen oder Rechte">
          ${renderChoice("encumbrance", "none", "Keine")}
          ${renderChoice("encumbrance", "grundschuld", "Grundschuld")}
          ${renderChoice("encumbrance", "wohnrecht", "Wohnrecht")}
          ${renderChoice("encumbrance", "niessbrauch", "Nießbrauch")}
          ${renderChoice("encumbrance", "other", "Sonstige")}
          ${renderChoice("encumbrance", "unknown", "Weiß ich nicht")}
        </div>

        <div id="bw-validation-error" class="bw-field__error" style="display:none" aria-live="polite"></div>
      </div>

      ${renderContinueButton()}
    `;
  }

  /* =========================================================
     INTENTION
     ========================================================= */

  function renderIntentionScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Entscheidung</div>
        <h1 class="bw-header__title">Was möchten Sie aktuell mit der Immobilie machen?</h1>
      </div>

      <div class="bw-choice-grid" role="group" aria-label="Aktuelle Absicht">
        ${renderSimpleChoice("intention", "sell", "tag", "Verkaufen")}
        ${renderSimpleChoice("intention", "keep", "key", "Behalten")}
        ${renderSimpleChoice("intention", "rent", "banknote", "Vermieten")}
        ${renderSimpleChoice("intention", "family_transfer", "people", "Innerhalb der Familie übernehmen")}
        ${renderSimpleChoice("intention", "undecided", "help", "Noch nicht entschieden")}
      </div>
    `;
  }

  function renderSimpleChoice(field, value, icon, label) {
    const selected = state[field] === value;

    return `
      <button type="button"
        class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.selectOption('${field}','${value}')">
        <span class="bw-choice__icon" aria-hidden="true">${BW_ICONS[icon] || ""}</span>
        <span class="bw-choice__label">${esc(label)}</span>
        <span class="bw-choice__chevron" aria-hidden="true">›</span>
      </button>
    `;
  }

  /* =========================================================
     PRIORITY
     ========================================================= */

  function renderPriorityScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Prioritäten</div>
        <h1 class="bw-header__title">Was ist Ihnen bei der Entscheidung besonders wichtig?</h1>
        <p class="bw-header__description">Sie können mehrere Punkte auswählen.</p>
      </div>

      <div class="bw-choice-grid" role="group" aria-label="Prioritäten">
        ${renderChoice("priority", "price", "Einen möglichst guten Preis erzielen")}
        ${renderChoice("priority", "speed", "Schnell eine Lösung finden")}
        ${renderChoice("priority", "effort", "Möglichst wenig Aufwand haben")}
        ${renderChoice("priority", "family", "Die Immobilie in der Familie behalten")}
        ${renderChoice("priority", "costs", "Laufende Kosten vermeiden")}
        ${renderChoice("priority", "wealth", "Langfristig Vermögen aufbauen")}
        ${renderChoice("priority", "fairness", "Eine faire Lösung für alle Erben finden")}
        ${renderChoice("priority", "unknown", "Ich weiß es noch nicht")}
      </div>

      <div id="bw-validation-error" class="bw-field__error" style="display:none" aria-live="polite"></div>
      ${renderContinueButton()}
    `;
  }

  /* =========================================================
     REPORT / CONTACT
     ========================================================= */

  function renderContactScreen() {
    const c = state.contact;
    const a = state.address;
    const assessment = computeAssessment();

    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre persönliche Einschätzung</div>
        <h1 class="bw-header__title">Ihre persönliche Einschätzung ist jetzt vorbereitet.</h1>
        <p class="bw-header__description">
          Wir haben Ihre Angaben ausgewertet. Ergänzen Sie noch Ihre Kontaktdaten, um den persönlichen Report kostenlos zu erhalten.
        </p>
      </div>

      <div class="bw-lead-layout">
        <div>
          <div class="bw-report" aria-hidden="true">
            <div class="bw-report__page">
              <div class="bw-report__eyebrow">Persönlicher Report</div>
              <div class="bw-report__name">Immobilien &amp; Erbfall</div>
              <div class="bw-report__address">
                ${esc([a.street, a.city].filter(Boolean).join(", ") || "Ihre Immobilie")}
              </div>

              <div class="bw-report__summary">${esc(bwSummary())}</div>

              <div class="bw-report__badges">
                <span class="bw-report__badge">Entscheidungsdruck: ${esc(assessment.pressure)}</span>
                <span class="bw-report__badge">Komplexität: ${esc(assessment.complexity)}</span>
              </div>

              <div class="bw-report__divider"></div>

              <div class="bw-report__row">
                <span>Immobilienwert</span>
                <span class="bw-report__value"></span>
              </div>

              <div class="bw-report__row">
                <span>Ihre Situation</span>
                <span class="bw-report__value"></span>
              </div>

              <div class="bw-report__row">
                <span>Finanzielle Faktoren</span>
                <span class="bw-report__value"></span>
              </div>

              ${state.inheritance === "multiple_heirs" ? `
                <div class="bw-report__row">
                  <span>Erbengemeinschaft</span>
                  <span class="bw-report__value"></span>
                </div>
              ` : ""}

              <div class="bw-report__row">
                <span>Nächste sinnvolle Schritte</span>
                <span class="bw-report__value"></span>
              </div>

              <div class="bw-report__note">
                Erste Empfehlung: ${esc(assessment.recommendedNextStep)}
              </div>
            </div>
          </div>

          <div class="bw-trust bw-trust--stack">
            <span>Immobilienwert &amp; erste Wertspanne</span>
            <span>Ihre Situation &amp; finanzielle Faktoren</span>
            <span>Nächste sinnvolle Schritte</span>
          </div>
        </div>

        <div class="bw-form-card">
          <div class="bw-section-label" style="margin-top:0">
            Wohin dürfen wir Ihren persönlichen Report senden?
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-email">E-Mail-Adresse</label>
            <input id="bw-email"
              class="bw-field__input"
              type="email"
              autocomplete="email"
              placeholder="max@beispiel.de"
              value="${esc(c.email)}"
              oninput="window.BWPropertyFunnel.updateField('contact.email', this.value)"
              onblur="window.BWPropertyFunnel.trackField('contact.email', this.value)">
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-phone">Telefonnummer</label>
            <input id="bw-phone"
              class="bw-field__input"
              type="tel"
              autocomplete="tel"
              placeholder="0176 12345678"
              value="${esc(c.phone)}"
              oninput="window.BWPropertyFunnel.updateField('contact.phone', this.value)"
              onblur="window.BWPropertyFunnel.trackField('contact.phone', this.value)">
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-first-name">Vorname <span class="bw-field__optional">(optional)</span></label>
            <input id="bw-first-name"
              class="bw-field__input"
              autocomplete="given-name"
              placeholder="Max"
              value="${esc(c.firstName)}"
              oninput="window.BWPropertyFunnel.updateField('contact.firstName', this.value)"
              onblur="window.BWPropertyFunnel.trackField('contact.firstName', this.value)">
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-last-name">Nachname <span class="bw-field__optional">(optional)</span></label>
            <input id="bw-last-name"
              class="bw-field__input"
              autocomplete="family-name"
              placeholder="Mustermann"
              value="${esc(c.lastName)}"
              oninput="window.BWPropertyFunnel.updateField('contact.lastName', this.value)"
              onblur="window.BWPropertyFunnel.trackField('contact.lastName', this.value)">
          </div>

          <div id="bw-contact-error" class="bw-field__error" style="display:none" aria-live="polite"></div>

          <div style="position:absolute;left:-9999px;top:auto;height:1px;width:1px;overflow:hidden"
               aria-hidden="true">
            <label for="bw-extra-field">Dieses Feld bitte leer lassen</label>
            <input id="bw-extra-field" type="text" tabindex="-1" autocomplete="off">
          </div>

          <button id="bw-submit-lead"
            type="button"
            class="bw-button"
            style="width:100%;margin-top:8px"
            onclick="window.BWPropertyFunnel.submitLead()">
            Persönlichen Report kostenlos erhalten
          </button>

          <div class="bw-trust">
            <span>Kostenlos</span>
            <span>Unverbindlich</span>
            <span>Vertraulich</span>
          </div>

          <div class="bw-privacy">
            Ihr Report dient als persönliche Orientierung. Rechtliche oder steuerliche Fragen sollten bei Bedarf professionell geklärt werden.
          </div>
        </div>
      </div>
    `;
  }

  /* =========================================================
     ADDRESS AUTOCOMPLETE
     ========================================================= */

  let addressSearchTimer = null;
  let addressSearchController = null;
  let addressSearchSequence = 0;

  function handleStreetInput(value) {
    state.address.street = value;
    state.address.selectedAddress = null;

    const status = document.getElementById("bw-address-status");
    const list = document.getElementById("bw-address-suggestions");

    if (status) {
      status.className = "bw-address-status";
      status.textContent = "";
    }

    if (state.address.postalCode || state.address.city) {
      state.address.postalCode = "";
      state.address.city = "";

      const postal = document.getElementById("bw-postal");
      const city = document.getElementById("bw-city");

      if (postal) postal.value = "";
      if (city) city.value = "";
    }

    clearTimeout(addressSearchTimer);

    if (addressSearchController) {
      addressSearchController.abort();
    }

    if (!list) return;

    const query = value.trim();

    if (query.length < 4) {
      list.hidden = true;
      list.innerHTML = "";
      return;
    }

    addressSearchTimer = setTimeout(function () {
      searchAddresses(query);
    }, 300);
  }

  async function searchAddresses(query) {
    const list = document.getElementById("bw-address-suggestions");
    const status = document.getElementById("bw-address-status");

    if (!list) return;

    const sequence = ++addressSearchSequence;
    addressSearchController = new AbortController();

    list.innerHTML = `
      <div class="bw-address-state">
        <span class="bw-address-state__spinner" aria-hidden="true"></span>
        <span>Adressen werden gesucht</span>
      </div>
    `;
    list.hidden = false;

    track("address_search", {
      query_length: query.length
    });

    try {
      const url = "https://photon.komoot.io/api/?" +
        new URLSearchParams({
          q: query,
          lang: "de",
          limit: "5",
          lat: "51.1657",
          lon: "10.4515",
          zoom: "12",
          bbox: "5.87,47.27,15.04,55.06"
        }).toString();

      const response = await fetch(url, {
        signal: addressSearchController.signal,
        headers: { "Accept": "application/json" }
      });

      if (!response.ok) throw new Error("Address search failed");
      const data = await response.json();

      if (sequence !== addressSearchSequence) return;

      const features = (data.features || [])
        .filter(function (feature) {
          const p = feature.properties || {};
          return p.countrycode === "DE" ||
            p.country === "Germany" ||
            p.country === "Deutschland";
        })
        .slice(0, 5);

      if (!features.length) {
        list.innerHTML = `
          <div class="bw-address-state bw-address-state--empty">
            <span>Keine passende Adresse gefunden.</span>
            <small>Bitte Straße und Hausnummer genauer eingeben.</small>
          </div>
        `;
        if (status) status.textContent = "";
        return;
      }

      list.innerHTML = features.map(function (feature) {
        const p = feature.properties || {};

        let streetName = String(p.street || p.name || query).trim();
        let postalCode = String(p.postcode || "").trim();
        let city = String(
          p.city || p.town || p.village || p.municipality || p.district || ""
        ).trim();

        const trailingPostcode =
          streetName.match(/(?:\s|^)(\d{5})(?:\s+(.+))?$/);

        if (!postalCode && trailingPostcode) {
          postalCode = trailingPostcode[1];
          if (!city && trailingPostcode[2]) city = trailingPostcode[2].trim();
          streetName = streetName.slice(0, trailingPostcode.index).trim();
        }

        streetName = streetName.replace(/\s{2,}/g, " ").trim();

        const street = [streetName, p.housenumber].filter(Boolean).join(" ");
        const locality = [postalCode, city].filter(Boolean).join(" ");

        const payload = encodeURIComponent(JSON.stringify({
          street: street,
          postalCode: postalCode,
          city: city,
          lat: feature.geometry?.coordinates?.[1] || null,
          lon: feature.geometry?.coordinates?.[0] || null,
          display: street
        }));

        return `
          <button type="button"
            class="bw-address-suggestion"
            data-address="${payload}"
            onclick="window.BWPropertyFunnel.selectAddress(this.dataset.address)">
            <span class="bw-address-suggestion__icon" aria-hidden="true">
              ${bwIcon('<path d="M12 21s6-5.15 6-11a6 6 0 1 0-12 0c0 5.85 6 11 6 11Z"/><circle cx="12" cy="10" r="2.1"/>', "0 0 24 24", "1.7")}
            </span>
            <span class="bw-address-suggestion__copy">
              <span class="bw-address-suggestion__main">${esc(street)}</span>
              <span class="bw-address-suggestion__meta">${esc(locality || "Deutschland")}</span>
            </span>
            <span class="bw-address-suggestion__chevron" aria-hidden="true">›</span>
          </button>
        `;
      }).join("");

      track("address_suggestions_shown", {
        count: features.length
      });
    } catch (error) {
      if (error && error.name === "AbortError") return;

      console.warn("[BW Funnel] Address autocomplete unavailable", error);
      list.hidden = true;
      list.innerHTML = "";
    }
  }

  function selectAddress(encodedAddress) {
    let selected;

    try {
      selected = JSON.parse(decodeURIComponent(encodedAddress));
    } catch (e) {
      return;
    }

    state.address.street = selected.street || state.address.street;
    state.address.postalCode = selected.postalCode || "";
    state.address.city = selected.city || "";
    state.address.selectedAddress = selected;

    const street = document.getElementById("bw-street");
    const postal = document.getElementById("bw-postal");
    const city = document.getElementById("bw-city");
    const list = document.getElementById("bw-address-suggestions");
    const status = document.getElementById("bw-address-status");

    if (street) street.value = state.address.street;
    if (postal) postal.value = state.address.postalCode;
    if (city) city.value = state.address.city;

    if (list) {
      list.hidden = true;
      list.innerHTML = "";
    }

    if (status) {
      status.className = "bw-address-status bw-address-status--success";
      status.textContent =
        state.address.postalCode && state.address.city
          ? "✓ Adresse gefunden"
          : "Adresse erkannt – bitte PLZ und Ort prüfen";
    }

    track("address_selected", {
      has_postcode: Boolean(state.address.postalCode),
      has_city: Boolean(state.address.city),
      latitude: selected.lat,
      longitude: selected.lon
    });
  }

  /* =========================================================
     VALIDATION
     ========================================================= */

  function syncVisibleFields() {
    const root = document.getElementById("bw-property-funnel");
    if (!root) return;

    const streetEl = root.querySelector("#bw-street");
    const postalEl = root.querySelector("#bw-postal");
    const cityEl = root.querySelector("#bw-city");

    if (streetEl) state.address.street = streetEl.value.trim();
    if (postalEl) {
      state.address.postalCode = String(postalEl.value || "")
        .replace(/[^0-9]/g, "")
        .slice(0, 5);
    }
    if (cityEl) state.address.city = cityEl.value.trim();

    const livingEl = root.querySelector("#bw-living");
    const plotEl = root.querySelector("#bw-plot, #bw-plot-commercial");
    const floorEl = root.querySelector("#bw-floor");
    const yearEl = root.querySelector("#bw-year");
    const rentEl = root.querySelector("#bw-rent");
    const unitsEl = root.querySelector("#bw-units");

    if (livingEl) state.property.livingSpace = livingEl.value.trim();
    if (plotEl) state.property.plotSize = plotEl.value.trim();
    if (floorEl) state.property.floor = floorEl.value.trim();
    if (yearEl) state.property.yearBuilt = yearEl.value.trim();
    if (rentEl) {
      state.property.rentalIncome = rentEl.value.trim();
      state.property.monthlyColdRent = rentEl.value.trim();
    }
    if (unitsEl) {
      state.property.numberOfUnits = unitsEl.value.trim();
      state.property.units = unitsEl.value.trim();
    }
  }

  function validNumericText(value) {
    const normalized = String(value || "").replace(",", ".").replace(/[^\d.]/g, "");
    return normalized && Number(normalized) > 0;
  }

  function validateCurrentStep() {
    syncVisibleFields();

    if (state.currentStep === "location") {
      const a = state.address;
      const missing = [];

      if (!String(a.street || "").trim()) missing.push("Straße + Hausnummer");
      if (!/^\d{5}$/.test(String(a.postalCode || "").trim())) missing.push("5-stellige PLZ");
      if (!String(a.city || "").trim()) missing.push("Ort");

      if (missing.length) {
        return "Bitte " + missing.join(", ") + " ergänzen.";
      }
    }

    if (state.currentStep === "property_details") {
      const p = state.property;
      const t = state.propertyType;
      const errors = [];

      if (t === "land") {
        if (!validNumericText(p.plotSize)) {
          errors.push("Grundstücksgröße");
        }
      } else {
        if (!validNumericText(p.livingSpace)) errors.push("Wohnfläche / Nutzfläche");
        if (!/^\d{4}$/.test(String(p.yearBuilt || ""))) errors.push("Baujahr");
        if (!p.condition) errors.push("Zustand");

        if (t === "apartment" && !String(p.floor || "").trim()) {
          errors.push("Etage");
        }

        if ((t === "house" || t === "multi_family") && !validNumericText(p.plotSize)) {
          errors.push("Grundstücksgröße");
        }
      }

      if (!p.usage) errors.push("Nutzung");

      if (p.usage === "rented" && !validNumericText(p.rentalIncome || p.monthlyColdRent)) {
        errors.push("monatliche Kaltmiete");
      }

      const isMultiFamily =
        t === "multi_family" ||
        (t === "house" && state.houseType === "multi_family");

      if (isMultiFamily && !validNumericText(p.numberOfUnits || p.units)) {
        errors.push("Anzahl der Wohneinheiten");
      }

      if (errors.length) {
        return "Bitte " + errors.join(", ") + " ergänzen.";
      }
    }

    if (state.currentStep === "heirs") {
      if (!state.heirs.count || !state.heirs.agreement || !state.heirs.familyTakeover) {
        return "Bitte alle drei Fragen zur Erbengemeinschaft beantworten.";
      }
    }

    if (state.currentStep === "financing") {
      const f = state.finance;

      if (!f.financing) {
        return "Bitte angeben, ob noch eine Finanzierung besteht.";
      }

      if (f.financing === "yes" && !f.remainingDebt) {
        return "Bitte die ungefähre Restschuld auswählen.";
      }

      if (!f.encumbrance) {
        return "Bitte die Frage zu besonderen Belastungen oder Rechten beantworten.";
      }
    }

    if (state.currentStep === "priority") {
      if (!state.priority.length) {
        return "Bitte mindestens eine Option auswählen.";
      }
    }

    return null;
  }

  function showValidationError(message, elementId = "bw-validation-error") {
    const validationEl = document.getElementById(elementId);

    if (validationEl) {
      validationEl.textContent = message;
      validationEl.style.display = "";
      return;
    }

    const nav = document.querySelector(".bw-navigation");
    if (nav) {
      const div = document.createElement("div");
      div.id = elementId;
      div.className = "bw-field__error";
      div.textContent = message;
      div.setAttribute("aria-live", "polite");
      nav.parentNode.insertBefore(div, nav);
    }
  }

  function clearValidationError() {
    const validationEl = document.getElementById("bw-validation-error");
    if (validationEl) {
      validationEl.textContent = "";
      validationEl.style.display = "none";
    }
  }

  function continueCurrent() {
    const error = validateCurrentStep();

    if (error) {
      track("validation_failed", {
        step: state.currentStep,
        reason: error
      });

      showValidationError(error);
      return;
    }

    clearValidationError();

    if (state.currentStep === "location") {
      const status = document.getElementById("bw-address-status");
      if (status) {
        status.className = "bw-address-status bw-address-status--success";
        status.textContent = "✓ Adresse vollständig";
      }
    }

    goNext();
  }

  /* =========================================================
     ASSESSMENT
     ========================================================= */

  function computeAssessment() {
    const t = state.timing;
    const f = state.finance;
    const p = state.property;
    const h = state.heirs;

    let pressureScore = 0;
    let complexityScore = 0;

    /* Decision pressure */
    if (t === "lt_6w") pressureScore += 3;
    else if (t === "w6_m6") pressureScore += 2;
    else if (t === "m6_y2") pressureScore += 1;

    if (f.financing === "yes") pressureScore += 1;
    if (p.usage === "vacant") pressureScore += 2;
    if (p.usage === "rented" && state.priority.includes("costs")) pressureScore += 1;

    if (state.inheritance === "multiple_heirs") {
      if (h.agreement === "dispute") pressureScore += 3;
      else if (h.agreement === "different") pressureScore += 2;
      else if (h.agreement === "undecided") pressureScore += 1;
    }

    if (state.priority.includes("speed")) pressureScore += 2;
    if (state.priority.includes("costs")) pressureScore += 1;

    /* Decision complexity */
    if (state.inheritance === "multiple_heirs") {
      if (h.count === "5plus") complexityScore += 3;
      else if (h.count === "4") complexityScore += 2;
      else complexityScore += 1;

      if (h.agreement === "dispute") complexityScore += 3;
      else if (h.agreement === "different") complexityScore += 2;
      else if (h.agreement === "undecided") complexityScore += 1;

      if (h.familyTakeover === "yes") complexityScore += 1;
    }

    if (f.financing === "yes") complexityScore += 1;
    if (f.financing === "unknown") complexityScore += 1;

    if (f.encumbrance === "wohnrecht" || f.encumbrance === "niessbrauch") {
      complexityScore += 2;
    } else if (
      f.encumbrance === "grundschuld" ||
      f.encumbrance === "other" ||
      f.encumbrance === "unknown"
    ) {
      complexityScore += 1;
    }

    if (state.propertyType === "commercial" ||
        state.propertyType === "multi_family" ||
        state.propertyType === "land") {
      complexityScore += 1;
    }

    if (state.propertyType === "house" && state.houseType === "multi_family") {
      complexityScore += 1;
    }

    const level = function (score) {
      return score >= 5 ? "Hoch" : score >= 2 ? "Mittel" : "Niedrig";
    };

    const risks = [];

    if (t === "lt_6w") {
      risks.push("Früher Erbfall – zeitnahe Klärung der nächsten Schritte kann sinnvoll sein");
    }

    if (p.usage === "vacant") {
      risks.push("Leerstand kann laufende Kosten und Entscheidungsdruck erhöhen");
    }

    if (state.inheritance === "multiple_heirs") {
      if (h.agreement === "dispute") {
        risks.push("Bereits bestehender Streit erschwert eine gemeinsame Entscheidung");
      } else if (h.agreement === "different") {
        risks.push("Unterschiedliche Vorstellungen der Erben müssen zusammengeführt werden");
      } else if (h.agreement === "undecided") {
        risks.push("Eine gemeinsame Entscheidungsrichtung ist noch offen");
      }

      if (h.familyTakeover === "yes") {
        risks.push("Eine mögliche Familienübernahme sollte finanziell und fair geprüft werden");
      }
    }

    if (f.financing === "yes") {
      risks.push("Restschuld und Finanzierung sollten bei der Entscheidung berücksichtigt werden");
    } else if (f.financing === "unknown") {
      risks.push("Finanzierungsstatus sollte bei Bedarf geklärt werden");
    }

    if (f.encumbrance === "wohnrecht" || f.encumbrance === "niessbrauch") {
      risks.push("Wohnrecht oder Nießbrauch kann die Bewertung und Verwertung beeinflussen");
    } else if (f.encumbrance === "grundschuld") {
      risks.push("Eingetragene Grundschuld separat prüfen – sie ist nicht automatisch gleichbedeutend mit Restschuld");
    } else if (f.encumbrance === "other") {
      risks.push("Sonstige Belastungen oder Rechte sollten vor einer Entscheidung geprüft werden");
    } else if (f.encumbrance === "unknown") {
      risks.push("Belastungen oder Rechte sollten bei Bedarf geprüft werden");
    }

    if (p.condition === "refurbishment_needed") {
      risks.push("Sanierungsbedarf kann den erzielbaren Wert und Aufwand deutlich beeinflussen");
    }

    if (!risks.length) {
      risks.push("Immobilienwert und Optionen anhand der vorhandenen Angaben vergleichen");
    }

    let recommendedNextStep = "valuation first";

    if (state.intention === "sell") {
      recommendedNextStep =
        state.priority.includes("price")
          ? "sale preparation"
          : "valuation first";
    } else if (state.intention === "family_transfer" ||
               (state.inheritance === "multiple_heirs" && h.familyTakeover === "yes")) {
      recommendedNextStep = "internal family transfer assessment";
    } else if (state.intention === "rent") {
      recommendedNextStep = "rental assessment";
    } else if (
      state.inheritance === "multiple_heirs" &&
      (h.agreement === "dispute" || h.agreement === "different" || h.agreement === "undecided")
    ) {
      recommendedNextStep = "family alignment";
    } else if (f.encumbrance === "wohnrecht" ||
               f.encumbrance === "niessbrauch" ||
               f.encumbrance === "other" ||
               f.encumbrance === "unknown" ||
               state.inheritance === "unclear") {
      recommendedNextStep = "professional legal/tax clarification";
    } else if (state.intention === "keep") {
      recommendedNextStep = "hold / no immediate action";
    }

    const translatedNextSteps = {
      "valuation first": "Immobilienwert zuerst genauer einschätzen",
      "sale preparation": "Verkauf vorbereiten",
      "internal family transfer assessment": "Familienübernahme finanziell und fair prüfen",
      "rental assessment": "Vermietung prüfen",
      "family alignment": "Gemeinsame Linie der Erben finden",
      "professional legal/tax clarification": "Rechtliche oder steuerliche Fragen professionell klären",
      "hold / no immediate action": "Vorerst halten und keine übereilte Entscheidung treffen"
    };

    return {
      propertyValue: "erste Einschätzung / Wertspanne",
      pressure: level(pressureScore),
      complexity: level(complexityScore),
      recommendedNextStep: translatedNextSteps[recommendedNextStep],
      risks: risks.slice(0, 4)
    };
  }

  function bwSummary() {
    const names = {
      house: "Haus",
      apartment: "Eigentumswohnung",
      multi_family: "Mehrfamilienhaus",
      commercial: "Gewerbeimmobilie",
      land: "Grundstück"
    };

    const parts = [names[state.propertyType] || "Immobilie"];

    if (state.inheritance === "multiple_heirs") {
      parts.push(
        "Erbengemeinschaft" +
        (state.heirs.count
          ? " (" + (state.heirs.count === "5plus" ? "5+" : state.heirs.count) + " Erben)"
          : "")
      );
    } else if (state.inheritance === "sole_heir") {
      parts.push("Alleinerbe");
    }

    if (state.finance.financing === "yes") {
      parts.push("laufende Finanzierung");
    }

    if (state.property.usage === "rented") {
      parts.push("vermietet");
    } else if (state.property.usage === "vacant") {
      parts.push("leerstehend");
    }

    return parts.join(" · ");
  }

  /* =========================================================
     LEAD SUBMISSION
     ========================================================= */

  async function submitLead() {
    const c = state.contact;

    const validEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(c.email || "").trim());

    const normalizedPhone =
      String(c.phone || "").replace(/[^\d+]/g, "");

    const validPhone =
      normalizedPhone.replace(/\D/g, "").length >= 7;

    const errorEl = document.getElementById("bw-contact-error");

    if (!validEmail || !validPhone) {
      track("validation_failed", {
        step: "contact",
        reason: "valid email and phone required"
      });

      if (errorEl) {
        errorEl.style.display = "block";
        errorEl.textContent =
          "Bitte eine gültige E-Mail-Adresse und Telefonnummer angeben.";
      }

      return;
    }

    if (errorEl) {
      errorEl.style.display = "none";
    }

    const honeypot = document.getElementById("bw-extra-field");
    const isBot = Boolean(honeypot && honeypot.value.trim());

    const assessment = computeAssessment();

    const payload = {
      submitted_at: new Date().toISOString(),

      first_name: c.firstName.trim(),
      last_name: c.lastName.trim(),
      phone: c.phone.trim(),
      email: c.email.trim(),

      situation: state.situation || "",
      timing: state.timing || "",
      erbfall_timing: state.timing || "",

      property_type: state.propertyType || "",
      house_type: state.houseType || "",

      address: {
        street: state.address.street || "",
        postalCode: state.address.postalCode || "",
        city: state.address.city || "",
        selectedAddress: state.address.selectedAddress || null
      },

      street: state.address.street || "",
      postal_code: state.address.postalCode || "",
      city: state.address.city || "",

      living_space: state.property.livingSpace || "",
      plot_size: state.property.plotSize || "",
      floor: state.property.floor || "",
      year_built: state.property.yearBuilt || "",
      condition: state.property.condition || "",
      usage: state.property.usage || "",
      rental_income: state.property.rentalIncome || state.property.monthlyColdRent || "",
      monthly_cold_rent: state.property.monthlyColdRent || state.property.rentalIncome || "",
      units: state.property.units || state.property.numberOfUnits || "",
      number_of_units: state.property.numberOfUnits || state.property.units || "",

      inheritance: state.inheritance || "",
      heirs_count: state.heirs.count || "",
      heirs_agreement: state.heirs.agreement || "",
      family_takeover: state.heirs.familyTakeover || "",

      financing: state.finance.financing || "",
      remaining_debt: state.finance.remainingDebt || "",
      encumbrances: state.finance.encumbrance || "",

      intention: state.intention || "",
      priorities: state.priority.join(" | "),
      priority: state.priority.join(" | "),

      assessment_pressure: assessment.pressure,
      assessment_complexity: assessment.complexity,
      assessment_recommended_next_step: assessment.recommendedNextStep,
      assessment_risks: assessment.risks.join(" | "),

      utm_source: state.attribution.utmSource,
      utm_medium: state.attribution.utmMedium,
      utm_campaign: state.attribution.utmCampaign,
      utm_content: state.attribution.utmContent,
      utm_term: state.attribution.utmTerm,
      gclid: state.attribution.gclid,
      fbclid: state.attribution.fbclid,

      session_id: state.sessionId
    };

    /* Keep the webhook contract: one URL-encoded "payload" field. */
    if (CONFIG.leadWebhookUrl && !isBot) {
      const button = document.getElementById("bw-submit-lead");
      const buttonLabel = button ? button.textContent : "";

      if (button) {
        button.disabled = true;
        button.textContent = "Wird gesendet …";
      }

      try {
        const body = new URLSearchParams();
        body.append("payload", JSON.stringify(payload));

        const response = await fetch(CONFIG.leadWebhookUrl, {
          method: "POST",
          body: body
        });

        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
      } catch (err) {
        track("lead_submit_failed", {
          message: String((err && err.message) || err)
        });

        if (button) {
          button.disabled = false;
          button.textContent = buttonLabel;
        }

        if (errorEl) {
          errorEl.style.display = "block";
          errorEl.textContent =
            "Ihre Anfrage konnte gerade nicht übertragen werden. Bitte versuchen Sie es in einem Moment noch einmal.";
        }

        return;
      }
    } else if (!CONFIG.leadWebhookUrl) {
      console.warn(
        "[BW Funnel] leadWebhookUrl ist nicht gesetzt – der Lead wurde NICHT übertragen."
      );
    }

    track("lead_submitted", {
      situation: state.situation,
      timing: state.timing,
      property_type: state.propertyType,
      house_type: state.houseType,
      address_complete: true,
      intention: state.intention,
      inheritance: state.inheritance,
      family_takeover: state.heirs.familyTakeover,
      contact_captured: true
    });

    exitStep({ lead_submitted: true });

    track("funnel_completed", {
      total_duration_seconds:
        Math.round((Date.now() - state.startedAt) / 1000)
    });

    renderSuccess();
  }

  function renderSuccess() {
    state.currentStep = "success";
    state.stepStartedAt = null;

    const root = document.getElementById("bw-property-funnel");
    if (!root) return;

    root.innerHTML = `
      <div class="bw-app">
        <main class="bw-screen">
          <div class="bw-success">
            <div class="bw-success__icon" aria-hidden="true">${BW_ICONS.check}</div>
            <h1>Ihr Report ist unterwegs.</h1>
            <p>
              Ihre persönliche Einschätzung wird an ${esc(state.contact.email)} gesendet.
            </p>
          </div>
        </main>
      </div>
    `;
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.BWPropertyFunnel = {
    state: state,
    track: track,
    next: goNext,
    back: goBack,
    selectOption: selectOption,
    continueCurrent: continueCurrent,
    setChoice: setChoice,
    updateField: updateField,
    handleStreetInput: handleStreetInput,
    selectAddress: selectAddress,
    trackField: trackField,
    submitLead: submitLead,
    computeAssessment: computeAssessment,
    getActiveSteps: getActiveSteps
  };

  /* =========================================================
     GLOBAL INTERACTION HANDLERS
     ========================================================= */

  document.addEventListener("click", function (event) {
    const field = document.querySelector(".bw-address-autocomplete");
    const list = document.getElementById("bw-address-suggestions");

    if (field && list && !field.contains(event.target)) {
      list.hidden = true;
    }
  });

  document.addEventListener("keydown", function (event) {
    const root = document.getElementById("bw-property-funnel");
    if (!root || !root.contains(event.target)) return;

    if (event.key === "Escape") {
      const list = document.getElementById("bw-address-suggestions");
      if (list && !list.hidden) list.hidden = true;
      return;
    }

    if (event.key !== "Enter" || event.target.tagName !== "INPUT") return;

    event.preventDefault();

    if (state.currentStep === "contact") {
      submitLead();
      return;
    }

    if (state.currentStep === "location" && event.target.id === "bw-street") {
      const list = document.getElementById("bw-address-suggestions");
      const first =
        list &&
        !list.hidden &&
        list.querySelector(".bw-address-suggestion");

      if (first) {
        first.click();
        return;
      }
    }

    if (state.currentStep === "location" ||
        state.currentStep === "property_details") {
      continueCurrent();
    }
  });

  /* =========================================================
     INITIALIZE
     ========================================================= */

  track("funnel_started", {
    attribution: state.attribution
  });

  if (window.BW_FUNNEL_COMPACT) {
    const compactRoot = document.getElementById("bw-property-funnel");
    if (compactRoot) compactRoot.classList.add("bw-compact");
  }

  enterStep("situation");

  window.addEventListener("beforeunload", function () {
    if (
      state.currentStep &&
      state.stepStartedAt &&
      state.currentStep !== "success"
    ) {
      track("funnel_abandoned", {
        step: state.currentStep,
        duration_seconds:
          Math.round((Date.now() - state.stepStartedAt) / 1000)
      });
    }
  });

})();
