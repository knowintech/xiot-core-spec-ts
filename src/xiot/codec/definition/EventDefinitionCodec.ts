import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';
import {EventDefinition} from '../../spec/definitions/EventDefinition';

export class EventDefinitionCodec {

  static decode(value: string): EventDefinition {
    const json = JSON.parse(value);

    const def = new EventDefinition();
    def.type = ActionType.valueOf(json.getString(Spec.TYPE, ''));
    def.description = json.getString(Spec.DESCRIPTION, '');
    def.arguments = DefinitionCodec.decodeProperties(json.get(Spec.ARGUMENTS));
    return def;
  }

  static encode(def: EventDefinition): Object {
    return null;
  }
}
