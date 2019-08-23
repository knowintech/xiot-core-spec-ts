import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {Home} from '../../../../../..';

export class XiotHomeRemoved extends XiotEvent {

    homes: Home[] = [];

    constructor() {
        super(XiotEventType.USER_HOME_REMOVED);
    }
}
