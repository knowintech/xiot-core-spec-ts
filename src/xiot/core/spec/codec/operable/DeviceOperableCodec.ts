import {Spec} from '../../typedef/constant/Spec';
import {DeviceOperable} from '../../typedef/operable/DeviceOperable';
import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {ServiceOperableCodec} from './ServiceOperableCodec';

export class DeviceOperableCodec {

    static decode(o: any): DeviceOperable {
        const type = new DeviceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const services = ServiceOperableCodec.decodeArray(o[Spec.SERVICES]);
        return new DeviceOperable(type, description, services);
    }
}
