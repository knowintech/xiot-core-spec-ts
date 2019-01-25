import {EventType} from '../../../spec/definition/urn/EventType';

export class EventTypeCodec {

    static decodeArray(array: any[]): EventType[] {
        const list: EventType[] = [];

        if (array != null) {
            for (const v of array) {
              const t = EventType.valueOf(v);
              if (t != null) {
                  list.push(t);
              }
            }
        }
  
      return list;
    }

    static encodeArray(actions: EventType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
