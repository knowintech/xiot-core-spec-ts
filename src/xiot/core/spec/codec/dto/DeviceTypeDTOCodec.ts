import {DeviceTypeDTO} from '../../typedef/dto/DeviceTypeDTO';
import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {Spec} from '../../typedef/constant/Spec';

export class DeviceTypeDTOCodec {

    static decodeArray(list: any[]): DeviceTypeDTO[] {
        const array: DeviceTypeDTO[] = [];

        list.forEach(o => {
            array.push(DeviceTypeDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): DeviceTypeDTO {
        const type = new DeviceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new DeviceTypeDTO(type, description);
    }

    static encode(def: DeviceTypeDTO): any {
        return  {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: DeviceTypeDTO[]): any[] {
        return list.map(x => DeviceTypeDTOCodec.encode(x));
    }
}
