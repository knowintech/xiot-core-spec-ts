import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class DeviceType extends Urn {

    constructor(string: string) {
      super([UrnType.DEVICE], string);
    }
}
