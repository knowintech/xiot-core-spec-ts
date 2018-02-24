import {Spec} from '../../spec/constant/Spec';
import {DefinitionCodec} from './DefinitionCodec';
import {DeviceDefinition} from '../../spec/definitions/DeviceDefinition';
import {DeviceType} from '../../spec/definitions/urn/DeviceType';

export class DeviceDefinitionCodec {

  static decode(value: string): DeviceDefinition {
    const json = JSON.parse(value);

    const def = new DeviceDefinition();
    def.type = DeviceType.valueOf(json.getString(Spec.TYPE, ''));
    def.description = json.getString(Spec.DESCRIPTION, '');
    def.requiredServices = DefinitionCodec.decodeServices(json.get(Spec.REQUIRED_SERVICES));
    def.optionalServices = DefinitionCodec.decodeServices(json.get(Spec.OPTIONAL_SERVICES));
    return def;
  }

  static encode(def: DeviceDefinition): Object {
    return null;
  }
}
