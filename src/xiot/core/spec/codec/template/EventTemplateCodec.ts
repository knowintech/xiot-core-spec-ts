import {Spec} from '../../typedef/constant/Spec';
import {EventType} from '../../typedef/definition/urn/EventType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {ArgumentCodec} from '../../../../..';
import {EventTemplate} from '../../typedef/template/EventTemplate';

export class EventTemplateCodec {

    static decodeArray(array: any[]): EventTemplate[] {
        const list: EventTemplate[] = [];

        if (array != null) {
            for (const o of array) {
                list.push(EventTemplateCodec.decode(o));
            }
        }

        return list;
    }

    static decode(o: any): EventTemplate {
        const iid = o[Spec.IID];
        const required = o[Spec.X_REQUIRED];
        const type = new EventType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const a = ArgumentCodec.decodeArray(o[Spec.ARGUMENTS]);
        return new EventTemplate(iid, required, type, description, a);
    }

    static encode(event: EventTemplate): any {
        const o: any = {
            iid: event.iid,
            type: event.type.toString(),
            description: DescriptionCodec.encode(event.description),
        };

        o[Spec.X_REQUIRED] = event.required;

        if (event.arguments.size > 0) {
            o[Spec.ARGUMENTS] = ArgumentCodec.encodeArray(event.getArguments());
        }

        return o;
    }

    static encodeArray(events: Map<Number, EventTemplate>): any[] {
        const array: any[] = [];

        events.forEach((event, iid) => {
            array.push(EventTemplateCodec.encode(event));
        });

        return array;
    }
}
