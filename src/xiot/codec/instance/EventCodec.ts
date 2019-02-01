import {Event} from '../../spec/instance/Event';
import {Spec} from '../../spec/constant/Spec';
import {EventType} from '../../spec/definition/urn/EventType';
import {ArgumentCodec} from './ArgumentCodec';

export class EventCodec {

    static decode(array: Array<any>): Array<Event> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Event();
                a.iid = o[Spec.IID];
                a.type = EventType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.setArguments(ArgumentCodec.decodeArray(o[Spec.ARGUMENTS]));

                if (a.type != null) {
                    if (o[Spec.X_NAME] != null) {
                        a.type._name = o[Spec.X_NAME];
                    }

                    if (o[Spec.X_OPTIONAL] != null) {
                        a.type._optional = o[Spec.X_OPTIONAL];
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
            description: event.description
        };

        if (event.arguments.size > 0) {
            o[Spec.ARGUMENTS] = ArgumentCodec.encodeArray(event.getArguments());
        }

        if (event.type != null) {
            if (event.type._name != null) {
                o[Spec.X_NAME] = event.type._name;
            }

            if (event.type._optional) {
                o[Spec.X_OPTIONAL] = true;
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
