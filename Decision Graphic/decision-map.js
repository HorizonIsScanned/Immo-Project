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
.ipd-card__title{margin:0;font-size:22px;line-height:1.25;font-weight:700;color:var(--ipd-navy)}
.ipd-card__sub{margin:8px 0 0;font-size:15px;line-height:1.55;color:var(--ipd-muted)}
.ipd-start{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ipd-gap)}
.ipd-situation{padding:36px 36px 34px}
.ipd-factors{margin:26px 0 0;padding:0;list-style:none;display:grid;gap:18px}
.ipd-factor{display:flex;align-items:flex-start;gap:16px;margin:0}
.ipd-factor__title{margin:0;font-size:16px;line-height:1.35;font-weight:700;color:var(--ipd-navy)}
.ipd-factor__text{margin:3px 0 0;font-size:14px;line-height:1.5;color:var(--ipd-muted)}
.ipd-property{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 36px 34px}
.ipd-property__visual{width:100%;max-width:400px;color:var(--ipd-navy)}
.ipd-property__visual svg{display:block;width:100%;height:auto}
.ipd-property .ipd-card__title{margin-top:8px}
.ipd-property .ipd-card__sub{max-width:400px}
.ipd-join{position:relative;height:96px;--ipd-c2l:calc(25% - var(--ipd-gap)/4);--ipd-c2r:calc(75% + var(--ipd-gap)/4);--ipd-c3l:calc(16.6667% - var(--ipd-gap)/3);--ipd-c3r:calc(83.3333% + var(--ipd-gap)/3)}
.ipd-join__l{position:absolute;display:block;width:1px;background:var(--ipd-line-strong)}
.ipd-join__l1{top:0;left:var(--ipd-c2l);height:22px}
.ipd-join__l2{top:0;left:var(--ipd-c2r);height:22px}
.ipd-join__l3{top:22px;left:var(--ipd-c2l);right:calc(100% - var(--ipd-c2r));width:auto;height:1px}
.ipd-join__l4{top:22px;left:50%;height:16px}
.ipd-join__l5{top:70px;left:50%;height:12px}
.ipd-join__l6{top:82px;left:var(--ipd-c3l);right:calc(100% - var(--ipd-c3r));width:auto;height:1px}
.ipd-join__l7{top:82px;left:var(--ipd-c3l);height:14px}
.ipd-join__l8{top:82px;left:50%;height:14px}
.ipd-join__l9{top:82px;left:var(--ipd-c3r);height:14px}
.ipd-pill{position:absolute;top:38px;left:50%;transform:translateX(-50%);display:inline-flex;align-items:center;height:32px;padding:0 18px;border-radius:999px;background:var(--ipd-fill);font-size:11px;line-height:1;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ipd-navy);white-space:nowrap}
.ipd-eyebrow{margin:0;font-size:11px;line-height:1.2;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ipd-muted)}
.ipd-icon{flex:0 0 44px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#fff;color:var(--ipd-navy)}
.ipd-icon svg{display:block;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ipd-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--ipd-gap)}
.ipd-option{display:flex;flex-direction:column;padding:30px 28px 28px;border-radius:var(--ipd-radius);background:var(--ipd-fill)}
.ipd-option__title{margin:20px 0 0;font-size:24px;line-height:1.2;font-weight:700;color:var(--ipd-navy)}
.ipd-option__lead{min-height:66px;margin:8px 0 0;padding-bottom:20px;font-size:15px;line-height:1.55;color:var(--ipd-muted)}
.ipd-option__list{margin:0;padding:20px 0 0;list-style:none;display:grid;gap:10px;border-top:1px solid var(--ipd-line)}
.ipd-option__list li{position:relative;margin:0;padding-left:16px;font-size:15px;line-height:1.45;color:var(--ipd-navy)}
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
.ipd-start{grid-template-columns:minmax(0,1fr)}
.ipd-situation{padding:30px 30px 28px}
.ipd-property{padding:24px 30px 28px}
.ipd-join,.ipd-merge{height:auto;display:flex;flex-direction:column;align-items:center}
.ipd-join::before,.ipd-join::after,.ipd-merge::before,.ipd-merge::after{content:"";display:block;width:1px;height:22px;background:var(--ipd-line-strong)}
.ipd-join__l,.ipd-merge__l{display:none}
.ipd-pill{position:static;transform:none}
.ipd-options{grid-template-columns:minmax(0,1fr);gap:16px}
.ipd-option{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:28px;align-items:start;padding:26px 28px}
.ipd-option .ipd-icon{grid-column:1;grid-row:1}
.ipd-option__title{grid-column:1;grid-row:2}
.ipd-option__lead{grid-column:1;grid-row:3;min-height:0;padding-bottom:0}
.ipd-option__list{grid-column:2;grid-row:1/span 3;align-self:center;margin:0;padding:0 0 0 28px;border-top:0;border-left:1px solid var(--ipd-line)}
.ipd-expert{grid-template-columns:minmax(0,1fr);gap:0;padding:0}
.ipd-expert__photo{min-height:0;padding:28px 28px 0}
.ipd-expert__photo img{max-width:280px}
.ipd-expert__body{padding:24px 30px 32px}
}
@media(max-width:600px){
.ipd{--ipd-radius:20px}
.ipd-situation{padding:26px 22px 24px}
.ipd-property{padding:20px 22px 24px}
.ipd-property__visual{max-width:320px}
.ipd-card__title{font-size:20px}
.ipd-card__sub{font-size:14px}
.ipd-factors{margin-top:20px;gap:14px}
.ipd-factor__title{font-size:15px}
.ipd-factor__text{font-size:13px}
.ipd-join::before,.ipd-join::after,.ipd-merge::before,.ipd-merge::after{height:18px}
.ipd-option{display:flex;flex-direction:column;padding:24px 22px 22px}
.ipd-option__title{font-size:22px;margin-top:16px}
.ipd-option__lead{font-size:14px;padding-bottom:16px}
.ipd-option__list{margin:auto 0 0;padding:16px 0 0;border-left:0;border-top:1px solid var(--ipd-line)}
.ipd-option__list li{font-size:14px}
.ipd-expert__photo{padding:24px 20px 0}
.ipd-expert__photo img{max-width:240px}
.ipd-expert__body{padding:20px 22px 26px}
.ipd-expert__title{font-size:23px}
.ipd-expert__text{font-size:15px}
}
@media(max-width:360px){.ipd{padding-left:16px;padding-right:16px}}`;
  var HTML = `<section class="ipd" aria-label="Entscheidungsweg für eine geerbte Immobilie">
  <div class="ipd-inner">

    <div class="ipd-start">
      <div class="ipd-card ipd-situation">
        <h3 class="ipd-card__title">Ihre Situation</h3>
        <p class="ipd-card__sub">Drei Dinge prägen die Entscheidung besonders:</p>
        <ul class="ipd-factors">
          <li class="ipd-factor">
            <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 21V4"/><path d="M6 4h11.5l-2.5 4 2.5 4H6"/></svg></span>
            <div><p class="ipd-factor__title">Ihre Ziele</p><p class="ipd-factor__text">Selbst einziehen, Vermögen sichern oder klare Verhältnisse schaffen?</p></div>
          </li>
          <li class="ipd-factor">
            <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.5 13.6c2.9.2 5 2.3 5 5.4"/></svg></span>
            <div><p class="ipd-factor__title">Allein oder gemeinsam geerbt</p><p class="ipd-factor__text">Als Alleinerbe entscheiden Sie selbst. In einer Erbengemeinschaft müssen sich alle einigen.</p></div>
          </li>
          <li class="ipd-factor">
            <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="11" rx="2"/><circle cx="12" cy="12.5" r="2.5"/><path d="M6.5 10.5v4M17.5 10.5v4"/></svg></span>
            <div><p class="ipd-factor__title">Ihre finanziellen Möglichkeiten</p><p class="ipd-factor__text">Was können und möchten Sie in die Immobilie investieren?</p></div>
          </li>
        </ul>
      </div>

      <div class="ipd-card ipd-property">
        <div class="ipd-property__visual">
          <svg viewBox="0 0 520 230" role="img" aria-label="Illustration eines Hauses">
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
        </div>
        <h3 class="ipd-card__title">Die geerbte Immobilie</h3>
        <p class="ipd-card__sub">Wert, Zustand, Lage und heutige Nutzung: Die Immobilie ist der gemeinsame Ausgangspunkt für alle drei Wege.</p>
      </div>
    </div>

    <div class="ipd-join">
      <span class="ipd-join__l ipd-join__l1"></span><span class="ipd-join__l ipd-join__l2"></span><span class="ipd-join__l ipd-join__l3"></span><span class="ipd-join__l ipd-join__l4"></span>
      <span class="ipd-pill">Drei mögliche Wege</span>
      <span class="ipd-join__l ipd-join__l5"></span><span class="ipd-join__l ipd-join__l6"></span><span class="ipd-join__l ipd-join__l7"></span><span class="ipd-join__l ipd-join__l8"></span><span class="ipd-join__l ipd-join__l9"></span>
    </div>

    <div class="ipd-options">
      <div class="ipd-option">
        <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5 12 5l8 6.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg></span>
        <h3 class="ipd-option__title">Behalten</h3>
        <p class="ipd-option__lead">Die Immobilie bleibt in Ihrem Besitz – zum Wohnen oder als Wert für später.</p>
        <ul class="ipd-option__list">
          <li>Passt die Immobilie zu Ihren Plänen?</li>
          <li>Was kostet der Unterhalt im Jahr?</li>
          <li>Welche Arbeiten stehen an?</li>
        </ul>
      </div>
      <div class="ipd-option">
        <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="14.5" r="4"/><path d="M11 11.5 20 2.5"/><path d="M17 5.5 19.5 8M14.5 8l2.5 2.5"/></svg></span>
        <h3 class="ipd-option__title">Vermieten</h3>
        <p class="ipd-option__lead">Die Immobilie bleibt Ihnen und bringt regelmäßige Einnahmen.</p>
        <ul class="ipd-option__list">
          <li>Welche Miete ist realistisch?</li>
          <li>Wie hoch ist der laufende Aufwand?</li>
          <li>Was bleibt nach Kosten übrig?</li>
        </ul>
      </div>
      <div class="ipd-option">
        <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l9 9-8 8-9-9Z"/><circle cx="7.5" cy="8.5" r="1.3"/></svg></span>
        <h3 class="ipd-option__title">Verkaufen</h3>
        <p class="ipd-option__lead">Sie lösen den Wert der Immobilie aus und schaffen klare Verhältnisse.</p>
        <ul class="ipd-option__list">
          <li>Welchen Preis kann die Immobilie erzielen?</li>
          <li>Wann ist ein guter Zeitpunkt?</li>
          <li>Was ist bei mehreren Erben zu klären?</li>
        </ul>
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
        <p class="ipd-eyebrow">Gemeinsam bewerten</p>
        <h3 class="ipd-expert__title">Welcher Weg zu Ihnen passt, klären wir im Gespräch.</h3>
        <p class="ipd-expert__text">Jörg von Bierbrauer geht die drei Wege mit Ihnen durch – mit Blick auf Ihre Situation, Ihre Immobilie und die Faktoren, die für Sie den Unterschied machen.</p>
        <p class="ipd-expert__name"><strong>Jörg von Bierbrauer zu Brennstein</strong> · DIA-zertifizierter Immobiliengutachter</p>
      </div>
    </div>

  </div>
</section>`;
  var STYLE_ID = 'ipd-decision-map-styles';
  var MOUNT_ID = 'ipd-decision-map';
  var PHOTO_FILE = 'assets/Joerg_Headshot1.png';   /* liegt neben decision-map.js im Repo */
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
