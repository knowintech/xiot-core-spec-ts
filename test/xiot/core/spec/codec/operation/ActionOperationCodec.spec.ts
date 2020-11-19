import { expect } from 'chai';
import {diff} from 'yajsondiff';
import 'mocha';
import * as fs from 'async-file';
import {ActionOperationCodec} from '../../../../../../src/xiot/core/spec/codec/operation/ActionOperationCodec';

describe('ActionOperationCodec.Request', async () => {

    const folder = './resources/operation/action/request/';
    const dir = await fs.readdir(folder);

    it('reading request, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const query = ActionOperationCodec.decodeQuery(json);

            const differences = diff(json, ActionOperationCodec.encodeQuery(query));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                console.log('differences: ', differences);
                expect(JSON.stringify(json)).to.equal(JSON.stringify(ActionOperationCodec.encodeQuery(query)));
            }
        });
    }
});

describe('ActionOperationCodec.Response', async () => {

    const folder = './resources/operation/action/response/';
    const dir = await fs.readdir(folder);

    it('reading response, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const result = ActionOperationCodec.decodeResult(json);

            const differences = diff(json, ActionOperationCodec.encodeResult(result));
            if (differences == null) {
                expect(true).to.equal(true);
            } else {
                console.log('differences: ', differences);
                expect(JSON.stringify(json)).to.equal(JSON.stringify(ActionOperationCodec.encodeResult(result)));
            }
        });
    }
});
