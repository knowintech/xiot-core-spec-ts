import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {diff} from 'yajsondiff';
import {OwnerRecordCodec} from '../../../../../../src/xiot/core/spec/codec/record/OwnerRecordCodec';

describe('OwnerRecordCodec', async () => {

    const folder = './resources/record/owner/';
    const dir = await fs.readdir(folder);
    const codec = new OwnerRecordCodec();

    it('reading device record, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const type = json.type;
            const payload = json.payload;
            const record = codec.decode(type, payload);
            if (record == null) {
                expect(true).to.equal(false);
                return;
            }

            const differences = diff(payload, codec.encode(record));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                console.log('differences: ', differences);
                console.log('old: ', payload);
                console.log('new: ', codec.encode(record));
                expect(JSON.stringify(payload)).to.equal(JSON.stringify(codec.encode(record)));
            }
        });
    }
});
