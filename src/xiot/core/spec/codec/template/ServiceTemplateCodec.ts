import {Spec} from '../../typedef/constant/Spec';
import {ServiceType} from '../../typedef/definition/urn/ServiceType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {ServiceTemplate} from '../../typedef/template/ServiceTemplate';
import {ActionTemplateCodec} from './ActionTemplateCodec';
import {PropertyTemplateCodec} from './PropertyTemplateCodec';
import {EventTemplateCodec} from './EventTemplateCodec';

export class ServiceTemplateCodec {

    static decodeArray(array: any[]): ServiceTemplate[] {
        const list: ServiceTemplate[] = [];

        if (array != null) {
            for (const o of array) {
               list.push(ServiceTemplateCodec.decode(o));
            }
        }

        return list;
    }

    static decode(o: any): ServiceTemplate {
        const iid = o[Spec.IID];
        const required = o[Spec.X_REQUIRED];
        const propertyAddable: boolean = o[Spec.X_PROPERTY_ADDABLE];
        const actionAddable: boolean = o[Spec.X_ACTION_ADDABLE];
        const eventAddable: boolean = o[Spec.X_ACTION_ADDABLE];
        const type = new ServiceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const properties = PropertyTemplateCodec.decodeArray(o[Spec.PROPERTIES]);
        const actions = ActionTemplateCodec.decodeArray(o[Spec.ACTIONS]);
        const events = EventTemplateCodec.decodeArray(o[Spec.EVENTS]);
        return new ServiceTemplate(iid, required, type, description,
            properties, actions, events, propertyAddable, actionAddable, eventAddable);
    }

    static encode(service: ServiceTemplate): any {
        const o: any = {
            iid: service.iid,
            type: service.type.toString(),
            description: DescriptionCodec.encode(service.description),
        };

        if (service.properties.size > 0) {
            o[Spec.PROPERTIES] = PropertyTemplateCodec.encodeArray(service.properties);
        }

        if (service.actions.size > 0) {
            o[Spec.ACTIONS] = ActionTemplateCodec.encodeArray(service.actions);
        }

        if (service.events.size > 0) {
            o[Spec.EVENTS] = EventTemplateCodec.encodeArray(service.events);
        }

        o[Spec.X_REQUIRED] = service.required;
        o[Spec.X_PROPERTY_ADDABLE] = service.propertyAddable;
        o[Spec.X_ACTION_ADDABLE] = service.actionAddable;
        o[Spec.X_EVENT_ADDABLE] = service.eventAddable;

        return o;
    }

    static encodeArray(services: Map<Number, ServiceTemplate>): any[] {
        const array: any[] = [];

        services.forEach((service) => {
            array.push(ServiceTemplateCodec.encode(service));
        });

        return array;
    }
}
