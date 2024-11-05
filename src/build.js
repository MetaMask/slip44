/* eslint-disable n/no-sync */
const fs = require('fs');
const path = require('path');

const rawSlip44Path = path.join(__dirname, 'slip44.md');
const slip44OutputPath = path.join(__dirname, '../slip44.json');

const slip44Content = fs.readFileSync(rawSlip44Path, 'utf8');

const entries = {};
for (const line of slip44Content.split('\n')) {
  const segments = line.split('|').slice(1, -1);
  if (
    segments.length === 4 &&
    /^\|\s*\d+\s*\|\s*0x[a-z0-9]+\s*\|/iu.test(line)
  ) {
    // eslint-disable-next-line id-denylist
    const [index, hex, symbol, name] = segments.map((seg) => seg.trim());

    // Ignore reserved entries
    if (symbol === '---' && name === 'reserved') {
      continue;
    }

    entries[index] = {
      index,
      // eslint-disable-next-line id-denylist
      hex,
      symbol,
      name,
    };
  }
}

// Fix Ethereum information
entries[60] = {
  ...entries[60],
  name: 'Ethereum',
};

fs.writeFileSync(slip44OutputPath, `${JSON.stringify(entries, null, 2)}\n`);
