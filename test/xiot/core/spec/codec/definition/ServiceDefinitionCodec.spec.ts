import { expect } from 'chai';
import 'mocha';
import {diff} from 'yajsondiff';
import * as fs from 'async-file';
import {ServiceDefinitionCodec} from '../../../../../../src';

describe('ServiceDefinitionCodec', async () => {

    const folder = './resources/spec/xiot/definition/services/';
    const dir = await fs.readdir(folder);

    it('reading services, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = ServiceDefinitionCodec.decode(json);

            const differences = diff(json, ServiceDefinitionCodec.encode(def));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                expect(JSON.stringify(json)).to.equal(JSON.stringify(ServiceDefinitionCodec.encode(def)));
            }
        });
    }
});
