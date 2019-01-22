import {Spec} from '../../spec/constant/Spec';
import {DefinitionCodec} from './DefinitionCodec';
import {ServiceDefinition} from '../../spec/definition/ServiceDefinition';
import {ServiceType} from '../../spec/definition/urn/ServiceType';
import {PropertyDefinitionCodec} from './PropertyDefinitionCodec';
import {ActionDefinitionCodec} from './ActionDefinitionCodec';
import {EventDefinitionCodec} from './EventDefinitionCodec';

export class ServiceDefinitionCodec {

    static decodeArray(list: any[]): ServiceDefinition[] {
        const array: ServiceDefinition[] = [];

        list.forEach(o => {
            array.push(ServiceDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ServiceDefinition {
        const def = new ServiceDefinition();
        def.type = ServiceType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.requiredProperties = DefinitionCodec.decodeProperties(o[Spec.REQUIRED_PROPERTIES]);
        def.optionalProperties = DefinitionCodec.decodeProperties(o[Spec.OPTIONAL_PROPERTIES]);
        def.requiredActions = DefinitionCodec.decodeActions(o[Spec.REQUIRED_ACTIONS]);
        def.optionalActions = DefinitionCodec.decodeActions(o[Spec.OPTIONAL_ACTIONS]);
        def.requiredEvents = DefinitionCodec.decodeEvents(o[Spec.REQUIRED_EVENTS]);
        def.optionalEvents = DefinitionCodec.decodeEvents(o[Spec.OPTIONAL_EVENTS]);

        if (def.type != null) {
            if (o[Spec.X_NAME] != null) {
                def.type._name = o[Spec.X_NAME];
            }

            if (o[Spec.X_PROPERTY_ADDABLE] != null) {
                def.type._property_addable = o[Spec.X_PROPERTY_ADDABLE];
            }

            if (o[Spec.X_ACTION_ADDABLE] != null) {
                def.type._action_addable = o[Spec.X_ACTION_ADDABLE];
            }

            if (o[Spec.X_EVENT_ADDABLE] != null) {
                def.type._event_addable = o[Spec.X_EVENT_ADDABLE];
            }
        }

        return def;
    }

    static encode(def: ServiceDefinition): any {
        const o: any = {
            type: def.type != null ? def.type.toString() : '',
            description: def.description
        };

        if (def.requiredProperties.length > 0) {
            o[Spec.REQUIRED_PROPERTIES] = PropertyDefinitionCodec.encodeArray(def.requiredProperties);
        }

        if (def.optionalProperties.length > 0) {
            o[Spec.OPTIONAL_PROPERTIES] = PropertyDefinitionCodec.encodeArray(def.optionalProperties);
        }

        if (def.requiredActions.length > 0) {
            o[Spec.REQUIRED_ACTIONS] = ActionDefinitionCodec.encodeArray(def.requiredActions);
        }

        if (def.optionalActions.length > 0) {
            o[Spec.OPTIONAL_ACTIONS] = ActionDefinitionCodec.encodeArray(def.optionalActions);
        }

        if (def.requiredEvents.length > 0) {
            o[Spec.REQUIRED_EVENTS] = EventDefinitionCodec.encodeArray(def.requiredEvents);
        }

        if (def.optionalEvents.length > 0) {
            o[Spec.OPTIONAL_EVENTS] = EventDefinitionCodec.encodeArray(def.optionalEvents);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }

            if (def.type._property_addable) {
                o[Spec.X_PROPERTY_ADDABLE] = true;
            }

            if (def.type._action_addable) {
                o[Spec.X_ACTION_ADDABLE] = true;
            }

            if (def.type._event_addable) {
                o[Spec.X_EVENT_ADDABLE] = true;
            }
        }

        return o;
    }

    static encodeArray(services: ServiceType[]): any[] {
        const array: any[] = [];

        services.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
