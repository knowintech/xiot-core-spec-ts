import {ServiceTypeDTO} from '../../typedef/dto/ServiceTypeDTO';
import {ServiceType} from '../../typedef/definition/urn/ServiceType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {Spec} from '../../typedef/constant/Spec';

export class ServiceTypeDTOCodec {

    static decodeArray(list: any[]): ServiceTypeDTO[] {
        const array: ServiceTypeDTO[] = [];

        list.forEach(o => {
            array.push(ServiceTypeDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ServiceTypeDTO {
        const type = new ServiceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new ServiceTypeDTO(type, description);
    }

    static encode(def: ServiceTypeDTO): any {
        return  {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: ServiceTypeDTO[]): any[] {
        return list.map(x => ServiceTypeDTOCodec.encode(x));
    }
}
