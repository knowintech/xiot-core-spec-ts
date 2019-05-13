import {ActionType} from '../../../typedef/definition/urn/ActionType';
import { DescriptionCodec } from '../DescriptionCodec';

export class ActionTypeCodec {

    static decodeArray(array: any[]): ActionType[] {
        const list: ActionType[] = [];

        if (array != null) {
            for (const v of array) {
                if (typeof v === 'string') {
                    list.push(new ActionType(v));
                } else if (typeof v === 'object') {
                    const type = new ActionType(v['type']);
                    type.description = DescriptionCodec.decode(v['description']);
                    list.push(type);
                }
            }
        }

      return list;
    }

    static encodeArray(actions: ActionType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            if (type.description.size === 0) {
                array.push(type.toString());
            } else {
                array.push({
                    type: type.toString(),
                    description: DescriptionCodec.encode(type.description)
                });
            }
        });

        return array;
    }
}
