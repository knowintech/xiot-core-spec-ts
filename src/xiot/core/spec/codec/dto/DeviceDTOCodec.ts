import {DeviceDTO} from '../../typedef/dto/DeviceDTO';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {Spec} from '../../typedef/constant/Spec';

export class DeviceDTOCodec {

    static decodeArray(list: any[]): DeviceDTO[] {
        const array: DeviceDTO[] = [];

        list.forEach(o => {
            array.push(DeviceDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): DeviceDTO {
        const ns: string = o.ns;
        const name: string = o.name;
        const uuid: number = o.uuid;
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new DeviceDTO(ns, name, uuid, description);
    }

    static encode(def: DeviceDTO): any {
        return  {
            ns: def.ns,
            name: def.name,
            uuid: def.uuid,
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: DeviceDTO[]): any[] {
        return list.map(x => DeviceDTOCodec.encode(x));
    }
}
