import { expect } from 'chai';
import {diff} from 'yajsondiff';
import 'mocha';
import * as fs from 'async-file';
import {DeviceCodec} from '../../../../../../src/xiot/core/spec/codec/instance/DeviceCodec';

describe('DeviceCodec', async () => {

    const folder = './resources/spec/xiot/instance/';
    const dir = await fs.readdir(folder);

    it('reading devices instance, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const device = DeviceCodec.decode(json);

            const differences = diff(json, DeviceCodec.encode(device));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                console.log('differences: ', differences);
                expect(JSON.stringify(json)).to.equal(JSON.stringify(DeviceCodec.encode(device)));
            }
        });
    }
});
