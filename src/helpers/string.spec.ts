import { replaceAll } from './string';

describe('utils', () => {
  it('replaceAll()', () => {
    const source = 'aAabBbcCc';
    const from = 'aaa';
    const to = 'ddd';
    expect(replaceAll(source, from, to)).toEqual('aAabBbcCc');
    expect(replaceAll(source, from, to, false)).toEqual('dddbBbcCc');
  });
});
