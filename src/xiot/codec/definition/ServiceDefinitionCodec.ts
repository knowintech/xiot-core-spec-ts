import {Spec} from '../../spec/constant/Spec';
import {DefinitionCodec} from './DefinitionCodec';
import {ServiceDefinition} from '../../spec/definitions/ServiceDefinition';
import {ServiceType} from '../../spec/definitions/urn/ServiceType';

export class ServiceDefinitionCodec {

  static decode(value: string): ServiceDefinition {
    const json = JSON.parse(value);

    const def = new ServiceDefinition();
    def.type = ServiceType.valueOf(json[Spec.TYPE]);
    def.description = json[Spec.DESCRIPTION];
    def.requiredProperties = DefinitionCodec.decodeProperties(json[Spec.REQUIRED_PROPERTIES]);
    def.optionalProperties = DefinitionCodec.decodeProperties(json[Spec.OPTIONAL_PROPERTIES]);
    def.requiredActions = DefinitionCodec.decodeActions(json[Spec.REQUIRED_ACTIONS]);
    def.optionalActions = DefinitionCodec.decodeActions(json[Spec.OPTIONAL_ACTIONS]);
    def.requiredEvents = DefinitionCodec.decodeEvents(json[Spec.REQUIRED_EVENTS]);
    def.optionalEvents = DefinitionCodec.decodeEvents(json[Spec.OPTIONAL_EVENTS]);
    return def;
  }

  static encode(def: ServiceDefinition): Object {
    return null;
  }
}
