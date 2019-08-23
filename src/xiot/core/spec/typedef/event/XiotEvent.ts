import {XiotEventType} from './XiotEventType';

export class XiotEvent {

    type: XiotEventType = XiotEventType.UNDEFINED;

    constructor(type: XiotEventType) {
        this.type = type;
    }
}
