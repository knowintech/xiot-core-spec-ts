import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class PropertyType extends Urn {

    constructor(string: string) {
        super([UrnType.PROPERTY], string);
    }
}
