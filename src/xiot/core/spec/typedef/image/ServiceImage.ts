import {Service} from '../instance/Service';
import {PropertyOperation} from '../operation/PropertyOperation';
import {ActionOperation} from '../operation/ActionOperation';
import {PropertyImage} from './PropertyImage';
import {Status} from '../status/Status';
import {ActionImage} from './ActionImage';
import {ServiceType} from '../definition/urn/ServiceType';
import {EventImage} from './EventImage';

export class ServiceImage extends Service {

    constructor(iid: number,
                type: ServiceType,
                description: Map<string, string>,
                properties: PropertyImage[],
                actions: ActionImage[],
                events: EventImage[]) {
        super(iid, type, description, properties, actions, events);
    }

    tryRead(o: PropertyOperation): void {
        if (o.pid == null) {
            return;
        }

        const p = this.properties.get(o.pid.iid);
        if (p != null) {
            if (p instanceof PropertyImage) {
                p.tryRead(o);
            } else {
                o.status = (<number>Status.UNDEFINED);
                o.description = 'property not instanceof PropertyImage';
            }
        } else {
            o.status = (<number>Status.PROPERTY_NOT_FOUND);
            o.description = 'property not found';
        }
    }

    tryWrite(o: PropertyOperation, save: boolean): void {
        if (o.pid == null) {
            return;
        }

        const p = this.properties.get(o.pid.iid);
        if (p != null) {
            if (p instanceof PropertyImage) {
                p.tryWrite(o, save);
            } else {
                o.status = (<number>Status.UNDEFINED);
                o.description = 'property not instanceof PropertyImage';
            }
        } else {
            o.status = (<number>Status.PROPERTY_NOT_FOUND);
            o.description = 'property not found';
        }
    }

    tryInvoke(o: ActionOperation): void {
        if (o.aid == null) {
            return;
        }

        const a = this.actions.get(o.aid.iid);
        if (a != null) {
            if (a instanceof ActionImage) {
                a.tryInvoke(o, this.properties);
            } else {
                o.status = (<number>Status.UNDEFINED);
                o.description = 'action not instanceof ActionImage';
            }
        } else {
            o.status = (<number>Status.ACTION_NOT_FOUND);
            o.description = 'action not found';
        }
    }

    update(o: PropertyOperation): void {
        if (o.pid == null) {
            return;
        }

        const p = this.properties.get(o.pid.iid);
        if (p != null) {
            if (p instanceof PropertyImage) {
                p.update(o);
            } else {
                o.status = (<number>Status.UNDEFINED);
                o.description = 'property not instanceof PropertyImage';
            }
        } else {
            o.status = (<number>Status.PROPERTY_NOT_FOUND);
            o.description = 'property not found';
        }
    }

    onPropertiesChanged(o: PropertyOperation): void {
        if (o.pid == null) {
            return;
        }

        const p = this.properties.get(o.pid.iid);
        if (p != null) {
            if (p instanceof PropertyImage) {
                p.onPropertiesChanged(o);
            } else {
                o.status = (<number>Status.UNDEFINED);
                o.description = 'property not instanceof PropertyImage';
            }
        } else {
            o.status = (<number>Status.PROPERTY_NOT_FOUND);
            o.description = 'property not found';
        }
    }
}
