import {EventType, Argument} from '../../../../..';
import {Optional} from './Optional';

/**
 * ouyang
 */
export class EventTemplate extends Optional {

    type: EventType;
    description: Map<string, string> = new Map<string, string>();
    arguments: Map<number, Argument> = new Map<number, Argument>();

    constructor(iid: number,
                required: boolean,
                type: EventType,
                description: Map<string, string>,
                list: Argument[]) {
        super(iid, required);
        this.type = type;

        if (description != null) {
            this.description = description;
        }

        list.forEach(x => this.arguments.set(x.piid, x));
    }

    getArguments(): Argument[] {
        return Array.from(this.arguments.values());
    }
}
