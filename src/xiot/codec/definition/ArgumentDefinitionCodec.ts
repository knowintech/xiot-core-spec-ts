import {ArgumentDefinition} from '../../spec/definition/ArgumentDefinition';
import {PropertyType} from '../../spec/definition/urn/PropertyType';
import {Spec} from '../../spec/constant/Spec';

export class ArgumentDefinitionCodec {

    static decodeArray(list: any[]): ArgumentDefinition[] {
        const array: ArgumentDefinition[] = [];

        if (list != null) {
            list.forEach(o => {
                let def = ArgumentDefinitionCodec.decode(o);
                if (def != null) {
                    array.push(def);
                }
            });    
        }

        return array;
    }

    static decode(o: any): ArgumentDefinition | null {
        let type = PropertyType.valueOf(o[Spec.PROPERTY]);
        if (type == null) {
            return null;
        }

        const def = new ArgumentDefinition(type);

        let repeat = o[Spec.REPEAT];
        if (repeat != null) {
            def.minRepeat = repeat[0];
            def.MaxRepeat = repeat[1];
        }

        return def;
    }

    static encode(def: ArgumentDefinition): any {
        return {
            property: def.type.toString(),
            repeat: [def.minRepeat, def.MaxRepeat]
        };
    }

    static encodeArray(list: ArgumentDefinition[]): any[] {
        return list.map(x => ArgumentDefinitionCodec.encode(x));
    }
}
