import {PropertyOperable} from '../../typedef/operable/PropertyOperable';
import {Spec} from '../../typedef/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';

export class PropertyOperableCodec {

    static decodeArray(array: any[]): PropertyOperable[] {
        const list: PropertyOperable[] = [];

        if (array != null) {
            for (const o of array) {
                const p = new PropertyOperable(o[Spec.IID], PropertyDefinitionCodec.decode(o));

                list.push(p);
            }
        }

        return list;
    }
}
