import {expect} from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {diff} from 'yajsondiff';
import {XepRecordCodec} from '../../../../../../src/xiot/core/spec/codec/xep/XepRecordCodec';

describe('XepRecordCodec', async () => {

    const folder = './resources/xep/record/';
    const dir = await fs.readdir(folder);

    it('reading device record, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const record = XepRecordCodec.decodeObject(json);
            if (record == null) {
                expect(true).to.equal(false);
                return;
            }

            let updated = XepRecordCodec.encodeObject(record);
            const differences = diff(json, updated);
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                console.log('differences: ', differences);
                console.log('old: ', json);
                console.log('new: ', updated);
                expect(JSON.stringify(json)).to.equal(JSON.stringify(updated));
            }
        });
    }
});
