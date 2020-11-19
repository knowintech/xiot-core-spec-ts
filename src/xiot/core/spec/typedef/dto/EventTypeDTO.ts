import {EventType} from '../definition/urn/EventType';

export class EventTypeDTO {

    type: EventType;
    description: Map<string, string> = new Map<string, string>();

    constructor(type: EventType, description: Map<string, string>) {
        this.type = type;
        this.description = description;
    }
}
