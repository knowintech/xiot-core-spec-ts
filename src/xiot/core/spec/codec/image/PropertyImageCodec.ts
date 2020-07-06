import {PropertyImage} from '../../typedef/image/PropertyImage';
import {Spec} from '../../typedef/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';

export class PropertyImageCodec {

    static decodeArray(array: any[]): PropertyImage[] {
        const list: PropertyImage[] = [];

        if (array != null) {
            for (const o of array) {
                const p = new PropertyImage(o[Spec.IID], PropertyDefinitionCodec.decode(o));

                list.push(p);
            }
        }

        return list;
    }
}
