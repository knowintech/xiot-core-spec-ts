import {Spec} from '../../typedef/constant/Spec';
import {EventType} from '../../typedef/definition/urn/EventType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {ArgumentCodec, EventOperable} from '../../../../..';

export class EventOperableCodec {

    static decodeArray(array: any[]): EventOperable[] {
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
}
