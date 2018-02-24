import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {ActionDefinitionCodec} from "../../../../src/xiot/codec/definition/ActionDefinitionCodec";

describe('ActionDefinitionCodec', async () => {

    let folder = './resources/spec/miot/definition/actions/';
    let dir = await fs.readdir(folder);

    it('reading actions, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const def = ActionDefinitionCodec.decode(a.toString());
            // console.log("a => ", a.toString());
            // console.log("b => ", def.toJSON());
            expect(true).to.equal(true);
        });
    }
});
