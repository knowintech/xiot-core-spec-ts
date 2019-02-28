import {Property} from '../../typedef/instance/Property';
import {PropertyOperable} from '../../typedef/operable/PropertyOperable';
import {Spec} from '../../typedef/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';
import {DataFormatToString} from '../../typedef/definition/property/data/DataFormat';
import {ValueList} from '../../typedef/definition/property/ValueList';
import {ValueRange} from '../../typedef/definition/property/ValueRange';
import {Unit, UnitToString} from '../../typedef/definition/property/Unit';
import {DescriptionCodec} from '../definition/DescriptionCodec';

export class PropertyCodec {

    static decode(array: any[]): Property[] {
        const list: Property[] = [];

        if (array != null) {
            for (const o of array) {
                const p = new Property(o[Spec.IID], PropertyDefinitionCodec.decode(o));

                if (o[Spec.X_OPTIONAL] != null) {
                    p.type._optional = o[Spec.X_OPTIONAL];
                }

                list.push(p);
            }
        }

        return list;
    }

    static decodeOperable(array: any[]): PropertyOperable[] {
        const list: PropertyOperable[] = [];

        if (array != null) {
            for (const o of array) {
                const p = new PropertyOperable(o[Spec.IID], PropertyDefinitionCodec.decode(o));

                list.push(p);
            }
        }

        return list;
    }

    static encode(property: Property): Object {
        const object: any = {
            iid: property.iid,
            type:  property.type.toString(),
            description: DescriptionCodec.encode(property.type.description),
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

        if (property.type._optional) {
            object[Spec.X_OPTIONAL] = true;
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
