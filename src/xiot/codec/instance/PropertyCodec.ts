import {Property} from '../../spec/instance/Property';
import {PropertyOperable} from '../../spec/operable/PropertyOperable';
import {Spec} from '../../spec/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';
import {DataFormatToString} from '../../spec/definition/property/data/DataFormat';
import {ValueList} from '../../spec/definition/property/ValueList';
import {ValueRange} from '../../spec/definition/property/ValueRange';
import {Unit, UnitToString} from '../../spec/definition/property/Unit';

export class PropertyCodec {

    static decode(array: any[]): Array<Property> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const p = new Property();
                p.iid = o[Spec.IID] || 0;
                PropertyDefinitionCodec.decodeDefinition(p, o);

                if (p.type != null) {
                    if (o[Spec.X_NAME] != null) {
                        p.type._name = o[Spec.X_NAME];
                    }

                    if (o[Spec.X_OPTIONAL] != null) {
                        p.type._optional = o[Spec.X_OPTIONAL];
                    }
                }

                list.push(p);
            }
        }

        return list;
    }

    static decodeOperable(array: any[]): Array<PropertyOperable> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const p = new PropertyOperable();
                p.iid = o[Spec.IID] || 0;
                PropertyDefinitionCodec.decodeDefinition(p, o);

                list.push(p);
            }
        }

        return list;
    }

    static encode(property: Property): Object {
        const object: any = {
            iid: property.iid,
            type:  property.type != null ? property.type.toString() : '',
            description: property.description,
            format: DataFormatToString(property.format),
            access: property.access.toList()
        };

        if (property.constraintValue != null) {
            if (property.constraintValue instanceof ValueList) {
                object[Spec.VALUE_LIST] = property.constraintValue.toJsonArray();
            }

            if (property.constraintValue instanceof ValueRange) {
                object[Spec.VALUE_RANGE] = property.constraintValue.toJsonArray();
            }
        }

        if (property.unit !== Unit.NONE) {
            object[Spec.UNIT] = UnitToString(property.unit);
        }

        if (property.type != null) {
            if (property.type._name != null) {
                object[Spec.X_NAME] = property.type._name;
            }

            if (property.type._optional) {
                object[Spec.X_OPTIONAL] = true;
            }
        }

        return object;
    }

    static encodeArray(properties: Map<Number, Property>): Array<Object> {
        const array: any[] = [];

        properties.forEach((property) => {
            array.push(PropertyCodec.encode(property));
        });

        return array;
    }
}
