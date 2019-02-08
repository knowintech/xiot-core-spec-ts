import {ActionType} from './urn/ActionType';
import {ArgumentDefinition} from './ArgumentDefinition';

export class ActionDefinition {
    public type : ActionType | null = null;
    public description: string = '';
    public in: ArgumentDefinition[] = [];
    public out: ArgumentDefinition[] = [];
}
