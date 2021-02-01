import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {ShadowCodec} from '../../../../../../src/xiot/core/spec/codec/shadow/ShadowCodec';

describe('ShadowCodec', async () => {

    const folder = './resources/shadow/';
    const dir = await fs.readdir(folder);

    it('reading shadows, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const shadows = ShadowCodec.decodeArray(json.shadows);
            expect(JSON.stringify(json.shadows)).to.equal(JSON.stringify(ShadowCodec.encodeArray(shadows)));
        });
    }
});
