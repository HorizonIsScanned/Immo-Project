/* Immobilienpunkt – Decision Map ("Drei Wege") · self-injecting bundle
 * Einbau in Webflow (Code Embed):
 *   <div id="ipd-decision-map"></div>
 *   <script src="https://…/decision-map.js" defer></script>
 * Ohne Mount-Div wird die Section direkt an der Script-Position eingefügt.
 */
(function () {
  'use strict';
  var CSS = `.ipd{--ipd-navy:#001C4E;--ipd-muted:#5C677D;--ipd-fill:#EDF2FB;--ipd-line:#D6E0F2;--ipd-line-strong:#B9C6E0;--ipd-radius:24px;--ipd-gap:24px;box-sizing:border-box;width:100%;padding:0 20px;background:#fff;color:var(--ipd-navy);font-family:Georgia,"Times New Roman",serif;-webkit-font-smoothing:antialiased;overflow:hidden}
.ipd *,.ipd *::before,.ipd *::after{box-sizing:border-box}
.ipd,.ipd *,.ipd h3,.ipd p,.ipd ul,.ipd li,.ipd span{font-family:Georgia,"Times New Roman",serif}
.ipd-inner{width:100%;max-width:1100px;margin:0 auto}
.ipd-ways{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--ipd-gap)}
.ipd-way{display:flex;flex-direction:column;padding:28px 28px 26px;border-radius:var(--ipd-radius);background:var(--ipd-fill)}
.ipd-way__top{display:flex;align-items:center;justify-content:space-between;gap:12px}
.ipd-icon{flex:0 0 56px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#fff;color:var(--ipd-navy)}
.ipd-icon svg{display:block;width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ipd-tag{display:inline-flex;align-items:center;height:30px;padding:0 14px;border-radius:999px;background:#fff;font-size:13px;line-height:1;color:var(--ipd-muted);white-space:nowrap}
.ipd-way__name{margin:22px 0 0;font-size:30px;line-height:1.1;font-weight:700;color:var(--ipd-navy)}
.ipd-way__meaning{margin:8px 0 0;font-size:15px;line-height:1.5;color:var(--ipd-muted)}
.ipd-way__visual{width:100%;max-width:280px;margin:22px auto 0;color:var(--ipd-navy)}
.ipd-way__visual svg{display:block;width:100%;height:auto}
.ipd-facts{margin:22px 0 0;padding:0;list-style:none;display:grid;gap:14px}
.ipd-fact{display:flex;align-items:center;gap:14px;margin:0}
.ipd-fact__ic{flex:0 0 36px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:#fff;color:var(--ipd-navy)}
.ipd-fact__ic svg{display:block;width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.ipd-fact__label{margin:0;font-size:11px;line-height:1.2;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ipd-navy)}
.ipd-fact__value{margin:3px 0 0;font-size:15px;line-height:1.35;color:var(--ipd-muted)}
.ipd-way__quote{position:relative;margin:24px 0 0;padding:20px 22px 20px 54px;border-radius:16px;background:#fff}
.ipd-way__quote::before{content:"“";position:absolute;left:18px;top:6px;font-size:44px;line-height:1;color:var(--ipd-line-strong)}
.ipd-way__quote p{margin:0;font-size:17px;line-height:1.45;font-style:italic;color:var(--ipd-navy)}
.ipd-way__quote{display:flex;align-items:center;min-height:114px;margin-top:auto}
.ipd-way__facts-wrap{padding-bottom:24px;border-bottom:1px solid var(--ipd-line);margin-bottom:0}
@media(min-width:768px){.ipd{padding-left:32px;padding-right:32px}}
@media(max-width:900px){
.ipd-ways{grid-template-columns:minmax(0,1fr);gap:16px}
.ipd-way{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:28px;padding:26px 28px}
.ipd-way__top{grid-column:1/-1}
.ipd-way__name{grid-column:1}
.ipd-way__meaning{grid-column:1}
.ipd-way__visual{grid-column:2;grid-row:2/span 3;align-self:center;max-width:260px;margin:0 auto}
.ipd-way__facts-wrap{grid-column:1;grid-row:4;border-bottom:0;padding-bottom:0}
.ipd-way__quote{grid-column:1/-1;margin-top:22px}
}
@media(max-width:600px){
.ipd{--ipd-radius:20px}
.ipd-way{display:flex;flex-direction:column;padding:22px 20px 20px}
.ipd-icon{flex-basis:50px;width:50px;height:50px}
.ipd-tag{height:28px;padding:0 12px;font-size:12px}
.ipd-way__name{font-size:26px;margin-top:18px}
.ipd-way__meaning{font-size:14px}
.ipd-way__visual{max-width:230px;margin-top:18px}
.ipd-facts{margin-top:18px;gap:12px}
.ipd-fact__value{font-size:14px}
.ipd-way__quote{margin-top:20px;padding:16px 18px 16px 48px}
.ipd-way__quote::before{left:14px;top:4px;font-size:40px}
.ipd-way__quote p{font-size:16px}
}
@media(max-width:360px){.ipd{padding-left:16px;padding-right:16px}}`;
  var HTML = `<section class="ipd" aria-label="Drei Wege für eine geerbte Immobilie">
  <div class="ipd-inner">

    <div class="ipd-ways">

      <div class="ipd-way">
        <div class="ipd-way__top">
          <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5 12 5l8 6.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg></span>
          <span class="ipd-tag">Langfristig denken</span>
        </div>
        <h3 class="ipd-way__name">Behalten</h3>
        <p class="ipd-way__meaning">Die Immobilie in der Familie halten und selbst nutzen.</p>
        <div class="ipd-way__visual">
          <svg viewBox="0 0 280 150" role="img" aria-label="Einfamilienhaus">
            <path d="M22 132C80 126 200 126 258 132" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".45"/>
            <path d="M78 66L140 22L202 66V126H78V66Z" fill="#FFFFFF" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M62 68L140 14L218 68" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="94" y="76" width="26" height="24" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/><path d="M107 76V100M94 88H120" stroke="currentColor" stroke-width="1"/>
            <rect x="160" y="76" width="26" height="24" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/><path d="M173 76V100M160 88H186" stroke="currentColor" stroke-width="1"/>
            <rect x="129" y="90" width="22" height="36" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.6"/><circle cx="146" cy="109" r="1.5" fill="currentColor"/>
            <path d="M162 40V24H174V48" fill="#FFFFFF" stroke="currentColor" stroke-width="1.5"/>
            <path d="M44 106V128M236 104V128" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".65"/>
            <circle cx="44" cy="96" r="15" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
            <circle cx="236" cy="93" r="16" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
          </svg>
        </div>
        <div class="ipd-way__facts-wrap">
          <ul class="ipd-facts">
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/><path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg></span><div><p class="ipd-fact__label">Geld</p><p class="ipd-fact__value">Vermögen bleibt gebunden</p></div></li>
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg></span><div><p class="ipd-fact__label">Aufwand</p><p class="ipd-fact__value">Eher gering</p></div></li>
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V10"/><path d="M12 10c0-3 2.5-5 6-5"/><path d="M15 3l3 2-3 2"/><path d="M12 14c0-3-2.5-5-6-5"/><path d="M9 7 6 9l3 2"/></svg></span><div><p class="ipd-fact__label">Flexibilität</p><p class="ipd-fact__value">Hoch</p></div></li>
          </ul>
        </div>
        <div class="ipd-way__quote"><p>Passt die Immobilie zu meinen Lebensplänen?</p></div>
      </div>

      <div class="ipd-way">
        <div class="ipd-way__top">
          <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="14.5" r="4"/><path d="M11 11.5 20 2.5"/><path d="M17 5.5 19.5 8M14.5 8l2.5 2.5"/></svg></span>
          <span class="ipd-tag">Stetige Einnahmen</span>
        </div>
        <h3 class="ipd-way__name">Vermieten</h3>
        <p class="ipd-way__meaning">Regelmäßige Mieteinnahmen erzielen und die Immobilie behalten.</p>
        <div class="ipd-way__visual">
          <svg viewBox="0 0 280 150" role="img" aria-label="Mehrfamilienhaus">
            <path d="M22 132C80 126 200 126 258 132" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".45"/>
            <rect x="84" y="30" width="112" height="96" rx="3" fill="#FFFFFF" stroke="currentColor" stroke-width="2"/>
            <path d="M78 30H202" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <rect x="96" y="42" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="130" y="42" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="164" y="42" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="96" y="70" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="130" y="70" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="164" y="70" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <path d="M92 90H124M158 90H190" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <rect x="96" y="98" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="164" y="98" width="20" height="16" rx="1.5" fill="#FFFFFF" stroke="currentColor" stroke-width="1.4"/>
            <rect x="130" y="96" width="20" height="30" rx="2" fill="#FFFFFF" stroke="currentColor" stroke-width="1.6"/><circle cx="146" cy="112" r="1.5" fill="currentColor"/>
            <path d="M44 106V128M236 104V128" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".65"/>
            <circle cx="44" cy="96" r="15" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
            <circle cx="236" cy="93" r="16" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
          </svg>
        </div>
        <div class="ipd-way__facts-wrap">
          <ul class="ipd-facts">
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/><path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg></span><div><p class="ipd-fact__label">Geld</p><p class="ipd-fact__value">Laufende Mieteinnahmen</p></div></li>
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg></span><div><p class="ipd-fact__label">Aufwand</p><p class="ipd-fact__value">Eher höher</p></div></li>
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V10"/><path d="M12 10c0-3 2.5-5 6-5"/><path d="M15 3l3 2-3 2"/><path d="M12 14c0-3-2.5-5-6-5"/><path d="M9 7 6 9l3 2"/></svg></span><div><p class="ipd-fact__label">Flexibilität</p><p class="ipd-fact__value">Mittel</p></div></li>
          </ul>
        </div>
        <div class="ipd-way__quote"><p>Trägt sich die Vermietung für mich – heute und in Zukunft?</p></div>
      </div>

      <div class="ipd-way">
        <div class="ipd-way__top">
          <span class="ipd-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17 10 11l3.5 3.5L20 8"/><path d="M15 8h5v5"/></svg></span>
          <span class="ipd-tag">Klarheit schaffen</span>
        </div>
        <h3 class="ipd-way__name">Verkaufen</h3>
        <p class="ipd-way__meaning">Den Wert der Immobilie nutzen und neue Möglichkeiten eröffnen.</p>
        <div class="ipd-way__visual">
          <svg viewBox="0 0 280 150" role="img" aria-label="Verkaufsvertrag">
            <path d="M22 132C80 126 200 126 258 132" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".45"/>
            <path d="M100 18H164L186 40V126H100V18Z" fill="#FFFFFF" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M164 18V40H186" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <path d="M114 62H172M114 76H172M114 90H156" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".7"/>
            <text x="114" y="48" font-family="Georgia,serif" font-size="22" font-weight="700" fill="currentColor">€</text>
            <path d="M118 110c8-6 14-2 20 0s12 6 20 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M44 106V128M236 104V128" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".65"/>
            <circle cx="44" cy="96" r="15" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
            <circle cx="236" cy="93" r="16" fill="#FFFFFF" stroke="currentColor" stroke-width="1.2" opacity=".9"/>
          </svg>
        </div>
        <div class="ipd-way__facts-wrap">
          <ul class="ipd-facts">
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/><path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg></span><div><p class="ipd-fact__label">Geld</p><p class="ipd-fact__value">Sofort verfügbar</p></div></li>
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg></span><div><p class="ipd-fact__label">Aufwand</p><p class="ipd-fact__value">Einmalig</p></div></li>
            <li class="ipd-fact"><span class="ipd-fact__ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V10"/><path d="M12 10c0-3 2.5-5 6-5"/><path d="M15 3l3 2-3 2"/><path d="M12 14c0-3-2.5-5-6-5"/><path d="M9 7 6 9l3 2"/></svg></span><div><p class="ipd-fact__label">Flexibilität</p><p class="ipd-fact__value">Gering</p></div></li>
          </ul>
        </div>
        <div class="ipd-way__quote"><p>Was ist die Immobilie heute wert – und was kann ich damit erreichen?</p></div>
      </div>

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
