import {Spec} from '../../spec/constant/Spec';
import {Service} from '../../spec/instance/Service';
import {ServiceType} from '../../spec/definition/urn/ServiceType';
import {PropertyCodec} from './PropertyCodec';
import {ActionCodec} from './ActionCodec';
import {EventCodec} from './EventCodec';
import {ServiceOperable} from '../../spec/operable/ServiceOperable';

export class ServiceCodec {

    static decode(array: any[]): Service[] {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Service();
                a.iid = o[Spec.IID];
                a.type = ServiceType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];

                if (a.type != null) {
                    if (o[Spec.X_NAME] != null) {
                        a.type.set(Spec.X_NAME, o[Spec.X_NAME]);
                    }

                    if (o[Spec.X_OPTIONAL] != null) {
                        a.type.set(Spec.X_OPTIONAL, o[Spec.X_OPTIONAL]);
                    }

                    if (o[Spec.X_PROPERTY_ADDABLE]) {
                        a.type.set(Spec.X_PROPERTY_ADDABLE, true);
                    }

                    if (o[Spec.X_ACTION_ADDABLE]) {
                        a.type.set(Spec.X_ACTION_ADDABLE, true);
                    }

                    if (o[Spec.X_EVENT_ADDABLE]) {
                        a.type.set(Spec.X_EVENT_ADDABLE, true);
                    }
                }

                const properties = PropertyCodec.decode(o[Spec.PROPERTIES]);
                for (const property of properties) {
                    a.properties.set(property.iid, property);
                }

                const actions = ActionCodec.decode(o[Spec.ACTIONS]);
                for (const action of actions) {
                    a.actions.set(action.iid, action);
                }

                const events = EventCodec.decode(o[Spec.EVENTS]);
                for (const event of events) {
                    a.events.set(event.iid, event);
                }

                list.push(a);
            }
        }

        return list;
    }

    static decodeOperable(array: any[]): ServiceOperable[] {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new ServiceOperable();
                a.iid = o[Spec.IID];
                a.type = ServiceType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];

                const properties = PropertyCodec.decodeOperable(o[Spec.PROPERTIES]);
                for (const property of properties) {
                    a.properties.set(property.iid, property);
                }

                const actions = ActionCodec.decodeOperable(o[Spec.ACTIONS]);
                for (const action of actions) {
                    a.actions.set(action.iid, action);
                }

                const events = EventCodec.decode(o[Spec.EVENTS]);
                for (const event of events) {
                    a.events.set(event.iid, event);
                }

                list.push(a);
            }
        }

        return list;
    }

    static encode(service: Service): any {
        const o: any = {
            iid: service.iid,
            type: service.type != null ? service.type.toString() : '',
            description: service.description,
        };

        if (service.properties.size > 0) {
            o[Spec.PROPERTIES] = PropertyCodec.encodeArray(service.properties);
        }

        if (service.actions.size > 0) {
            o[Spec.ACTIONS] = ActionCodec.encodeArray(service.actions);
        }

        if (service.events.size > 0) {
            o[Spec.EVENTS] = EventCodec.encodeArray(service.events);
        }

        if (service.type != null) {
            if (service.type.get(Spec.X_NAME) != null) {
                o[Spec.X_NAME] = service.type.get(Spec.X_NAME);
            }

            if (service.type.get(Spec.X_OPTIONAL) != null) {
                o[Spec.X_OPTIONAL] = service.type.get(Spec.X_OPTIONAL);
            }

            if (service.type.get(Spec.X_PROPERTY_ADDABLE) != null) {
                o[Spec.X_PROPERTY_ADDABLE] = service.type.get(Spec.X_PROPERTY_ADDABLE);
            }

            if (service.type.get(Spec.X_ACTION_ADDABLE) != null) {
                o[Spec.X_ACTION_ADDABLE] = service.type.get(Spec.X_ACTION_ADDABLE);
            }

            if (service.type.get(Spec.X_EVENT_ADDABLE) != null) {
                o[Spec.X_EVENT_ADDABLE] = service.type.get(Spec.X_EVENT_ADDABLE);
            }
        }

        return o;
    }

    static encodeArray(services: Map<Number, Service>): any[] {
        const array: any[] = [];

        services.forEach((service) => {
            array.push(ServiceCodec.encode(service));
        });

        return array;
    }
}
