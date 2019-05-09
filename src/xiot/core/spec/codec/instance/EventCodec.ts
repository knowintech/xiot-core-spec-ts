import {Event} from '../../typedef/instance/Event';
import {Spec} from '../../typedef/constant/Spec';
import {EventType} from '../../typedef/definition/urn/EventType';
import {ArgumentCodec} from './ArgumentCodec';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {EventOperable} from '../../../../..';

export class EventCodec {

    static decode(array: any[]): Event[] {
        const list: Event[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new EventType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const a = ArgumentCodec.decodeArray(o[Spec.ARGUMENTS]);

                if (o[Spec.X_OPTIONAL] != null) {
                    type._optional = o[Spec.X_OPTIONAL];
                }

                list.push(new Event(iid, type, description, a));
            }
        }

        return list;
    }

    static decodeOperable(array: any[]): EventOperable[] {
        const list: EventOperable[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new EventType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const a = ArgumentCodec.decodeArray(o[Spec.ARGUMENTS]);

                if (o[Spec.X_OPTIONAL] != null) {
                    type._optional = o[Spec.X_OPTIONAL];
                }

                list.push(new EventOperable(iid, type, description, a));
            }
        }

        return list;
    }

    static encode(event: Event): any {
        const o: any = {
            iid: event.iid,
            type: event.type.toString(),
            description: DescriptionCodec.encode(event.type.description),
        };

        if (event.arguments.size > 0) {
            o[Spec.ARGUMENTS] = ArgumentCodec.encodeArray(event.getArguments());
        }

        if (event.type._optional) {
            o[Spec.X_OPTIONAL] = true;
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
