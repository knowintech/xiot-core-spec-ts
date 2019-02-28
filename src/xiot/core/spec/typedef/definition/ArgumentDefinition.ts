import {PropertyType} from './urn/PropertyType';

export class ArgumentDefinition {

    type: PropertyType;
    minRepeat: number = 1;
    maxRepeat: number = 1;

    constructor(type: PropertyType) {
        this.type = type;
    }
}
