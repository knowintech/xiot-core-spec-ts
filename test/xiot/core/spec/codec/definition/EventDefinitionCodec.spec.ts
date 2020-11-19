import { expect } from 'chai';
import 'mocha';
import {diff} from 'yajsondiff';
import * as fs from 'async-file';
import {EventDefinitionCodec} from '../../../../../../src/xiot/core/spec/codec/definition/EventDefinitionCodec';

describe('EventDefinitionCodec', async () => {

    const folder = './resources/spec/xiot/definition/events/';

    const dir = await fs.readdir(folder);

    it('reading events, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = EventDefinitionCodec.decode(json);

            const differences = diff(json, EventDefinitionCodec.encode(def));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                expect(JSON.stringify(json)).to.equal(JSON.stringify(EventDefinitionCodec.encode(def)));
            }
        });
    }
});
