import {expect} from 'chai';
import {diff} from 'yajsondiff';
import 'mocha';
import * as fs from 'async-file';

import {StanzaCodec} from '../../../../../../src/xiot/core/spec/codec/stanza/StanzaCodec';

describe('StanzaCodec', async () => {

    const folder = './resources/stanza/';
    const dir: string [] = await fs.readdir(folder);
    const files: string[] = [];
    const codec: StanzaCodec = new StanzaCodec();

    await getFiles(folder, dir, files);
    describe('reading stanza, folder: ' + folder, () => {
        expect(true).to.equal(true);

        for (const file of files) {
            it('  check: ' + file, async () => {
                const a = await fs.readFile(file);
                const oldJson = JSON.parse(a.toString());
                const message = codec.decode(a.toString());

                if (message == null) {
                    console.log('message invalid: ', a.toString());
                    expect(JSON.stringify(oldJson)).to.equal('null');
                    return;
                }

                const newJson = codec.encode(message);
                const differences = diff(oldJson, newJson);
                if (differences == null) {
                    expect(true).to.equal(true);
                } else {
                    console.log('differences: ', differences);
                    expect(JSON.stringify(oldJson)).to.equal(JSON.stringify(newJson));
                }
            });
        }
    });

});


async function getFiles(folder: string, dir: string[], files: string[]) {
    for (const file of dir) {
        const state = await fs.stat(folder + file);
        if (state.isDirectory()) {
            const childFolder = folder + file + '/';
            const childDir = await fs.readdir(childFolder);
            await getFiles(childFolder, childDir, files);
            continue;
        }

        files.push(folder + file);
    }
}
