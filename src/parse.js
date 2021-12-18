const fs = require('fs');
const path = require('path');

const slip44Path = path.join(__dirname, 'slip44.md');
// eslint-disable-next-line node/no-sync
const slip44 = fs.readFileSync(slip44Path, 'utf8');

const entries = {};
for (const line of slip44.split('\n')) {
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

// Push to stdout
console.log(JSON.stringify(entries, null, 2));
