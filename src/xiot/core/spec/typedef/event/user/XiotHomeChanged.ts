import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {Home} from '../../../../../..';

export class XiotHomeChanged extends XiotEvent {

    homes: Home[] = [];

    constructor() {
        super(XiotEventType.USER_HOME_CHANGED);
    }
}
