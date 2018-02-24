import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {ServiceDefinitionCodec} from "../../../../src/xiot/codec/definition/ServiceDefinitionCodec";

describe('ServiceDefinitionCodec', async () => {

    let folder = './resources/spec/miot/definition/services/';
    let dir = await fs.readdir(folder);

    it('reading services, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const def = ServiceDefinitionCodec.decode(a.toString());
            // console.log("a: ", a.toString());
            expect(true).to.equal(true);
        });
    }
});