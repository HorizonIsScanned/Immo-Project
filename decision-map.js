/* Immobilienpunkt – Decision Map ("Drei Wege") · self-injecting bundle
 * Einbau in Webflow (Code Embed):
 *   <div id="ipd-decision-map"></div>
 *   <script src="https://…/decision-map.js" defer></script>
 * Ohne Mount-Div wird die Section direkt an der Script-Position eingefügt.
 */
(function () {
  'use strict';
  var CSS = `.ipd{--ipd-navy:#001C4E;--ipd-muted:#5C677D;--ipd-line:#DCE1EA;--ipd-line-strong:#B9C2D2;--ipd-panel:#F5F7FA;--ipd-track:#E3E8F0;--ipd-radius:14px;--ipd-shadow:0 5px 35px rgba(30,34,40,.07);--ipd-shadow-hover:0 8px 24px rgba(5,27,76,.1);--ipd-ease:cubic-bezier(.22,1,.36,1);--ipd-gap:24px;--ipd-gap-o:20px;box-sizing:border-box;width:100%;padding:0 20px;background:#fff;color:var(--ipd-navy);font-family:Georgia,"Times New Roman",serif;-webkit-font-smoothing:antialiased;overflow:hidden}
.ipd *,.ipd *::before,.ipd *::after{box-sizing:border-box}
.ipd,.ipd *,.ipd h3,.ipd p,.ipd ul,.ipd li,.ipd span{font-family:Georgia,"Times New Roman",serif}
.ipd-inner{width:100%;max-width:1100px;margin:0 auto}
.ipd-pill{display:inline-flex;align-items:center;height:28px;padding:0 14px;border:1px solid var(--ipd-line-strong);border-radius:999px;background:#fff;font-size:11px;line-height:1;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ipd-navy);white-space:nowrap}
.ipd-card{border:1px solid var(--ipd-line);border-radius:var(--ipd-radius);background:#fff;box-shadow:var(--ipd-shadow)}
.ipd-card__title{margin:0;font-size:20px;line-height:1.3;font-weight:700;color:var(--ipd-navy)}
.ipd-card__sub{margin:6px 0 0;font-size:14px;line-height:1.55;color:var(--ipd-muted)}
.ipd-start{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--ipd-gap)}
.ipd-situation{padding:28px 28px 26px}
.ipd-factors{margin:22px 0 0;padding:0;list-style:none;display:grid;gap:16px}
.ipd-factor{display:flex;align-items:flex-start;gap:14px}
.ipd-icon{flex:0 0 40px;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--ipd-panel);color:var(--ipd-navy)}
.ipd-icon svg,.ipd-option__icon svg{display:block;width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ipd-factor__title{margin:0;font-size:15px;line-height:1.35;font-weight:700;color:var(--ipd-navy)}
.ipd-factor__text{margin:3px 0 0;font-size:13px;line-height:1.5;color:var(--ipd-muted)}
.ipd-property{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:22px 28px 26px}
.ipd-property__visual{width:100%;max-width:420px;color:var(--ipd-navy)}
.ipd-property__visual svg{display:block;width:100%;height:auto}
.ipd-property .ipd-card__title{margin-top:4px}
.ipd-property .ipd-card__sub{max-width:400px}
.ipd-merge{position:relative;height:102px;--ipd-c2l:calc(25% - var(--ipd-gap)/4);--ipd-c2r:calc(75% + var(--ipd-gap)/4);--ipd-c3l:calc(16.6667% - var(--ipd-gap-o)/3);--ipd-c3r:calc(83.3333% + var(--ipd-gap-o)/3)}
.ipd-merge__l{position:absolute;display:block;width:1px;background:var(--ipd-line-strong)}
.ipd-merge__l1{top:0;left:var(--ipd-c2l);height:22px}
.ipd-merge__l2{top:0;left:var(--ipd-c2r);height:22px}
.ipd-merge__l3{top:22px;left:var(--ipd-c2l);right:calc(100% - var(--ipd-c2r));width:auto;height:1px}
.ipd-merge__l4{top:22px;left:50%;height:18px}
.ipd-merge .ipd-pill{position:absolute;top:40px;left:50%;transform:translateX(-50%)}
.ipd-merge__l5{top:68px;left:50%;height:16px}
.ipd-merge__l6{top:84px;left:var(--ipd-c3l);right:calc(100% - var(--ipd-c3r));width:auto;height:1px}
.ipd-merge__l7{top:84px;left:var(--ipd-c3l);height:14px}
.ipd-merge__l8{top:84px;left:50%;height:14px}
.ipd-merge__l9{top:84px;left:var(--ipd-c3r);height:14px}
.ipd-merge__d{position:absolute;top:95px;width:7px;height:7px;margin-left:-3px;border-radius:50%;background:var(--ipd-line-strong)}
.ipd-merge__d1{left:var(--ipd-c3l)}.ipd-merge__d2{left:50%}.ipd-merge__d3{left:var(--ipd-c3r)}
.ipd-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--ipd-gap-o)}
.ipd-option{display:flex;flex-direction:column;margin:0;padding:26px 24px 24px;border:1px solid var(--ipd-line);border-radius:var(--ipd-radius);background:#fff;box-shadow:var(--ipd-shadow);transition:border-color .18s var(--ipd-ease),box-shadow .18s var(--ipd-ease),transform .18s var(--ipd-ease)}
@media(hover:hover){.ipd-option:hover{border-color:var(--ipd-line-strong);box-shadow:var(--ipd-shadow-hover);transform:translateY(-2px)}}
.ipd-option__icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;margin:0 0 16px;border-radius:50%;background:var(--ipd-panel);color:var(--ipd-navy)}
.ipd-option__title{margin:0;font-size:22px;line-height:1.2;font-weight:700;color:var(--ipd-navy)}
.ipd-option__lead{margin:8px 0 0;padding-bottom:18px;font-size:14px;line-height:1.55;color:var(--ipd-muted)}
.ipd-option__divider{height:1px;margin:auto 0 16px;background:var(--ipd-line)}
.ipd-option__list{margin:0;padding:0;list-style:none;display:grid;gap:9px}
.ipd-option__list li{position:relative;margin:0;padding-left:16px;font-size:14px;line-height:1.45;color:var(--ipd-navy)}
.ipd-option__list li::before{content:"";position:absolute;left:0;top:.6em;width:5px;height:5px;border-radius:50%;background:var(--ipd-navy)}
.ipd-flow{display:flex;flex-direction:column;align-items:center}
.ipd-flow__line{display:block;width:1px;height:20px;background:var(--ipd-line-strong)}
.ipd-compare{overflow:hidden}
.ipd-compare__head{padding:26px 28px 20px;text-align:center}
.ipd-compare__sub{max-width:560px;margin-left:auto;margin-right:auto}
.ipd-row{display:grid;grid-template-columns:minmax(0,1.7fr) repeat(3,minmax(0,1fr));align-items:center;padding:0 28px;border-top:1px solid var(--ipd-line)}
.ipd-row--head{background:var(--ipd-panel)}
.ipd-row__key{padding:12px 8px 12px 0;font-size:11px;line-height:1.2;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ipd-muted)}
.ipd-row__opt{padding:12px 8px;font-size:14px;line-height:1.2;font-weight:700;text-align:center;color:var(--ipd-navy)}
.ipd-row__label{padding:12px 12px 12px 0;font-size:14px;line-height:1.4;color:var(--ipd-navy)}
.ipd-cell{display:flex;justify-content:center;padding:12px 8px}
.ipd-track{display:block;width:32px;height:5px;border-radius:99px;background:var(--ipd-track)}
.ipd-compare__note{margin:0;padding:16px 28px 20px;border-top:1px solid var(--ipd-line);font-size:13px;line-height:1.5;text-align:center;color:var(--ipd-muted)}
@media(min-width:768px){.ipd{padding-left:32px;padding-right:32px}}
@media(max-width:900px){
.ipd-start{grid-template-columns:minmax(0,1fr)}
.ipd-situation{padding:26px 26px 24px}
.ipd-property{padding:20px 26px 24px}
.ipd-merge{height:auto;display:flex;flex-direction:column;align-items:center}
.ipd-merge::before,.ipd-merge::after{content:"";display:block;width:1px;height:20px;background:var(--ipd-line-strong)}
.ipd-merge__l,.ipd-merge__d{display:none}
.ipd-merge .ipd-pill{position:static;transform:none}
.ipd-options{grid-template-columns:minmax(0,1fr)}
.ipd-option{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:28px;align-items:start;padding:22px 26px}
.ipd-option__icon{grid-column:1;grid-row:1}
.ipd-option__title{grid-column:1;grid-row:2}
.ipd-option__lead{grid-column:1;grid-row:3;padding-bottom:0}
.ipd-option__divider{display:none}
.ipd-option__list{grid-column:2;grid-row:1/span 3;align-self:center;padding-left:28px;border-left:1px solid var(--ipd-line)}
}
@media(max-width:600px){
.ipd-situation{padding:22px 20px}
.ipd-property{padding:16px 20px 22px}
.ipd-property__visual{max-width:340px}
.ipd-factors{margin-top:18px;gap:14px}
.ipd-merge::before,.ipd-merge::after,.ipd-flow__line{height:18px}
.ipd-option{display:flex;flex-direction:column;padding:22px 20px 20px}
.ipd-option__lead{padding-bottom:16px}
.ipd-option__divider{display:block}
.ipd-option__list{padding-left:0;border-left:0}
.ipd-option__title{font-size:21px}
.ipd-compare__head{padding:22px 18px 18px}
.ipd-row{grid-template-columns:minmax(0,1fr) repeat(3,minmax(58px,66px));padding:0 16px}
.ipd-row__key{font-size:10px;letter-spacing:.08em}
.ipd-row__key-long{display:none}
.ipd-row__opt{padding:12px 0;font-size:11px}
.ipd-row__label{padding:12px 8px 12px 0;font-size:13px}
.ipd-cell{padding:12px 0}
.ipd-track{width:26px;height:4px}
.ipd-compare__note{padding:14px 18px 18px;font-size:12px}
}
@media(max-width:360px){.ipd{padding-left:16px;padding-right:16px}.ipd-row{grid-template-columns:minmax(0,1fr) repeat(3,58px);padding:0 12px}.ipd-row__opt{font-size:9.5px;letter-spacing:-.01em}.ipd-row__label{font-size:12px}.ipd-track{width:22px}}`;
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
            <path d="M325 65L395 97V180H325V65Z" fill="#F5F7FA" stroke="currentColor" stroke-width="1.6"/>
            <rect x="155" y="105" width="45" height="39" rx="2" fill="#EEF1F7" stroke="currentColor" stroke-width="1.5"/>
            <path d="M177.5 105V144M155 124.5H200" stroke="currentColor" stroke-width="1"/>
            <rect x="275" y="101" width="45" height="42" rx="2" fill="#EEF1F7" stroke="currentColor" stroke-width="1.5"/>
            <path d="M297.5 101V143M275 122H320" stroke="currentColor" stroke-width="1"/>
            <rect x="218" y="119" width="35" height="61" rx="2" fill="#F5F7FA" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="246" cy="150" r="1.7" fill="currentColor"/>
            <rect x="239" y="59" width="40" height="31" rx="2" fill="#EEF1F7" stroke="currentColor" stroke-width="1.5"/>
            <path d="M259 59V90M239 74.5H279" stroke="currentColor" stroke-width="1"/>
            <path d="M295 51V25H312V59" fill="#F5F7FA" stroke="currentColor" stroke-width="1.5"/>
            <path d="M92 155V181M425 153V181" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".65"/>
            <circle cx="92" cy="143" r="21" fill="#EEF1F7" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
            <circle cx="425" cy="140" r="23" fill="#EEF1F7" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
          </svg>
        </div>
        <h3 class="ipd-card__title">Die geerbte Immobilie</h3>
        <p class="ipd-card__sub">Wert, Zustand, Lage und heutige Nutzung: Die Immobilie ist der gemeinsame Ausgangspunkt für alle drei Wege.</p>
      </div>
    </div>

    <div class="ipd-merge">
      <span class="ipd-merge__l ipd-merge__l1"></span><span class="ipd-merge__l ipd-merge__l2"></span><span class="ipd-merge__l ipd-merge__l3"></span><span class="ipd-merge__l ipd-merge__l4"></span>
      <span class="ipd-pill">Drei mögliche Wege</span>
      <span class="ipd-merge__l ipd-merge__l5"></span><span class="ipd-merge__l ipd-merge__l6"></span><span class="ipd-merge__l ipd-merge__l7"></span><span class="ipd-merge__l ipd-merge__l8"></span><span class="ipd-merge__l ipd-merge__l9"></span>
      <span class="ipd-merge__d ipd-merge__d1"></span><span class="ipd-merge__d ipd-merge__d2"></span><span class="ipd-merge__d ipd-merge__d3"></span>
    </div>

    <div class="ipd-options">
      <div class="ipd-option">
        <span class="ipd-option__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5 12 5l8 6.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg></span>
        <h3 class="ipd-option__title">Behalten</h3>
        <p class="ipd-option__lead">Die Immobilie bleibt in Ihrem Besitz – zum Wohnen oder als Wert für später.</p>
        <div class="ipd-option__divider"></div>
        <ul class="ipd-option__list">
          <li>Passt die Immobilie zu Ihren Plänen?</li>
          <li>Was kostet der Unterhalt im Jahr?</li>
          <li>Welche Arbeiten stehen an?</li>
        </ul>
      </div>
      <div class="ipd-option">
        <span class="ipd-option__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="14.5" r="4"/><path d="M11 11.5 20 2.5"/><path d="M17 5.5 19.5 8M14.5 8l2.5 2.5"/></svg></span>
        <h3 class="ipd-option__title">Vermieten</h3>
        <p class="ipd-option__lead">Die Immobilie bleibt Ihnen und bringt regelmäßige Einnahmen.</p>
        <div class="ipd-option__divider"></div>
        <ul class="ipd-option__list">
          <li>Welche Miete ist realistisch?</li>
          <li>Wie hoch ist der laufende Aufwand?</li>
          <li>Was bleibt nach Kosten übrig?</li>
        </ul>
      </div>
      <div class="ipd-option">
        <span class="ipd-option__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l9 9-8 8-9-9Z"/><circle cx="7.5" cy="8.5" r="1.3"/></svg></span>
        <h3 class="ipd-option__title">Verkaufen</h3>
        <p class="ipd-option__lead">Sie lösen den Wert der Immobilie aus und schaffen klare Verhältnisse.</p>
        <div class="ipd-option__divider"></div>
        <ul class="ipd-option__list">
          <li>Welchen Preis kann die Immobilie erzielen?</li>
          <li>Wann ist ein guter Zeitpunkt?</li>
          <li>Was ist bei mehreren Erben zu klären?</li>
        </ul>
      </div>
    </div>

    <div class="ipd-flow">
      <span class="ipd-flow__line"></span>
      <span class="ipd-pill">Der Vergleich</span>
      <span class="ipd-flow__line"></span>
    </div>

    <div class="ipd-card ipd-compare">
      <div class="ipd-compare__head">
        <h3 class="ipd-card__title">Ihre Situation, abgeglichen mit jedem der drei Wege</h3>
        <p class="ipd-card__sub ipd-compare__sub">Jeder Weg wird an denselben Faktoren gemessen. So wird sichtbar, wo sich Behalten, Vermieten und Verkaufen für Sie unterscheiden.</p>
      </div>
      <div class="ipd-row ipd-row--head">
        <div class="ipd-row__key"><span class="ipd-row__key-long">Entscheidungs</span>faktor</div>
        <div class="ipd-row__opt">Behalten</div>
        <div class="ipd-row__opt">Vermieten</div>
        <div class="ipd-row__opt">Verkaufen</div>
      </div>
      <div class="ipd-row"><div class="ipd-row__label">Wert und Zustand</div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div></div>
      <div class="ipd-row"><div class="ipd-row__label">Laufende Kosten und Aufwand</div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div></div>
      <div class="ipd-row"><div class="ipd-row__label">Möglicher Ertrag</div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div></div>
      <div class="ipd-row"><div class="ipd-row__label">Flexibilität für später</div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div></div>
      <div class="ipd-row"><div class="ipd-row__label">Steuern, Recht und Finanzierung</div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div></div>
      <div class="ipd-row"><div class="ipd-row__label">Ziele und Erbensituation</div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div><div class="ipd-cell"><span class="ipd-track"></span></div></div>
      <p class="ipd-compare__note">Wie die drei Wege bei diesen Faktoren abschneiden, ergibt sich aus Ihren Angaben – nicht aus einer vorgefertigten Antwort.</p>
    </div>


  </div>
</section>`;
  var STYLE_ID = 'ipd-decision-map-styles';
  var MOUNT_ID = 'ipd-decision-map';
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
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
