import {isNum} from "../src/Hello";
import { expect } from 'chai';
import 'mocha';

describe('Hello', () => {

    it('isNum() should work fine.', () => {
        expect(isNum(1)).to.equal(true);
    });
});