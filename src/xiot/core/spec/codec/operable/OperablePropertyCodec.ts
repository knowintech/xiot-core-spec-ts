import {OperableProperty} from '../../typedef/operable/OperableProperty';
import {Spec} from '../../typedef/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';

export class OperablePropertyCodec {

    static decodeArray(array: any[]): OperableProperty[] {
        const list: OperableProperty[] = [];

        if (array != null) {
            for (const o of array) {
                const p = new OperableProperty(o[Spec.IID], PropertyDefinitionCodec.decode(o));

                list.push(p);
            }
        }

        return list;
    }
}
