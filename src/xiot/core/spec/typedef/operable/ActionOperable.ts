import {Action} from '../instance/Action';
import {Property} from '../instance/Property';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';
import {ActionType} from '../definition/urn/ActionType';
import {Argument} from '../instance/Argument';

export class ActionOperable extends Action {

  constructor(iid: number,
              type: ActionType,
              description: Map<string, string>,
              argumentsIn: Argument[],
              argumentsOut: Argument[]) {
      super(iid, type, description, argumentsIn, argumentsOut);
  }

  tryInvoke(o: ActionOperation, properties: Map<number, Property>) {
    o.status = (<number>OperationStatus.COMPLETED);

    for (let spec of this.getArgumentsIn()) {    
        let v = o.in.get(spec.piid);
        if (v == null) {
          o.status = (<number>OperationStatus.ACTION_IN_ERROR);
          break;
        }

        if (spec.minRepeat > 0 && v == null) {
            o.status = (<number>OperationStatus.ACTION_IN_ERROR);
            break;
        }

        let property = properties.get(spec.piid);
        if (property == null) {
          o.status = (<number>OperationStatus.ACTION_IN_VALUE_INVALID);
          break;
        }

        if (! property.trySetValues(v.values)) {
          o.status = (<number>OperationStatus.ACTION_IN_VALUE_INVALID);
          break;
        }
    }
  }
}
