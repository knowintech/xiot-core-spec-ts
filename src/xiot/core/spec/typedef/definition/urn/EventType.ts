import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class EventType extends Urn {

    constructor(string: string) {
        super([UrnType.EVENT], string);
    }
}
