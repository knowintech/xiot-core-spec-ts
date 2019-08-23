import {XiotRoomAdded} from '../../../../../..';
import {RoomCodec} from '../../home/RoomCodec';


export class XiotRoomChangedCodec {

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
