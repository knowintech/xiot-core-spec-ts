import {ArgumentDefinition} from '../../typedef/definition/ArgumentDefinition';
import {PropertyType} from '../../typedef/definition/urn/PropertyType';
import {Spec} from '../../typedef/constant/Spec';

export class ArgumentDefinitionCodec {

    static decodeArray(list: any[]): ArgumentDefinition[] {
        const array: ArgumentDefinition[] = [];

        if (list != null) {
            list.forEach(o => {
                const def = ArgumentDefinitionCodec.decode(o);
                if (def != null) {
                    array.push(def);
                }
            });
        }

        return array;
    }

    static decode(o: any): ArgumentDefinition | null {
        const type: PropertyType = (typeof o === 'string') ? new PropertyType(o) : new PropertyType(o[Spec.PROPERTY]);
        const def = new ArgumentDefinition(type);

        const repeat = o[Spec.REPEAT];
        if (repeat != null) {
            def.minRepeat = repeat[0];
            def.maxRepeat = repeat[1];
        }

        return def;
    }

    static encode(def: ArgumentDefinition): any {
        return {
            property: def.type.toString(),
            repeat: [def.minRepeat, def.maxRepeat]
        };
    }

    static encodeArray(list: ArgumentDefinition[]): any[] {
        return list.map(x => ArgumentDefinitionCodec.encode(x));
    }
}
