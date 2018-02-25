import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';
import {EventDefinition} from '../../spec/definitions/EventDefinition';

export class EventDefinitionCodec {

  static decode(json: Object): EventDefinition {
    const def = new EventDefinition();
    def.type = ActionType.valueOf(json[Spec.TYPE]);
    def.description = json[Spec.DESCRIPTION];
    def.arguments = DefinitionCodec.decodeProperties(json[Spec.ARGUMENTS]);
    return def;
  }

  static encode(def: EventDefinition): Object {
    return null;
  }
}
