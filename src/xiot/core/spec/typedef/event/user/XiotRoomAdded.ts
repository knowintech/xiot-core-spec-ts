import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {Room} from '../../../../../..';

export class XiotRoomAdded extends XiotEvent {

    rooms: Room[] = [];

    constructor() {
        super(XiotEventType.USER_ROOM_ADDED);
    }
}
