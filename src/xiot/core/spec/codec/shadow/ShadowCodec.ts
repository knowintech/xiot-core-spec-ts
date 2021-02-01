import {Shadow} from '../../typedef/shadow/Shadow';
import set = Reflect.set;

export class ShadowCodec {
    static decodeArray(list: any[]): Shadow[] {
        const array: Shadow[] = [];

        list.forEach(o => {
            array.push(ShadowCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): Shadow {
        const siid: number = o.siid || 0;
        const piid: number = o.piid || 0;
        const value: any = o.value;
        const status: number = o.status || 0;
        const description: any = o.description || null;
        return new Shadow(siid, piid, value, status, description);
    }

    static encode(def: Shadow): any {
        const o: any = {
            siid: def.siid,
            piid: def.piid,
            status: def.status
        };

        if (def.status === 0) {
            set(o, 'value', def.value);
        } else {
            set(o, 'description', def.description);
        }

        return o;
    }

    static encodeArray(list: Shadow[]): any[] {
        return list.map(x => ShadowCodec.encode(x));
    }
}
