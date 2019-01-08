import {Event} from '../../spec/instance/Event';
import {Spec} from '../../spec/constant/Spec';
import {EventType} from '../../spec/definitions/urn/EventType';

export class EventCodec {

    static decode(array: Array<any>): Array<Event> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Event();
                a.iid = o[Spec.IID];
                a.type = EventType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.arguments.push(o[Spec.ARGUMENTS]);

                if (a.type != null) {
                    if (o['x-name'] != null) {
                        a.type.set('name', o['x-name']);
                    }

                    if (o['x-optional'] != null) {
                        a.type.set('optional', o['x-optional']);
                    }
                }

                list.push(a);
            }
        }

        return list;
    }

    static encode(event: Event): any {
        const o: any = {
            iid: event.iid,
            type: event.type != null ? event.type.toString() : '',
            description: event.description,
            in: event.arguments
        };

        if (event.type != null) {
            if (event.type.get('name') != null) {
                o['x-name'] = event.type.get('name');
            }

            if (event.type.get('optional') != null) {
                o['x-optional'] = event.type.get('optional');
            }
        }

        return o;
    }

    static encodeArray(events: Map<Number, Event>): any[] {
        const array: any[] = [];

        events.forEach((event) => {
            array.push(EventCodec.encode(event));
        });

        return array;
    }
}
