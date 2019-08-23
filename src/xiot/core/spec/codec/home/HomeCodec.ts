import {Home} from '../../../../..';

export class HomeCodec {

    static decodeArray(list: any[]): Home[] {
        const array: Home[] = [];

        if (list != null) {
            list.forEach(o => array.push(HomeCodec.decode(o)));
        }

        return array;
    }

    static decode(o: any): Home {
        const iid: number = o.iid;
        const name: string = o.name;
        return new Home(iid, name);
    }

    // static List<Home> decode(JsonArray array) {
    //     List<Home> list = new ArrayList<>();
    //
    //     if (array != null) {
    //         for (int i = 0; i < array.size(); ++i) {
    //             list.add(decode(array.getJsonObject(i)));
    //         }
    //     }
    //
    //     return list;
    // }

    static encode(o: Home): any {
        return {
            iid: o.iid,
            name: o.name,
        };
    }

    static encodeArray(list: Home[]): any[] {
        const array: any[] = [];

        list.forEach((o) => {
            array.push(HomeCodec.encode(o));
        });

        return array;
    }
}
