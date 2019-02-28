import {ActionType} from './urn/ActionType';
import {ArgumentDefinition} from './ArgumentDefinition';

export class ActionDefinition {

    type : ActionType;
    in: ArgumentDefinition[] = [];
    out: ArgumentDefinition[] = [];

    constructor(type: ActionType,
                description: Map<String, String>,
                argumentsIn: ArgumentDefinition[],
                argumentsOut: ArgumentDefinition[]) {
        this.type = type;

        if (description != null) {
            this.type.description = description;
        }

        if (argumentsIn != null) {
            this.in = argumentsIn;
        }
        
        if (argumentsOut != null) {
            this.out = argumentsOut;
        }
    }
}