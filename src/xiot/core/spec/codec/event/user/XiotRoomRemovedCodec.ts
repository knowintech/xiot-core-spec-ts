import {XiotRoomAdded} from '../../../../../..';
import {RoomCodec} from '../../home/RoomCodec';

export class XiotRoomRemovedCodec {

    static encode(event: XiotRoomAdded): any {
        return {
            rooms: RoomCodec.encodeArray(event.rooms),
        };
    }

    static decode(o: any): XiotRoomAdded {
        const event = new XiotRoomAdded();
        event.rooms = RoomCodec.decodeArray(o.rooms);
        return event;
    }
}
