import { expect } from 'chai';
import 'mocha';
import {diff} from 'yajsondiff';
import * as fs from 'async-file';
import {ShortcutConfigurationCodec} from '../../../../../../../src/xiot/core/spec/codec/shortcut/ShortcutConfigurationCodec';

describe('ManipulateConfigurationCodec', async () => {

    const folder = './resources/configuration/shortcut/';

    const dir = await fs.readdir(folder);

    it('reading shortcut configuration, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = ShortcutConfigurationCodec.decode(json);

            const differences = diff(json, ShortcutConfigurationCodec.encode(def));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                expect(JSON.stringify(json)).to.equal(JSON.stringify(ShortcutConfigurationCodec.encode(def)));
            }
        });
    }
});
