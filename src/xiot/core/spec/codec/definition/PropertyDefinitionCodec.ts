import {PropertyDefinition} from '../../typedef/definition/PropertyDefinition';
import {Spec} from '../../typedef/constant/Spec';
import {PropertyType} from '../../typedef/definition/urn/PropertyType';
import {DataFormatFromString, DataFormatToString} from '../../typedef/definition/property/data/DataFormat';
import {Access} from '../../typedef/definition/property/Access';
import {Unit, UnitFromString, UnitToString} from '../../typedef/definition/property/Unit';
import {ValueList} from '../../typedef/definition/property/ValueList';
import {ValueRange} from '../../typedef/definition/property/ValueRange';
import {ValueListCodec} from './ValueListCodec';
import {ValueRangeCodec} from './ValueRangeCodec';

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
        PropertyDefinitionCodec.decodeDefinition(def, o);
        return def;
    }

    static decodeDefinition(def: PropertyDefinition, o: any) {
        def.type = PropertyType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.format = DataFormatFromString(o[Spec.FORMAT]);
        def.access = Access.create(o[Spec.ACCESS]);
        def.unit = UnitFromString(o[Spec.UNIT]);

        if (o.hasOwnProperty(Spec.VALUE_LIST) && o.hasOwnProperty(Spec.VALUE_RANGE)) {
            throw new Error('value-list & value-range both exist!');
        }

        if (o.hasOwnProperty(Spec.VALUE_LIST)) {
            def.constraintValue = ValueListCodec.decode(def.format, o[Spec.VALUE_LIST]);
        }

        if (o.hasOwnProperty(Spec.VALUE_RANGE)) {
            def.constraintValue = ValueRangeCodec.decode(def.format, o[Spec.VALUE_RANGE]);
        }

        if (def.type != null) {
            if (o[Spec.X_NAME] != null) {
                def.type._name = o[Spec.X_NAME];
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

    static encodeArray(list: PropertyDefinition[]): any[] {
        return list.map(x => PropertyDefinitionCodec.encode(x));
    }
}
