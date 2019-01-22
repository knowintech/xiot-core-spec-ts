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

    static decode(o: any): PropertyDefinition {
        const def = new PropertyDefinition();
        def.type = PropertyType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.format = DataFormatFromString(o[Spec.FORMAT]);
        def.access = Access.create(o[Spec.ACCESS]);
        def.unit = UnitFromString(o[Spec.UNIT]);

        if (o.hasOwnProperty(Spec.VALUE_LIST) && o.hasOwnProperty(Spec.VALUE_RANGE)) {
            throw new Error('value-list & value-range both exist!');
        }

        if (o.hasOwnProperty(Spec.VALUE_LIST)) {
            def.constraintValue = DefinitionCodec.decodeValueList(def.format, o[Spec.VALUE_LIST]);
        }

        if (o.hasOwnProperty(Spec.VALUE_RANGE)) {
            def.constraintValue = DefinitionCodec.decodeValueRange(def.format, o[Spec.VALUE_RANGE]);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return def;
    }

    static encode(def: PropertyDefinition): any {
        const o: any = {
            type: def.type != null ? def.type.toString() : '',
            description: def.description,
            format: DataFormatToString(def.format),
            access: def.access.toList(),
        };

        if (def.constraintValue != null) {
            if (def.constraintValue instanceof ValueList) {
                o[Spec.VALUE_LIST] = def.constraintValue.toJsonArray();
            }

            if (def.constraintValue instanceof ValueRange) {
                o[Spec.VALUE_RANGE] = def.constraintValue.toJsonArray();
            }
        }

        if (def.unit !== Unit.NONE) {
            o[Spec.UNIT] = UnitToString(def.unit);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return o;
    }

    static encodeArray(properties: PropertyType[]): any[] {
        const array: any[] = [];

        properties.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
