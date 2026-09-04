import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
mkdirSync('.preview', { recursive: true });
for (const f of readdirSync('img')) copyFileSync(`img/${f}`, `.preview/${f}`);
for (const f of readdirSync('.').filter(f => f.endsWith('.dc.html'))) {
  const src = readFileSync(f, 'utf8');
  const helmet = src.match(/<helmet>([\s\S]*?)<\/helmet>/)[1];
  const body = src.match(/<x-dc>([\s\S]*?)<\/x-dc>/)[1].replace(/<helmet>[\s\S]*?<\/helmet>/, '');
  writeFileSync(`.preview/${f.replace('.dc.html', '.html')}`,
    `<!doctype html><html><head><meta charset="utf-8">${helmet}</head><body>${body}</body></html>`);
}
