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
import {DescriptionCodec} from './DescriptionCodec';

export class PropertyDefinitionCodec {

    static decodeArray(list: any[]): PropertyDefinition[] {
        const array: PropertyDefinition[] = [];

        list.forEach(json => {
            array.push(PropertyDefinitionCodec.decode(json));
        });

        return array;
    }

    static decode(o: any): PropertyDefinition {
        const type = new PropertyType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);

        const def: PropertyDefinition = new PropertyDefinition(type, description);

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

        return def;
    }

    static encode(def: PropertyDefinition): any {
        const o: any = {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.type.description),
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

        return o;
    }

    static encodeArray(list: PropertyDefinition[]): any[] {
        return list.map(x => PropertyDefinitionCodec.encode(x));
    }
}
