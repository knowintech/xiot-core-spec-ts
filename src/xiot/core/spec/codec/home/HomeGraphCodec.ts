import {DeviceSummary, DeviceSummaryCodec, Home, HomeGraph, Room} from '../../../../..';
import {HomeCodec} from './HomeCodec';
import {RoomCodec} from './RoomCodec';

export class HomeGraphCodec {

    static decode(o: any): HomeGraph {
        const homes: Home[] = HomeCodec.decodeArray(o.homes);
        const room: Room[] = RoomCodec.decodeArray(o.rooms);
        const devices: DeviceSummary[] = DeviceSummaryCodec.decodeArray(o.devices);
        return new HomeGraph(homes, room, devices);
    }

    static encode(g: HomeGraph): any {
        return {
            homes: HomeCodec.encodeArray(g.homes),
            rooms: RoomCodec.encodeArray(g.rooms),
            devices: DeviceSummaryCodec.encodeArray(g.devices)
        };
    }
}
