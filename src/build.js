/* eslint-disable n/no-sync */
const fs = require('fs');
const path = require('path');

const rawSlip44Path = path.join(__dirname, 'slip44.md');
const slip44OutputPath = path.join(__dirname, '../slip44.json');

const slip44Content = fs.readFileSync(rawSlip44Path, 'utf8');

const entries = {};
for (const line of slip44Content.split('\n')) {
  const segments = line.split('|').slice(1);
  if (
    segments.length >= 3 &&
    /^\|\s*\d+\s*\|\s.+\|\s.+\|?$/iu.test(line)
  ) {
    const [index, symbol, name] = segments.map((seg) => seg.trim());
    
    const coinType = (index | 0x80000000) >>> 0;
    // eslint-disable-next-line id-denylist
    const hex = `0x${coinType.toString(16)}`;

    // Ignore empty entries
    if (symbol === '' && name === '') {
      continue;
    }

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
