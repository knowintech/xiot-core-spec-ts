import {Event} from '../instance/Event';
import {Property} from '../instance/Property';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';

export class EventOperable extends Event {

  tryInvoke(o: ActionOperation, properties: Map<Number, Property>) {
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
