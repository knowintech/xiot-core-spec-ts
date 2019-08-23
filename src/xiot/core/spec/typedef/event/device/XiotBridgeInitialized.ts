import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';

export class XiotBridgeInitialized extends XiotEvent {

    did = '';

    constructor(type: XiotEventType) {
        super(type);
    }
}
