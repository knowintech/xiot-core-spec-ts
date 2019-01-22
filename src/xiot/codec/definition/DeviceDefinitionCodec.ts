import {Spec} from '../../spec/constant/Spec';
import {DefinitionCodec} from './DefinitionCodec';
import {DeviceDefinition} from '../../spec/definition/DeviceDefinition';
import {DeviceType} from '../../spec/definition/urn/DeviceType';
import {ServiceDefinitionCodec} from './ServiceDefinitionCodec';

export class DeviceDefinitionCodec {

    static decodeArray(list: any[]): DeviceDefinition[] {
        const array: DeviceDefinition[] = [];

        list.forEach(o => {
            array.push(DeviceDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): DeviceDefinition {
        const def = new DeviceDefinition();
        def.type = DeviceType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.requiredServices = DefinitionCodec.decodeServices(o[Spec.REQUIRED_SERVICES]);
        def.optionalServices = DefinitionCodec.decodeServices(o[Spec.OPTIONAL_SERVICES]);

        if (def.type != null) {
            if (o[Spec.X_NAME] != null) {
                def.type._name = o[Spec.X_NAME];
            }
        }

        return def;
    }

    static encode(def: DeviceDefinition): any {
        const o: any = {
            type: def.type != null ? def.type.toString() : '',
            description: def.description
        };

        if (def.requiredServices.length > 0) {
            o[Spec.REQUIRED_SERVICES] = ServiceDefinitionCodec.encodeArray(def.requiredServices);
        }

        if (def.optionalServices.length > 0) {
            o[Spec.OPTIONAL_SERVICES] = ServiceDefinitionCodec.encodeArray(def.optionalServices);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return o;
    }
}
