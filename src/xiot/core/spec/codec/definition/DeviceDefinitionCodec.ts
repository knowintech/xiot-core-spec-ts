import {Spec} from '../../typedef/constant/Spec';
import {DeviceDefinition} from '../../typedef/definition/DeviceDefinition';
import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {ServiceTypeCodec} from './type/ServiceTypeCodec';
import {DescriptionCodec} from './DescriptionCodec';

export class DeviceDefinitionCodec {

    static decodeArray(list: any[]): DeviceDefinition[] {
        const array: DeviceDefinition[] = [];

        list.forEach(o => {
            array.push(DeviceDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): DeviceDefinition {
        const type = new DeviceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const requiredServices = ServiceTypeCodec.decodeArray(o[Spec.REQUIRED_SERVICES]);
        const optionalServices = ServiceTypeCodec.decodeArray(o[Spec.OPTIONAL_SERVICES]);
        return new DeviceDefinition(type, description, requiredServices, optionalServices);
    }

    static encode(def: DeviceDefinition): any {
        const o: any = {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.type.description),
        };

        if (def.requiredServices.length > 0) {
            o[Spec.REQUIRED_SERVICES] = ServiceTypeCodec.encodeArray(def.requiredServices);
        }

        if (def.optionalServices.length > 0) {
            o[Spec.OPTIONAL_SERVICES] = ServiceTypeCodec.encodeArray(def.optionalServices);
        }

        return o;
    }

    static encodeArray(list: DeviceDefinition[]): any[] {
        return list.map(x => DeviceDefinitionCodec.encode(x));
    }
}
