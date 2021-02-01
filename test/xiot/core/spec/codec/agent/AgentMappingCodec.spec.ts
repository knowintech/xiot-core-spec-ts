import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {AgentMappingCodec, AgentServerCodec} from '../../../../../../src';

describe('AgentMappingCodec', async () => {

    const folder = './resources/agent/mapping/';
    const dir = await fs.readdir(folder);

    it('reading agent, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const o = AgentMappingCodec.decode(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(AgentMappingCodec.encode(o)));
        });
    }
});
