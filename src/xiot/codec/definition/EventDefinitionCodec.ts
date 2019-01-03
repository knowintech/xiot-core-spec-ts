import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';
import {EventDefinition} from '../../spec/definitions/EventDefinition';
import {EventType} from '../../spec/definitions/urn/EventType';

export class EventDefinitionCodec {

    static decode(json: any): EventDefinition {
        const def = new EventDefinition();
        def.type = ActionType.valueOf(json[Spec.TYPE]);
        def.description = json[Spec.DESCRIPTION];
        def.arguments = DefinitionCodec.decodeProperties(json[Spec.ARGUMENTS]);
        return def;
    }

    static encode(def: EventDefinition): any {
        const object: any = {
            type: def.type != null ? def.type.toString() : '',
            description: def.description,
        };

        if (def.arguments.length > 0) {
            object[Spec.IN] = DefinitionCodec.encodeProperties(def.arguments);
        }

        return object;
    }

    static encodeArray(events: EventType[]): any[] {
        const array: any[] = [];

        events.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
