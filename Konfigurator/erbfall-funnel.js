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
   CHOICE ROWS  (options, barriers, priority, inheritance, condition)
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

/* Report-Banner oben — visueller Blickfang über den Optionen */
#bw-property-funnel .bw-situation-banner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  margin-bottom: 8px;
  border-radius: var(--bw-radius);
  background: var(--bw-tint);
}

#bw-property-funnel .bw-situation-banner__thumb {
  width: 72px;
  overflow: hidden;
  border-radius: 6px;
  background: var(--bw-white);
  box-shadow: 0 6px 18px rgba(5, 27, 76, .16);
}

#bw-property-funnel .bw-situation-banner__thumb img {
  display: block;
  width: 100%;
  height: auto;
}

#bw-property-funnel .bw-situation-banner__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

#bw-property-funnel .bw-situation-banner__title {
  font-family: var(--bw-serif);
  font-size: 20px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -.01em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-situation-banner__sub {
  margin-top: 4px;
  font-family: var(--bw-sans);
  font-size: 14px;
  line-height: 1.4;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-situation-banner__badge {
  align-self: flex-end;
  margin-top: 12px;
  padding: 8px 16px;
  border: 1px solid var(--bw-line-strong);
  border-radius: 999px;
  background: var(--bw-white);
  font-family: var(--bw-sans);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--bw-navy);
  white-space: nowrap;
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
#bw-property-funnel .bw-bottomnav {
  display: flex;
  justify-content: center;
  margin: 24px 0 0;
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
  max-width: 360px;
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
   REPORT-VORSCHAU (Report-Schritt)
   Statisches Report-Bild, bewusst kleiner dargestellt.
   ========================================================= */

#bw-property-funnel .bw-report-image {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
}

#bw-property-funnel .bw-report-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: var(--bw-radius);
}

/* =========================================================
   DECISION ASSISTANT — OPTIONSVERGLEICH + ERSTE EINSCHÄTZUNG
   Gleiche Kartensprache wie die Auswahl-Karten: 1px Linie,
   14px Radius, Navy-Tint für die aktuell passendste Option.
   ========================================================= */

#bw-property-funnel .bw-option-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

#bw-property-funnel .bw-option-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 16px 16px 14px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius);
  background: var(--bw-white);
  color: var(--bw-navy);
}

#bw-property-funnel .bw-option-card--recommended {
  border-color: var(--bw-navy);
  background: var(--bw-tint);
}

#bw-property-funnel .bw-option-card__tag {
  display: inline-block;
  align-self: flex-start;
  margin-bottom: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--bw-navy);
  color: var(--bw-white);
  font-family: var(--bw-sans);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
}

#bw-property-funnel .bw-option-card__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

#bw-property-funnel .bw-option-card__title {
  min-width: 0;
  font-family: var(--bw-serif);
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -.01em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-option-card__score {
  flex: 0 0 auto;
  font-family: var(--bw-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--bw-muted);
  white-space: nowrap;
}

#bw-property-funnel .bw-option-card__score strong {
  font-size: 16px;
  font-weight: 700;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-option-card__bar {
  height: 4px;
  margin: 10px 0 12px;
  overflow: hidden;
  border-radius: 99px;
  background: var(--bw-track);
}

#bw-property-funnel .bw-option-card--recommended .bw-option-card__bar {
  background: var(--bw-white);
}

#bw-property-funnel .bw-option-card__bar-fill {
  height: 100%;
  border-radius: inherit;
  background: var(--bw-navy);
  transform-origin: left center;
  animation: bw-grow 700ms var(--bw-ease) both;
}

@keyframes bw-grow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

#bw-property-funnel .bw-option-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

#bw-property-funnel .bw-option-card__meta span {
  padding: 4px 9px;
  border: 1px solid var(--bw-line);
  border-radius: 999px;
  background: var(--bw-white);
  font-family: var(--bw-sans);
  font-size: 11px;
  line-height: 1.3;
  font-weight: 500;
  color: var(--bw-muted);
  white-space: nowrap;
}

#bw-property-funnel .bw-option-card__meta span strong {
  font-weight: 600;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-option-card__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

#bw-property-funnel .bw-option-card__list li {
  position: relative;
  padding-left: 18px;
  font-family: var(--bw-sans);
  font-size: 13px;
  line-height: 1.45;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-option-card__list li + li {
  margin-top: 4px;
}

#bw-property-funnel .bw-option-card__list li::before {
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 700;
}

#bw-property-funnel .bw-option-card__list li.bw-pro::before {
  content: "+";
  color: var(--bw-navy);
}

#bw-property-funnel .bw-option-card__list li.bw-con {
  color: var(--bw-muted);
}

#bw-property-funnel .bw-option-card__list li.bw-con::before {
  content: "−";
  color: var(--bw-soft);
}

/* Erste Einschätzung: Tint-Panel wie das Report-Banner auf Schritt 1 */
#bw-property-funnel .bw-verdict {
  margin-top: 18px;
  padding: 20px 18px;
  border-radius: var(--bw-radius);
  background: var(--bw-tint);
}

#bw-property-funnel .bw-verdict__title {
  margin: 0;
  font-family: var(--bw-serif);
  font-size: 20px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -.015em;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-verdict__lead {
  margin: 8px 0 0;
  font-family: var(--bw-sans);
  font-size: 14px;
  line-height: 1.5;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-verdict__reasons {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

#bw-property-funnel .bw-verdict__reasons li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--bw-line);
  border-radius: var(--bw-radius-small);
  background: var(--bw-white);
  font-family: var(--bw-sans);
  font-size: 14px;
  line-height: 1.45;
  font-weight: 500;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-verdict__reasons li + li {
  margin-top: 6px;
}

#bw-property-funnel .bw-verdict__reasons svg {
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  margin-top: 2px;
}

#bw-property-funnel .bw-verdict__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 14px;
  font-family: var(--bw-sans);
  font-size: 12px;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-verdict__meta strong {
  font-weight: 600;
  color: var(--bw-navy);
}

#bw-property-funnel .bw-verdict__note {
  margin: 12px 0 0;
  font-family: var(--bw-sans);
  font-size: 13px;
  line-height: 1.5;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-disclaimer {
  margin: 14px 0 0;
  font-family: var(--bw-sans);
  font-size: 12px;
  line-height: 1.55;
  color: var(--bw-soft);
}

/* Report-Schritt: Brücke von der ersten Einschätzung zum Report */
#bw-property-funnel .bw-report-recap {
  max-width: 360px;
  margin: 16px auto 0;
  padding: 12px 14px;
  border-radius: var(--bw-radius-small);
  background: var(--bw-tint);
  font-family: var(--bw-sans);
  font-size: 13px;
  line-height: 1.5;
  color: var(--bw-muted);
}

#bw-property-funnel .bw-report-recap strong {
  color: var(--bw-navy);
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
    grid-template-columns: 360px minmax(0, 1fr);
    gap: 36px;
  }

  /* Mehrfachauswahl-Schritte (Möglichkeiten, Hürden, Prioritäten):
     zweispaltig, damit lange Listen nicht endlos untereinander stehen */
  #bw-property-funnel .bw-choice-grid--two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Optionsvergleich: zwei Karten nebeneinander */
  #bw-property-funnel .bw-option-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  #bw-property-funnel .bw-verdict {
    padding: 24px;
  }
}

/* Step 1 desktop: einspaltig, nur Typo-/Karten-Feinschliff */
@container (min-width: 960px) {

  #bw-property-funnel .bw-situation-content h1 {
    font-size: clamp(26px, calc(6px + 2.2cqw), 36px);
    line-height: 1.1;
    letter-spacing: -.03em;
  }

  #bw-property-funnel .bw-situation-card {
    padding: 12px 16px;
  }
}

/* Small phones */
@container (max-width: 380px) {

  #bw-property-funnel .bw-app {
    padding-left: 16px;
    padding-right: 16px;
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

#bw-property-funnel.bw-compact .bw-option-grid {
  gap: 8px;
}

#bw-property-funnel.bw-compact .bw-option-card {
  padding: 14px 12px 12px;
}

#bw-property-funnel.bw-compact .bw-verdict {
  padding: 16px 14px;
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

  #bw-property-funnel .bw-screen,
  #bw-property-funnel .bw-address-suggestions,
  #bw-property-funnel .bw-option-card__bar-fill {
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

  /* Basis-URL des ladenden Scripts: Wird der Funnel als externe Datei
     (GitHub/CDN) geladen, findet er Bilder automatisch neben sich.
     Bei Inline-Einbettung ist die Basis leer -> relative Pfade. */
  const SCRIPT_BASE = (function () {
    const s = document.currentScript;
    return s && s.src ? s.src.replace(/\/[^/]*$/, "/") : "";
  })();

  const CONFIG = {
    funnelName: "inheritance_property",

    /* Lead-Übertragung an Google Sheets:
       Die Web-App-URL aus dem Apps-Script-Deployment hier eintragen
       (Format: https://script.google.com/macros/s/…/exec).
       Solange sie leer ist, wird der Lead NICHT übertragen und nur
       eine Warnung in der Konsole ausgegeben. */
    leadWebhookUrl: "https://script.google.com/macros/s/AKfycbyev7rNvjZRK2xkEAcMOXCULNwHxfSvr8jsICZGKQvng9CMWiZOlr-i8GpRmTdN249Z_g/exec",

    /* Bild-URLs.
       Im Webflow-Embed werden sie über window.BW_FUNNEL_ASSETS
       gesetzt (kleiner Konfigurationsblock am Anfang des Embeds).
       Die relativen Dateinamen hier sind der lokale Fallback. */
    assets: window.BW_FUNNEL_ASSETS || {
      hero: SCRIPT_BASE + "hero-rheinhessen.jpg",
      houseDetached: SCRIPT_BASE + "haus-freistehend.png",
      houseSemiDetached: SCRIPT_BASE + "haus-doppelhaushaelfte.png",
      houseTerraced: SCRIPT_BASE + "haus-reihenhaus.png",
      houseTwoFamily: "",
      houseMultiFamily: "",
      report: SCRIPT_BASE + "erbfall%20report.png"
    },

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
      "options",
      "barriers",
      "priority",
      "decision",
      "contact"
    ]
  };


  /* =========================================================
     ICON SET
     One consistent line-icon language (1.7px stroke, navy via
     currentColor) replacing the previous emoji/glyph mix.
     ========================================================= */

  /* Ein gemeinsamer SVG-Rahmen statt sieben kopierter — spart im
     minifizierten Embed mehrere hundert Zeichen. */
  function bwIcon(body, viewBox, strokeWidth) {
    return '<svg viewBox="' + (viewBox || "0 0 24 24") +
      '" fill="none" stroke="currentColor" stroke-width="' + (strokeWidth || "1.7") +
      '" stroke-linecap="round" stroke-linejoin="round">' + body + "</svg>";
  }

  const BW_ICONS = {
    check: bwIcon('<path d="M3 8.5l3.2 3.2L13 5"/>', "0 0 16 16", "2.2"),
    tag: bwIcon('<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'),
    key: bwIcon('<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>'),
    banknote: bwIcon('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M5.5 9.5h.01M18.5 14.5h.01"/>'),
    help: bwIcon('<circle cx="12" cy="12" r="9"/><path d="M9.3 9.2a2.7 2.7 0 0 1 5.4.4c0 1.8-2.7 2.2-2.7 3.6"/><path d="M12 17h.01"/>'),
    person: bwIcon('<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/>'),
    people: bwIcon('<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><path d="M16 5.9a3 3 0 0 1 0 5.2"/><path d="M17.5 14.6a5.5 5.5 0 0 1 3 4.9"/>'),
    agree: bwIcon('<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.4 2.4 4.6-5"/>'),
    split: bwIcon('<path d="M10 12H3"/><path d="M6 9l-3 3 3 3"/><path d="M14 12h7"/><path d="M18 9l3 3-3 3"/>'),
    conflict: bwIcon('<path d="M13 3 6 13.5h4.5L9 21l8-10.5h-4.5L13 3z"/>'),
    develop: bwIcon('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>')
  };

  /* Icons der Situations-Karten (frueher CSS-Daten-URIs — inline spart
     im Embed mehrere hundert Zeichen) */
  const SITUATION_ICONS = {
    value: bwIcon('<path d="M4 25h24"/><path d="M6 22l6-6 5 3 9-10"/><path d="M20 9h6v6"/>', "0 0 32 32", "1.8"),
    sell_or_keep: bwIcon('<path d="M16 5v22"/><path d="M8 9h16"/><path d="M5 9l-4 7h8l-4-7Z"/><path d="M27 9l-4 7h8l-4-7Z"/><path d="M11 27h10"/>', "0 0 32 32"),
    unsure: bwIcon('<circle cx="16" cy="16" r="11"/><path d="M20 12l-3 7-7 3 3-7 7-3Z"/>', "0 0 32 32"),
    rent_or_sell: bwIcon('<path d="M7 13l9-7 9 7"/><rect x="5" y="14" width="22" height="12" rx="2"/><circle cx="16" cy="20" r="3"/>', "0 0 32 32"),
    multiple_heirs: bwIcon('<circle cx="12" cy="11" r="4"/><path d="M4 26a8 8 0 0 1 16 0"/><path d="M21 7.5a4 4 0 0 1 0 7"/><path d="M23 18.5a8 8 0 0 1 5 7.5"/>', "0 0 32 32"),
    lock: bwIcon('<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>')
  };


  /* =========================================================
     TRANSITION STATE
     Guards double-taps and lets a selection register visually
     for a beat before the next screen enters.
     ========================================================= */

  let isTransitioning = false;
  let suppressEnterAnimation = false;


  /* =========================================================
     SESSION ID
     ========================================================= */

  function createSessionId() {
    return (
      "bw_" +
      Date.now().toString(36) +
      "_" +
      Math.random().toString(36).substring(2, 10)
    );
  }


  /* =========================================================
     ATTRIBUTION
     ========================================================= */

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
      rentIncome: "",
      units: ""
    },

    timing: null,

    heirs: {
      count: null,
      agreement: null,
      takeover: null
    },

    finance: {
      financing: null,
      remainingDebt: null,
      encumbrance: null
    },

    /* Decision Assistant: welche Wege der Nutzer erwägt, was für ihn
       gegen das Behalten spricht und was ihm wichtig ist. Zusammen mit
       den Immobilien-/Erb-/Finanzangaben sind das die Inputs für
       computeOptionScores(). */
    options: [],

    barriers: [],

    priority: [],

    inheritance: null,

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


    /* ---------------------------------------------
       Google Tag Manager / dataLayer
       --------------------------------------------- */

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push(payload);


    /* ---------------------------------------------
       Future API endpoint
       --------------------------------------------- */

    /*
      Später können wir hier beispielsweise:

      fetch("/api/funnel-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      hinzufügen.

      Für Version 1 senden wir Tracking
      zunächst nur an dataLayer.
    */
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

    const activeSteps = getActiveSteps();

    return activeSteps.indexOf(step) + 1;
  }


  function getTotalSteps() {

    return getActiveSteps().length;
  }


  /* =========================================================
     STEP ENTRY
     ========================================================= */

  function enterStep(step) {

    state.currentStep = step;

    state.stepStartedAt = Date.now();


    track("step_viewed", {

      step: step,

      step_number: getStepNumber(step),

      total_steps: getTotalSteps()

    });


    render();

    if (step === "decision") {
      trackDecisionViewed();
    }

    /* A new step must open at its headline. Without this, a tap
       near the bottom of a long screen lands the user mid-page. */
    const funnelRoot = document.getElementById("bw-property-funnel");
    if (funnelRoot) {
      const funnelTop =
        funnelRoot.getBoundingClientRect().top + window.pageYOffset;
      if (window.pageYOffset > funnelTop + 8) {
        window.scrollTo({ top: Math.max(funnelTop - 8, 0), behavior: "auto" });
      }
    }
  }


  /* =========================================================
     STEP EXIT
     ========================================================= */

  function exitStep(extra = {}) {

    if (!state.currentStep || !state.stepStartedAt) {
      return;
    }


    const durationSeconds =
      (Date.now() - state.stepStartedAt) / 1000;


    track("step_completed", {

      step: state.currentStep,

      step_number: getStepNumber(state.currentStep),

      duration_seconds:
        Math.round(durationSeconds * 10) / 10,

      ...extra

    });


    state.stepStartedAt = null;
  }


  /* =========================================================
     NEXT STEP
     ========================================================= */

  function goNext(data = {}) {

    exitStep(data);


    const activeSteps = getActiveSteps();

    const currentIndex =
      activeSteps.indexOf(state.currentStep);


    if (currentIndex === -1) {
      enterStep(activeSteps[0]);
      return;
    }


    const nextStep =
      activeSteps[currentIndex + 1];


    if (!nextStep) {

      track("funnel_completed", {

        total_duration_seconds:
          Math.round(
            (Date.now() - state.startedAt) / 1000
          )

      });

      return;
    }


    enterStep(nextStep);
  }


  /* =========================================================
     BACK
     ========================================================= */

  function goBack() {

    track("back_clicked", {

      step: state.currentStep

    });


    const activeSteps = getActiveSteps();

    const currentIndex =
      activeSteps.indexOf(state.currentStep);


    if (currentIndex <= 0) {
      return;
    }


    const previousStep =
      activeSteps[currentIndex - 1];


    enterStep(previousStep);
  }


  /* =========================================================
     OPTION SELECTION
     ========================================================= */

  function selectOption(
    step,
    value
  ) {

    if (isTransitioning) {
      return;
    }

    isTransitioning = true;

    state[step] = value;

    /* Zurück + Wechsel Haus -> Wohnung/MFH: der alte Haustyp darf nicht
       im Lead-Payload hängen bleiben. */
    if (step === "propertyType" && value !== "house") {
      state.houseType = null;
    }


    track("option_selected", {

      step: step,

      answer: value

    });


    /* Show the selected state for a beat, then advance. */
    suppressEnterAnimation = true;
    render();
    suppressEnterAnimation = false;

    window.setTimeout(function () {

      isTransitioning = false;

      goNext({

        answer: value

      });

    }, 180);
  }


  /* =========================================================
     RENDER ROOT
     ========================================================= */

  function render() {

    const root =
      document.getElementById(
        "bw-property-funnel"
      );


    if (!root) {
      return;
    }


    root.innerHTML = `

      <div class="bw-app ${state.currentStep === "situation" ? "bw-app--situation" : state.currentStep === "contact" ? "bw-app--report" : ""}">

        ${renderProgress()}

        <main class="bw-screen${suppressEnterAnimation ? " bw-screen--no-anim" : ""}">

          ${renderCurrentScreen()}

        </main>

        ${renderBottomBack()}

      </div>

    `;

    /* Der Balken startet auf dem alten Stand und gleitet dann zum neuen —
       innerHTML allein würde die width-Transition nie auslösen. */
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

  let lastProgressPct = 0;


  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {

    const current =
      getStepNumber(state.currentStep);

    const total =
      getTotalSteps();

    const percentage =
      total > 0
        ? (current / total) * 100
        : 0;


    return `

      <div class="bw-progress">

        <div class="bw-progress__meta">

          <span>
            Schritt ${current} von ${total}
          </span>

          <span>
            ${Math.round(percentage)} %
          </span>

        </div>


        <div class="bw-progress__track">

          <div
            class="bw-progress__bar"
            style="width: ${lastProgressPct}%"
            data-target="${percentage}"
          ></div>

        </div>

      </div>

    `;
  }


  /* =========================================================
     CURRENT SCREEN ROUTER
     ========================================================= */

  function renderCurrentScreen() {

    switch (state.currentStep) {

      case "situation":
        return renderSituationScreen();

      case "property_type":
        return renderPropertyTypeScreen();

      case "house_type":
        return renderHouseTypeScreen();

      case "location":
        return renderLocationScreen();

      case "property_details":
        return renderPropertyDetailsScreen();

      case "timing":
        return renderTimingScreen();

      case "inheritance":
        return renderInheritanceScreen();

      case "heirs":
        return renderHeirsScreen();

      case "financing":
        return renderFinancingScreen();

      case "options":
        return renderOptionsScreen();

      case "barriers":
        return renderBarriersScreen();

      case "decision":
        return renderDecisionScreen();

      case "priority":
        return renderPriorityScreen();

      case "contact":
        return renderContactScreen();

      default:
        return renderSituationScreen();
    }
  }


  /* =========================================================
     SCREEN 2 — PROPERTY TYPE
     ========================================================= */

  function renderPropertyTypeScreen() {

    const selected = state.propertyType;

    return `

      <div class="bw-header">

        <div class="bw-header__eyebrow">
          Ihre Immobilie
        </div>

        <h1 class="bw-header__title">
          Um welche Immobilie geht es?
        </h1>

      </div>

      <div class="bw-property-options" role="group" aria-label="Art der Immobilie">

        ${renderPropertyCard("house", "Haus", "Ein- oder Zweifamilienhaus", renderHouseIllustration(), selected === "house")}

        ${renderPropertyCard("apartment", "Eigentumswohnung", "", renderApartmentIllustration(), selected === "apartment")}

        ${renderPropertyCard("multi_family", "Mehrfamilienhaus", "Haus mit mehreren Wohneinheiten", renderMultiFamilyIllustration(), selected === "multi_family")}

        ${renderPropertyCard("commercial", "Gewerbeimmobilie", "Büro-, Handels- oder Gewerbeobjekt", renderOfficeIllustration(), selected === "commercial")}

        ${renderPropertyCard("land", "Grundstück", "Bauland oder unbebautes Grundstück", renderLandIllustration(), selected === "land")}

      </div>

    `;
  }


  function renderPropertyCard(value, title, description, illustration, isSelected) {

    return `
      <button
        class="bw-property-card ${isSelected ? "bw-property-card--selected" : ""}"
        type="button"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('propertyType', '${value}')"
      >
        <span class="bw-property-card__visual" aria-hidden="true">
          ${illustration}
        </span>

        <span class="bw-property-card__body">
          <span class="bw-property-card__title">${title}</span>
          ${description ? `<span class="bw-property-card__description">${description}</span>` : ""}
          <span class="bw-property-card__arrow" aria-hidden="true">›</span>
        </span>
      </button>
    `;
  }


  /* =========================================================
     2D HOUSE ILLUSTRATIONS — INLINE SVG
     ========================================================= */

  /* Gemeinsamer Rahmen (viewBox, Strichfarbe, Bodenlinie) und ein
     Fenster-Helfer — die drei Motive teilen sich fast die ganze Hülle.
     Kein aria-label nötig: die Illustrationen stehen in aria-hidden-Spans. */
  function bwScene(body, groundD) {
    return '<svg viewBox="0 0 220 165"><g fill="none" stroke="#051B4C" stroke-width="3" stroke-linejoin="round">' +
      body + '</g><path d="' + groundD +
      '" fill="none" stroke="#C3CCDC" stroke-width="3" stroke-linecap="round"/></svg>';
  }

  function bwWin(x, y, w) {
    return '<rect x="' + x + '" y="' + y + '" width="' + (w || 22) +
      '" height="22" rx="1" fill="#E9EEF6"/>';
  }

  function renderHouseIllustration() {
    return bwScene(
      '<path d="M35 78 L110 25 L185 78" fill="#DCE3EF"/>' +
      '<path d="M51 68 V142 H169 V68" fill="#FFFFFF"/>' +
      '<path d="M91 142 V102 H129 V142" fill="#DCE3EF"/>' +
      bwWin(65, 88) + bwWin(133, 88) +
      '<path d="M35 78 H185"/><path d="M110 25 V14"/><path d="M104 14 H116"/>',
      "M28 142 H192");
  }


  function renderApartmentIllustration() {
    return bwScene(
      '<rect x="57" y="20" width="106" height="122" rx="2" fill="#FFFFFF"/>' +
      '<path d="M75 42 H145"/>' +
      bwWin(74, 56) + bwWin(124, 56) + bwWin(74, 91) + bwWin(124, 91) +
      '<rect x="98" y="112" width="24" height="30" fill="#DCE3EF"/>' +
      '<path d="M49 142 H171"/><path d="M68 20 V12 H152 V20"/>',
      "M35 142 H185");
  }


  function renderMultiFamilyIllustration() {
    return bwScene(
      '<path d="M45 142 V42 H175 V142" fill="#FFFFFF"/>' +
      '<path d="M45 42 L65 25 H155 L175 42" fill="#DCE3EF"/>' +
      bwWin(61, 57, 24) + bwWin(99, 57, 24) + bwWin(137, 57, 24) +
      bwWin(61, 91, 24) + bwWin(99, 91, 24) + bwWin(137, 91, 24) +
      '<rect x="95" y="113" width="30" height="29" fill="#DCE3EF"/>' +
      '<path d="M35 142 H185"/>',
      "M28 142 H192");
  }


  function renderOfficeIllustration() {
    return bwScene(
      '<rect x="49" y="26" width="122" height="116" rx="2" fill="#FFFFFF"/>' +
      '<path d="M61 26 V15 H85 V26" fill="#DCE3EF"/>' +
      bwWin(61, 44, 24) + bwWin(98, 44, 24) + bwWin(135, 44, 24) +
      bwWin(61, 76, 24) + bwWin(98, 76, 24) + bwWin(135, 76, 24) +
      '<rect x="98" y="108" width="24" height="34" fill="#DCE3EF"/>' +
      '<path d="M40 142 H180"/>',
      "M28 142 H192");
  }


  function renderTwoFamilyIllustration() {
    return bwScene(
      '<path d="M35 70 L110 22 L185 70" fill="#DCE3EF"/>' +
      '<path d="M49 62 V142 H171 V62" fill="#FFFFFF"/>' +
      '<path d="M49 100 H171"/>' +
      bwWin(63, 74) + bwWin(135, 74) + bwWin(63, 110) + bwWin(135, 110) +
      '<rect x="98" y="108" width="24" height="34" fill="#DCE3EF"/>' +
      '<path d="M35 70 H185"/>',
      "M28 142 H192");
  }


  function renderLandIllustration() {
    return bwScene(
      '<rect x="55" y="38" width="110" height="38" rx="3" fill="#FFFFFF"/>' +
      '<rect x="67" y="50" width="66" height="6" rx="3" fill="#DCE3EF"/>' +
      '<rect x="67" y="61" width="42" height="6" rx="3" fill="#E9EEF6"/>' +
      '<path d="M106 76 V142"/>' +
      '<path d="M62 142c6-11 14-13 21-8"/>' +
      '<path d="M152 142c-5-10-13-12-19-7"/>',
      "M40 142 H180");
  }


  /* =========================================================
     SCREEN 2B — HOUSE TYPE
     ========================================================= */

  function renderHouseTypeScreen() {

    const selected = state.houseType;

    return `

      <div class="bw-header">

        <div class="bw-header__eyebrow">
          Ihre Immobilie
        </div>

        <h1 class="bw-header__title">
          Welcher Haustyp ist es?
        </h1>

      </div>

      <div class="bw-house-type-options" role="group" aria-label="Haustyp">

        ${renderHouseTypeCard("detached", "Einfamilienhaus", "Freistehendes Einfamilienhaus", selected === "detached")}

        ${renderHouseTypeCard("terraced", "Reihenhaus", "Haus innerhalb einer Reihenhauszeile", selected === "terraced")}

        ${renderHouseTypeCard("semi_detached", "Doppelhaushälfte", "Eine von zwei verbundenen Haushälften", selected === "semi_detached")}

        ${renderHouseTypeCard("two_family", "Zweifamilienhaus", "Haus mit zwei getrennten Wohnungen", selected === "two_family")}

        ${renderHouseTypeCard("multi_family", "Mehrfamilienhaus", "Haus mit drei oder mehr Wohneinheiten", selected === "multi_family")}

      </div>

      <button
        type="button"
        class="bw-house-type-unknown"
        onclick="window.BWPropertyFunnel.selectOption('houseType', 'unknown')"
      >
        Weiß ich nicht
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

  /* Ohne konfiguriertes Foto zeigt die Karte eine passende
     SVG-Illustration — jede Karte hat damit immer ein Bild. */
  const HOUSE_TYPE_FALLBACK = {
    two_family: renderTwoFamilyIllustration,
    multi_family: renderMultiFamilyIllustration
  };

  function renderHouseTypeCard(value, title, description, isSelected) {

    const visual = HOUSE_TYPE_IMAGES[value]
      ? `<img src="${HOUSE_TYPE_IMAGES[value]}" alt="">`
      : (HOUSE_TYPE_FALLBACK[value] || renderHouseIllustration)();

    return `
      <button
        class="bw-house-type-card ${isSelected ? "bw-house-type-card--selected" : ""}"
        type="button"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('houseType', '${value}')"
      >
        <span class="bw-house-type-card__visual" aria-hidden="true">
          ${visual}
        </span>
        <span class="bw-house-type-card__body">
          <span class="bw-house-type-card__title">${title}</span>
          <span class="bw-property-card__description">${description}</span>
        </span>
        <span class="bw-house-type-card__arrow" aria-hidden="true">›</span>
      </button>
    `;
  }


  /* =========================================================
     SCREEN 1 — SITUATION
     ========================================================= */

  function renderSituationScreen() {

    const selected = state.situation;
    /* Report-Thumbnail: bevorzugt CONFIG.assets.report; sonst aus dem
       (funktionierenden) Hero-Pfad ableiten — gleiche Asset-Ablage,
       nur anderer Dateiname; sonst relativ zum Script. */
    const reportImg =
      CONFIG.assets.report ||
      (CONFIG.assets.hero
        ? CONFIG.assets.hero.replace(/[^/]+$/, "erbfall%20report.png")
        : SCRIPT_BASE + "erbfall%20report.png");

    return `
      <div class="bw-situation-banner">
        <div class="bw-situation-banner__thumb" aria-hidden="true">
          <img src="${reportImg}" alt=""
            onerror="this.closest('.bw-situation-banner__thumb').style.display='none'">
        </div>
        <div class="bw-situation-banner__text">
          <div class="bw-situation-banner__title">Erste Einschätzung &amp; persönlicher Report</div>
          <div class="bw-situation-banner__sub">Finden Sie heraus, welche Option zu Ihrer Situation passt</div>
        </div>
      </div>

      <section class="bw-situation-content">
        <h1>Was ist Ihre größte Frage zur geerbten Immobilie?</h1>

        <div class="bw-situation-options" role="group" aria-label="Ihre größte Frage" style="margin-top:18px">
          ${renderSituationCard("value", "Was ist die Immobilie wert?", "Marktwert und realistische Preisspanne", selected === "value")}
          ${renderSituationCard("sell_or_keep", "Verkaufen oder behalten?", "Welche Option passt zu meiner Situation?", selected === "sell_or_keep")}
          ${renderSituationCard("rent_or_sell", "Vermieten oder verkaufen?", "Laufende Einnahmen oder Kapital freisetzen", selected === "rent_or_sell")}
          ${renderSituationCard("multiple_heirs", "Wir sind mehrere Erben", "Gemeinsam eine faire Lösung finden", selected === "multiple_heirs")}
          ${renderSituationCard("unsure", "Ich weiß noch nicht, was sinnvoll ist", "Erst einmal Orientierung bekommen", selected === "unsure")}
        </div>

        <div class="bw-situation-helper">
          ${SITUATION_ICONS.lock}
          Ihre Angaben werden vertraulich behandelt.
        </div>
      </section>
    `;
  }


  function renderSituationCard(value, title, description, isSelected) {
    return `
      <button
        class="bw-situation-card ${isSelected ? "bw-situation-card--selected" : ""}"
        type="button"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('situation', '${value}')"
      >
        <span class="bw-situation-card__number" aria-hidden="true">${SITUATION_ICONS[value] || ""}</span>
        <span>
          <span class="bw-situation-card__title">${title}</span>
          ${description ? `<span class="bw-situation-card__description">${description}</span>` : ""}
        </span>
        <span class="bw-situation-card__arrow" aria-hidden="true">›</span>
      </button>
    `;
  }


  /* =========================================================
     FORM HELPERS
     ========================================================= */

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/\x22/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function updateField(path, value) {
    const parts = path.split(".");
    let target = state;
    for (let i = 0; i < parts.length - 1; i++) target = target[parts[i]];
    target[parts[parts.length - 1]] = value;
  }

  function trackField(field, value) {
    track("field_updated", { field, has_value: Boolean(String(value || "").trim()) });
  }

  /* Zurück steht zentral am unteren Ende jedes Schritts (ab dem zweiten).
     Zentraler Ort statt pro Screen: kein neuer Screen kann ihn vergessen. */
  function renderBottomBack() {
    if (getStepNumber(state.currentStep) <= 1) return "";
    return `
      <div class="bw-bottomnav">
        <button type="button" class="bw-back" onclick="window.BWPropertyFunnel.back()">← Zurück</button>
      </div>
    `;
  }

  function renderContinueButton(label = "Weiter") {
    return `
      <div class="bw-navigation">
        <div class="bw-navigation__right">
          <button type="button" class="bw-button" onclick="window.BWPropertyFunnel.continueCurrent()">${label}</button>
        </div>
      </div>
    `;
  }

  function renderLocationScreen() {
    const a = state.address;
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Die Lage</div>
        <h1 class="bw-header__title">Wo befindet sich die Immobilie?</h1>
      </div>

      <div class="bw-form-card">
        <div class="bw-field bw-address-autocomplete">
          <label class="bw-field__label" for="bw-street">Straße + Hausnummer</label>
          <input id="bw-street" class="bw-field__input" autocomplete="street-address"
            value="${esc(a.street)}" placeholder="z. B. Goethestraße 12"
            oninput="window.BWPropertyFunnel.handleStreetInput(this.value)"
            onblur="window.BWPropertyFunnel.trackField('address.street', this.value)">
          <div id="bw-address-suggestions" class="bw-address-suggestions" hidden></div>
          <div id="bw-address-status" class="bw-address-status"></div>
        </div>

        <div class="bw-location-row--city">
          <div class="bw-field">
            <label class="bw-field__label" for="bw-postal">PLZ</label>
            <input id="bw-postal" class="bw-field__input" inputmode="numeric" maxlength="5"
              autocomplete="postal-code" value="${esc(a.postalCode)}" placeholder="z. B. 55218"
              oninput="window.BWPropertyFunnel.updateField('address.postalCode', this.value = this.value.replace(/[^0-9]/g,''))"
              onblur="window.BWPropertyFunnel.trackField('address.postalCode', this.value)">
          </div>
          <div class="bw-field">
            <label class="bw-field__label" for="bw-city">Ort</label>
            <input id="bw-city" class="bw-field__input" autocomplete="address-level2"
              value="${esc(a.city)}" placeholder="z. B. Mainz"
              oninput="window.BWPropertyFunnel.updateField('address.city', this.value)"
              onblur="window.BWPropertyFunnel.trackField('address.city', this.value)">
          </div>
        </div>
        <div class="bw-required-note">Tipp: Je genauer Sie Straße und Hausnummer eingeben, desto genauer können wir PLZ und Ort ergänzen.</div>
      </div>
      ${renderContinueButton()}
    `;
  }

  function renderPropertyDetailsScreen() {
    const p = state.property;
    const t = state.propertyType;
    const isApartment = t === "apartment";
    const isLand = t === "land";
    const isMultiFamily = t === "multi_family";
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Immobilie</div>
        <h1 class="bw-header__title">${isLand ? "Wie groß ist das Grundstück?" : "Ein paar Angaben zu Ihrer Immobilie"}</h1>
      </div>

      <div class="bw-form-card">
        <div class="bw-form-grid--three">
          ${isLand ? "" : `
          <div class="bw-field">
            <label class="bw-field__label" for="bw-living">${t === "commercial" ? "Nutzfläche" : "Wohnfläche"}</label>
            <input id="bw-living" class="bw-field__input" inputmode="decimal" placeholder="${t === "commercial" ? "400 m²" : "150 m²"}"
              value="${esc(p.livingSpace)}"
              oninput="window.BWPropertyFunnel.updateField('property.livingSpace', this.value)"
              onblur="window.BWPropertyFunnel.trackField('property.livingSpace', this.value)">
          </div>`}

          ${isApartment ? `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-floor">Etage</label>
              <input id="bw-floor" class="bw-field__input" inputmode="numeric" placeholder="2"
                value="${esc(p.floor)}"
                oninput="window.BWPropertyFunnel.updateField('property.floor', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.floor', this.value)">
            </div>
          ` : `
            <div class="bw-field">
              <label class="bw-field__label" for="bw-plot">Grundstück</label>
              <input id="bw-plot" class="bw-field__input" inputmode="decimal" placeholder="600 m²"
                value="${esc(p.plotSize)}"
                oninput="window.BWPropertyFunnel.updateField('property.plotSize', this.value)"
                onblur="window.BWPropertyFunnel.trackField('property.plotSize', this.value)">
            </div>
          `}

          ${isLand ? "" : `
          <div class="bw-field">
            <label class="bw-field__label" for="bw-year">Baujahr</label>
            <input id="bw-year" class="bw-field__input" inputmode="numeric" maxlength="4" placeholder="1980"
              value="${esc(p.yearBuilt)}"
              oninput="window.BWPropertyFunnel.updateField('property.yearBuilt', this.value = this.value.replace(/[^0-9]/g,''))"
              onblur="window.BWPropertyFunnel.trackField('property.yearBuilt', this.value)">
          </div>`}
        </div>

        ${isMultiFamily ? `
        <div class="bw-field">
          <label class="bw-field__label" for="bw-units">Wie viele Wohneinheiten hat das Gebäude?</label>
          <input id="bw-units" class="bw-field__input" inputmode="numeric" placeholder="z. B. 4"
            value="${esc(p.units)}"
            oninput="window.BWPropertyFunnel.updateField('property.units', this.value = this.value.replace(/[^0-9]/g,''))"
            onblur="window.BWPropertyFunnel.trackField('property.units', this.value)">
        </div>` : ""}

        ${isLand ? "" : `
        <div class="bw-section-label">Wie ist der Zustand?</div>
        <div class="bw-choice-grid">
          ${renderChoice("condition","very_good","Sehr gut")}
          ${renderChoice("condition","good","Gut")}
          ${renderChoice("condition","renovation_needed","Renovierungsbedürftig")}
          ${renderChoice("condition","refurbishment_needed","Sanierungsbedürftig")}
        </div>`}

        ${isLand ? "" : `
        <div class="bw-section-label">Wie wird die Immobilie aktuell genutzt?</div>
        <div class="bw-choice-grid">
          ${renderChoice("usage","owner_occupied","Selbst genutzt")}
          ${renderChoice("usage","family_occupied","Von einem Familienmitglied bewohnt")}
          ${renderChoice("usage","rented","Vermietet")}
          ${renderChoice("usage","vacant","Leerstehend")}
          ${renderChoice("usage","unknown","Weiß ich nicht")}
        </div>

        ${p.usage === "rented" ? `
        <div class="bw-field" style="margin-top:12px">
          <label class="bw-field__label" for="bw-rent">Monatliche Kaltmiete <span class="bw-field__optional">(ca.)</span></label>
          <input id="bw-rent" class="bw-field__input" inputmode="numeric" placeholder="z. B. 850 €"
            value="${esc(p.rentIncome)}"
            oninput="window.BWPropertyFunnel.updateField('property.rentIncome', this.value)"
            onblur="window.BWPropertyFunnel.trackField('property.rentIncome', this.value)">
        </div>` : ""}`}
      </div>

      ${renderContinueButton()}
    `;
  }

  function renderChoice(field, value, label) {
    const current = getChoiceValue(field);
    const selected = Array.isArray(current) ? current.includes(value) : current === value;
    return `
      <button type="button" class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.setChoice('${field}','${value}')">
        <span class="bw-choice__label">${label}</span>
        <span class="bw-choice__check" aria-hidden="true">${BW_ICONS.check}</span>
      </button>
    `;
  }

  /* Decision Assistant, Schritt „Möglichkeiten“: Mehrfachauswahl statt
     einer einzelnen Absicht — die Auswahl fließt als Signal in
     computeOptionScores() ein („Ich bin noch völlig offen“ ist exklusiv). */
  function renderOptionsScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Möglichkeiten</div>
        <h1 class="bw-header__title">Welche Möglichkeiten ziehen Sie aktuell in Betracht?</h1>
      </div>

      <div class="bw-required-note" style="margin:0 0 10px">Mehrfachauswahl möglich – wir vergleichen die Optionen am Ende für Sie</div>

      <div class="bw-choice-grid bw-choice-grid--two">
        ${renderIconChoice("options","sell","tag","Verkaufen")}
        ${renderIconChoice("options","rent","banknote","Vermieten")}
        ${renderIconChoice("options","keep","key","Selbst nutzen / behalten")}
        ${renderIconChoice("options","develop","develop","Renovieren oder entwickeln")}
        ${renderIconChoice("options","family_takeover","people","Innerhalb der Familie übernehmen")}
        ${renderIconChoice("options","open","help","Ich bin noch völlig offen")}
      </div>

      ${renderContinueButton()}
    `;
  }

  /* Schritt „Entscheidungsbarrieren“: was aus Sicht des Nutzers gegen
     das Behalten spricht. „Nichts davon“ / „Ich weiß es noch nicht“
     sind exklusiv zu den konkreten Hürden. */
  function renderBarriersScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Situation</div>
        <h1 class="bw-header__title">Was spricht für Sie aktuell gegen das Behalten der Immobilie?</h1>
      </div>

      <div class="bw-required-note" style="margin:0 0 10px">Mehrfachauswahl möglich</div>

      <div class="bw-choice-grid bw-choice-grid--two">
        ${renderChoice("barriers","refurbishment","Hoher Sanierungsbedarf")}
        ${renderChoice("barriers","low_rent","Zu wenig Mieteinnahmen")}
        ${renderChoice("barriers","effort","Zu viel Aufwand")}
        ${renderChoice("barriers","financing","Bestehende Finanzierung / Schulden")}
        ${renderChoice("barriers","heirs","Erbengemeinschaft")}
        ${renderChoice("barriers","liquidity","Ich benötige Liquidität")}
        ${renderChoice("barriers","no_landlord","Ich möchte kein Vermieter sein")}
        ${renderChoice("barriers","lifestyle","Die Immobilie passt nicht zu meiner Lebenssituation")}
        ${renderChoice("barriers","none","Nichts davon")}
        ${renderChoice("barriers","unknown","Ich weiß es noch nicht")}
      </div>

      ${renderContinueButton()}
    `;
  }

  function renderSimpleChoice(field, value, icon, label) {
    const selected = state[field] === value;
    return `
      <button type="button" class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.setChoice('${field}','${value}')">
        <span class="bw-choice__icon" aria-hidden="true">${BW_ICONS[icon] || ""}</span>
        <span class="bw-choice__label">${label}</span>
        <span class="bw-choice__chevron" aria-hidden="true">›</span>
      </button>
    `;
  }

  function renderInheritanceScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Erbensituation</div>
        <h1 class="bw-header__title">Wie ist die Erbsituation aktuell?</h1>
      </div>

      <div class="bw-choice-grid">
        ${renderSimpleChoice("inheritance","sole_heir","person","Ich bin alleiniger Erbe")}
        ${renderSimpleChoice("inheritance","multiple_heirs","people","Wir sind mehrere Erben")}
        ${renderSimpleChoice("inheritance","unclear","help","Noch nicht vollständig geklärt")}
      </div>
    `;
  }

  function renderTimingScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Erbfall</div>
        <h1 class="bw-header__title">Wie lange ist der Erbfall ungefähr her?</h1>
      </div>

      <div class="bw-choice-grid">
        ${renderChoice("timing","lt_6w","Vor weniger als 6 Wochen")}
        ${renderChoice("timing","w6_m6","Vor 6 Wochen bis 6 Monaten")}
        ${renderChoice("timing","m6_y2","Vor 6 bis 24 Monaten")}
        ${renderChoice("timing","gt_2y","Vor mehr als 2 Jahren")}
        ${renderChoice("timing","unknown","Weiß ich nicht genau")}
      </div>
    `;
  }

  /* Formular-Auswahl mit Icon-Kreis links (gleiche Optik wie die
     Icon-Karten der Auswahl-Schritte) und Haken-Kreis rechts. */
  function renderIconChoice(field, value, icon, label) {
    const current = getChoiceValue(field);
    const selected = Array.isArray(current) ? current.includes(value) : current === value;
    return `
      <button type="button" class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.setChoice('${field}','${value}')">
        <span class="bw-choice__icon" aria-hidden="true">${BW_ICONS[icon] || ""}</span>
        <span class="bw-choice__label">${label}</span>
        <span class="bw-choice__check" aria-hidden="true">${BW_ICONS.check}</span>
      </button>
    `;
  }

  function renderCountChoice(value, label, ariaLabel) {
    const selected = state.heirs.count === value;
    return `
      <button type="button" class="bw-count ${selected ? "bw-count--selected" : ""}"
        aria-pressed="${selected}" aria-label="${ariaLabel}"
        onclick="window.BWPropertyFunnel.setChoice('heirsCount','${value}')">${label}</button>
    `;
  }

  function renderHeirsScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Erbensituation</div>
        <h1 class="bw-header__title">Ihre Erbengemeinschaft</h1>
      </div>

      <div class="bw-form-card">
        <div class="bw-section-label" style="margin-top:0">Wie viele Personen sind beteiligt?</div>
        <div class="bw-count-row">
          ${renderCountChoice("2","2","2 Erben")}
          ${renderCountChoice("3","3","3 Erben")}
          ${renderCountChoice("4","4","4 Erben")}
          ${renderCountChoice("5plus","5+","5 oder mehr Erben")}
        </div>

        <div class="bw-section-label">Wie sind sich die Erben aktuell einig?</div>
        <div class="bw-choice-grid">
          ${renderIconChoice("heirsAgreement","agreed","agree","Wir sind uns grundsätzlich einig")}
          ${renderIconChoice("heirsAgreement","undecided","help","Wir haben noch keine Entscheidung getroffen")}
          ${renderIconChoice("heirsAgreement","different","split","Wir haben unterschiedliche Vorstellungen")}
          ${renderIconChoice("heirsAgreement","dispute","conflict","Es gibt bereits Streit")}
        </div>

        <div class="bw-section-label">Möchte jemand aus der Familie die Immobilie möglicherweise selbst übernehmen?</div>
        <div class="bw-choice-grid">
          ${renderChoice("heirsTakeover","yes","Ja")}
          ${renderChoice("heirsTakeover","no","Nein")}
          ${renderChoice("heirsTakeover","unclear","Noch unklar")}
        </div>
      </div>

      ${renderContinueButton()}
    `;
  }

  function renderFinancingScreen() {
    const f = state.finance;
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Finanzierung</div>
        <h1 class="bw-header__title">Finanzierung &amp; Belastungen</h1>
      </div>

      <div class="bw-form-card">
        <div class="bw-section-label" style="margin-top:0">Besteht noch eine Finanzierung für die Immobilie?</div>
        <div class="bw-choice-grid">
          ${renderChoice("financing","no","Nein")}
          ${renderChoice("financing","yes","Ja")}
          ${renderChoice("financing","unknown","Weiß ich nicht")}
        </div>

        ${f.financing === "yes" ? `
        <div class="bw-section-label">Wie hoch ist die ungefähre Restschuld?</div>
        <div class="bw-choice-grid">
          ${renderChoice("remainingDebt","lt_100k","Unter 100.000 €")}
          ${renderChoice("remainingDebt","k100_250","100.000–250.000 €")}
          ${renderChoice("remainingDebt","k250_500","250.000–500.000 €")}
          ${renderChoice("remainingDebt","gt_500k","Über 500.000 €")}
          ${renderChoice("remainingDebt","unknown","Weiß ich nicht")}
        </div>` : ""}

        <div class="bw-section-label">Gibt es besondere Rechte oder Belastungen? <span class="bw-field__optional">(z. B. Wohnrecht, Nießbrauch, Grundschuld)</span></div>
        <div class="bw-choice-grid">
          ${renderChoice("encumbrance","none","Keine")}
          ${renderChoice("encumbrance","yes","Ja, es gibt welche")}
          ${renderChoice("encumbrance","unknown","Weiß ich nicht")}
        </div>
      </div>

      ${renderContinueButton()}
    `;
  }

  function renderPriorityScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Prioritäten</div>
        <h1 class="bw-header__title">Was ist Ihnen bei der Entscheidung am wichtigsten?</h1>
      </div>

      <div class="bw-required-note" style="margin:0 0 10px">Mehrfachauswahl möglich – Ihre Prioritäten gewichten die Optionen</div>

      <div class="bw-choice-grid bw-choice-grid--two">
        ${renderChoice("priority","price","Möglichst guten Preis erzielen")}
        ${renderChoice("priority","speed","Schnell eine Lösung finden")}
        ${renderChoice("priority","effort","Möglichst wenig Aufwand")}
        ${renderChoice("priority","fair","Faire Lösung für alle Erben")}
        ${renderChoice("priority","wealth","Langfristig Vermögen aufbauen")}
        ${renderChoice("priority","own_use","Immobilie selbst nutzen")}
        ${renderChoice("priority","income","Laufende Einnahmen erzielen")}
        ${renderChoice("priority","unknown","Ich weiß es noch nicht")}
      </div>

      ${renderContinueButton()}
    `;
  }

  /* =========================================================
     REPORT COVER (Report-Schritt)
     Statische Report-Vorschau ("erbfall report.png"), kleiner
     dargestellt. Dekorativ; der echte Report kommt per E-Mail.
     ========================================================= */

  function renderReportCover() {
    const src =
      CONFIG.assets.report ||
      (CONFIG.assets.hero
        ? CONFIG.assets.hero.replace(/[^/]+$/, "erbfall%20report.png")
        : SCRIPT_BASE + "erbfall%20report.png");
    return `
      <div class="bw-report-image">
        <img src="${src}" alt="Beispiel: persönlicher Erbfall-Report" loading="lazy">
      </div>
    `;
  }

  /* Brücke zwischen Decision Assistant und Report: die erste Einschätzung
     wird hier aufgegriffen — der Report vertieft sie. */
  function renderReportRecap() {
    const r = computeOptionScores();
    if (r.isOpen) {
      return `
      <div class="bw-report-recap">
        Ihre erste Einschätzung: <strong>mehrere Optionen liegen gleichauf</strong>. Im Report ordnen wir sie anhand von Marktwert, Lage und Erbsituation ein.
      </div>`;
    }
    return `
      <div class="bw-report-recap">
        Ihre erste Einschätzung: <strong>${OPTION_DEFS[r.recommended].label}</strong> (${r.scores[r.recommended]} % passend). Im Report vergleichen wir alle Optionen mit Marktwert, Chancen und Risiken.
      </div>`;
  }

  function renderContactScreen() {
    const c = state.contact;
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihr persönlicher Report</div>
        <h1 class="bw-header__title">Vertiefen Sie Ihre erste Einschätzung mit dem persönlichen Erbfall-Report.</h1>
      </div>

      <div class="bw-lead-layout">
        <div>
          ${renderReportCover()}

          ${renderReportRecap()}

          <div class="bw-trust bw-trust--stack">
            <span>Marktwert &amp; realistische Preisspanne</span>
            <span>Erbschaftsrelevante Faktoren</span>
            <span>Vergleich Ihrer Optionen: Chancen &amp; Risiken</span>
            <span>Entscheidungsfaktoren &amp; nächste Schritte</span>
          </div>
        </div>

        <div class="bw-form-card">
          <div class="bw-section-label" style="margin-top:0">Wohin dürfen wir Ihren Report senden?</div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-email">E-Mail</label>
            <input id="bw-email" class="bw-field__input" type="email" autocomplete="email" placeholder="max@beispiel.de"
              value="${esc(c.email)}"
              oninput="window.BWPropertyFunnel.updateField('contact.email', this.value)"
              onblur="window.BWPropertyFunnel.trackField('contact.email', this.value)">
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-phone">Telefon</label>
            <input id="bw-phone" class="bw-field__input" type="tel" autocomplete="tel" placeholder="0176 12345678"
              value="${esc(c.phone)}"
              oninput="window.BWPropertyFunnel.updateField('contact.phone', this.value)"
              onblur="window.BWPropertyFunnel.trackField('contact.phone', this.value)">
          </div>

          <div class="bw-field">
            <label class="bw-field__label" for="bw-name">Name <span class="bw-field__optional">(optional)</span></label>
            <input id="bw-name" class="bw-field__input" autocomplete="name" placeholder="Max Mustermann"
              value="${esc(c.firstName)}"
              oninput="window.BWPropertyFunnel.updateField('contact.firstName', this.value)">
          </div>

          <div id="bw-contact-error" class="bw-field__error" style="display:none"></div>

          <div style="position:absolute;left:-9999px;top:auto;height:1px;width:1px;overflow:hidden" aria-hidden="true">
            <label for="bw-extra-field">Dieses Feld bitte leer lassen</label>
            <input id="bw-extra-field" type="text" tabindex="-1" autocomplete="off">
          </div>

          <button id="bw-submit-lead" type="button" class="bw-button" style="width:100%;margin-top:8px"
            onclick="window.BWPropertyFunnel.submitLead()">
            Kostenlosen Erbfall-Report erhalten
          </button>

          <div class="bw-trust">
            <span>Kostenlos &amp; unverbindlich</span>
            <span>Neutral &amp; unabhängig</span>
            <span>Vertrauliche Behandlung Ihrer Daten</span>
          </div>

          <div class="bw-privacy">
            Auf Wunsch bespricht Immobilienexperte Jörg von Bierbrauer (Rhein-Main) die Ergebnisse persönlich mit Ihnen.
            Mit dem Absenden stimmen Sie der Kontaktaufnahme zum Erbfall-Report zu.
          </div>
        </div>
      </div>
    `;
  }

  let addressSearchTimer = null;
  let addressSearchController = null;
  let addressSearchSequence = 0;

  function handleStreetInput(value) {
    state.address.street = value;
    state.address.selectedAddress = null;

    const status = document.getElementById("bw-address-status");
    const list = document.getElementById("bw-address-suggestions");
    if (status) status.textContent = "";

    // Once the user changes the address, don't keep an old auto-filled PLZ/Ort.
    if (state.address.postalCode || state.address.city) {
      state.address.postalCode = "";
      state.address.city = "";
      const postal = document.getElementById("bw-postal");
      const city = document.getElementById("bw-city");
      if (postal) postal.value = "";
      if (city) city.value = "";
    }

    clearTimeout(addressSearchTimer);
    if (addressSearchController) addressSearchController.abort();
    if (!list) return;

    const query = value.trim();
    if (query.length < 4) {
      list.hidden = true;
      list.innerHTML = "";
      return;
    }

    addressSearchTimer = setTimeout(() => searchAddresses(query), 300);
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

    track("address_search", { query_length: query.length });

    try {
      /* bbox begrenzt auf Deutschland; lat/lon/zoom bevorzugen Treffer
         im Rhein-Main-Gebiet (Zielregion), ohne andere auszuschließen. */
      const url = "https://photon.komoot.io/api/?" + new URLSearchParams({
        q: query,
        lang: "de",
        limit: "5",
        lat: "50.0",
        lon: "8.27",
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

      const features = (data.features || []).filter(f => {
        const p = f.properties || {};
        return p.countrycode === "DE" || p.country === "Germany" || p.country === "Deutschland";
      }).slice(0, 5);

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

      list.innerHTML = features.map((feature) => {
        const p = feature.properties || {};

        // Photon can occasionally return postcode/city as part of "street".
        // Normalize this before displaying the suggestion.
        let streetName = String(p.street || p.name || query).trim();
        let postalCode = String(p.postcode || "").trim();
        let city = String(
          p.city || p.town || p.village || p.municipality || p.district || ""
        ).trim();

        const trailingPostcode = streetName.match(/(?:\s|^)(\d{5})(?:\s+(.+))?$/);
        if (!postalCode && trailingPostcode) {
          postalCode = trailingPostcode[1];
          if (!city && trailingPostcode[2]) city = trailingPostcode[2].trim();
          streetName = streetName.slice(0, trailingPostcode.index).trim();
        }

        // Remove accidental duplicated postcode/city fragments.
        streetName = streetName.replace(/\s{2,}/g, " ").trim();

        const street = [streetName, p.housenumber].filter(Boolean).join(" ");
        const locality = [postalCode, city].filter(Boolean).join(" ");

        const payload = encodeURIComponent(JSON.stringify({
          street,
          postalCode,
          city,
          lat: feature.geometry?.coordinates?.[1] || null,
          lon: feature.geometry?.coordinates?.[0] || null,
          display: street
        }));

        return `<button type="button"
          class="bw-address-suggestion"
          data-address="${payload}"
          onclick="window.BWPropertyFunnel.selectAddress(this.dataset.address)">
          <span class="bw-address-suggestion__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7">
              <path d="M12 21s6-5.15 6-11a6 6 0 1 0-12 0c0 5.85 6 11 6 11Z"/>
              <circle cx="12" cy="10" r="2.1"/>
            </svg>
          </span>
          <span class="bw-address-suggestion__copy">
            <span class="bw-address-suggestion__main">${esc(street)}</span>
            <span class="bw-address-suggestion__meta">${esc(locality || "Deutschland")}</span>
          </span>
          <span class="bw-address-suggestion__chevron" aria-hidden="true">›</span>
        </button>`;
      }).join("");

      track("address_suggestions_shown", { count: features.length });
    } catch (error) {
      if (error.name === "AbortError") return;
      console.warn("Address autocomplete unavailable", error);
      list.hidden = true;
      list.innerHTML = "";
    }
  }

  function selectAddress(encodedAddress) {
    let selected;
    try { selected = JSON.parse(decodeURIComponent(encodedAddress)); } catch (e) { return; }

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
    if (list) { list.hidden = true; list.innerHTML = ""; }
    if (status) {
      status.className = "bw-address-status bw-address-status--success";
      status.textContent = state.address.postalCode && state.address.city ? "✓ Adresse erkannt" : "Adresse erkannt – bitte PLZ und Ort prüfen";
    }

    track("address_selected", {
      has_postcode: Boolean(state.address.postalCode),
      has_city: Boolean(state.address.city),
      latitude: selected.lat,
      longitude: selected.lon
    });
  }

  function validateCurrentStep() {

    if (state.currentStep === "location") {
      /*
       * IMPORTANT:
       * Always sync the live DOM values before validating.
       * This prevents a stale validation state after the user first enters
       * an invalid address and then corrects it.
       */
      const streetEl = document.getElementById("bw-street");
      const postalEl = document.getElementById("bw-postal");
      const cityEl = document.getElementById("bw-city");

      if (streetEl) state.address.street = streetEl.value.trim();
      if (postalEl) state.address.postalCode = String(postalEl.value || "").replace(/[^0-9]/g, "").slice(0, 5);
      if (cityEl) state.address.city = cityEl.value.trim();

      const a = state.address;

      const street = String(a.street || "").trim();
      const postalCode = String(a.postalCode || "").trim();
      const city = String(a.city || "").trim();

      if (!street || postalCode.length !== 5 || !/^[0-9]{5}$/.test(postalCode) || !city) {
        return "Bitte Straße, 5-stellige PLZ und Ort angeben.";
      }

      // Keep state normalized to exactly what was validated.
      state.address.street = street;
      state.address.postalCode = postalCode;
      state.address.city = city;

      /*
       * The user may manually correct PLZ or city after selecting an
       * autocomplete result. That is valid as long as the final fields
       * contain a complete address. The old selectedAddress must therefore
       * never be required for validation.
       */
    }

    if (state.currentStep === "property_details") {
      const p = state.property;
      const t = state.propertyType;

      /* Grundstück: nur die Fläche. Gewerbe: Nutzfläche/Baujahr/Zustand,
         Grundstück optional. Wohnung: Etage statt Grundstück. */
      if (t === "land") {
        if (!p.plotSize.trim()) {
          return "Bitte die Grundstücksgröße angeben.";
        }
      } else {
        if (!p.livingSpace.trim() || !p.yearBuilt.trim() || !p.condition) {
          return "Bitte die drei Angaben ausfüllen und den Zustand auswählen.";
        }
        if (t === "apartment" && !p.floor.trim()) {
          return "Bitte die Etage angeben.";
        }
        if (t !== "apartment" && t !== "commercial" && !p.plotSize.trim()) {
          return "Bitte die Grundstücksgröße angeben.";
        }
        if (!p.usage) {
          return "Bitte angeben, wie die Immobilie aktuell genutzt wird.";
        }
      }
    }

    if (state.currentStep === "heirs") {
      if (!state.heirs.count || !state.heirs.agreement || !state.heirs.takeover) {
        return "Bitte alle drei Fragen beantworten.";
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
        return "Bitte die Frage zu weiteren Belastungen beantworten.";
      }
    }

    if (state.currentStep === "options") {
      if (!state.options.length) {
        return "Bitte mindestens eine Möglichkeit auswählen.";
      }
    }

    if (state.currentStep === "barriers") {
      if (!state.barriers.length) {
        return "Bitte mindestens eine Antwort auswählen.";
      }
    }

    if (state.currentStep === "priority") {
      if (!state.priority.length) {
        return "Bitte mindestens eine Option auswählen.";
      }
    }

    return null;
  }

  /* =========================================================
     AUTOMATISCHE EINSCHÄTZUNG
     Regelbasiert aus den Antworten: Entscheidungsdruck,
     Komplexität und die wichtigsten offenen Punkte.
     ========================================================= */

  function computeAssessment() {
    const t = state.timing;
    const f = state.finance;
    const agr = state.heirs.agreement;
    let pressure = 0;
    let cx = 0;

    if (t === "lt_6w") pressure += 2;
    else if (t === "w6_m6") pressure += 1;
    if (f.financing === "yes") { pressure += 1; cx += 1; }
    if (f.financing === "unknown") cx += 1;
    if (agr === "dispute") { pressure += 2; cx += 2; }
    else if (agr === "different") { pressure += 1; cx += 1; }
    else if (agr === "undecided") pressure += 1;
    if (state.priority.includes("speed")) pressure += 2;

    if (state.inheritance === "multiple_heirs") {
      cx += state.heirs.count === "5plus" ? 3 : state.heirs.count === "2" ? 1 : 2;
    }
    if (f.encumbrance === "yes" || f.encumbrance === "unknown") cx += 1;
    if (state.propertyType === "commercial" || state.propertyType === "multi_family" || state.propertyType === "land") cx += 1;

    /* Leerstand erzeugt laufende Kosten und Handlungsdruck. */
    if (state.property.usage === "vacant") pressure += 1;
    /* Interne Familienübernahme heißt: Wert + Ausgleich unter den Erben klären. */
    if (state.heirs.takeover === "yes") cx += 1;
    else if (state.heirs.takeover === "unclear") cx += 1;

    const level = s => s >= 4 ? "Hoch" : s >= 2 ? "Mittel" : "Niedrig";

    const risks = [];
    if (t === "lt_6w") risks.push("Ausschlagungsfrist (6 Wochen) im Blick behalten");
    if (agr === "dispute") risks.push("Konflikt in der Erbengemeinschaft moderieren");
    else if (agr === "different" || agr === "undecided") risks.push("Gemeinsame Entscheidung der Erben herbeiführen");
    if (f.financing === "yes") risks.push("Laufende Finanzierung und Ablösung klären");
    else if (f.financing === "unknown") risks.push("Finanzierungsstatus beim Kreditinstitut klären");
    if (f.encumbrance === "yes") risks.push("Eingetragene Rechte/Belastungen im Grundbuch prüfen und bewerten lassen");
    else if (f.encumbrance === "unknown") risks.push("Grundbuch auf Belastungen prüfen");
    if (state.property.condition === "refurbishment_needed") risks.push("Sanierungsbedarf realistisch einpreisen");
    if (state.property.usage === "vacant") risks.push("Leerstand verursacht laufende Kosten – zeitnah eine Nutzung klären");
    if (state.heirs.takeover === "yes") risks.push("Interne Übernahme sauber bewerten (fairer Ausgleich unter den Erben)");
    if (!risks.length) risks.push("Unterlagen (Grundbuch, Flurkarte, Energieausweis) zusammenstellen");

    return { pressure: level(pressure), complexity: level(cx), risks: risks.slice(0, 3) };
  }

  /* =========================================================
     DECISION ASSISTANT — OPTIONS-SCORING
     Erweiterung des Assessments: Die vier Handlungsoptionen
     werden heuristisch aus den Antworten bewertet. Jede
     Punktvergabe hinterlegt einen lesbaren Grund — daraus
     entstehen die Pro/Contra-Punkte im Vergleich und die
     Begründung der Empfehlung. Ergebnis ist eine Orientierung
     (Passung 0–100), keine Finanz-, Steuer- oder Rechtsberatung.
     ========================================================= */

  const OPTION_DEFS = {
    sell: {
      label: "Verkaufen",
      phrase: "einen Verkauf",
      pros: ["Schnellere Lösung", "Weniger laufender Aufwand", "Einfacher bei mehreren Erben"],
      cons: ["Möglicher Verzicht auf langfristige Wertentwicklung"]
    },
    rent: {
      label: "Vermieten",
      phrase: "eine Vermietung",
      pros: ["Laufende Einnahmen", "Langfristiges Vermögenspotenzial"],
      cons: ["Laufender Verwaltungsaufwand", "Kapital bleibt gebunden"]
    },
    keep: {
      label: "Behalten",
      phrase: "das Behalten",
      pros: ["Eigennutzung möglich", "Langfristiger Vermögensaufbau"],
      cons: ["Kapitalbindung", "Laufende Kosten und Instandhaltung"]
    },
    develop: {
      label: "Renovieren / Entwickeln",
      phrase: "eine Sanierung oder Entwicklung",
      pros: ["Mögliches Wertsteigerungspotenzial"],
      cons: ["Hoher Aufwand", "Investitionsbedarf", "Höhere Komplexität"]
    }
  };

  const OPTION_KEYS = ["sell", "rent", "keep", "develop"];

  function computeOptionScores() {
    const p = state.property;
    const f = state.finance;
    const h = state.heirs;
    const opts = state.options;
    const bars = state.barriers;
    const prio = state.priority;
    const type = state.propertyType;
    const usage = p.usage;
    const cond = p.condition;
    const multi = state.inheritance === "multiple_heirs";
    const agr = multi ? h.agreement : null;
    const manyHeirs = multi && (h.count === "4" || h.count === "5plus");
    const highDebt = f.financing === "yes" && (f.remainingDebt === "k250_500" || f.remainingDebt === "gt_500k");
    const needsWork = cond === "renovation_needed" || cond === "refurbishment_needed";
    const plot = parseFloat(String(p.plotSize || "").replace(/[^0-9,.]/g, "").replace(",", "."));
    const units = parseInt(p.units, 10);
    const year = parseInt(p.yearBuilt, 10);
    const multiUnit = state.houseType === "two_family" || state.houseType === "multi_family";
    const assessment = computeAssessment();

    const score = { sell: 50, rent: 50, keep: 50, develop: 50 };
    const factors = { sell: [], rent: [], keep: [], develop: [] };

    /* Punkte und lesbaren Grund in einem Schritt vergeben */
    function add(option, delta, text) {
      score[option] += delta;
      if (text) factors[option].push({ text: text, delta: delta });
    }

    /* ---- Erbsituation ---- */
    if (agr === "dispute") {
      add("sell", 12, "Es gibt bereits Streit in der Erbengemeinschaft");
      add("rent", -10, "Streit unter den Erben erschwert eine gemeinsame Vermietung");
      add("keep", -12, "Streit unter den Erben erschwert das gemeinsame Halten");
      add("develop", -12, "Streit unter den Erben erschwert ein gemeinsames Projekt");
    } else if (agr === "different") {
      add("sell", 8, "Mehrere Erben mit unterschiedlichen Vorstellungen");
      add("rent", -6, "Unterschiedliche Vorstellungen der Erben");
      add("keep", -8, "Unterschiedliche Vorstellungen der Erben");
      add("develop", -8, "Unterschiedliche Vorstellungen der Erben");
    } else if (agr === "undecided") {
      add("sell", 3, "Die Erben haben noch keine gemeinsame Entscheidung");
      add("rent", -2, "Noch keine gemeinsame Entscheidung der Erben");
      add("keep", -3, "Noch keine gemeinsame Entscheidung der Erben");
      add("develop", -3, "Noch keine gemeinsame Entscheidung der Erben");
    } else if (agr === "agreed") {
      add("rent", 3, "Die Erben sind sich grundsätzlich einig");
      add("keep", 3, "Die Erben sind sich grundsätzlich einig");
      add("develop", 2, "Die Erben sind sich grundsätzlich einig");
    }

    if (multi) {
      add("sell", 4, "Ein Verkaufserlös lässt sich unter mehreren Erben klar aufteilen");
      add("rent", -2, "Gemeinsame Vermietung erfordert laufende Abstimmung");
      add("keep", -4, "Bei mehreren Erben ist ein Ausgleich nötig");
      add("develop", -4, "Ein gemeinsames Projekt mit mehreren Erben ist komplexer");
    }
    if (manyHeirs) {
      add("sell", 3, "Große Erbengemeinschaft");
      add("keep", -3, "Große Erbengemeinschaft");
      add("develop", -3, "Große Erbengemeinschaft");
    }
    if (state.inheritance === "sole_heir") {
      add("rent", 4, "Als alleiniger Erbe können Sie frei entscheiden");
      add("keep", 5, "Als alleiniger Erbe können Sie frei entscheiden");
      add("develop", 3, "Als alleiniger Erbe können Sie frei entscheiden");
    }

    if (multi && h.takeover === "yes") {
      add("keep", 12, "Jemand aus der Familie möchte die Immobilie übernehmen");
      add("sell", -8, "Ein Familienmitglied möchte die Immobilie übernehmen");
      add("rent", -5, "Ein Familienmitglied möchte die Immobilie übernehmen");
      add("develop", -2);
    } else if (multi && h.takeover === "unclear") {
      add("keep", 3, "Eine Übernahme in der Familie ist noch offen");
    }

    /* ---- Zustand ---- */
    if (cond === "refurbishment_needed") {
      add("sell", 10, "Hoher Sanierungsbedarf");
      add("rent", -8, "Sanierungsbedarf vor einer Vermietung");
      add("keep", -6, "Sanierungsbedarf beim Behalten");
      add("develop", 12, "Sanierungsbedarf mit Potenzial zur Wertsteigerung");
    } else if (cond === "renovation_needed") {
      add("sell", 5, "Renovierungsbedarf");
      add("rent", -4, "Renovierungsbedarf vor einer Vermietung");
      add("keep", -3, "Renovierungsbedarf");
      add("develop", 8, "Renovierungsbedarf mit Potenzial zur Wertsteigerung");
    } else if (cond === "very_good") {
      add("sell", 2, "Sehr guter Zustand");
      add("rent", 8, "Sehr guter Zustand");
      add("keep", 4, "Sehr guter Zustand");
      add("develop", -12, "Kein Sanierungsbedarf, wenig Entwicklungshebel");
    } else if (cond === "good") {
      add("sell", 1);
      add("rent", 5, "Guter Zustand");
      add("keep", 3, "Guter Zustand");
      add("develop", -6, "Geringer Sanierungsbedarf");
    }
    if (year && year < 1980 && needsWork) {
      add("develop", 3, "Baujahr vor 1980: energetisches Sanierungspotenzial");
    }

    /* ---- Nutzung ---- */
    if (usage === "rented") {
      add("rent", 12, "Die Immobilie ist bereits vermietet");
      add("sell", -2, "Verkauf mit bestehendem Mietverhältnis");
      add("keep", -4, "Bestehendes Mietverhältnis steht einer Eigennutzung entgegen");
      add("develop", -4, "Bestehendes Mietverhältnis");
      if (String(p.rentIncome || "").trim()) {
        add("rent", 4, "Laufende Mieteinnahmen vorhanden");
      }
    } else if (usage === "owner_occupied") {
      add("keep", 12, "Die Immobilie wird bereits selbst genutzt");
      add("sell", -6, "Bestehende Eigennutzung");
      add("rent", -3, "Bestehende Eigennutzung");
      add("develop", -3);
    } else if (usage === "family_occupied") {
      add("keep", 10, "Ein Familienmitglied wohnt in der Immobilie");
      add("sell", -6, "Ein Familienmitglied wohnt in der Immobilie");
      add("rent", -6, "Ein Familienmitglied wohnt in der Immobilie");
      add("develop", -3);
    } else if (usage === "vacant") {
      add("sell", 5, "Leerstand verursacht laufende Kosten");
      add("rent", 2, "Leerstand: Vermietung kurzfristig möglich");
      add("keep", -2, "Leerstand verursacht laufende Kosten");
      add("develop", 6, "Leerstand ermöglicht eine Sanierung ohne Mieterwechsel");
    }

    /* ---- Immobilientyp ---- */
    if (type === "multi_family") {
      add("rent", 6, "Mehrfamilienhaus mit mehreren Einheiten");
      add("keep", -4, "Eigennutzung eines Mehrfamilienhauses nur teilweise möglich");
      add("develop", 8, "Mehrfamilienhaus mit Entwicklungspotenzial");
    } else if (type === "house" && multiUnit) {
      add("rent", 3, "Mehrere Wohneinheiten");
      add("develop", 4, "Mehrere Wohneinheiten");
    } else if (type === "apartment") {
      add("rent", 3, "Eigentumswohnung: überschaubarer Vermietungsaufwand");
      add("develop", -6, "Begrenzter Entwicklungsspielraum bei einer Wohnung");
    } else if (type === "commercial") {
      add("rent", 2, "Gewerbeobjekt: Vermietung als typische Nutzung");
      add("keep", -8, "Gewerbeimmobilie: Eigennutzung selten passend");
    } else if (type === "land") {
      add("sell", 4, "Ein Grundstück lässt sich vergleichsweise einfach verkaufen");
      add("rent", -20, "Unbebautes Grundstück: keine klassische Vermietung");
      add("keep", -6, "Unbebautes Grundstück ohne laufende Nutzung");
      add("develop", 14, "Grundstück mit Entwicklungspotenzial");
    }
    if (units >= 3 && type !== "multi_family") {
      add("rent", 3, units + " Wohneinheiten");
      add("develop", 3, units + " Wohneinheiten");
    }
    if (plot >= 800 && (type === "house" || type === "multi_family" || type === "land")) {
      add("develop", 4, "Großes Grundstück");
    }

    /* ---- Finanzierung ---- */
    if (f.financing === "yes") {
      add("sell", 4, "Bestehende Finanzierung");
      add("rent", -2, "Bestehende Finanzierung");
      add("keep", -4, "Bestehende Finanzierung läuft weiter");
      add("develop", -4, "Bestehende Finanzierung plus Investitionsbedarf");
    }
    if (highDebt) {
      add("sell", 4, "Hohe Restschuld");
      add("rent", -2, "Hohe Restschuld");
      add("keep", -4, "Hohe Restschuld");
      add("develop", -4, "Hohe Restschuld");
    }
    if (f.encumbrance === "yes") {
      add("sell", -3, "Eingetragene Rechte müssen vor einem Verkauf geklärt werden");
      add("rent", -3, "Eingetragene Rechte können die Vermietung einschränken");
    }

    /* ---- Entscheidungsdruck (bestehendes Assessment) ---- */
    if (assessment.pressure === "Hoch") {
      add("sell", 4, "Hoher Entscheidungsdruck");
      add("develop", -4, "Hoher Entscheidungsdruck");
    }

    /* ---- Möglichkeiten, die der Nutzer selbst erwägt ---- */
    const concrete = opts.filter(function (o) { return o !== "open"; });
    if (opts.includes("sell")) add("sell", 8, "Sie ziehen einen Verkauf selbst in Betracht");
    if (opts.includes("rent")) add("rent", 8, "Sie ziehen eine Vermietung selbst in Betracht");
    if (opts.includes("keep")) add("keep", 8, "Sie ziehen das Behalten selbst in Betracht");
    if (opts.includes("family_takeover")) add("keep", 8, "Sie ziehen eine Übernahme innerhalb der Familie in Betracht");
    if (opts.includes("develop")) add("develop", 12, "Sie ziehen eine Sanierung oder Entwicklung selbst in Betracht");
    if (concrete.length) {
      if (!opts.includes("sell")) add("sell", -3, "Aktuell nicht in Ihrer Auswahl");
      if (!opts.includes("rent")) add("rent", -3, "Aktuell nicht in Ihrer Auswahl");
      if (!opts.includes("keep") && !opts.includes("family_takeover")) add("keep", -3, "Aktuell nicht in Ihrer Auswahl");
      if (!opts.includes("develop")) add("develop", -3, "Aktuell nicht in Ihrer Auswahl");
    }

    /* ---- Was gegen das Behalten spricht ---- */
    if (bars.includes("refurbishment")) {
      add("sell", 6, "Sanierungsbedarf spricht für Sie gegen das Behalten");
      add("rent", -5, "Sanierungsbedarf als Hürde");
      add("keep", -6, "Sanierungsbedarf als Hürde");
      add("develop", -3, "Sanierungsbedarf empfinden Sie als Hürde");
    }
    if (bars.includes("low_rent")) {
      add("sell", 5, "Mieteinnahmen erscheinen Ihnen zu gering");
      add("rent", -8, "Mieteinnahmen erscheinen Ihnen zu gering");
      add("keep", -2);
    }
    if (bars.includes("effort")) {
      add("sell", 8, "Der Aufwand des Behaltens ist Ihnen zu hoch");
      add("rent", -8, "Vermietung bedeutet laufenden Aufwand");
      add("keep", -5, "Behalten bedeutet laufenden Aufwand");
      add("develop", -12, "Sanierung bedeutet hohen Aufwand");
    }
    if (bars.includes("financing")) {
      add("sell", 6, "Finanzierung oder Schulden belasten das Behalten");
      add("rent", -4, "Finanzierung oder Schulden belasten das Behalten");
      add("keep", -8, "Finanzierung oder Schulden belasten das Behalten");
      add("develop", -8, "Finanzierung oder Schulden plus Investitionsbedarf");
    }
    if (bars.includes("heirs")) {
      add("sell", 6, "Die Erbengemeinschaft spricht für Sie gegen das Behalten");
      add("rent", -5, "Erbengemeinschaft als Hürde");
      add("keep", -8, "Erbengemeinschaft als Hürde");
      add("develop", -6, "Erbengemeinschaft als Hürde");
    }
    if (bars.includes("liquidity")) {
      add("sell", 12, "Sie benötigen Liquidität");
      add("rent", -8, "Kapital bleibt gebunden, obwohl Sie Liquidität benötigen");
      add("keep", -10, "Kapital bleibt gebunden, obwohl Sie Liquidität benötigen");
      add("develop", -10, "Investitionsbedarf trotz Liquiditätsbedarf");
    }
    if (bars.includes("no_landlord")) {
      add("sell", 8, "Sie möchten kein Vermieter sein");
      add("rent", -15, "Sie möchten kein Vermieter sein");
      add("develop", -3);
    }
    if (bars.includes("lifestyle")) {
      add("sell", 6, "Die Immobilie passt nicht zu Ihrer Lebenssituation");
      add("rent", 2);
      add("keep", -12, "Die Immobilie passt nicht zu Ihrer Lebenssituation");
      add("develop", -4);
    }
    if (bars.includes("none")) {
      add("sell", -2, "Aus Ihrer Sicht spricht nichts gegen das Behalten");
      add("rent", 4, "Aus Ihrer Sicht spricht nichts gegen das Behalten");
      add("keep", 6, "Aus Ihrer Sicht spricht nichts gegen das Behalten");
      add("develop", 2, "Aus Ihrer Sicht spricht nichts gegen das Behalten");
    }

    /* ---- Prioritäten ---- */
    if (prio.includes("price")) {
      add("sell", 4, "Ein guter Preis ist Ihnen wichtig");
      add("develop", 4, "Wertsteigerung vor einem Verkauf kann den Preis verbessern");
    }
    if (prio.includes("speed")) {
      add("sell", 8, "Sie möchten schnell eine Lösung");
      add("rent", -4, "Vermietung bindet Sie längerfristig");
      add("keep", -6, "Behalten löst den Entscheidungsdruck nicht");
      add("develop", -12, "Sanierung oder Entwicklung braucht Zeit");
    }
    if (prio.includes("effort")) {
      add("sell", 6, "Möglichst wenig Aufwand ist Ihnen wichtig");
      add("rent", -6, "Laufender Verwaltungsaufwand bei Vermietung");
      add("keep", -4, "Laufende Instandhaltung beim Behalten");
      add("develop", -12, "Hoher Aufwand bei Sanierung oder Entwicklung");
    }
    if (prio.includes("fair")) {
      add("sell", 4, "Ein Verkaufserlös lässt sich fair aufteilen");
      add("rent", -2, "Faire Aufteilung bei gemeinsamer Vermietung komplexer");
      add("keep", -4, "Fairer Ausgleich beim Behalten schwieriger");
      add("develop", -2);
    }
    if (prio.includes("wealth")) {
      add("sell", -8, "Ein Verkauf beendet die Wertentwicklung der Immobilie für Sie");
      add("rent", 8, "Sie möchten langfristig Vermögen aufbauen");
      add("keep", 6, "Sie möchten langfristig Vermögen aufbauen");
      add("develop", 10, "Wertsteigerung passt zum Vermögensaufbau");
    }
    if (prio.includes("own_use")) {
      add("sell", -10, "Wunsch nach Eigennutzung");
      add("rent", -6, "Wunsch nach Eigennutzung");
      add("keep", 14, "Sie möchten die Immobilie selbst nutzen");
      add("develop", 3, "Sanierung für die eigene Nutzung");
    }
    if (prio.includes("income")) {
      add("sell", -8, "Ein Verkauf bringt keine laufenden Einnahmen");
      add("rent", 12, "Sie möchten laufende Einnahmen erzielen");
      add("keep", -4, "Eigennutzung bringt keine laufenden Einnahmen");
      add("develop", 3, "Entwicklung kann spätere Einnahmen steigern");
    }

    /* ---- Ausgangsfrage (Schritt 1): leichte Gewichtung ---- */
    if (state.situation === "sell_or_keep") { add("sell", 2); add("keep", 2); }
    if (state.situation === "rent_or_sell") { add("sell", 2); add("rent", 2); }

    /* ---- Normalisieren: Orientierungswerte, keine Scheinpräzision.
       Die Rohsumme wird um die Mitte gestaucht und begrenzt, damit
       starke Fälle nicht als „95 zu 8“ erscheinen — die Rangfolge
       bleibt, die Zahlen lesen sich als Tendenz. ---- */
    const scores = {};
    OPTION_KEYS.forEach(function (key) {
      const compressed = 50 + (score[key] - 50) * 0.55;
      scores[key] = Math.max(12, Math.min(92, Math.round(compressed)));
    });

    function positives(key) {
      return factors[key].filter(function (x) { return x.delta > 0; });
    }

    const ranking = OPTION_KEYS.map(function (key) {
      return { key: key, label: OPTION_DEFS[key].label, score: scores[key] };
    }).sort(function (a, b) {
      return (b.score - a.score) || (positives(b.key).length - positives(a.key).length);
    });

    const recommended = ranking[0].key;
    const runnerUp = ranking[1].key;
    const closeCall = ranking[0].score - ranking[1].score <= 5;
    const reasons = uniqueTexts(positives(recommended).sort(function (a, b) { return b.delta - a.delta; })).slice(0, 3);
    const isOpen = !reasons.length || ranking[0].score === ranking[1].score;

    /* Offene Angaben: Einschätzung bewusst vorsichtig formulieren */
    let openCount = 0;
    if (!concrete.length) openCount++;
    if (bars.includes("unknown")) openCount++;
    if (prio.includes("unknown")) openCount++;
    if (usage === "unknown") openCount++;
    if (f.financing === "unknown") openCount++;
    if (f.encumbrance === "unknown") openCount++;
    if (state.inheritance === "unclear") openCount++;

    const args = {};
    OPTION_KEYS.forEach(function (key) {
      const fs = factors[key];
      let pros = uniqueTexts(fs.filter(function (x) { return x.delta > 0; }).sort(function (a, b) { return b.delta - a.delta; }));
      let cons = uniqueTexts(fs.filter(function (x) { return x.delta < 0; }).sort(function (a, b) { return a.delta - b.delta; }));
      /* Dynamische Gründe zuerst; generische Eigenschaften der Option
         füllen nur auf, wenn die Antworten wenig hergeben. */
      pros = pros.concat(OPTION_DEFS[key].pros.filter(function (t) { return !pros.includes(t); })).slice(0, 3);
      cons = cons.concat(OPTION_DEFS[key].cons.filter(function (t) { return !cons.includes(t); })).slice(0, 2);
      args[key] = { pros: pros, cons: cons };
    });

    /* Aufwand / Tempo / Komplexität je Option — grob, aus denselben Antworten */
    const cx = assessment.complexity.toLowerCase();
    const meta = {
      sell: {
        effort: "gering",
        speed: (agr === "dispute" || f.encumbrance === "yes" || f.financing === "unknown") ? "mittel" : "schnell",
        complexity: cx
      },
      rent: {
        effort: needsWork ? "hoch" : "mittel",
        speed: usage === "rented" ? "läuft bereits" : needsWork ? "mittel" : "zügig",
        complexity: multi ? "hoch" : cx
      },
      keep: {
        effort: needsWork ? "hoch" : "mittel",
        speed: multi ? "mittel" : "schnell",
        complexity: multi ? "hoch" : f.financing === "yes" ? "mittel" : "niedrig"
      },
      develop: {
        effort: "hoch",
        speed: "langsam",
        complexity: "hoch"
      }
    };

    return {
      scores: scores,
      ranking: ranking,
      recommended: recommended,
      runnerUp: runnerUp,
      closeCall: closeCall,
      isOpen: isOpen,
      uncertain: openCount >= 3,
      reasons: reasons,
      arguments: args,
      meta: meta,
      assessment: assessment
    };
  }

  function uniqueTexts(list) {
    const seen = [];
    list.forEach(function (x) { if (!seen.includes(x.text)) seen.push(x.text); });
    return seen;
  }

  /* Abwärtskompatibel zum bisherigen Einzelfeld „intention“ (Sheet-Spalte
     „Absicht“, GTM-Variable): aus den erwogenen Möglichkeiten abgeleitet. */
  function deriveIntention() {
    const concrete = state.options.filter(function (o) { return o !== "open"; });
    return concrete.length ? concrete.join(" | ") : "undecided";
  }

  function trackDecisionViewed() {
    const r = computeOptionScores();
    track("decision_result_viewed", {
      score_sell: r.scores.sell,
      score_rent: r.scores.rent,
      score_keep: r.scores.keep,
      score_develop: r.scores.develop,
      recommended_option: r.isOpen ? "open" : r.recommended,
      close_call: r.closeCall,
      is_open: r.isOpen
    });
    track("decision_recommendation_viewed", {
      recommended_option: r.isOpen ? "open" : r.recommended,
      recommended_score: r.scores[r.recommended],
      reasons_count: r.reasons.length,
      options_considered: state.options.join(" | "),
      barriers: state.barriers.join(" | ")
    });
  }

  /* =========================================================
     SCREEN — ERGEBNIS / ERSTE EINSCHÄTZUNG
     Optionsvergleich (vier Karten, Rang nach Passung) plus
     „Unsere erste Einschätzung“ mit Gründen aus den Antworten.
     Weiter führt zum Report (vertiefte Analyse).
     ========================================================= */

  function renderOptionCard(entry, result) {
    const isRec = entry.key === result.recommended && !result.isOpen;
    const a = result.arguments[entry.key];
    const m = result.meta[entry.key];
    return `
      <div class="bw-option-card ${isRec ? "bw-option-card--recommended" : ""}" role="listitem">
        ${isRec ? `<span class="bw-option-card__tag">Passt aktuell am besten</span>` : ""}
        <div class="bw-option-card__head">
          <span class="bw-option-card__title">${entry.label}</span>
          <span class="bw-option-card__score"><strong>${entry.score} %</strong> passend</span>
        </div>
        <div class="bw-option-card__bar" aria-hidden="true">
          <div class="bw-option-card__bar-fill" style="width:${entry.score}%"></div>
        </div>
        <div class="bw-option-card__meta">
          <span>Aufwand <strong>${m.effort}</strong></span>
          <span>Tempo <strong>${m.speed}</strong></span>
          <span>Komplexität <strong>${m.complexity}</strong></span>
        </div>
        <ul class="bw-option-card__list">
          ${a.pros.map(function (t) { return `<li class="bw-pro">${esc(t)}</li>`; }).join("")}
          ${a.cons.map(function (t) { return `<li class="bw-con">${esc(t)}</li>`; }).join("")}
        </ul>
      </div>
    `;
  }

  function renderDecisionScreen() {
    const result = computeOptionScores();
    const rec = OPTION_DEFS[result.recommended];
    const second = OPTION_DEFS[result.runnerUp];

    let title;
    let lead;
    if (result.isOpen) {
      title = "Aktuell liegen mehrere Optionen gleichauf.";
      lead = "Ihre bisherigen Angaben geben noch keinen klaren Ausschlag. Im Report ordnen wir die Optionen anhand von Marktwert, Lage und Erbsituation genauer ein.";
    } else {
      title = rec.label + " könnte für Ihre aktuelle Situation die sinnvollste Option sein.";
      lead = "Auf Basis Ihrer Angaben spricht aktuell am meisten für " + rec.phrase + "." +
        (result.closeCall ? " " + second.label + " liegt nur knapp dahinter – beide Wege sind für Sie realistisch." : "") +
        " Darauf stützt sich diese Einschätzung:";
    }

    const reasons = result.isOpen ? "" : `
        <ul class="bw-verdict__reasons">
          ${result.reasons.map(function (t) { return `<li>${BW_ICONS.check}<span>${esc(t)}</span></li>`; }).join("")}
        </ul>`;

    const note = result.uncertain ? `
        <p class="bw-verdict__note">Einige Ihrer Angaben sind noch offen. Die Einschätzung ist deshalb bewusst vorsichtig – im Report gehen wir genauer darauf ein.</p>` : "";

    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Einschätzung</div>
        <h1 class="bw-header__title">Welche Option passt aktuell am besten zu Ihrer Situation?</h1>
      </div>

      <div class="bw-required-note" style="margin:0 0 10px">Orientierungswerte auf Basis Ihrer Angaben – keine exakte Berechnung</div>

      <div class="bw-option-grid" role="list" aria-label="Vergleich Ihrer Optionen">
        ${result.ranking.map(function (entry) { return renderOptionCard(entry, result); }).join("")}
      </div>

      <section class="bw-verdict" aria-label="Unsere erste Einschätzung">
        <div class="bw-header__eyebrow">Unsere erste Einschätzung</div>
        <h2 class="bw-verdict__title">${title}</h2>
        <p class="bw-verdict__lead">${lead}</p>
        ${reasons}
        <div class="bw-verdict__meta">
          <span>Entscheidungsdruck: <strong>${result.assessment.pressure}</strong></span>
          <span>Komplexität: <strong>${result.assessment.complexity}</strong></span>
        </div>
        ${note}
      </section>

      <p class="bw-disclaimer">Diese Einschätzung dient als erste Orientierung und ersetzt keine individuelle Rechts-, Steuer- oder Finanzberatung.</p>

      ${renderContinueButton("Vertiefte Analyse im Report erhalten")}
    `;
  }

  function continueCurrent() {
    const error = validateCurrentStep();
    const validationEl = document.getElementById("bw-validation-error");

    if (error) {
      track("validation_failed", { step: state.currentStep, reason: error });

      if (validationEl) {
        validationEl.textContent = error;
        validationEl.style.display = "";
      } else {
        const nav = document.querySelector(".bw-navigation");
        if (nav) {
          const div = document.createElement("div");
          div.id = "bw-validation-error";
          div.className = "bw-field__error";
          div.textContent = error;
          nav.parentNode.insertBefore(div, nav);
        }
      }

      return;
    }

    /*
     * Clear any previous error before proceeding.
     * Previously an error message could remain visible after the user fixed
     * the fields, creating the impression that the step was still invalid.
     */
    if (validationEl) {
      validationEl.textContent = "";
      validationEl.style.display = "none";
    }

    if (state.currentStep === "location") {
      const status = document.getElementById("bw-address-status");
      if (status) {
        status.className = "bw-address-status bw-address-status--success";
        status.textContent = "✓ Adresse vollständig";
      }
    }

    /* Decision Journey: die Mehrfachauswahlen als eigene Events, damit
       sich Möglichkeiten und Hürden in GTM/GA4 auswerten lassen. */
    if (state.currentStep === "options") {
      track("decision_options_selected", {
        options: state.options.join(" | "),
        count: state.options.length,
        is_open: state.options.includes("open")
      });
    }

    if (state.currentStep === "barriers") {
      track("decision_barriers_selected", {
        barriers: state.barriers.join(" | "),
        count: state.barriers.length
      });
    }

    goNext();
  }

  /* Formular-Auswahlen (zeigen ihre Selektion, springen NICHT weiter —
     der Weiter-Button validiert). Alles andere ist Auto-Advance. */
  function choiceTarget(field) {
    switch (field) {
      case "condition": return [state.property, "condition"];
      case "usage": return [state.property, "usage"];
      case "heirsCount": return [state.heirs, "count"];
      case "heirsAgreement": return [state.heirs, "agreement"];
      case "heirsTakeover": return [state.heirs, "takeover"];
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

  /* Mehrfachauswahl-Felder und ihre exklusiven Werte: „weiß nicht“- bzw.
     „offen“-Antworten schließen konkrete Optionen aus und umgekehrt. */
  const MULTI_SELECT = {
    priority: ["unknown"],
    options: ["open"],
    barriers: ["none", "unknown"]
  };

  function setChoice(field, value) {

    /* Mehrfachauswahl ohne Auto-Weiter (Möglichkeiten, Hürden, Prioritäten). */
    if (MULTI_SELECT[field]) {
      const list = state[field];
      const exclusive = MULTI_SELECT[field];
      if (exclusive.includes(value)) {
        state[field] = list.includes(value) ? [] : [value];
      } else {
        const i = list.indexOf(value);
        if (i >= 0) {
          list.splice(i, 1);
        } else {
          list.push(value);
          exclusive.forEach(function (x) {
            const u = list.indexOf(x);
            if (u >= 0) list.splice(u, 1);
          });
        }
      }
      track("option_selected", { step: state.currentStep, answer: value });
      suppressEnterAnimation = true;
      render();
      suppressEnterAnimation = false;
      return;
    }

    const target = choiceTarget(field);

    if (target) {
      target[0][target[1]] = value;

      /* Ohne laufende Finanzierung gibt es keine Restschuld. */
      if (field === "financing" && value !== "yes") {
        state.finance.remainingDebt = null;
      }

      track("option_selected", { step: state.currentStep, answer: value });
      suppressEnterAnimation = true;
      render();
      suppressEnterAnimation = false;
      return;
    }

    if (isTransitioning) {
      return;
    }

    isTransitioning = true;

    state[field] = value;
    track("option_selected", { step: state.currentStep, answer: value });

    suppressEnterAnimation = true;
    render();
    suppressEnterAnimation = false;

    window.setTimeout(function () {
      isTransitioning = false;
      goNext({ answer: value });
    }, 180);
  }

  async function submitLead() {
    const c = state.contact;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim());
    const validPhone = c.phone.trim().length >= 6;

    const errorEl = document.getElementById("bw-contact-error");

    /* Pflicht sind nur E-Mail (Zustellung) und Telefon (Rückfragen) —
       der Name ist bewusst optional. */
    if (!validEmail || !validPhone) {
      track("lead_validation_failed", { step: "contact" });
      if (errorEl) {
        errorEl.style.display = "block";
        errorEl.textContent = "Bitte gültige E-Mail-Adresse und Telefonnummer angeben.";
      }
      return;
    }

    if (errorEl) {
      errorEl.style.display = "none";
    }

    /* Honeypot: ein für Menschen unsichtbares Feld. Ist es ausgefüllt,
       war ein Bot am Werk – Erfolgsseite zeigen, aber nichts senden. */
    const honeypot = document.getElementById("bw-extra-field");
    const isBot = Boolean(honeypot && honeypot.value.trim());

    const assessment = computeAssessment();
    const decision = computeOptionScores();

    const payload = {
      submitted_at: new Date().toISOString(),
      first_name: c.firstName.trim(),
      last_name: c.lastName.trim(),
      phone: c.phone.trim(),
      email: c.email.trim(),
      situation: state.situation || "",
      property_type: state.propertyType || "",
      house_type: state.houseType || "",
      street: state.address.street || "",
      postal_code: state.address.postalCode || "",
      city: state.address.city || "",
      living_space: state.property.livingSpace || "",
      plot_size: state.property.plotSize || "",
      floor: state.property.floor || "",
      year_built: state.property.yearBuilt || "",
      condition: state.property.condition || "",
      usage: state.property.usage || "",
      rent_income: state.property.rentIncome || "",
      units: state.property.units || "",
      erbfall_timing: state.timing || "",
      heirs_count: state.heirs.count || "",
      heirs_agreement: state.heirs.agreement || "",
      heirs_takeover: state.heirs.takeover || "",
      financing: state.finance.financing || "",
      remaining_debt: state.finance.remainingDebt || "",
      encumbrances: state.finance.encumbrance || "",
      intention: deriveIntention(),
      priority: state.priority.join(" | "),
      assessment_pressure: assessment.pressure,
      assessment_complexity: assessment.complexity,
      assessment_risks: assessment.risks.join(" | "),
      /* Decision Assistant */
      options_considered: state.options.join(" | "),
      decision_barriers: state.barriers.join(" | "),
      option_score_sell: decision.scores.sell,
      option_score_rent: decision.scores.rent,
      option_score_keep: decision.scores.keep,
      option_score_develop: decision.scores.develop,
      recommended_option: decision.isOpen ? "open" : decision.recommended,
      recommended_option_label: decision.isOpen ? "Offen" : OPTION_DEFS[decision.recommended].label,
      decision_close_call: decision.closeCall ? "yes" : "no",
      decision_factors: decision.reasons.join(" | "),
      inheritance: state.inheritance || "",
      utm_source: state.attribution.utmSource,
      utm_medium: state.attribution.utmMedium,
      utm_campaign: state.attribution.utmCampaign,
      gclid: state.attribution.gclid,
      fbclid: state.attribution.fbclid,
      session_id: state.sessionId
    };

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
          errorEl.textContent = "Ihre Anfrage konnte gerade nicht übertragen werden. Bitte versuchen Sie es in einem Moment noch einmal.";
        }

        return;
      }
    } else if (!CONFIG.leadWebhookUrl) {
      console.warn("[BW Funnel] leadWebhookUrl ist nicht gesetzt – der Lead wurde NICHT übertragen.");
    }

    /* Erst nach erfolgreicher Übertragung als Conversion zählen. */
    track("lead_submitted", {
      situation: state.situation,
      property_type: state.propertyType,
      house_type: state.houseType,
      address_complete: true,
      intention: deriveIntention(),
      options_considered: state.options.join(" | "),
      recommended_option: decision.isOpen ? "open" : decision.recommended,
      inheritance: state.inheritance,
      contact_captured: true
    });

    exitStep({ lead_submitted: true });

    track("funnel_completed", {
      total_duration_seconds: Math.round((Date.now() - state.startedAt) / 1000)
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
            <p>Wir erstellen Ihren Erbfall-Report und senden ihn an ${esc(state.contact.email)}. Auf Wunsch besprechen wir die Ergebnisse persönlich mit Ihnen.</p>
          </div>
        </main>
      </div>
    `;
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.BWPropertyFunnel = {

    state,

    track,

    next: goNext,

    back: goBack,

    selectOption,

    continueCurrent,

    setChoice,

    updateField,

    handleStreetInput,

    selectAddress,

    trackField,

    submitLead,

    computeOptionScores

  };



  document.addEventListener("click", function (event) {
    const field = document.querySelector(".bw-address-autocomplete");
    const list = document.getElementById("bw-address-suggestions");
    if (field && list && !field.contains(event.target)) { list.hidden = true; }
  });

  /* Tastatur: Enter führt den Schritt fort (im Straßenfeld wählt es den
     ersten Vorschlag), Escape schließt die Vorschlagsliste. */
  document.addEventListener("keydown", function (event) {
    const root = document.getElementById("bw-property-funnel");
    if (!root || !root.contains(event.target)) return;

    if (event.key === "Escape") {
      const list = document.getElementById("bw-address-suggestions");
      if (list && !list.hidden) { list.hidden = true; }
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
      const first = list && !list.hidden && list.querySelector(".bw-address-suggestion");
      if (first) { first.click(); return; }
    }

    if (state.currentStep === "location" || state.currentStep === "property_details") {
      continueCurrent();
    }
  });

  /* =========================================================
     INITIALIZE
     ========================================================= */

  track("funnel_started", {

    attribution: state.attribution

  });


  /* Kompakt-Modus per Konfigurations-Flag (Hero-Spalte) */
  if (window.BW_FUNNEL_COMPACT) {
    const compactRoot = document.getElementById("bw-property-funnel");
    if (compactRoot) compactRoot.classList.add("bw-compact");
  }

  enterStep("situation");

  window.addEventListener("beforeunload", function () {
    if (state.currentStep && state.stepStartedAt && state.currentStep !== "success") {
      track("funnel_abandoned", {
        step: state.currentStep,
        duration_seconds: Math.round((Date.now() - state.stepStartedAt) / 1000)
      });
    }
  });

})();
