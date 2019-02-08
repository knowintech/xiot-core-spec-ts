import {Spec} from '../../typedef/constant/Spec';
import {Device} from '../../typedef/instance/Device';
import {DeviceOperable} from '../../typedef/operable/DeviceOperable';
import {DeviceType} from '../../typedef/definition/urn/DeviceType';
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
                device.type._name = o[Spec.X_NAME];
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
            if (device.type._name != null) {
                o[Spec.X_NAME] = device.type._name;
            }
        }

        return o;
    }
}
