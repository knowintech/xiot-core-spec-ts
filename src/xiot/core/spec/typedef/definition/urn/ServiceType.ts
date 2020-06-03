import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class ServiceType extends Urn {

    constructor(string: string) {
        super([UrnType.SERVICE], string);
    }
}
