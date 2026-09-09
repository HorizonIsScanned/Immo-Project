/* Immobilienpunkt – Decision Map ("Drei Wege") · self-injecting bundle
 * Einbau in Webflow (Code Embed):
 *   <div id="ipd-decision-map"></div>
 *   <script src="https://…/decision-map.js" defer></script>
 * Ohne Mount-Div wird die Section direkt an der Script-Position eingefügt.
 * Expertenfoto: Datei joerg-von-bierbrauer.png neben dieser JS-Datei im Repo,
 * optional überschreibbar per window.IPD_EXPERT_PHOTO = 'https://…'.
 */
(function () {
  'use strict';
  var CSS = `.ipd{--ipd-navy:#001C4E;--ipd-muted:#5C677D;--ipd-fill:#EDF2FB;--ipd-line:#D6E0F2;--ipd-line-strong:#B9C6E0;--ipd-radius:24px;--ipd-gap:24px;box-sizing:border-box;width:100%;padding:0 20px;background:#fff;color:var(--ipd-navy);font-family:Georgia,"Times New Roman",serif;-webkit-font-smoothing:antialiased;overflow:hidden}
.ipd *,.ipd *::before,.ipd *::after{box-sizing:border-box}
.ipd,.ipd *,.ipd h3,.ipd p,.ipd ul,.ipd li,.ipd span{font-family:Georgia,"Times New Roman",serif}
.ipd-inner{width:100%;max-width:1100px;margin:0 auto}
.ipd-card{border:0;border-radius:var(--ipd-radius);background:var(--ipd-fill);box-shadow:none}
.ipd-join{position:relative;height:96px;--ipd-c2l:calc(25% - var(--ipd-gap)/4);--ipd-c2r:calc(75% + var(--ipd-gap)/4);--ipd-c3l:calc(16.6667% - var(--ipd-gap)/3);--ipd-c3r:calc(83.3333% + var(--ipd-gap)/3)}
.ipd-join__l{position:absolute;display:block;width:1px;background:var(--ipd-line-strong)}
.ipd-join__l4{top:0;left:50%;height:38px}
.ipd-join__l5{top:70px;left:50%;height:12px}
.ipd-join__l6{top:82px;left:var(--ipd-c3l);right:calc(100% - var(--ipd-c3r));width:auto;height:1px}
.ipd-join__l7{top:82px;left:var(--ipd-c3l);height:14px}
.ipd-join__l8{top:82px;left:50%;height:14px}
.ipd-join__l9{top:82px;left:var(--ipd-c3r);height:14px}
.ipd-pill{position:absolute;top:38px;left:50%;transform:translateX(-50%);display:inline-flex;align-items:center;height:32px;padding:0 18px;border-radius:999px;background:var(--ipd-fill);font-size:11px;line-height:1;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ipd-navy);white-space:nowrap}
.ipd-wheel{position:relative;width:100%;max-width:980px;aspect-ratio:980/750;margin:0 auto}
.ipd-wheel__arcs{position:absolute;inset:0;width:100%;height:100%;display:block;overflow:visible}
.ipd-wheel__arcs path{fill:none;stroke:var(--ipd-line-strong);stroke-width:1.5}
.ipd-wheel__center{position:absolute;left:35.714%;top:25.333%;width:28.571%;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;background:var(--ipd-fill);color:var(--ipd-navy)}
.ipd-wheel__house{width:68%;display:block;height:auto}
.ipd-wheel__label{margin:6px 0 0;font-size:11px;line-height:1.3;font-weight:700;letter-spacing:.14em;text-transform:uppercase;text-align:center;color:var(--ipd-navy)}
.ipd-node{position:absolute;width:9.388%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--ipd-fill);color:var(--ipd-navy)}
.ipd-node svg{width:38%;height:38%;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ipd-node--t{left:45.306%;top:8.267%}
.ipd-node--r{left:67.959%;top:37.867%}
.ipd-node--b{left:45.306%;top:67.467%}
.ipd-node--l{left:22.653%;top:37.867%}
.ipd-wtext{position:absolute;margin:0}
.ipd-wtext__title{margin:0 0 6px;font-size:14px;line-height:1.3;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ipd-navy)}
.ipd-wtext__lines{margin:0;font-size:15px;line-height:1.5;color:var(--ipd-muted)}
.ipd-wtext--t{left:56.327%;top:2.933%;width:30.612%}
.ipd-wtext--r{left:78.776%;top:37.333%;width:21.224%}
.ipd-wtext--b{left:27.551%;top:81.600%;width:44.898%;text-align:center}
.ipd-wtext--l{left:0;top:37.333%;width:21.224%;text-align:right}
.ipd-wheel__list{display:none}
.ipd-eyebrow{margin:0;font-size:11px;line-height:1.2;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ipd-muted)}
.ipd-icon{flex:0 0 44px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#fff;color:var(--ipd-navy)}
.ipd-icon svg{display:block;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ipd-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--ipd-gap)}
.ipd-option{display:flex;flex-direction:column;padding:30px 28px 28px;border-radius:var(--ipd-radius);background:var(--ipd-fill)}
.ipd-option__title{margin:20px 0 0;font-size:28px;line-height:1.15;font-weight:700;color:var(--ipd-navy)}
.ipd-option__sub{margin:8px 0 0;font-size:17px;line-height:1.35;font-weight:700;color:var(--ipd-navy)}
.ipd-option__lead{margin:10px 0 0;padding-bottom:20px;font-size:15px;line-height:1.55;color:var(--ipd-muted)}
.ipd-option__listhead{margin:0;padding-top:20px;border-top:1px solid var(--ipd-line);font-size:11px;line-height:1.2;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ipd-navy)}
.ipd-option__take{margin:auto 0 0;padding-top:20px;font-size:15px;line-height:1.45;font-weight:700;color:var(--ipd-navy)}
.ipd-option__list{margin:0;padding:12px 0 0;list-style:none;display:grid;gap:8px}
.ipd-option__list li{position:relative;margin:0;padding-left:16px;font-size:14px;line-height:1.45;color:var(--ipd-navy)}
.ipd-option__list li::before{content:"";position:absolute;left:0;top:.6em;width:5px;height:5px;border-radius:50%;background:var(--ipd-navy)}
.ipd-merge{position:relative;height:104px;--ipd-c3l:calc(16.6667% - var(--ipd-gap)/3);--ipd-c3r:calc(83.3333% + var(--ipd-gap)/3)}
.ipd-merge__l{position:absolute;display:block;width:1px;background:var(--ipd-line-strong)}
.ipd-merge__l1{top:0;left:var(--ipd-c3l);height:22px}
.ipd-merge__l2{top:0;left:50%;height:22px}
.ipd-merge__l3{top:0;left:var(--ipd-c3r);height:22px}
.ipd-merge__l4{top:22px;left:var(--ipd-c3l);right:calc(100% - var(--ipd-c3r));width:auto;height:1px}
.ipd-merge__l5{top:22px;left:50%;height:16px}
.ipd-merge__l6{top:70px;left:50%;height:34px}
.ipd-expert{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.4fr);gap:36px;align-items:center;padding:0 56px 0 0;overflow:hidden}
.ipd-expert__photo{align-self:stretch;display:flex;align-items:flex-end;justify-content:center;min-height:300px;padding:28px 24px 0}
.ipd-expert__photo img{display:block;width:100%;max-width:260px;height:auto;border-radius:18px 18px 0 0}
.ipd-expert__body{padding:36px 0}
.ipd-expert__title{margin:12px 0 0;font-size:28px;line-height:1.2;font-weight:700;color:var(--ipd-navy)}
.ipd-expert__text{margin:14px 0 0;font-size:16px;line-height:1.6;color:var(--ipd-navy)}
.ipd-expert__name{margin:20px 0 0;font-size:14px;line-height:1.4;color:var(--ipd-muted)}
.ipd-expert__name strong{font-weight:700;color:var(--ipd-navy)}
@media(min-width:768px){.ipd{padding-left:32px;padding-right:32px}}
@media(max-width:900px){
.ipd-wheel{aspect-ratio:auto;display:flex;flex-direction:column;align-items:center}
.ipd-wheel__arcs,.ipd-node,.ipd-wtext{display:none}
.ipd-wheel__center{position:static;width:240px;padding:0}
.ipd-wheel__list{display:grid;gap:14px;width:100%;margin:20px 0 0;padding:0;list-style:none}
.ipd-wheel__item{display:flex;align-items:flex-start;gap:14px;margin:0;padding:18px 20px;border-radius:18px;background:var(--ipd-fill)}
.ipd-wheel__item .ipd-icon{flex-basis:44px;width:44px;height:44px}
.ipd-wheel__item .ipd-wtext__title{font-size:14px}
.ipd-wheel__item .ipd-wtext__lines{font-size:14px}
.ipd-join,.ipd-merge{height:auto;display:flex;flex-direction:column;align-items:center}
.ipd-join::before,.ipd-join::after,.ipd-merge::before,.ipd-merge::after{content:"";display:block;width:1px;height:22px;background:var(--ipd-line-strong)}
.ipd-join__l,.ipd-merge__l{display:none}
.ipd-pill{position:static;transform:none}
.ipd-options{grid-template-columns:minmax(0,1fr);gap:16px}
.ipd-option{padding:26px 28px}
.ipd-expert{grid-template-columns:minmax(0,1fr);gap:0;padding:0}
.ipd-expert__photo{min-height:0;padding:28px 28px 0}
.ipd-expert__photo img{max-width:280px}
.ipd-expert__body{padding:24px 30px 32px}
}
@media(max-width:600px){
.ipd{--ipd-radius:20px}
.ipd-join::before,.ipd-join::after,.ipd-merge::before,.ipd-merge::after{height:18px}
.ipd-option{padding:24px 22px 22px}
.ipd-option__title{font-size:25px}
.ipd-option__sub{font-size:16px}
.ipd-option__lead{font-size:14px;padding-bottom:16px}
.ipd-option__listhead{padding-top:16px}
.ipd-option__take{padding-top:16px;font-size:14px}
.ipd-expert__photo{padding:24px 20px 0}
.ipd-expert__photo img{max-width:240px}
.ipd-expert__body{padding:20px 22px 26px}
.ipd-expert__title{font-size:23px}
.ipd-expert__text{font-size:15px}
}
@media(max-width:360px){.ipd{padding-left:16px;padding-right:16px}}`;
  var HTML = `<section class="ipd" aria-label="Entscheidungsweg für eine geerbte Immobilie">
  <div class="ipd-inner">

    <div class="ipd-wheel">
      <svg class="ipd-wheel__arcs" viewBox="0 0 980 750" aria-hidden="true"><defs><marker id="ipd-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M1 1l7 4-7 4" fill="none" stroke="#B9C6E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs><path d="M607.6 141.7A222 222 0 0 1 699.9 257.7" marker-end="url(#ipd-arr)"/><path d="M699.9 402.3A222 222 0 0 1 562.3 539.9" marker-end="url(#ipd-arr)"/><path d="M417.7 539.9A222 222 0 0 1 280.1 402.3" marker-end="url(#ipd-arr)"/><path d="M280.1 257.7A222 222 0 0 1 417.7 120.1" marker-end="url(#ipd-arr)"/></svg>
      <div class="ipd-wheel__center">
        <svg class="ipd-wheel__house" viewBox="0 0 520 230" role="img" aria-label="Illustration eines Hauses">
            <path d="M65 187C155 180 360 180 455 187" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".45"/>
            <path d="M125 92L260 29L395 92V180H125V92Z" fill="#FFFFFF" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M99 94L260 18L421 94" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M325 65L395 97V180H325V65Z" fill="#FFFFFF" stroke="currentColor" stroke-width="1.6"/>
            <rect x="155" y="105" width="45" height="39" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
            <path d="M177.5 105V144M155 124.5H200" stroke="currentColor" stroke-width="1"/>
            <rect x="275" y="101" width="45" height="42" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
            <path d="M297.5 101V143M275 122H320" stroke="currentColor" stroke-width="1"/>
            <rect x="218" y="119" width="35" height="61" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="246" cy="150" r="1.7" fill="currentColor"/>
            <rect x="239" y="59" width="40" height="31" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
            <path d="M259 59V90M239 74.5H279" stroke="currentColor" stroke-width="1"/>
            <path d="M295 51V25H312V59" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
            <path d="M92 155V181M425 153V181" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".65"/>
            <circle cx="92" cy="143" r="21" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
            <circle cx="425" cy="140" r="23" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
          </svg>
        <p class="ipd-wheel__label">Die geerbte<br>Immobilie</p>
      </div>
      <span class="ipd-node ipd-node--t"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.9.2 5 2.3 5 5.4"/></svg></span>
      <div class="ipd-wtext ipd-wtext--t"><p class="ipd-wtext__title">Wer erbt?</p><p class="ipd-wtext__lines">Allein oder gemeinsam?<br>Sind sich die Erben einig?<br>Gibt es Konflikte?</p></div>
      <span class="ipd-node ipd-node--r"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="10" cy="6.5" rx="6" ry="2.6"/><path d="M4 6.5v4c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4"/><path d="M4 10.5v4c0 1.4 2.7 2.6 6 2.6"/><circle cx="16.5" cy="16" r="4.5"/><path d="M17.8 14.6a1.6 1.6 0 1 0 0 2.8M14.8 15.6h2.4M14.8 16.6h2.4"/></svg></span>
      <div class="ipd-wtext ipd-wtext--r"><p class="ipd-wtext__title">Was ist finanziell möglich?</p><p class="ipd-wtext__lines">Auszahlung der Miterben?<br>Finanzierung?<br>Sanierung oder Modernisierung?<br>Laufende Kosten?</p></div>
      <span class="ipd-node ipd-node--b"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5 1.2 0 2.3.3 3.2.8"/><path d="M17 20s-3.5-3.2-3.5-6a3.5 3.5 0 0 1 7 0c0 2.8-3.5 6-3.5 6Z"/><circle cx="17" cy="14" r="1.2"/></svg></span>
      <div class="ipd-wtext ipd-wtext--b"><p class="ipd-wtext__title">Wo stehen Sie im Leben?</p><p class="ipd-wtext__lines">Leben Sie noch vor Ort?<br>Möchten Sie selbst einziehen?<br>Passt die Immobilie zu Ihrer Lebensplanung?</p></div>
      <span class="ipd-node ipd-node--l"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><path d="M12 4V2M20 12h2"/></svg></span>
      <div class="ipd-wtext ipd-wtext--l"><p class="ipd-wtext__title">Was möchten Sie erreichen?</p><p class="ipd-wtext__lines">Selbst nutzen?<br>Vermieten?<br>Vermögen erhalten?<br>Oder verkaufen?</p></div>
      <ul class="ipd-wheel__list">
        <li class="ipd-wheel__item"><span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.9.2 5 2.3 5 5.4"/></svg></span><div><p class="ipd-wtext__title">Wer erbt?</p><p class="ipd-wtext__lines">Allein oder gemeinsam?<br>Sind sich die Erben einig?<br>Gibt es Konflikte?</p></div></li>
        <li class="ipd-wheel__item"><span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="10" cy="6.5" rx="6" ry="2.6"/><path d="M4 6.5v4c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4"/><path d="M4 10.5v4c0 1.4 2.7 2.6 6 2.6"/><circle cx="16.5" cy="16" r="4.5"/><path d="M17.8 14.6a1.6 1.6 0 1 0 0 2.8M14.8 15.6h2.4M14.8 16.6h2.4"/></svg></span><div><p class="ipd-wtext__title">Was ist finanziell möglich?</p><p class="ipd-wtext__lines">Auszahlung der Miterben?<br>Finanzierung?<br>Sanierung oder Modernisierung?<br>Laufende Kosten?</p></div></li>
        <li class="ipd-wheel__item"><span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5 1.2 0 2.3.3 3.2.8"/><path d="M17 20s-3.5-3.2-3.5-6a3.5 3.5 0 0 1 7 0c0 2.8-3.5 6-3.5 6Z"/><circle cx="17" cy="14" r="1.2"/></svg></span><div><p class="ipd-wtext__title">Wo stehen Sie im Leben?</p><p class="ipd-wtext__lines">Leben Sie noch vor Ort?<br>Möchten Sie selbst einziehen?<br>Passt die Immobilie zu Ihrer Lebensplanung?</p></div></li>
        <li class="ipd-wheel__item"><span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><path d="M12 4V2M20 12h2"/></svg></span><div><p class="ipd-wtext__title">Was möchten Sie erreichen?</p><p class="ipd-wtext__lines">Selbst nutzen?<br>Vermieten?<br>Vermögen erhalten?<br>Oder verkaufen?</p></div></li>
      </ul>
    </div>

    <div class="ipd-join">
      <span class="ipd-join__l ipd-join__l4"></span>
      <span class="ipd-pill">Drei mögliche Wege</span>
      <span class="ipd-join__l ipd-join__l5"></span><span class="ipd-join__l ipd-join__l6"></span><span class="ipd-join__l ipd-join__l7"></span><span class="ipd-join__l ipd-join__l8"></span><span class="ipd-join__l ipd-join__l9"></span>
    </div>

    <div class="ipd-options">
      <div class="ipd-option">
        <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l9 9-8 8-9-9Z"/><circle cx="7.5" cy="8.5" r="1.3"/></svg></span>
        <h3 class="ipd-option__title">Verkaufen</h3>
        <p class="ipd-option__sub">Wert realisieren. Klarheit schaffen.</p>
        <p class="ipd-option__lead">Ein Verkauf kann sinnvoll sein, wenn Sie die Immobilie nicht selbst nutzen möchten und langfristige Verpflichtungen vermeiden wollen.</p>
        <p class="ipd-option__listhead">Besonders relevant, wenn …</p>
        <ul class="ipd-option__list">
          <li>mehrere Erben beteiligt sind und eine gemeinsame Lösung gesucht wird</li>
          <li>keine eigene Nutzung geplant ist</li>
          <li>größere Sanierungen oder Instandhaltungen anstehen</li>
          <li>die Auszahlung einzelner Miterben schwer zu finanzieren ist</li>
        </ul>
        <p class="ipd-option__take">→ Liquidität schaffen und klare Verhältnisse herstellen.</p>
      </div>
      <div class="ipd-option">
        <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5 12 5l8 6.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg></span>
        <h3 class="ipd-option__title">Behalten</h3>
        <p class="ipd-option__sub">Vermögen sichern, wenn die Immobilie zu Ihnen passt.</p>
        <p class="ipd-option__lead">Die Immobilie zu behalten, ist emotional oft naheliegend. Wirtschaftlich sinnvoll ist es, wenn Lage, Zustand, Nutzung und Finanzierung zusammenpassen.</p>
        <p class="ipd-option__listhead">Entscheidend ist …</p>
        <ul class="ipd-option__list">
          <li>ob der tatsächliche Marktwert bekannt ist, um Miterben fair auszuzahlen</li>
          <li>ob die Finanzierung langfristig tragbar ist</li>
          <li>welcher Sanierungs- und Instandhaltungsbedarf besteht</li>
          <li>ob die Immobilie zu Ihrer Lebensplanung passt</li>
        </ul>
        <p class="ipd-option__take">→ Behalten, wenn Nutzung und Vermögensperspektive überzeugen.</p>
      </div>
      <div class="ipd-option">
        <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="14.5" r="4"/><path d="M11 11.5 20 2.5"/><path d="M17 5.5 19.5 8M14.5 8l2.5 2.5"/></svg></span>
        <h3 class="ipd-option__title">Vermieten</h3>
        <p class="ipd-option__sub">Immobilie behalten und Erträge erzielen.</p>
        <p class="ipd-option__lead">Vermieten kann ein guter Mittelweg sein: Die Immobilie bleibt im Familienvermögen und erzeugt laufende Einnahmen. Entscheidend ist die Rendite nach allen Kosten.</p>
        <p class="ipd-option__listhead">Vorher sollte geprüft werden …</p>
        <ul class="ipd-option__list">
          <li>welche Miete am Standort realistisch und zulässig ist</li>
          <li>ob Zustand, Grundriss und energetische Qualität passen</li>
          <li>welche Kosten für Instandhaltung, Verwaltung und Rücklagen entstehen</li>
          <li>wie hoch der laufende Aufwand für Sie ist</li>
          <li>ob eine attraktive Nettorendite bleibt</li>
        </ul>
        <p class="ipd-option__take">→ Nicht die Miete zählt – sondern was am Ende übrig bleibt.</p>
      </div>
    </div>

    <div class="ipd-merge">
      <span class="ipd-merge__l ipd-merge__l1"></span><span class="ipd-merge__l ipd-merge__l2"></span><span class="ipd-merge__l ipd-merge__l3"></span><span class="ipd-merge__l ipd-merge__l4"></span><span class="ipd-merge__l ipd-merge__l5"></span>
      <span class="ipd-pill">Der Vergleich</span>
      <span class="ipd-merge__l ipd-merge__l6"></span>
    </div>

    <div class="ipd-card ipd-expert">
      <div class="ipd-expert__photo">
        <img class="ipd-expert__img" src="" alt="Jörg von Bierbrauer zu Brennstein, Immobiliengutachter">
      </div>
      <div class="ipd-expert__body">
        <p class="ipd-eyebrow">Persönliche Beratung</p>
        <h3 class="ipd-expert__title">In einem gemeinsamen Gespräch klären wir, welcher Weg zu Ihnen passt.</h3>
        <p class="ipd-expert__text">Wir gehen die Möglichkeiten zusammen durch – mit Blick auf Ihre individuelle Situation und die Faktoren, die für Sie den Unterschied machen.</p>
        <p class="ipd-expert__name"><strong>Jörg von Bierbrauer zu Brennstein</strong> · Zertifizierter Immobiliengutachter mit langjähriger Erfahrung im Rhein-Main-Gebiet</p>
      </div>
    </div>

  </div>
</section>`;
  var STYLE_ID = 'ipd-decision-map-styles';
  var MOUNT_ID = 'ipd-decision-map';
  var PHOTO_FILE = 'joerg-von-bierbrauer.png';   /* liegt neben decision-map.js im Repo */
  var FALLBACK_PHOTO = 'https://cdn.prod.website-files.com/6a44ebdb190d2f1ca6ddf4a7/6a53db2e9363359153fd42de_jvbl-p-1080.jpg';
  var script = document.currentScript;

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  function mount() {
    injectStyles();
    var host = document.getElementById(MOUNT_ID);
    if (!host) {
      host = document.createElement('div');
      host.id = MOUNT_ID;
      if (script && script.parentNode) script.parentNode.insertBefore(host, script);
      else document.body.appendChild(host);
    }
    if (host.getAttribute('data-ipd-mounted')) return;
    host.innerHTML = HTML;
    host.setAttribute('data-ipd-mounted', '1');
    var img = host.querySelector('.ipd-expert__img');
    if (img) {
      var base = script && script.src ? script.src.replace(/[^\/]*$/, '') : '';
      img.onerror = function () { img.onerror = null; img.src = FALLBACK_PHOTO; };
      img.src = window.IPD_EXPERT_PHOTO || (base + PHOTO_FILE);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
