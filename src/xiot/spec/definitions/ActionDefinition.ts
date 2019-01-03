import {ActionType} from './urn/ActionType';
import {PropertyType} from './urn/PropertyType';

export class ActionDefinition {
    public type : ActionType | null = null;
    public description: string = '';
    public in: PropertyType[] = [];
    public out: PropertyType[] = [];
}
