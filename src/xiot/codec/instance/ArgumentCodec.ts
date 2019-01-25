import {Argument} from '../../spec/instance/Argument';
import {Spec} from '../../spec/constant/Spec';

export class ArgumentCodec {

    static decodeArray(list: any[]): Argument[] {
        const array: Argument[] = [];

        list.forEach(o => {
            let def = ArgumentCodec.decode(o);
            if (def != null) {
                array.push();
            }
        });

        return array;
    }

    static decode(o: any): Argument {
        let piid: number = o[Spec.PIID];

        const def = new Argument(piid);

        let repeat = o[Spec.REPEAT];
        if (repeat != null) {
            def.minRepeat = repeat[0];
            def.MaxRepeat = repeat[1];
        }

        return def;
    }

    static encode(def: Argument): any {
        return {
            piid: def.iid,
            repeat: [def.minRepeat, def.MaxRepeat]
        };
    }

    static encodeArray(list: Argument[]): any[] {
        return list.map(x => ArgumentCodec.encode(x));
    }
}
