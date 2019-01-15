import {Event} from '../../spec/instance/Event';
import {Spec} from '../../spec/constant/Spec';
import {EventType} from '../../spec/definition/urn/EventType';

export class EventCodec {

    static decode(array: Array<any>): Array<Event> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Event();
                a.iid = o[Spec.IID];
                a.type = EventType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.arguments = o[Spec.ARGUMENTS];

                if (a.type != null) {
                    if (o[Spec.X_NAME] != null) {
                        a.type.set(Spec.X_NAME, o[Spec.X_NAME]);
                    }

                    if (o[Spec.X_OPTIONAL] != null) {
                        a.type.set(Spec.X_OPTIONAL, o[Spec.X_OPTIONAL]);
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
            arguments: event.arguments,
        };

        if (event.type != null) {
            if (event.type.get(Spec.X_NAME) != null) {
                o[Spec.X_NAME] = event.type.get(Spec.X_NAME);
            }

            if (event.type.get(Spec.X_OPTIONAL) != null) {
                o[Spec.X_OPTIONAL] = event.type.get(Spec.X_OPTIONAL);
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
