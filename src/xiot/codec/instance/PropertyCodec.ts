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
                p.definition = PropertyDefinitionCodec.decode(o);

                if (p.definition.type != null) {
                    if (o['x-name'] != null) {
                        p.definition.type.set('name', o['x-name']);
                    }

                    if (o['x-optional'] != null) {
                        p.definition.type.set('optional', o['x-optional']);
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
                p.definition = PropertyDefinitionCodec.decode(o);

                list.push(p);
            }
        }

        return list;
    }

    static encode(property: Property): Object {
        const object: any = {
            iid: property.iid,
            type: (property.definition != null) ? (property.definition.type != null ? property.definition.type.toString() : '') : '',
            description: (property.definition != null) ? property.definition.description : '',
            format: (property.definition != null) ? DataFormatToString(property.definition.format) : '',
            access: (property.definition != null) ? property.definition.access.toList() : []
        };

        if (property.definition != null) {
            if (property.definition.constraintValue != null) {
                if (property.definition.constraintValue instanceof ValueList) {
                    object[Spec.VALUE_LIST] = property.definition.constraintValue.toJsonArray();
                }
    
                if (property.definition.constraintValue instanceof ValueRange) {
                    object[Spec.VALUE_RANGE] = property.definition.constraintValue.toJsonArray();
                }
            }
    
            if (property.definition.unit !== Unit.NONE) {
                object[Spec.UNIT] = UnitToString(property.definition.unit);
            }

            if (property.definition.type != null) {
                if (property.definition.type.get('name') != null) {
                    object['x-name'] = property.definition.type.get('name');
                }

                if (property.definition.type.get('optional') != null) {
                    object['x-optional'] = property.definition.type.get('optional');
                }
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
