import { expect } from 'chai';
import 'mocha';
import {diff} from 'yajsondiff';
import * as fs from 'async-file';
import {DeviceDefinitionCodec} from '../../../../../../src/xiot/core/spec/codec/definition/DeviceDefinitionCodec';

describe('DeviceDefinitionCodec', async () => {

    const folder = './resources/spec/xiot/definition/devices/';
    const dir = await fs.readdir(folder);

    it('reading devices, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = DeviceDefinitionCodec.decode(json);

            const differences = diff(json, DeviceDefinitionCodec.encode(def));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                expect(JSON.stringify(json)).to.equal(JSON.stringify(DeviceDefinitionCodec.encode(def)));
            }
        });
    }
});
