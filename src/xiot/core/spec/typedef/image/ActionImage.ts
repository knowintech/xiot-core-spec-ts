import {Action} from '../instance/Action';
import {Property} from '../instance/Property';
import {ActionOperation} from '../operation/ActionOperation';
import {Status} from '../status/Status';
import {ActionType} from '../definition/urn/ActionType';
import {ArgumentImage} from './ArgumentImage';
import {Argument} from '../../../../../index';

export class ActionImage extends Action {

    constructor(iid: number,
                type: ActionType,
                description: Map<string, string>,
                argumentsIn: ArgumentImage[],
                argumentsOut: ArgumentImage[]) {
        super(iid, type, description, argumentsIn, argumentsOut);
    }

    getOperableArgumentsIn(): ArgumentImage[] {
        return super.getArgumentsIn()
            .filter(x => x instanceof ArgumentImage)
            .map(x => <ArgumentImage>x);
    }

    getOperableArgumentsOut(): ArgumentImage[] {
        return super.getArgumentsOut()
            .filter(x => x instanceof ArgumentImage)
            .map(x => <ArgumentImage>x);
    }

    tryInvoke(o: ActionOperation, properties: Map<number, Property>) {
        console.log('tryInvoke');

        o.status = (<number>Status.COMPLETED);

        for (const argument of this.getOperableArgumentsIn()) {
            const iid: number = argument.piid;
            const v = o.in.get(iid);
            if (v == null) {
                if (argument.minRepeat > 0) {
                    o.status = (<number>Status.ACTION_IN_ERROR);
                    o.description = 'action argument in error, piid(' + iid + ') min repeat > 0';
                    break;
                }

                continue;
            }

            const property = properties.get(iid);
            if (property == null) {
                o.status = (<number>Status.ACTION_IN_VALUE_INVALID);
                o.description = 'action argument in error, piid(' + iid + ') value invalid';
                break;
            }

            if (!property.trySetValues(v.values)) {
                o.status = (<number>Status.ACTION_IN_VALUE_INVALID);
                o.description = 'action argument in error, piid(' + iid + ') set value failed';
                break;
            }

            this.addValues(argument, property, v.values);
        }

        if (o.status !== (<number>Status.COMPLETED)) {
            return;
        }

        const out: Argument[] = this.getOperableArgumentsOut().map(x => {
            const a = new Argument(x.piid);
            a.values = x.properties.map(p => p.value.currentValue.getObjectValue());
            return a;
        });

        o.setArgumentsOut(out);
    }

    private addValues(argument: ArgumentImage, property: Property, values: any[]) {
        for (let i = 0; i < values.length; ++i) {
            const newProperty: Property = new Property(argument.piid, property);
            newProperty.type._index_of_added = i;
            newProperty.type._optional = false;
            newProperty.value.currentStringValue = values[i];
            argument.properties.push(newProperty);
        }
    }
}
