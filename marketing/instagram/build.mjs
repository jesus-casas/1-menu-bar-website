import { writeFileSync } from 'node:fs';
import { BG,INK,MUTED,DIM,GREEN,GREEN_HI,CARD,LINE,SANS,MONO,APPSTORE,FIELD,rng,TAGS,EMPTY,grid,kicker,lockup,proBadge,slideNo,menuBar,menuBarScene,tick,statTile,shell,grow } from './brand.mjs';

/* ================= CAROUSEL ================= */

/* 1 — the hook */
writeFileSync('Main.dc.html', shell(`
${lockup(48,34)}
${grow()}
${kicker('The compounding effect')}
<div style="margin-top:40px;font:600 156px ${SANS};letter-spacing:-0.05em;line-height:1.02;color:${INK};white-space:nowrap">1.01<span style="font-size:78px;vertical-align:super;line-height:0;color:${GREEN_HI}">365</span><span style="color:#5c5f57;font-weight:400;font-size:104px;padding:0 34px;vertical-align:0.13em">=</span>37.8</div>
<div style="margin-top:52px;max-width:800px;font:400 38px ${SANS};line-height:1.42;letter-spacing:-0.012em;color:${MUTED};text-wrap:pretty">Get one percent better every day for a year, and you end up thirty-seven times better.</div>
${grow()}
${slideNo(1)}
`));

/* 2 — the reframe */
writeFileSync('Carousel2.dc.html', shell(`
${lockup(48,34)}
${grow()}
${kicker('The real problem')}
<div style="margin-top:36px;font:600 94px ${SANS};letter-spacing:-0.042em;line-height:1.06;color:${INK}">You don't need<br>more discipline.</div>
<div style="margin-top:22px;font:600 94px ${SANS};letter-spacing:-0.042em;line-height:1.06;color:${GREEN_HI}">You need to see<br>your progress.</div>
<div style="margin-top:52px;max-width:820px;font:400 36px ${SANS};line-height:1.46;letter-spacing:-0.012em;color:${MUTED};text-wrap:pretty">Most focus apps demand more attention than the work itself. Dashboards. Streak-or-die notifications. Gamified noise.</div>
${grow()}
${slideNo(2)}
`));

/* 3 — the mechanism */
writeFileSync('Carousel3.dc.html', shell(`
${lockup(48,34)}
${grow()}
${kicker('The fix')}
<div style="margin-top:36px;font:600 94px ${SANS};letter-spacing:-0.042em;line-height:1.06;color:${INK}">So make every<br>session a square.</div>
<div style="margin-top:58px;background:${CARD};border:1px solid ${LINE};border-radius:26px;padding:34px">
${grid({cols:20,gap:11,radius:9,density:0.34,seed:71})}
</div>
<div style="margin-top:30px">${kicker('One focus block · one filled square','#71746d',23)}</div>
${grow()}
${slideNo(3)}
`));

/* 4 — where it lives */
writeFileSync('Carousel4.dc.html', shell(`
${lockup(48,34)}
<div style="margin-top:52px">${menuBarScene({popW:408})}</div>
${grow()}
${kicker('Where it lives')}
<div style="margin-top:34px;font:600 94px ${SANS};letter-spacing:-0.042em;line-height:1.06;color:${INK}">It lives in your<br>menu bar.</div>
<div style="margin-top:34px;font:400 36px ${SANS};line-height:1.42;letter-spacing:-0.012em;color:${MUTED}">One click. No window. No Dock icon. No account.</div>
${grow()}
${slideNo(4)}
`));

/* 5 — the payoff */
writeFileSync('Carousel5.dc.html', shell(`
${lockup(48,34)}
${grow()}
${kicker('A year of showing up')}
<div style="margin-top:30px;font:600 132px ${SANS};letter-spacing:-0.05em;line-height:1;color:${INK}">365 <span style="color:#5c5f57">days</span></div>
<div style="margin-top:46px;background:${CARD};border:1px solid ${LINE};border-radius:24px;padding:30px">
${grid({cols:53,gap:5,radius:3,density:0.82,seed:409})}
</div>
<div style="margin-top:54px;font:600 74px ${SANS};letter-spacing:-0.038em;line-height:1.08;color:${INK}">This is what 1% a day<br>looks like.</div>
<div style="margin-top:32px;max-width:840px;font:400 34px ${SANS};line-height:1.46;letter-spacing:-0.012em;color:${MUTED};text-wrap:pretty">Days compound into weeks. The chain gets longer, and breaking it gets harder. That's the point.</div>
${grow()}
${slideNo(5)}
`));

/* 6 — the ask */
writeFileSync('Carousel6.dc.html', shell(`
${grow()}
<div style="display:flex;flex-direction:column;align-items:center;text-align:center">
  <img src="appicon.png" alt="Deepflow" style="width:144px;height:144px;display:block;border-radius:32px">
  <div style="margin-top:28px;font:700 56px ${SANS};letter-spacing:-0.025em;color:${INK}">Deepflow</div>
  <div style="margin-top:56px;font:600 92px ${SANS};letter-spacing:-0.042em;line-height:1.06;color:${INK}">Get 1% better,<br>every day.</div>
  <div style="margin-top:32px;max-width:720px;font:400 36px ${SANS};line-height:1.42;letter-spacing:-0.012em;color:${MUTED}">Start your first session in the next thirty seconds.</div>
  <a href="${APPSTORE}" style="margin-top:56px;display:inline-block;font:600 34px ${SANS};letter-spacing:-0.015em;color:${BG};background:#F1F3EF;padding:30px 54px;border-radius:16px">Download on the Mac App Store</a>
  <div style="margin-top:34px;font:400 25px ${MONO};letter-spacing:0.1em;color:#71746d">macOS 13+ · Base timer always free</div>
</div>
${grow()}
${slideNo(6)}
`));

/* ================= SINGLE POSTS ================= */

/* free hook — the menu bar timer */
writeFileSync('PostTimer.dc.html', shell(`
<div style="display:flex;align-items:center;justify-content:space-between">
  ${lockup(48,34)}
  <div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.13);border-radius:999px;padding:12px 24px">
    <span style="font:600 24px ${MONO};letter-spacing:0.14em;color:${INK}">FREE FOREVER</span>
  </div>
</div>
<div style="margin-top:48px">${kicker('Menu bar timer · stopwatch')}</div>
<div style="margin-top:30px;font:600 90px ${SANS};letter-spacing:-0.042em;line-height:1.05;color:${INK}">Your focus timer<br>lives here.</div>
<div style="margin-top:44px">${menuBarScene({popW:420,glow:true})}</div>
${grow()}
<div style="max-width:880px;font:400 36px ${SANS};line-height:1.44;letter-spacing:-0.012em;color:${MUTED};text-wrap:pretty">One click. Timer or stopwatch. No window to manage, no Dock icon, no account to make.</div>
`));

/* the bridge — streaks */
writeFileSync('PostChain.dc.html', shell(`
<div style="display:flex;align-items:center;justify-content:space-between">
  ${lockup(48,34)}
  ${proBadge(24)}
</div>
${grow()}
${kicker('Activity grid · streaks')}
<div style="margin-top:32px;font:600 104px ${SANS};letter-spacing:-0.045em;line-height:1.04;color:${INK}">Don't break<br>the chain.</div>
<div style="margin-top:32px;max-width:840px;font:400 36px ${SANS};line-height:1.44;letter-spacing:-0.012em;color:${MUTED};text-wrap:pretty">Every completed session fills a square. A year of deep work, visible at a glance.</div>
<div style="margin-top:52px;background:${CARD};border:1px solid ${LINE};border-radius:26px;padding:32px">
${grid({cols:26,gap:10,radius:6,density:0.74,seed:1337})}
</div>
<div style="margin-top:26px;display:flex;gap:26px">
${statTile({icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" style="display:block"><path d="M12 2.6s1.1 3.2 3.4 5.2c2.3 2 3.6 3.9 3.6 6.5a7 7 0 1 1-14 0c0-2 .8-3.4 2-4.6.3 1.3 1.1 2.2 2.2 2.2 1.6 0 2.2-1.3 2-3.1-.2-2.2-.4-4.5.8-6.2z" fill="#e0963c"/></svg>`,tint:'rgba(224,150,60,0.16)',value:'18',label:'days streak'})}
${statTile({icon:`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" style="display:block"><rect x="3" y="4.6" width="18" height="16.4" rx="3" stroke="#5b8fd6" stroke-width="2"/><path d="M3 9.6h18M8 2.8v3.6M16 2.8v3.6" stroke="#5b8fd6" stroke-width="2" stroke-linecap="round"/></svg>`,tint:'rgba(62,111,176,0.18)',value:'7/7',label:'days this week'})}
</div>
${grow()}
${kicker('Deepflowfocus.com · mac app store','#71746d',23)}
`,{pad:80}));

/* the ask — Pro */
writeFileSync('PostPro.dc.html', shell(`
${lockup(48,34)}
<div style="margin-top:50px">${kicker('Focus stats · deepflow pro')}</div>
<div style="margin-top:30px;font:600 92px ${SANS};letter-spacing:-0.042em;line-height:1.05;color:${INK}">See every session<br>stack up.</div>
<div style="margin-top:44px;position:relative;height:452px;border-radius:22px;overflow:hidden;box-shadow:0 60px 110px -38px rgba(0,0,0,0.9)">
  <img src="stats.jpg" alt="Deepflow Pro focus stats: streak, weekly days, calendar and insights" style="width:100%;display:block">
  <div style="position:absolute;left:0;right:0;bottom:0;height:150px;background:linear-gradient(to bottom, rgba(11,13,11,0), ${BG})"></div>
</div>
<div style="margin-top:44px;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));gap:26px 40px">
${tick('Streaks &amp; full history')}
${tick('Daily &amp; weekly goals')}
${tick('Session tags')}
${tick('Automatic breaks')}
${tick('Always-on-top pill')}
${tick('CSV export')}
</div>
${grow()}
<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:30px;border-top:1px solid ${LINE};padding-top:34px">
  <div>
    <div style="font:600 52px ${SANS};letter-spacing:-0.035em;color:${INK}">$1.50<span style="font-size:32px;color:${MUTED}">/mo</span></div>
    <div style="margin-top:8px;font:400 26px ${SANS};color:${MUTED}">billed annually</div>
  </div>
  <div style="font:400 30px ${SANS};color:#5c5f57">or</div>
  <div style="text-align:right">
    <div style="font:600 52px ${SANS};letter-spacing:-0.035em;color:${INK}">$34.99<span style="font-size:32px;color:${MUTED}"> once</span></div>
    <div style="margin-top:8px;font:400 26px ${SANS};color:${MUTED}">yours forever</div>
  </div>
</div>
<div style="margin-top:28px">${kicker('Base timer free forever · no account · macOS 13+','#71746d',22)}</div>
`,{pad:80}));

/* ---------- canvas layout ---------- */
const W=1080,H=1350,GX=100,GY=170;
const row1=['Main','Carousel2','Carousel3','Carousel4','Carousel5','Carousel6'];
const row2=['PostTimer','PostChain','PostPro'];
const titles={Main:'Carousel 1 · The hook',Carousel2:'Carousel 2 · The problem',Carousel3:'Carousel 3 · The fix',
  Carousel4:'Carousel 4 · Menu bar',Carousel5:'Carousel 5 · The payoff',Carousel6:'Carousel 6 · Download',
  PostTimer:'Post 1 · Menu bar timer (free)',PostChain:'Post 2 · Don\'t break the chain',PostPro:'Post 3 · Focus Stats + pricing'};
const artboards=[
  ...row1.map((f,i)=>({file:`${f}.dc.html`,title:titles[f],x:i*(W+GX),y:0,w:W,h:H})),
  ...row2.map((f,i)=>({file:`${f}.dc.html`,title:titles[f],x:i*(W+GX),y:H+GY,w:W,h:H})),
];
writeFileSync('canvas.json', JSON.stringify({
  artboards,
  annotations:[
    {id:'row-carousel',x:0,y:-118,w:520,text:'POST FIRST — 6-slide carousel, swipe order left to right.'},
    {id:'row-singles',x:0,y:H+GY-118,w:560,text:'Then these three, in order: free timer → streaks → Pro.'},
  ],
  launch:{view:'canvas'},
},null,2));
console.log('built', artboards.length, 'artboards');
