import {PropertyDefinition} from '../../spec/definition/PropertyDefinition';
import {Spec} from '../../spec/constant/Spec';
import {PropertyType} from '../../spec/definition/urn/PropertyType';
import {DataFormatFromString, DataFormatToString} from '../../spec/definition/property/data/DataFormat';
import {Access} from '../../spec/definition/property/Access';
import {DefinitionCodec} from './DefinitionCodec';
import {Unit, UnitFromString, UnitToString} from '../../spec/definition/property/Unit';
import {ValueList} from '../../spec/definition/property/ValueList';
import {ValueRange} from '../../spec/definition/property/ValueRange';

export class PropertyDefinitionCodec {

    static decodeArray(list: any[]): PropertyDefinition[] {
        const array: PropertyDefinition[] = [];

        list.forEach(json => {
            array.push(PropertyDefinitionCodec.decode(json));
        });

        return array;
    }

    static decode(json: any): PropertyDefinition {
        const def = new PropertyDefinition();
        def.type = PropertyType.valueOf(json[Spec.TYPE]);
        def.description = json[Spec.DESCRIPTION];
        def.format = DataFormatFromString(json[Spec.FORMAT]);
        def.access = Access.create(json[Spec.ACCESS]);
        def.unit = UnitFromString(json[Spec.UNIT]);

        if (json.hasOwnProperty(Spec.VALUE_LIST) && json.hasOwnProperty(Spec.VALUE_RANGE)) {
            throw new Error('value-list & value-range both exist!');
        }

        if (json.hasOwnProperty(Spec.VALUE_LIST)) {
            def.constraintValue = DefinitionCodec.decodeValueList(def.format, json[Spec.VALUE_LIST]);
        }

        if (json.hasOwnProperty(Spec.VALUE_RANGE)) {
            def.constraintValue = DefinitionCodec.decodeValueRange(def.format, json[Spec.VALUE_RANGE]);
        }

        if (def.type != null) {
            if (json['x-name'] != null) {
                def.type.set('name', json['x-name']);
            }

            if (json['x-optional'] != null) {
                def.type.set('optional', json['x-optional']);
            }
        }

        return def;
    }

    static encode(def: PropertyDefinition): any {
        const object: any = {
            type: def.type != null ? def.type.toString() : '',
            description: def.description,
            format: DataFormatToString(def.format),
            access: def.access.toList(),
        };

        if (def.constraintValue != null) {
            if (def.constraintValue instanceof ValueList) {
                object[Spec.VALUE_LIST] = def.constraintValue.toJsonArray();
            }

            if (def.constraintValue instanceof ValueRange) {
                object[Spec.VALUE_RANGE] = def.constraintValue.toJsonArray();
            }
        }

        if (def.unit !== Unit.NONE) {
            object[Spec.UNIT] = UnitToString(def.unit);
        }

        return object;
    }

    static encodeArray(properties: PropertyType[]): any[] {
        const array: any[] = [];

        properties.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
