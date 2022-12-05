import slip44Json from '../slip44.json';

describe('Generated SLIP-44 JSON file', () => {
  it('has expected shape', () => {
    expect(Object.keys(slip44Json).length).toBeGreaterThan(1);
    expect(slip44Json[60]).toStrictEqual({
      index: '60',
      // eslint-disable-next-line id-denylist
      hex: '0x8000003c',
      symbol: 'ETH',
      name: 'Ethereum',
    });
  });
});
