import {Spec} from '../../typedef/constant/Spec';
import {ServiceType} from '../../typedef/definition/urn/ServiceType';
import {ServiceOperable} from '../../typedef/operable/ServiceOperable';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {PropertyOperableCodec} from './PropertyOperableCodec';
import {ActionOperableCodec} from './ActionOperableCodec';
import {EventOperableCodec} from './EventOperableCodec';

export class ServiceOperableCodec {

    static decodeArray(array: any[]): ServiceOperable[] {
        const list: ServiceOperable[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new ServiceType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const properties = PropertyOperableCodec.decodeArray(o[Spec.PROPERTIES]);
                const actions = ActionOperableCodec.decodeArray(o[Spec.ACTIONS]);
                const events = EventOperableCodec.decodeArray(o[Spec.EVENTS]);

                if (o[Spec.X_OPTIONAL] != null) {
                    type._optional = o[Spec.X_OPTIONAL];
                }

                if (o[Spec.X_PROPERTY_ADDABLE] != null) {
                    type._property_addable = o[Spec.X_PROPERTY_ADDABLE];
                }

                if (o[Spec.X_ACTION_ADDABLE] != null) {
                    type._action_addable = o[Spec.X_ACTION_ADDABLE];
                }

                if (o[Spec.X_EVENT_ADDABLE] != null) {
                    type._event_addable = o[Spec.X_EVENT_ADDABLE];
                }

                list.push(new ServiceOperable(iid, type, description, properties, actions, events));
            }
        }

        return list;
    }
}
