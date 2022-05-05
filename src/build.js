/* eslint-disable node/no-sync */
const fs = require('fs');
const path = require('path');

const rawSlip44Path = path.join(__dirname, 'slip44.md');
const slip44OutputPath = path.join(__dirname, '../slip44.json');

const slip44Content = fs.readFileSync(rawSlip44Path, 'utf8');

const entries = {};
for (const line of slip44Content.split('\n')) {
  const segments = line.split('|');
  if (segments.length === 4 && /^\d+\s*\|\s*0x[a-z0-9]+\s*\|/iu.test(line)) {
    const [index, hex, symbol, coin] = segments.map((seg) => seg.trim());

    let name, link;
    if (coin.indexOf('[') === 0) {
      // This is a markdown link
      name = coin.substring(1).split(']')[0];
      if (coin.indexOf('(') !== -1) {
        link = coin.split('(')[1].split(')')[0];
      }
    } else {
      // This is just a name, no link
      name = coin;
    }

    entries[index] = {
      index,
      hex,
      symbol,
      name,
      link,
    };
  }
}

// Fix Ethereum information
entries[60] = {
  ...entries[60],
  name: 'Ethereum',
  link: 'https://ethereum.org',
};

fs.writeFileSync(slip44OutputPath, `${JSON.stringify(entries, null, 2)}\n`);
