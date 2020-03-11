import {Spec} from '../../typedef/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';
import {PropertyTemplate} from '../../typedef/template/PropertyTemplate';

export class PropertyTemplateCodec {

    static decodeArray(array: any[]): PropertyTemplate[] {
        const list: PropertyTemplate[] = [];

        if (array != null) {
            for (const o of array) {
                list.push(PropertyTemplateCodec.decode(o));
            }
        }

        return list;
    }

    static decode(o: any): PropertyTemplate {
        const iid = o[Spec.IID];
        const required = o[Spec.X_REQUIRED];
        const def = PropertyDefinitionCodec.decode(o);
        return new PropertyTemplate(iid, required, def);
    }

    static encode(property: PropertyTemplate): Object {
        const o: any = PropertyDefinitionCodec.encode(property);
        o[Spec.IID] = property.iid;
        o[Spec.X_REQUIRED] = property.required;
        return o;
    }

    static encodeArray(properties: Map<Number, PropertyTemplate>): Array<Object> {
        const array: any[] = [];

        properties.forEach((property) => {
            array.push(PropertyTemplateCodec.encode(property));
        });

        return array;
    }
}
