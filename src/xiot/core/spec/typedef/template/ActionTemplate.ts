import {ActionType, Argument} from '../../../../..';

/**
 * ouyang
 */
export class ActionTemplate {

    iid: number;
    required: boolean;
    type: ActionType;
    description: Map<string, string> = new Map<string, string>();
    in: Map<number, Argument> = new Map<number, Argument>();
    out: Map<number, Argument> = new Map<number, Argument>();

    constructor(iid: number,
                required: boolean,
                type: ActionType,
                description: Map<string, string>,
                argumentsIn: Argument[],
                argumentsOut: Argument[]) {
        this.iid = iid;
        this.required = required;
        this.type = type;

        if (description != null) {
            this.description = description;
        }

        argumentsIn.forEach(x => this.in.set(x.piid, x));
        argumentsOut.forEach(x => this.out.set(x.piid, x));
    }

    getArgumentsIn(): Argument[] {
        return Array.from(this.in.values());
    }

    getArgumentsOut(): Argument[] {
        return Array.from(this.out.values());
    }
}
