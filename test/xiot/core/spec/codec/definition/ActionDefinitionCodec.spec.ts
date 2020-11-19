import { expect } from 'chai';
import 'mocha';
import {diff} from 'yajsondiff';
import * as fs from 'async-file';
import {ActionDefinitionCodec} from '../../../../../../src/xiot/core/spec/codec/definition/ActionDefinitionCodec';

describe('ActionDefinitionCodec', async () => {

    const folder = './resources/spec/xiot/definition/actions/';

    const dir = await fs.readdir(folder);

    it('reading actions, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = ActionDefinitionCodec.decode(json);

            const differences = diff(json, ActionDefinitionCodec.encode(def));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                expect(JSON.stringify(json)).to.equal(JSON.stringify(ActionDefinitionCodec.encode(def)));
            }
        });
    }
});
