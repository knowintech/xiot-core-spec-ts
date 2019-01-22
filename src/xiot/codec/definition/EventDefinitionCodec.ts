import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definition/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';
import {EventDefinition} from '../../spec/definition/EventDefinition';
import {EventType} from '../../spec/definition/urn/EventType';

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
        def.arguments = DefinitionCodec.decodeProperties(o[Spec.ARGUMENTS]);

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
            o[Spec.IN] = DefinitionCodec.encodeProperties(def.arguments);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return o;
    }

    static encodeArray(events: EventType[]): any[] {
        const array: any[] = [];

        events.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
