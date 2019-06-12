import {Argument} from '../../typedef/instance/Argument';
import {Spec} from '../../typedef/constant/Spec';

export class ArgumentOperationCodec {

    static decodeArray(list: any[]): Argument[] {
        const array: Argument[] = [];

        if (list != null) {
            list.forEach(o => {
                const a = ArgumentOperationCodec.decode(o);
                if (a != null) {
                    array.push(a);
                }
            });
        }

        return array;
    }

    static decode(o: any): Argument {
        if (typeof o === 'number') {
            return new Argument(o);
        }

        const argument = new Argument(o[Spec.PIID] || 0);
        argument.values = o[Spec.VALUES] || [];

        return argument;
    }

    static encode(argument: Argument): any {
        return {
            piid: argument.piid,
            values: argument.values
        };
    }

    static encodeArray(list: Argument[]): any[] {
        return list.map(x => ArgumentOperationCodec.encode(x));
    }
}
