const fs = require('fs');
const path = require('path');
const slip44Path = path.join(__dirname, '..', 'slip44.md');
const slip44 = fs.readFileSync(slip44Path).toString();

const lines = slip44.split('\n');
const entries = [];

let started = false;
let ended = false;
for (let i = 0; i < lines.length; i++) {

  const line = lines[i]
  const segments = line.split('|');
  if (segments.length === 4 &&
      segments[0].indexOf('index') !== 0 &&
      segments[0].indexOf('----') !== 0) {


    const [index, hex, symbol, coin] = segments.map(seg => seg.trim())

    let name, link
    if (coin.indexOf('[') === 0) {
      // This is a markdown link
      name = coin.substr(1).split(']')[0]
      console.log(coin);
      link = coin.split('(')[1].split(')')[0]

    } else {
      // This is just a name, no link
      name = coin;
    }
    entries.push({
      index, hex, symbol, name, link,
    })
  }
}

console.log(JSON.stringify(entries,null,2))
