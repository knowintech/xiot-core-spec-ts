import {Action} from '../instance/Action';
import {Property} from '../instance/Property';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';
import {ActionType} from '../definition/urn/ActionType';
import {OperableArgument} from './OperableArgument';
import {Argument} from '../../../../..';

export class OperableAction extends Action {

    constructor(iid: number,
                type: ActionType,
                description: Map<string, string>,
                argumentsIn: OperableArgument[],
                argumentsOut: OperableArgument[]) {
        super(iid, type, description, argumentsIn, argumentsOut);
    }

    getOperableArgumentsIn(): OperableArgument[] {
        return super.getArgumentsIn()
            .filter(x => x instanceof OperableArgument)
            .map(x => <OperableArgument>x);
    }

    getOperableArgumentsOut(): OperableArgument[] {
        return super.getArgumentsOut()
            .filter(x => x instanceof OperableArgument)
            .map(x => <OperableArgument>x);
    }

    tryInvoke(o: ActionOperation, properties: Map<number, Property>) {
        console.log('tryInvoke');

        o.status = (<number>OperationStatus.COMPLETED);

        for (const argument of this.getOperableArgumentsIn()) {
            const iid: number = argument.piid;
            const v = o.in.get(iid);
            if (v == null) {
                if (argument.minRepeat > 0) {
                    o.status = (<number>OperationStatus.ACTION_IN_ERROR);
                    o.description = 'action argument in error, piid(' + iid + ') min repeat > 0';
                    break;
                }

                continue;
            }

            const property = properties.get(iid);
            if (property == null) {
                o.status = (<number>OperationStatus.ACTION_IN_VALUE_INVALID);
                o.description = 'action argument in error, piid(' + iid + ') value invalid';
                break;
            }

            if (!property.trySetValues(v.values)) {
                o.status = (<number>OperationStatus.ACTION_IN_VALUE_INVALID);
                o.description = 'action argument in error, piid(' + iid + ') set value failed';
                break;
            }

            this.addValues(argument, property, v.values);
        }

        if (o.status !== (<number>OperationStatus.COMPLETED)) {
            return;
        }

        const out: Argument[] = this.getOperableArgumentsOut().map(x => {
            const a = new Argument(x.piid);
            a.values = x.properties.map(p => p.value.currentValue.getObjectValue());
            return a;
        });

        o.setArgumentsOut(out);
    }

    private addValues(argument: OperableArgument, property: Property, values: any[]) {
        for (let i = 0; i < values.length; ++i) {
            const newProperty: Property = new Property(argument.piid, property);
            newProperty.type._index_of_added = i;
            newProperty.type._optional = false;
            argument.properties.push(newProperty);
        }
    }
}
