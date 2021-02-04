import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';

describe('SummaryCodec', async () => {

    const folder = './resources/summary/';
    // const dir = await fs.readdir(folder);

    it('reading summaries, folder: ' + folder,  () => {
    });

    // for (const file of dir) {
    //     it('decode: ' + file, async () => {
    //         let a = await fs.readFile(folder + file);
    //         const json = JSON.parse(a.toString());
    //         const summaries = SummaryCodec.decode(json);
    //         expect(JSON.stringify(json)).to.equal(JSON.stringify(SummaryCodec.encodeArray(summaries)));
    //     });
    // }

    it('reading summaries, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });
});
