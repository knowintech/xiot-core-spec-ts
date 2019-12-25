import {Spec} from '../../typedef/constant/Spec';
import {ServiceType} from '../../typedef/definition/urn/ServiceType';
import {OperableService} from '../../typedef/operable/OperableService';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {OperablePropertyCodec} from './OperablePropertyCodec';
import {OperableActionCodec} from './OperableActionCodec';
import {OperableEventCodec} from './OperableEventCodec';

export class OperableServiceCodec {

    static decodeArray(array: any[]): OperableService[] {
        const list: OperableService[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new ServiceType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const properties = OperablePropertyCodec.decodeArray(o[Spec.PROPERTIES]);
                const actions = OperableActionCodec.decodeArray(o[Spec.ACTIONS]);
                const events = OperableEventCodec.decodeArray(o[Spec.EVENTS]);

                // if (o[Spec.X_OPTIONAL] != null) {
                //     type._optional = o[Spec.X_OPTIONAL];
                // }

                // if (o[Spec.X_PROPERTY_ADDABLE] != null) {
                //     type._property_addable = o[Spec.X_PROPERTY_ADDABLE];
                // }
                //
                // if (o[Spec.X_ACTION_ADDABLE] != null) {
                //     type._action_addable = o[Spec.X_ACTION_ADDABLE];
                // }
                //
                // if (o[Spec.X_EVENT_ADDABLE] != null) {
                //     type._event_addable = o[Spec.X_EVENT_ADDABLE];
                // }

                list.push(new OperableService(iid, type, description, properties, actions, events));
            }
        }

        return list;
    }
}
