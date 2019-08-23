import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {Room} from '../../../../../..';

export class XiotRoomRemoved extends XiotEvent {

    rooms: Room[] = [];

    constructor() {
        super(XiotEventType.USER_ROOM_REMOVED);
    }
}
