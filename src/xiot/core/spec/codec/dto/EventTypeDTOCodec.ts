import {EventTypeDTO} from '../../typedef/dto/EventTypeDTO';
import {EventType, DescriptionCodec, Spec} from '../../../../..';

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
