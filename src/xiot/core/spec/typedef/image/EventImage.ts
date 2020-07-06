import {Event} from '../instance/Event';
import {Property} from '../instance/Property';
import {ActionOperation} from '../operation/ActionOperation';
import {Status} from '../status/Status';
import {EventType} from '../definition/urn/EventType';
import {ArgumentImage} from './ArgumentImage';

export class EventImage extends Event {

    constructor(iid: number,
                type: EventType,
                description: Map<string, string>,
                list: ArgumentImage[]) {
        super(iid, type, description, list);
    }

    tryInvoke(o: ActionOperation, properties: Map<number, Property>) {
        o.status = (<number>Status.COMPLETED);

        for (const spec of this.getArguments()) {
            const v = o.in.get(spec.piid);
            if (v == null) {
                o.status = (<number>Status.EVENT_ARGUMENTS_ERROR);
                o.description = 'event argument error';
                break;
            }

            if (spec.minRepeat > 0) {
                o.status = (<number>Status.EVENT_ARGUMENTS_ERROR);
                o.description = 'event argument error, min repeat > 0';
                break;
            }

            const property = properties.get(spec.piid);
            if (property == null) {
                o.status = (<number>Status.EVENT_ARGUMENTS_ERROR);
                o.description = 'event argument error, value invalid';
                break;
            }

            if (!property.trySetValues(v.values)) {
                o.status = (<number>Status.EVENT_ARGUMENTS_ERROR);
                o.description = 'event argument error, set value failed';
                break;
            }
        }
    }
}
