import {Spec} from '../../spec/constant/Spec';
import {EventDefinition} from '../../spec/definition/EventDefinition';
import {EventType} from '../../spec/definition/urn/EventType';
import {ArgumentDefinitionCodec} from './ArgumentDefinitionCodec';

export class EventDefinitionCodec {

    static decodeArray(list: any[]): EventDefinition[] {
        const array: EventDefinition[] = [];

        list.forEach(o => {
            array.push(EventDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): EventDefinition {
        const def = new EventDefinition();
        def.type = EventType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.arguments = ArgumentDefinitionCodec.decodeArray(o[Spec.ARGUMENTS]);

        if (def.type != null) {
            if (o[Spec.X_NAME] != null) {
                def.type._name = o[Spec.X_NAME];
            }
        }

        return def;
    }

    static encode(def: EventDefinition): any {
        const o: any = {
            type: def.type != null ? def.type.toString() : '',
            description: def.description,
        };

        if (def.arguments.length > 0) {
            o[Spec.IN] = ArgumentDefinitionCodec.encodeArray(def.arguments);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return o;
    }

    static encodeArray(list: EventDefinition[]): any[] {
        return list.map(x => EventDefinitionCodec.encode(x));
    }
}
