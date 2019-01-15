import {Spec} from '../../spec/constant/Spec';
import {Device} from '../../spec/instance/Device';
import {DeviceOperable} from '../../spec/operable/DeviceOperable';
import {DeviceType} from '../../spec/definition/urn/DeviceType';
import {ServiceCodec} from './ServiceCodec';

export class DeviceCodec {

    static decode(o: any): Device {
        const device = new Device();
        device.type = DeviceType.valueOf(o[Spec.TYPE]);
        device.description = o[Spec.DESCRIPTION];
        const services = ServiceCodec.decode(o[Spec.SERVICES]);
        for (const service of services) {
            device.services.set(service.iid, service);
        }

        if (device.type != null) {
            if (o[Spec.X_NAME] != null) {
                device.type.set(Spec.X_NAME, o[Spec.X_NAME]);
            }
        }

        return device;
    }

    static decodeOperable(json: any): DeviceOperable {
        const device = new DeviceOperable();
        device.type = DeviceType.valueOf(json[Spec.TYPE]);
        device.description = json[Spec.DESCRIPTION];
        const services = ServiceCodec.decodeOperable(json[Spec.SERVICES]);
        for (const service of services) {
            device.services.set(service.iid, service);
        }

        return device;
    }

    static encode(device: Device): any {
        const o: any = {
            type: device.type != null ? device.type.toString() : '',
            description: device.description,
            services: ServiceCodec.encodeArray(device.services)
        };

        if (device.type != null) {
            if (device.type.get(Spec.X_NAME) != null) {
                o[Spec.X_NAME] = device.type.get(Spec.X_NAME);
            }
        }

        return o;
    }
}
