/* =============================================================
   UNIVERSE SWITCHER — shared across all universes of arjun.me
   Injects the floating persona pill + handles "crossing" transitions.
   Each page declares its universe via <body data-universe="...">.
   ============================================================= */
(function () {
  'use strict';

  var UNIVERSES = [
    { id: 'engineer', label: 'engineer', glyph: '✦', url: 'index.html',    accent: '#8b5cf6' },
    { id: 'traveler', label: 'traveler', glyph: '✈', url: 'traveler.html', accent: '#d4a373' },
    { id: '3am',      label: '3 am',     glyph: '☾', url: '3am.html',      accent: '#8888a0' },
  ];

  var current = document.body.getAttribute('data-universe') || 'engineer';

  /* ---------- styles ---------- */
  var css = [
    '.uv-pill{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:9000;',
    'display:flex;align-items:center;gap:3px;padding:5px 6px;border-radius:26px;',
    'background:rgba(18,18,20,0.92);border:1px solid rgba(255,255,255,0.14);',
    'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);',
    'box-shadow:0 8px 28px rgba(0,0,0,0.45);font-family:"Inter",system-ui,sans-serif;}',

    '.uv-chip{display:flex;align-items:center;gap:6px;border:none;cursor:pointer;',
    'background:transparent;color:#9a9a9a;font-size:12px;font-weight:600;',
    'font-family:inherit;padding:7px 14px;border-radius:20px;transition:0.2s;white-space:nowrap;}',
    '.uv-chip:hover{color:#fff;background:rgba(255,255,255,0.07);}',
    '.uv-chip.uv-active{color:#fff;cursor:default;}',
    '.uv-glyph{font-size:13px;line-height:1;}',

    '.uv-cross{position:fixed;inset:0;z-index:99995;background:#060608;display:none;',
    'align-items:center;justify-content:center;flex-direction:column;gap:14px;}',
    '.uv-cross.uv-cross--on{display:flex;animation:uv-flicker 0.65s steps(2) infinite;}',
    '.uv-cross-text{font-family:monospace;font-size:13px;color:#9a9aa8;letter-spacing:0.1em;}',
    '.uv-cross-bar{width:160px;height:2px;background:rgba(255,255,255,0.18);overflow:hidden;border-radius:2px;}',
    '.uv-cross-bar i{display:block;height:100%;width:40%;background:#fff;animation:uv-scan 0.5s linear infinite;}',
    '@keyframes uv-scan{from{transform:translateX(-100%)}to{transform:translateX(400%)}}',
    '@keyframes uv-flicker{0%,100%{opacity:1}50%{opacity:0.93}}',

    '@media (max-width:480px){.uv-chip{padding:7px 10px;font-size:11px;}}',
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ---------- crossing transition ---------- */
  var cross = document.createElement('div');
  cross.className = 'uv-cross';
  cross.innerHTML = '<span class="uv-cross-text" id="uv-cross-text">crossing universes…</span>' +
                    '<span class="uv-cross-bar"><i></i></span>';
  document.body.appendChild(cross);

  function crossTo(universe) {
    if (universe.id === current) return;
    try { localStorage.setItem('arjun-universe', universe.id); } catch (e) {}
    document.getElementById('uv-cross-text').textContent = 'crossing to ' + universe.label + ' universe…';
    cross.classList.add('uv-cross--on');
    setTimeout(function () { window.location.href = universe.url; }, 700);
  }

  /* ---------- the pill ---------- */
  var pill = document.createElement('nav');
  pill.className = 'uv-pill';
  pill.setAttribute('aria-label', 'Switch universe');

  UNIVERSES.forEach(function (u) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'uv-chip' + (u.id === current ? ' uv-active' : '');
    b.innerHTML = '<span class="uv-glyph">' + u.glyph + '</span>' + u.label;
    if (u.id === current) b.style.background = u.accent;
    b.addEventListener('click', function () { crossTo(u); });
    pill.appendChild(b);
  });

  document.body.appendChild(pill);

  /* remember which universe the visitor is in */
  try { localStorage.setItem('arjun-universe', current); } catch (e) {}
})();
