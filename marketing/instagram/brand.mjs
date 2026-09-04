
/* ---------- brand tokens: lifted from docs/index.html ---------- */
export const BG='#0B0D0B', INK='#F4F6F2', MUTED='#9ea29a', DIM='#8b8f86';
export const GREEN='#4A9D5B', GREEN_HI='#64c074';
export const CARD='#0d0f0d', LINE='rgba(255,255,255,0.07)';
export const SANS=`'Schibsted Grotesk','Helvetica Neue',Helvetica,Arial,sans-serif`;
export const MONO=`'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace`;
export const APPSTORE='https://apps.apple.com/app/deepflow-focus-pomodoro-timer/id6776970930?mt=12';

export const FIELD=`radial-gradient(760px 520px at 50% -6%, rgba(255,255,255,0.07), transparent 68%),`+
            `radial-gradient(700px 520px at 18% 94%, rgba(74,157,91,0.16), transparent 70%),`+
            `radial-gradient(620px 460px at 86% 78%, rgba(126,88,194,0.09), transparent 70%),`+
            `${BG}`;

/* ---------- deterministic fill so grids are reproducible ---------- */
export const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};
// tag colours the app actually uses, weighted toward the two greens
export const TAGS=['#3E6FB0','#4A9D5B','#4A9D5B','#2E7D46','#64c074','#7E58C2','#B23A4B','#C08A3E','#3E6FB0','#2E7D46'];
export const EMPTY='#191c19';

export function grid({cols,rows=7,gap,radius,density,seed}){
  const r=rng(seed); const cells=[];
  for(let i=0;i<cols*rows;i++){
    const on=r()<density;
    const c=on?TAGS[Math.floor(r()*TAGS.length)]:EMPTY;
    cells.push(`<div style="aspect-ratio:1;border-radius:${radius}px;background:${c}"></div>`);
  }
  return `<div style="display:grid;grid-template-columns:repeat(${cols}, minmax(0, 1fr));gap:${gap}px">\n`+
         cells.map(c=>'  '+c).join('\n')+`\n</div>`;
}

/* ---------- shared fragments ---------- */
export const kicker=(t,color=DIM,size=25)=>
  `<div style="font:500 ${size}px ${MONO};letter-spacing:0.2em;text-transform:uppercase;color:${color}">${t}</div>`;

export const lockup=(h=48,type=38)=>
  `<div style="display:flex;align-items:center;gap:16px">
  <img src="glyph.png" alt="Deepflow" style="width:${Math.round(h*66/72)}px;height:${h}px;display:block">
  <div style="font:700 ${type}px ${SANS};letter-spacing:-0.02em;color:${INK}">Deepflow</div>
</div>`;

export const proBadge=(size=25)=>
  `<div style="display:flex;align-items:center;gap:12px;background:rgba(74,157,91,0.16);border:1px solid rgba(74,157,91,0.36);border-radius:999px;padding:13px 24px">
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="display:block">
    <path d="M12 2.6l2.3 1.9 3-.3 1.2 2.8 2.6 1.5-.7 2.9.7 2.9-2.6 1.5-1.2 2.8-3-.3L12 21.4l-2.3-1.9-3 .3-1.2-2.8L2.9 15.5l.7-2.9-.7-2.9L5.5 8.2l1.2-2.8 3 .3z" fill="${GREEN}"/>
    <path d="M8.4 12.2l2.5 2.5 4.7-4.9" stroke="${BG}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <span style="font:600 ${size}px ${SANS};letter-spacing:-0.01em;color:${GREEN_HI}">Deepflow Pro</span>
</div>`;

export const slideNo=n=>
  `<div style="display:flex;align-items:center;justify-content:space-between">
  <div style="font:500 24px ${MONO};letter-spacing:0.16em;color:#5c5f57">${n} / 6</div>
  ${n<6?`<div style="display:flex;align-items:center;gap:14px">
    <span style="font:500 24px ${MONO};letter-spacing:0.16em;color:#5c5f57">SWIPE</span>
    <svg width="34" height="16" viewBox="0 0 34 16" fill="none" style="display:block"><path d="M1 8h30m0 0l-7-6.5M31 8l-7 6.5" stroke="#5c5f57" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </div>`:`<div style="font:500 24px ${MONO};letter-spacing:0.16em;color:#5c5f57">DEEPFLOWFOCUS.COM</div>`}
</div>`;

/* macOS menu bar strip, full-bleed, with the Deepflow item in its open/highlighted state */
export function menuBar({glow=false}={}){
  const ic=(d,w=26)=>`<svg width="${w}" height="26" viewBox="0 0 26 26" fill="none" style="display:block;opacity:0.62">${d}</svg>`;
  const wifi=ic(`<path d="M3.5 9.5a14 14 0 0 1 19 0M6.8 13.2a9.3 9.3 0 0 1 12.4 0M10.2 16.9a4.6 4.6 0 0 1 5.6 0" stroke="#F4F6F2" stroke-width="1.9" stroke-linecap="round"/><circle cx="13" cy="20.3" r="1.5" fill="#F4F6F2"/>`);
  const batt=ic(`<rect x="2" y="9" width="18" height="9" rx="2.6" stroke="#F4F6F2" stroke-width="1.7"/><rect x="4" y="11" width="12" height="5" rx="1.2" fill="#F4F6F2"/><path d="M22 11.6v3.2" stroke="#F4F6F2" stroke-width="1.9" stroke-linecap="round"/>`,26);
  const ctrl=ic(`<path d="M4 9.5h7M15 9.5h7M4 16.5h11M19 16.5h3" stroke="#F4F6F2" stroke-width="1.8" stroke-linecap="round"/><circle cx="13" cy="9.5" r="2.1" stroke="#F4F6F2" stroke-width="1.8"/><circle cx="17" cy="16.5" r="2.1" stroke="#F4F6F2" stroke-width="1.8"/>`);
  return `<div style="display:flex;align-items:center;justify-content:flex-end;gap:26px;height:62px;padding:0 30px;background:rgba(18,20,18,0.92);border-bottom:1px solid rgba(255,255,255,0.07)">
  <div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.15);border-radius:9px;padding:7px 14px${glow?`;box-shadow:0 0 0 2px rgba(74,157,91,0.75), 0 0 34px rgba(74,157,91,0.42)`:''}">
    <img src="glyph.png" alt="" style="width:21px;height:23px;display:block">
    <span style="font:500 25px ${MONO};letter-spacing:0.01em;color:${INK}">24:31</span>
  </div>
  ${batt}${wifi}${ctrl}
  <span style="font:500 25px ${SANS};color:rgba(244,246,242,0.78)">Thu 2:15 PM</span>
</div>`;
}

/* the menu bar strip + the real popover hanging beneath it */
export function menuBarScene({popW=400, glow=false, bleed=88}={}){
  return `<div style="position:relative;margin:0 -${bleed}px">
  ${menuBar({glow})}
  <div style="display:flex;justify-content:flex-end;padding:16px 42px 0 0">
    <img src="timer.png" alt="Deepflow timer popover in the macOS menu bar" style="width:${popW}px;display:block;border-radius:22px;box-shadow:0 60px 110px -38px rgba(0,0,0,0.9)">
  </div>
</div>`;
}

export const tick=t=>
  `<div style="display:flex;align-items:center;gap:16px">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style="display:block;flex-shrink:0"><path d="M4.5 12.6l4.8 4.8L19.5 7.2" stroke="${GREEN}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <span style="font:400 30px ${SANS};letter-spacing:-0.01em;color:#c7cabf">${t}</span>
</div>`;

/* an app stat tile, rebuilt to match the Focus Stats window */
export function statTile({icon,tint,value,label,pad=28,vsize=54}){
  return `<div style="flex:1;background:rgba(255,255,255,0.045);border:1px solid ${LINE};border-radius:20px;padding:${pad}px 30px;display:flex;flex-direction:column;gap:18px">
  <div style="width:56px;height:56px;border-radius:16px;background:${tint};display:flex;align-items:center;justify-content:center">${icon}</div>
  <div style="display:flex;flex-direction:column;gap:4px">
    <div style="font:700 ${vsize}px ${SANS};letter-spacing:-0.03em;color:${INK}">${value}</div>
    <div style="font:400 26px ${SANS};color:${MUTED}">${label}</div>
  </div>
</div>`;
}

/* ---------- artboard shell ---------- */
export function shell(body,{pad=88,w=1080,h=1350}={}){
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">
  <style>
    body { margin: 0; background: ${BG}; -webkit-font-smoothing: antialiased; }
    a { color: ${GREEN_HI}; text-decoration: none; }
    a:hover { color: #7fce93; }
  </style>
</helmet>
<div style="width:${w}px;height:${h}px;box-sizing:border-box;padding:${pad}px;background:${FIELD};display:flex;flex-direction:column;overflow:hidden">
${body}
</div>
</x-dc>
</body>
</html>
`;
}
export const grow=()=>`<div style="flex:1"></div>`;
