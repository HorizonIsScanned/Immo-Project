# Erbfall-Funnel (Immobilienpunkt)

Mehrstufiger Lead-Funnel für geerbte Immobilien mit personalisiertem
Erbfall-Report. Eine einzige JavaScript-Datei — Styles und Bild-Referenzen
inklusive, keine Abhängigkeiten, kein Zeichenlimit.

## Dateien

| Datei | Zweck |
|---|---|
| `erbfall-funnel.js` | Der komplette Funnel (Styles + App in einer Datei) |
| `haus-*.png`, `hero-rheinhessen.jpg` | Bilder — werden vom Funnel automatisch neben der JS-Datei gefunden |
| `webflow-loader-snippet.html` | Das kleine Code Embed für Webflow (~400 Zeichen) |
| `google-apps-script-lead-webhook.gs` | Lead-Webhook für Google Sheets (Referenzkopie) |

## Einbindung in Webflow

Ein einziges kleines Code Embed in den Funnel-Wrapper (z. B. die
`funnel-card` in der Hero-Spalte) — Inhalt aus `webflow-loader-snippet.html`:

```html
<div id="bw-property-funnel"></div>
<script>
  window.BW_FUNNEL_COMPACT = true; /* kompakt fuer schmale Spalten */
</script>
<script src="https://cdn.jsdelivr.net/gh/DEIN-USERNAME/DEIN-REPO@main/erbfall-funnel.js" defer></script>
```

`DEIN-USERNAME/DEIN-REPO` durch GitHub-Benutzername und Repository-Namen
ersetzen. Alternative URL über GitHub Pages (nach Aktivierung unter
Settings → Pages): `https://DEIN-USERNAME.github.io/DEIN-REPO/erbfall-funnel.js`

## Bilder

- Die Haus-Fotos und das Hero-Bild liegen **im Repo neben der JS-Datei**
  und werden automatisch von dort geladen — in Webflow ist nichts zu
  konfigurieren.
- Bild austauschen: Neue Datei mit **exakt gleichem Dateinamen** ins Repo
  hochladen (überschreibt die alte) — fertig.
- Neue Haustyp-Fotos (Zweifamilien-/Mehrfamilienhaus): Dateien z. B. als
  `haus-zweifamilienhaus.png` hochladen und in `erbfall-funnel.js` im
  `assets`-Block bei `houseTwoFamily`/`houseMultiFamily` eintragen:
  `SCRIPT_BASE + "haus-zweifamilienhaus.png"`.
- Einzelne Bilder überschreiben ohne Code-Änderung: optionaler
  `window.BW_FUNNEL_ASSETS`-Block im Loader (siehe Snippet-Datei).

## Updates deployen

1. Datei im Repo ändern (direkt auf github.com: Datei öffnen → Stift-Icon
   → ändern → Commit changes).
2. **jsDelivr-Cache:** Die `@main`-URL wird bis zu 12 h gecacht. Sofort
   aktualisieren: `https://www.jsdelivr.com/tools/purge` aufrufen und die
   Datei-URL purgen — oder GitHub Pages nutzen (cacht nur ~10 Minuten).
3. Das Webflow-Snippet muss bei Updates NIE angefasst werden.

## Lead-Webhook (Google Sheets)

- Der Funnel postet Leads an die Apps-Script-Web-App, deren URL in
  `erbfall-funnel.js` unter `CONFIG.leadWebhookUrl` steht. Das ist kein
  Geheimnis (jede Besucherin sieht sie im Quelltext) — das Sheet selbst
  bleibt privat. Es dürfen aber NIEMALS API-Keys o. Ä. in diese Datei.
- Skript-Referenz: `google-apps-script-lead-webhook.gs`. Bei Änderungen in
  Apps Script: „Bereitstellen → Bereitstellungen verwalten → Neue Version".

## Tracking

Alle Events (u. a. `funnel_started`, `step_viewed`, `option_selected`,
`lead_submitted`, `funnel_abandoned`) werden in `window.dataLayer`
gepusht — der GTM-Container der Seite übernimmt den Rest.

## Verhalten

- Passt sich per Container-Queries der Breite seines Wrappers an
  (schmale Spalte = einspaltig, volle Breite = Desktop-Layouts).
- `BW_FUNNEL_COMPACT` strafft Abstände und blendet die Fortschrittsleiste
  auf Schritt 1 aus (empfohlen in der Hero-Karte).
- Der Wrapper braucht: keine feste Höhe, kein `overflow: hidden`,
  `position: relative` + z-index (Adress-Dropdown); das Padding liefert
  der Wrapper.
