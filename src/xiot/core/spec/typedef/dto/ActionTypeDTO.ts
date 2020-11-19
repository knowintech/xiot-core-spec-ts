import {ActionType} from '../definition/urn/ActionType';

export class ActionTypeDTO {

    type: ActionType;
    description: Map<string, string> = new Map<string, string>();

    constructor(type: ActionType, description: Map<string, string>) {
        this.type = type;
        this.description = description;
    }
}
