import {ActionDefinition} from '../../spec/definition/ActionDefinition';
import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definition/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';

export class ActionDefinitionCodec {

    static decodeArray(list: any[]): ActionDefinition[] {
        const array: ActionDefinition[] = [];

        list.forEach(o => {
            array.push(ActionDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ActionDefinition {
        const def = new ActionDefinition();
        def.type = ActionType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.in = DefinitionCodec.decodeProperties(o[Spec.IN]);
        def.out = DefinitionCodec.decodeProperties(o[Spec.OUT]);

        if (def.type != null) {
            if (o[Spec.X_NAME] != null) {
                def.type._name = o[Spec.X_NAME];
            }
        }

        return def;
    }

    static encode(def: ActionDefinition): any {
        const o: any = {
            type: (def.type != null) ? def.type.toString() : '',
            description: def.description,
        };

        if (def.in.length > 0) {
            o[Spec.IN] = DefinitionCodec.encodeProperties(def.in);
        }

        if (def.out.length > 0) {
            o[Spec.OUT] = DefinitionCodec.encodeProperties(def.out);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return o;
    }

    static encodeArray(actions: ActionType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
