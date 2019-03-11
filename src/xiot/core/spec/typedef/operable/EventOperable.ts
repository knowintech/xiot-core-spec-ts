import {Event} from '../instance/Event';
import {Property} from '../instance/Property';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';
import {EventType} from '../definition/urn/EventType';
import {Argument} from '../instance/Argument';

export class EventOperable extends Event {
  
  constructor(iid: number,
              type: EventType,
              description: Map<string, string>,
              list: Argument[]) {
      super(iid, type, description, list);
  }

  tryInvoke(o: ActionOperation, properties: Map<number, Property>) {
    o.status = (<number>OperationStatus.COMPLETED);

    for (let spec of this.getArguments()) {    
        let v = o.in.get(spec.piid);
        if (v == null) {
          o.status = (<number>OperationStatus.EVENT_ARGUMENTS_ERROR);
          break;
        }

        if (spec.minRepeat > 0 && v == null) {
          o.status = (<number>OperationStatus.EVENT_ARGUMENTS_ERROR);
            break;
        }

        let property = properties.get(spec.piid);
        if (property == null) {
          o.status = (<number>OperationStatus.EVENT_ARGUMENTS_ERROR);
          break;
        }

        if (! property.trySetValues(v.values)) {
          o.status = (<number>OperationStatus.EVENT_ARGUMENTS_ERROR);
          break;
        }
    }
  }
}
