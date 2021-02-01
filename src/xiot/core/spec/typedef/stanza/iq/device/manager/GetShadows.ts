import {IQQuery} from '../../IQQuery';
import {IQResult} from '../../IQResult';
import {Shadow} from '../../../../shadow/Shadow';

export const GET_SHADOWS_METHOD = 'urn:xiot:get-shadows';

export class QueryGetShadows extends IQQuery {

    public readonly devices: string[];

    constructor(id: string, devices: string[]) {
        super(id, GET_SHADOWS_METHOD);
        this.devices = devices;
    }

    public result(devices: Map<string, Shadow[]>): ResultGetShadows {
        return new ResultGetShadows(this.id, devices);
    }
}

export class ResultGetShadows extends IQResult {

    public readonly shadows: Map<string, Shadow[]>;

    constructor(id: string, shadows: Map<string, Shadow[]>) {
        super(id, GET_SHADOWS_METHOD);
        this.shadows = shadows;
    }
}
