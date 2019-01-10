import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {EventDefinitionCodec} from "../../../../src/xiot/codec/definition/EventDefinitionCodec";

describe('EventDefinitionCodec', async () => {

    let folder = './resources/spec/xiot/definition/events/';

    let dir = await fs.readdir(folder);
    
    it('reading events, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = EventDefinitionCodec.decode(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(EventDefinitionCodec.encode(def)));
        });
    }
});