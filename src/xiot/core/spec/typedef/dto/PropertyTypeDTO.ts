import {PropertyType} from '../../../../..';

export class PropertyTypeDTO {

    type: PropertyType;
    description: Map<string, string> = new Map<string, string>();

    constructor(type: PropertyType, description: Map<string, string>) {
        this.type = type;
        this.description = description;
    }
}
