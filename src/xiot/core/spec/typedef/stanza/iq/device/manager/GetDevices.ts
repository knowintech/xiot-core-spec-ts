import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {Child} from '../../../../../../../..';

export const GET_DEVICES_METHOD = 'urn:xiot:get-devices';

export class QueryGetDevice extends IQQuery {


    constructor(id: string) {
        super(id, GET_DEVICES_METHOD);
    }

    public result(devices: Child[]): ResultGetDevice {
        return new ResultGetDevice(this.id, devices);
    }
}

export class ResultGetDevice extends IQResult {

    public devices: Child[];

    constructor(id: string, devices: Child[]) {
        super(id, GET_DEVICES_METHOD);
        this.devices = devices;
    }
}
