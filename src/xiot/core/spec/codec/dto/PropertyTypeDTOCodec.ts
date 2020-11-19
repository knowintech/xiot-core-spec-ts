import {PropertyTypeDTO} from '../../typedef/dto/PropertyTypeDTO';
import {PropertyType} from '../../typedef/definition/urn/PropertyType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {Spec} from '../../typedef/constant/Spec';

export class PropertyTypeDTOCodec {

    static decodeArray(list: any[]): PropertyTypeDTO[] {
        const array: PropertyTypeDTO[] = [];

        list.forEach(o => {
            array.push(PropertyTypeDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): PropertyTypeDTO {
        const type = new PropertyType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new PropertyTypeDTO(type, description);
    }

    static encode(def: PropertyTypeDTO): any {
        return  {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: PropertyTypeDTO[]): any[] {
        return list.map(x => PropertyTypeDTOCodec.encode(x));
    }
}
