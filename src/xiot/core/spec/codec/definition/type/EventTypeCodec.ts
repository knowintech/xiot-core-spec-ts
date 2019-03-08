import {EventType} from '../../../typedef/definition/urn/EventType';
import { DescriptionCodec } from '../DescriptionCodec';

export class EventTypeCodec {

    static decodeArray(array: any[]): EventType[] {
        const list: EventType[] = [];

        if (array != null) {
            for (const v of array) {
                if (typeof v === 'string') {
                    list.push(new EventType(v));
                } else if (typeof v === 'object') {
                    let type = new EventType(v['type']);
                    type.description = DescriptionCodec.decode(v['description']);
                    list.push(type);
                }
            }
        }
  
      return list;
    }

    static encodeArray(actions: EventType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            if (type.description.size == 0) {
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
