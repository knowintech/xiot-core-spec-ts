import {ActionType} from './urn/ActionType';
import {PropertyType} from './urn/PropertyType';

export class ActionDefinition {
    public type: ActionType;
    public description: string;
    public in: Array<PropertyType>;
    public out: Array<PropertyType>;

    toJSON(): Object {
        return Object.assign({
            type: this.type.toString(),
            description: this.description,
            in: this.in,
            out: this.out
        });
    }
}
