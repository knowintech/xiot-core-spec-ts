import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {Home} from '../../../../../..';

export class XiotHomeAdded extends XiotEvent {

    homes: Home[] = [];

    constructor() {
        super(XiotEventType.USER_HOME_ADDED);
    }
}
