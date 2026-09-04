import { writeFileSync, readFileSync } from 'node:fs';
import { BG, INK, MUTED, GREEN, GREEN_HI, CARD, LINE, SANS, MONO,
         grid, kicker, lockup, proBadge, menuBarScene, tick, statTile, shell, grow } from './brand.mjs';

/* 1080x1920 for the Reels ad placement. Instagram lays its own UI over roughly the
   bottom 35% and the top 14%, so every element lives in the band between. The lower
   area stays deliberately empty — whatever Instagram draws there lands on gradient. */
const W = 1080, H = 1920, TOP = 276, BOTTOM = 690, SIDE = 96;

const safe = inner =>
`<div style="flex:1;display:flex;flex-direction:column;box-sizing:border-box;padding:${TOP}px ${SIDE}px ${BOTTOM}px">
${inner}
</div>`;

const reel = body => shell(safe(body), { pad: 0, w: W, h: H });

/* --- Reel 1 · the menu bar timer (free) --- */
writeFileSync('ReelTimer.dc.html', reel(`
<div style="display:flex;align-items:center;justify-content:space-between">
  ${lockup(44,32)}
  <div style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.13);border-radius:999px;padding:11px 22px">
    <span style="font:600 22px ${MONO};letter-spacing:0.14em;color:${INK}">FREE FOREVER</span>
  </div>
</div>
<div style="margin-top:56px">${kicker('Menu bar timer · stopwatch',undefined,24)}</div>
<div style="margin-top:26px;font:600 82px ${SANS};letter-spacing:-0.042em;line-height:1.05;color:${INK}">Your focus timer<br>lives here.</div>
<div style="margin-top:34px">${menuBarScene({popW:330,glow:true,bleed:SIDE})}</div>
${grow()}
<div style="font:400 34px ${SANS};letter-spacing:-0.012em;color:${MUTED}">One click. No window. No Dock icon. No account.</div>
`));

/* --- Reel 2 · don't break the chain (Pro) --- */
writeFileSync('ReelChain.dc.html', reel(`
<div style="display:flex;align-items:center;justify-content:space-between">
  ${lockup(44,32)}
  ${proBadge(22)}
</div>
<div style="margin-top:54px">${kicker('Activity grid · streaks',undefined,24)}</div>
<div style="margin-top:20px;font:600 80px ${SANS};letter-spacing:-0.045em;line-height:1.04;color:${INK}">Don't break<br>the chain.</div>
<div style="margin-top:30px;font:400 34px ${SANS};letter-spacing:-0.012em;color:${MUTED}">Every completed session fills a square.</div>
<div style="margin-top:32px;background:${CARD};border:1px solid ${LINE};border-radius:24px;padding:28px">
${grid({cols:22,gap:9,radius:6,density:0.74,seed:5081})}
</div>
<div style="margin-top:18px;display:flex;gap:20px">
${statTile({icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" style="display:block"><path d="M12 2.6s1.1 3.2 3.4 5.2c2.3 2 3.6 3.9 3.6 6.5a7 7 0 1 1-14 0c0-2 .8-3.4 2-4.6.3 1.3 1.1 2.2 2.2 2.2 1.6 0 2.2-1.3 2-3.1-.2-2.2-.4-4.5.8-6.2z" fill="#e0963c"/></svg>`,tint:'rgba(224,150,60,0.16)',value:'18',label:'days streak',pad:22,vsize:46})}
${statTile({icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" style="display:block"><rect x="3" y="4.6" width="18" height="16.4" rx="3" stroke="#5b8fd6" stroke-width="2"/><path d="M3 9.6h18M8 2.8v3.6M16 2.8v3.6" stroke="#5b8fd6" stroke-width="2" stroke-linecap="round"/></svg>`,tint:'rgba(62,111,176,0.18)',value:'7/7',label:'days this week',pad:22,vsize:46})}
</div>
${grow()}
`));

/* --- Reel 3 · Focus Stats + pricing (Pro) --- */
writeFileSync('ReelPro.dc.html', reel(`
${lockup(44,32)}
<div style="margin-top:50px">${kicker('Focus stats · deepflow pro',undefined,24)}</div>
<div style="margin-top:26px;font:600 86px ${SANS};letter-spacing:-0.042em;line-height:1.05;color:${INK}">See every session<br>stack up.</div>
<div style="margin-top:38px;position:relative;height:300px;border-radius:20px;overflow:hidden;box-shadow:0 60px 110px -38px rgba(0,0,0,0.9)">
  <img src="stats.jpg" alt="Deepflow Pro focus stats: streak, weekly days, calendar and insights" style="width:100%;display:block">
  <div style="position:absolute;left:0;right:0;bottom:0;height:120px;background:linear-gradient(to bottom, rgba(11,13,11,0), ${BG})"></div>
</div>
<div style="margin-top:38px;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:24px 36px">
${tick('Streaks &amp; full history')}
${tick('Daily &amp; weekly goals')}
${tick('Automatic breaks')}
${tick('CSV export')}
</div>
${grow()}
<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:24px;border-top:1px solid ${LINE};padding-top:30px">
  <div>
    <div style="font:600 50px ${SANS};letter-spacing:-0.035em;color:${INK}">$1.50<span style="font-size:30px;color:${MUTED}">/mo</span></div>
    <div style="margin-top:6px;font:400 25px ${SANS};color:${MUTED}">billed annually</div>
  </div>
  <div style="font:400 28px ${SANS};color:#5c5f57">or</div>
  <div style="text-align:right">
    <div style="font:600 50px ${SANS};letter-spacing:-0.035em;color:${INK}">$34.99<span style="font-size:30px;color:${MUTED}"> once</span></div>
    <div style="margin-top:6px;font:400 25px ${SANS};color:${MUTED}">yours forever</div>
  </div>
</div>
`));

/* --- fold the reels into the canvas as a third row (idempotent) --- */
const c = JSON.parse(readFileSync('canvas.json','utf8'));
c.artboards = c.artboards.filter(a => !a.file.startsWith('Reel'));
c.annotations = (c.annotations||[]).filter(a => a.id !== 'row-reels');
const y = 1350 + 170 + 1350 + 170;
const titles = { ReelTimer:'Reel ad 1 · Menu bar timer (free)', ReelChain:"Reel ad 2 · Don't break the chain", ReelPro:'Reel ad 3 · Focus Stats + pricing' };
['ReelTimer','ReelChain','ReelPro'].forEach((f,i) =>
  c.artboards.push({ file:`${f}.dc.html`, title:titles[f], x:i*(W+100), y, w:W, h:H }));
c.annotations.push({ id:'row-reels', x:0, y:y-118, w:660,
  text:'Reels ad placement — 1080x1920. Everything sits above the line Instagram covers with its own UI.' });
writeFileSync('canvas.json', JSON.stringify(c,null,2));
console.log('built 3 reel artboards; canvas now', c.artboards.length);
