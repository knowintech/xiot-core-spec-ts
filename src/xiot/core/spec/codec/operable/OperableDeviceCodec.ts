import {Spec} from '../../typedef/constant/Spec';
import {OperableDevice} from '../../typedef/operable/OperableDevice';
import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {OperableServiceCodec} from './OperableServiceCodec';

export class OperableDeviceCodec {

    static decode(o: any): OperableDevice {
        const type = new DeviceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const services = OperableServiceCodec.decodeArray(o[Spec.SERVICES]);
        return new OperableDevice(type, description, services);
    }
}
