import {Spec} from '../../typedef/constant/Spec';
import {EventType} from '../../typedef/definition/urn/EventType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {OperableEvent} from '../../../../..';
import {OperableArgumentCodec} from './OperableArgumentCodec';

export class OperableEventCodec {

    static decodeArray(array: any[]): OperableEvent[] {
        const list: OperableEvent[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new EventType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const a = OperableArgumentCodec.decodeArray(o[Spec.ARGUMENTS]);

                if (o[Spec.X_OPTIONAL] != null) {
                    type._optional = o[Spec.X_OPTIONAL];
                }

                list.push(new OperableEvent(iid, type, description, a));
            }
        }

        return list;
    }
}
