import {ActionTypeDTO} from '../../typedef/dto/ActionTypeDTO';
import {ActionType, DescriptionCodec, Spec} from '../../../../..';

export class ActionTypeDTOCodec {

    static decodeArray(list: any[]): ActionTypeDTO[] {
        const array: ActionTypeDTO[] = [];

        list.forEach(o => {
            array.push(ActionTypeDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ActionTypeDTO {
        const type = new ActionType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new ActionTypeDTO(type, description);
    }

    static encode(def: ActionTypeDTO): any {
        return  {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: ActionTypeDTO[]): any[] {
        return list.map(x => ActionTypeDTOCodec.encode(x));
    }
}
