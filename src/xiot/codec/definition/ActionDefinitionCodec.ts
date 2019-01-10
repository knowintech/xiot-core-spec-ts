import {ActionDefinition} from '../../spec/definition/ActionDefinition';
import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definition/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';

export class ActionDefinitionCodec {

    static decodeArray(list: any[]): ActionDefinition[] {
        const array: ActionDefinition[] = [];

        list.forEach(json => {
            array.push(ActionDefinitionCodec.decode(json));
        });

        return array;
    }

    static decode(json: any): ActionDefinition {
        const def = new ActionDefinition();
        def.type = ActionType.valueOf(json[Spec.TYPE]);
        def.description = json[Spec.DESCRIPTION];
        def.in = DefinitionCodec.decodeProperties(json[Spec.IN]);
        def.out = DefinitionCodec.decodeProperties(json[Spec.OUT]);
        return def;
    }

    static encode(def: ActionDefinition): any {
        const object: any = {
            type: (def.type != null) ? def.type.toString() : '',
            description: def.description,
        };

        if (def.in.length > 0) {
            object[Spec.IN] = DefinitionCodec.encodeProperties(def.in);
        }

        if (def.out.length > 0) {
            object[Spec.OUT] = DefinitionCodec.encodeProperties(def.out);
        }

        return object;
    }

    static encodeArray(actions: ActionType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
