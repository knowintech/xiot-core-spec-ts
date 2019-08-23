import {Room} from '../../../../..';

export class RoomCodec {

    static decodeArray(list: any[]): Room[] {
        const array: Room[] = [];

        if (list != null) {
            list.forEach(o => array.push(RoomCodec.decode(o)));
        }

        return array;
    }

    static decode(o: any): Room {
        const iid: number = o.iid;
        const name: string = o.name;
        const hiid: number = o.hiid;
        return new Room(iid, name, hiid);
    }

    // static List<Room> decode(JsonArray array): Room[] {
    //     List<Room> list = new ArrayList<>();
    //
    //     if (array != null) {
    //         for (int i = 0; i < array.size(); ++i) {
    //             list.add(decode(array.getJsonObject(i)));
    //         }
    //     }
    //
    //     return list;
    // }

    static encode(o: Room): any {
        return {
            iid: o.iid,
            name: o.name,
            hiid: o.hiid,
        };
    }

    static encodeArray(list: Room[]): any[] {
        const array: any[] = [];

        list.forEach((o) => {
            array.push(RoomCodec.encode(o));
        });

        return array;
    }
}
