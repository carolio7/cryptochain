const Block = require("./block");

describe('Block', () => {
    const timestamp = 'a-data';
    const lasthash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ['blockchain', 'data'];
    const block = new Block({ timestamp, lasthash, hash, data});

    it('has a timestamp, lastHash, hash, and data property' , () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lasthash).toEqual(lasthash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
});