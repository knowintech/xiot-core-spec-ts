import {ActionDefinition} from '../../spec/definitions/ActionDefinition';
import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';

export class ActionDefinitionCodec {

    static decode(value: string): ActionDefinition {
        const json = JSON.parse(value);
        const def = new ActionDefinition();
        def.type = ActionType.valueOf(json[Spec.TYPE]);
        def.description = json[Spec.DESCRIPTION];
        def.in = DefinitionCodec.decodeProperties(json[Spec.IN]);
        def.out = DefinitionCodec.decodeProperties(json[Spec.OUT]);
        return def;
    }

    static encode(def: ActionDefinition): Object {
        return def.toJSON();
    }
}
