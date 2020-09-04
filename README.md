# @metamask/slip44

A simple mapping between [slip44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) identifiers and the associated metadata, parsed directly from that repository linked above.

## Usage

```javascript
const slip44 = require('@metamask/slip44');

const metadata = slip44['0']
assert.equals(metadata.name, 'Bitcoin');
```

```typescript
interface Slip44 {
  [index:string]: {
    index: string;
    hex: string;
    symbol: string;
    name: string;
    link?: string;
  }
}
```

## Updating

To automatically update from the slip44 doc, run `./generate.sh`.

