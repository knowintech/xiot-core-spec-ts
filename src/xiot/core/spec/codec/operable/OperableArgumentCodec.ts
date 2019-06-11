import {Spec} from '../../typedef/constant/Spec';
import {OperableArgument} from '../../typedef/operable/OperableArgument';
import {Argument} from '../../../../..';

export class OperableArgumentCodec {

    static decodeArray(list: any[]): OperableArgument[] {
        const array: OperableArgument[] = [];

        if (list != null) {
            list.forEach(o => {
                const a = OperableArgumentCodec.decode(o);
                if (a != null) {
                    array.push(a);
                }
            });
        }

        return array;
    }

    static decode(o: any): OperableArgument {
        if (typeof o === 'number') {
            return new OperableArgument(o);
        }

        const piid: number = o[Spec.PIID];
        const def = new OperableArgument(piid);
        const repeat = o[Spec.REPEAT];
        if (repeat != null) {
            def.minRepeat = repeat[0];
            def.maxRepeat = repeat[1];
        }

        return def;
    }

    static encode(def: Argument): any {
        return {
            piid: def.piid,
            repeat: [def.minRepeat, def.maxRepeat]
        };
    }

    static encodeArray(list: Argument[]): any[] {
        return list.map(x => OperableArgumentCodec.encode(x));
    }
}
