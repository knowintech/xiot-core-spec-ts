import {EventType} from '../../../../..';

export class EventTypeDTO {

    type: EventType;
    description: Map<string, string> = new Map<string, string>();

    constructor(type: EventType, description: Map<string, string>) {
        this.type = type;
        this.description = description;
    }
}
