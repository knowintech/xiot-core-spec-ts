import {EventTypeDTO} from '../../typedef/dto/EventTypeDTO';
import {EventType} from '../../typedef/definition/urn/EventType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {Spec} from '../../typedef/constant/Spec';

export class EventTypeDTOCodec {

    static decodeArray(list: any[]): EventTypeDTO[] {
        const array: EventTypeDTO[] = [];

        list.forEach(o => {
            array.push(EventTypeDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): EventTypeDTO {
        const type = new EventType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new EventTypeDTO(type, description);
    }

    static encode(def: EventTypeDTO): any {
        return  {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: EventTypeDTO[]): any[] {
        return list.map(x => EventTypeDTOCodec.encode(x));
    }
}
