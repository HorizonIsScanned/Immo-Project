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

#bw-property-funnel .bw-property-card__visual svg {
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

#bw-property-funnel .bw-navigation--back {
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
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

  #bw-property-funnel .bw-navigation--back {
    justify-content: center;
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

  #bw-property-funnel .bw-property-card__visual svg {
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
      houseMultiFamily: ""
    },

    steps: [
      "situation",
      "property_type",
      "house_type",
      "location",
      "property_details",
      "timing",
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
    people: bwIcon('<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><path d="M16 5.9a3 3 0 0 1 0 5.2"/><path d="M17.5 14.6a5.5 5.5 0 0 1 3 4.9"/>')
  };

  /* Icons der Situations-Karten (frueher CSS-Daten-URIs — inline spart
     im Embed mehrere hundert Zeichen) */
  const SITUATION_ICONS = {
    value: bwIcon('<path d="M4 25h24"/><path d="M6 22l6-6 5 3 9-10"/><path d="M20 9h6v6"/>', "0 0 32 32", "1.8"),
    sell_or_keep: bwIcon('<path d="M16 5v22"/><path d="M8 9h16"/><path d="M5 9l-4 7h8l-4-7Z"/><path d="M27 9l-4 7h8l-4-7Z"/><path d="M11 27h10"/>', "0 0 32 32"),
    unsure: bwIcon('<circle cx="16" cy="16" r="11"/><path d="M20 12l-3 7-7 3 3-7 7-3Z"/>', "0 0 32 32"),
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
      condition: null
    },

    timing: null,

    heirs: {
      count: null,
      agreement: null
    },

    finance: {
      financing: null,
      remainingDebt: null,
      encumbrance: null
    },

    intention: null,

    priority: null,

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

      case "intention":
        return renderIntentionScreen();

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
          Was haben Sie geerbt?
        </h1>

        <p class="bw-header__description">
          Wählen Sie die Art der Immobilie aus. Damit können wir die nächsten Fragen auf das Wesentliche reduzieren.
        </p>

      </div>

      <div class="bw-property-options" role="group" aria-label="Art der Immobilie">

        ${renderPropertyCard("house", "Haus", "Ein- oder Zweifamilienhaus", renderHouseIllustration(), selected === "house")}

        ${renderPropertyCard("apartment", "Wohnung", "Eigentumswohnung", renderApartmentIllustration(), selected === "apartment")}

        ${renderPropertyCard("multi_family", "Mehrfamilienhaus", "Haus mit mehreren Wohneinheiten", renderMultiFamilyIllustration(), selected === "multi_family")}

        ${renderPropertyCard("commercial", "Gewerbe", "Büro-, Handels- oder Gewerbeobjekt", renderOfficeIllustration(), selected === "commercial")}

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
          <span class="bw-property-card__description">${description}</span>
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

        <p class="bw-header__description">
          Eine grobe Einordnung reicht völlig aus.
        </p>

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

  function renderHouseTypeCard(value, title, description, isSelected) {

    return `
      <button
        class="bw-house-type-card ${isSelected ? "bw-house-type-card--selected" : ""}${HOUSE_TYPE_IMAGES[value] ? "" : " bw-house-type-card--no-visual"}"
        type="button"
        aria-pressed="${isSelected}"
        onclick="window.BWPropertyFunnel.selectOption('houseType', '${value}')"
      >
        ${HOUSE_TYPE_IMAGES[value] ? `<span class="bw-house-type-card__visual" aria-hidden="true">
          <img src="${HOUSE_TYPE_IMAGES[value]}" alt="">
        </span>` : ""}
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
    const heroImage = CONFIG.assets.hero;

    return `
      <div class="bw-situation-layout${heroImage ? "" : " bw-situation-layout--no-hero"}">
        ${heroImage ? `
        <div class="bw-situation-hero" aria-hidden="true">
          <img src="${heroImage}" alt="Typisches Haus in Rheinhessen" />
        </div>` : ""}

        <section class="bw-situation-content">
          <h1>Wobei können wir Ihnen helfen?</h1>

          <p class="bw-situation-lead">
            Wählen Sie, was Sie gerade klären möchten.
          </p>

          <div class="bw-situation-options" role="group" aria-label="Ihre Situation">
            ${renderSituationCard("value", "Was ist meine Immobilie wert?", "Marktwert meiner geerbten Immobilie einschätzen", selected === "value")}
            ${renderSituationCard("sell_or_keep", "Was soll ich mit der Immobilie machen?", "Verkaufen, behalten oder vermieten?", selected === "sell_or_keep")}
            ${renderSituationCard("unsure", "Ich weiß gar nicht, wo ich anfangen soll.", "Orientierung für die nächsten Schritte bekommen", selected === "unsure")}
          </div>

          <div class="bw-situation-helper">
            ${SITUATION_ICONS.lock}
            Ihre Angaben werden vertraulich behandelt.
          </div>
        </section>
      </div>
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
          <span class="bw-situation-card__description">${description}</span>
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

  function renderBackButton() {
    return `
      <div class="bw-navigation bw-navigation--back">
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
        <p class="bw-header__description">Geben Sie Straße und Hausnummer ein. Wir ergänzen PLZ und Ort automatisch.</p>
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
      ${renderBackButton()}
    `;
  }

  function renderPropertyDetailsScreen() {
    const p = state.property;
    const t = state.propertyType;
    const isApartment = t === "apartment";
    const isLand = t === "land";
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Immobilie</div>
        <h1 class="bw-header__title">${isLand ? "Wie groß ist das Grundstück?" : "Ein paar Angaben zu Ihrer Immobilie"}</h1>
        <p class="bw-header__description">Mehr brauchen wir für die erste Einschätzung nicht.</p>
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

        ${isLand ? "" : `
        <div class="bw-section-label">Wie ist der Zustand?</div>
        <div class="bw-choice-grid">
          ${renderChoice("condition","very_good","Sehr gut")}
          ${renderChoice("condition","good","Gut")}
          ${renderChoice("condition","renovation_needed","Renovierungsbedürftig")}
          ${renderChoice("condition","refurbishment_needed","Sanierungsbedürftig")}
        </div>`}
      </div>

      ${renderContinueButton()}
      ${renderBackButton()}
    `;
  }

  function renderChoice(field, value, label) {
    const selected = getChoiceValue(field) === value;
    return `
      <button type="button" class="bw-choice ${selected ? "bw-choice--selected" : ""}"
        aria-pressed="${selected}"
        onclick="window.BWPropertyFunnel.setChoice('${field}','${value}')">
        <span class="bw-choice__label">${label}</span>
        <span class="bw-choice__check" aria-hidden="true">${BW_ICONS.check}</span>
      </button>
    `;
  }

  function renderIntentionScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Situation</div>
        <h1 class="bw-header__title">Was möchten Sie mit der Immobilie machen?</h1>
        <p class="bw-header__description">Es geht zunächst nur um Ihre aktuelle Tendenz.</p>
      </div>

      <div class="bw-choice-grid">
        ${renderSimpleChoice("intention","sell","tag","Verkaufen")}
        ${renderSimpleChoice("intention","keep","key","Behalten")}
        ${renderSimpleChoice("intention","rent","banknote","Vermieten")}
        ${renderSimpleChoice("intention","undecided","help","Noch nicht entschieden")}
      </div>

      ${renderBackButton()}
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
        <h1 class="bw-header__title">Sind Sie alleiniger Erbe?</h1>
        <p class="bw-header__description">Eine grobe Einordnung reicht für den ersten Kontakt.</p>
      </div>

      <div class="bw-choice-grid">
        ${renderSimpleChoice("inheritance","sole_heir","person","Ja, alleiniger Erbe")}
        ${renderSimpleChoice("inheritance","multiple_heirs","people","Nein, wir sind mehrere Erben")}
        ${renderSimpleChoice("inheritance","unclear","help","Noch nicht geklärt")}
      </div>

      ${renderBackButton()}
    `;
  }

  function renderTimingScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Erbfall</div>
        <h1 class="bw-header__title">Wann ist der Erbfall eingetreten?</h1>
        <p class="bw-header__description">Der Zeitpunkt bestimmt Fristen und sinnvolle nächste Schritte.</p>
      </div>

      <div class="bw-choice-grid">
        ${renderChoice("timing","lt_6w","Vor weniger als 6 Wochen")}
        ${renderChoice("timing","w6_m6","Vor 6 Wochen bis 6 Monaten")}
        ${renderChoice("timing","m6_y2","Vor 6 Monaten bis 2 Jahren")}
        ${renderChoice("timing","gt_2y","Vor mehr als 2 Jahren")}
        ${renderChoice("timing","unknown","Weiß ich nicht genau")}
      </div>

      ${renderBackButton()}
    `;
  }

  function renderHeirsScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Erbensituation</div>
        <h1 class="bw-header__title">Ihre Erbengemeinschaft</h1>
        <p class="bw-header__description">Zwei kurze Angaben – sie bestimmen, was rechtlich möglich ist.</p>
      </div>

      <div class="bw-form-card">
        <div class="bw-section-label" style="margin-top:0">Wie viele Erben gibt es?</div>
        <div class="bw-choice-grid">
          ${renderChoice("heirsCount","2","2")}
          ${renderChoice("heirsCount","3","3")}
          ${renderChoice("heirsCount","4","4")}
          ${renderChoice("heirsCount","5plus","5 oder mehr")}
        </div>

        <div class="bw-section-label">Wie einig sind sich die Erben?</div>
        <div class="bw-choice-grid">
          ${renderChoice("heirsAgreement","all_sell","Alle wollen verkaufen")}
          ${renderChoice("heirsAgreement","all_keep","Alle wollen behalten")}
          ${renderChoice("heirsAgreement","undecided","Noch keine gemeinsame Entscheidung")}
          ${renderChoice("heirsAgreement","different","Unterschiedliche Vorstellungen")}
          ${renderChoice("heirsAgreement","dispute","Es gibt bereits Streit")}
        </div>
      </div>

      ${renderContinueButton()}
      ${renderBackButton()}
    `;
  }

  function renderFinancingScreen() {
    const f = state.finance;
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Finanzierung</div>
        <h1 class="bw-header__title">Finanzierung &amp; Belastungen</h1>
        <p class="bw-header__description">Eine grobe Einordnung reicht – Details klären wir später.</p>
      </div>

      <div class="bw-form-card">
        <div class="bw-section-label" style="margin-top:0">Besteht noch eine Finanzierung?</div>
        <div class="bw-choice-grid">
          ${renderChoice("financing","no","Nein")}
          ${renderChoice("financing","yes","Ja")}
          ${renderChoice("financing","unknown","Weiß ich nicht")}
        </div>

        ${f.financing === "yes" ? `
        <div class="bw-section-label">Ungefähre Restschuld</div>
        <div class="bw-choice-grid">
          ${renderChoice("remainingDebt","lt_100k","Unter 100.000 €")}
          ${renderChoice("remainingDebt","k100_250","100.000–250.000 €")}
          ${renderChoice("remainingDebt","k250_500","250.000–500.000 €")}
          ${renderChoice("remainingDebt","gt_500k","Über 500.000 €")}
          ${renderChoice("remainingDebt","unknown","Weiß ich nicht")}
        </div>` : ""}

        <div class="bw-section-label">Gibt es weitere Belastungen?</div>
        <div class="bw-choice-grid">
          ${renderChoice("encumbrance","none","Keine bekannt")}
          ${renderChoice("encumbrance","grundschuld","Grundschuld")}
          ${renderChoice("encumbrance","wohnrecht","Wohnrecht")}
          ${renderChoice("encumbrance","niessbrauch","Nießbrauch")}
          ${renderChoice("encumbrance","other","Sonstige")}
          ${renderChoice("encumbrance","unknown","Weiß ich nicht")}
        </div>
      </div>

      ${renderContinueButton()}
      ${renderBackButton()}
    `;
  }

  function renderPriorityScreen() {
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihre Prioritäten</div>
        <h1 class="bw-header__title">Was ist Ihnen bei der Entscheidung am wichtigsten?</h1>
        <p class="bw-header__description">Danach richten wir die Empfehlungen in Ihrem Report aus.</p>
      </div>

      <div class="bw-choice-grid">
        ${renderChoice("priority","price","Möglichst hohen Verkaufspreis erzielen")}
        ${renderChoice("priority","speed","Schnell eine Lösung finden")}
        ${renderChoice("priority","effort","Möglichst wenig Aufwand")}
        ${renderChoice("priority","family","Immobilie in der Familie behalten")}
        ${renderChoice("priority","costs","Laufende Kosten vermeiden")}
        ${renderChoice("priority","wealth","Langfristig Vermögen aufbauen")}
        ${renderChoice("priority","unknown","Weiß ich noch nicht")}
      </div>

      ${renderBackButton()}
    `;
  }

  function renderContactScreen() {
    const c = state.contact;
    const a = state.address;
    const assessment = computeAssessment();
    return `
      <div class="bw-header">
        <div class="bw-header__eyebrow">Ihr Ergebnis</div>
        <h1 class="bw-header__title">Ihr persönlicher Erbfall-Report ist fertig.</h1>
        <p class="bw-header__description">
          Erstellt auf Basis Ihrer Angaben – wir senden ihn Ihnen kostenlos zu.
        </p>
      </div>

      <div class="bw-lead-layout">
        <div>
          <div class="bw-report" aria-hidden="true">
            <div class="bw-report__page">
              <div class="bw-report__eyebrow">Persönliche Auswertung</div>
              <div class="bw-report__name">Erbfall-Report</div>
              <div class="bw-report__address">${esc([a.street, a.city].filter(Boolean).join(", ") || "Ihre Immobilie")}</div>
              <div class="bw-report__summary">${esc(bwSummary())}</div>
              <div class="bw-report__badges">
                <span class="bw-report__badge">Entscheidungsdruck: ${assessment.pressure}</span>
                <span class="bw-report__badge">Komplexität: ${assessment.complexity}</span>
              </div>
              <div class="bw-report__divider"></div>
              <div class="bw-report__row"><span>Geschätzter Marktwert</span><span class="bw-report__value"></span></div>
              <div class="bw-report__row"><span>Preisspanne</span></div>
              <div class="bw-report__range"></div>
              <div class="bw-report__row"><span>Verkaufen · Behalten · Vermieten</span><span class="bw-report__value"></span></div>
              <div class="bw-report__row"><span>Ihre 3 nächsten Schritte</span><span class="bw-report__value"></span></div>
              <div class="bw-report__note">Wichtigster Punkt: ${esc(assessment.risks[0])}</div>
            </div>
          </div>

          <div class="bw-trust bw-trust--stack">
            <span>Marktwert &amp; Preisspanne</span>
            <span>Erbschaftsrelevante Werte</span>
            <span>Orientierung für die nächsten Schritte</span>
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

      ${renderBackButton()}
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
      }
    }

    if (state.currentStep === "heirs") {
      if (!state.heirs.count || !state.heirs.agreement) {
        return "Bitte beide Fragen beantworten.";
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
    if (state.priority === "speed") pressure += 2;
    else if (state.priority === "costs") pressure += 1;

    if (state.inheritance === "multiple_heirs") {
      cx += state.heirs.count === "5plus" ? 3 : state.heirs.count === "2" ? 1 : 2;
    }
    if (f.encumbrance === "wohnrecht" || f.encumbrance === "niessbrauch") cx += 2;
    else if (f.encumbrance === "grundschuld" || f.encumbrance === "other" || f.encumbrance === "unknown") cx += 1;
    if (state.propertyType === "commercial" || state.propertyType === "multi_family" || state.propertyType === "land") cx += 1;

    const level = s => s >= 4 ? "Hoch" : s >= 2 ? "Mittel" : "Niedrig";

    const risks = [];
    if (t === "lt_6w") risks.push("Ausschlagungsfrist (6 Wochen) im Blick behalten");
    if (agr === "dispute") risks.push("Konflikt in der Erbengemeinschaft moderieren");
    else if (agr === "different" || agr === "undecided") risks.push("Gemeinsame Entscheidung der Erben herbeiführen");
    if (f.financing === "yes") risks.push("Laufende Finanzierung und Ablösung klären");
    else if (f.financing === "unknown") risks.push("Finanzierungsstatus beim Kreditinstitut klären");
    if (f.encumbrance === "wohnrecht" || f.encumbrance === "niessbrauch") risks.push("Wohnrecht/Nießbrauch wirkt wertmindernd – bewerten lassen");
    else if (f.encumbrance === "unknown") risks.push("Grundbuch auf Belastungen prüfen");
    else if (f.encumbrance === "grundschuld") risks.push("Eingetragene Grundschuld prüfen");
    if (state.property.condition === "refurbishment_needed") risks.push("Sanierungsbedarf realistisch einpreisen");
    if (!risks.length) risks.push("Unterlagen (Grundbuch, Flurkarte, Energieausweis) zusammenstellen");

    return { pressure: level(pressure), complexity: level(cx), risks: risks.slice(0, 3) };
  }

  function bwSummary() {
    const names = { house: "Haus", apartment: "Wohnung", multi_family: "Mehrfamilienhaus", commercial: "Gewerbe", land: "Grundstück" };
    const parts = [names[state.propertyType] || "Immobilie"];
    if (state.inheritance === "multiple_heirs") {
      parts.push("Erbengemeinschaft" + (state.heirs.count ? " (" + (state.heirs.count === "5plus" ? "5+" : state.heirs.count) + " Erben)" : ""));
    } else if (state.inheritance === "sole_heir") {
      parts.push("Alleinerbe");
    }
    if (state.finance.financing === "yes") parts.push("laufende Finanzierung");
    return parts.join(" · ");
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

    goNext();
  }

  /* Formular-Auswahlen (zeigen ihre Selektion, springen NICHT weiter —
     der Weiter-Button validiert). Alles andere ist Auto-Advance. */
  function choiceTarget(field) {
    switch (field) {
      case "condition": return [state.property, "condition"];
      case "heirsCount": return [state.heirs, "count"];
      case "heirsAgreement": return [state.heirs, "agreement"];
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
      erbfall_timing: state.timing || "",
      heirs_count: state.heirs.count || "",
      heirs_agreement: state.heirs.agreement || "",
      financing: state.finance.financing || "",
      remaining_debt: state.finance.remainingDebt || "",
      encumbrances: state.finance.encumbrance || "",
      intention: state.intention || "",
      priority: state.priority || "",
      assessment_pressure: assessment.pressure,
      assessment_complexity: assessment.complexity,
      assessment_risks: assessment.risks.join(" | "),
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
      intention: state.intention,
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

    submitLead

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
