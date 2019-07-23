import {DeviceType} from '../../../../../..';
import {Manipulate} from './Manipulate';

export class ManipulateConfiguration {

    version: number;
    type: DeviceType;
    manipulates: Array<Manipulate>;

    constructor(type: string, version: number, manipulates: Manipulate[]) {
        this.type = new DeviceType(type);
        this.version = version;
        this.manipulates = manipulates;
    }
}
