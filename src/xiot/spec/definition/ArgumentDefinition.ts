import {PropertyType} from './urn/PropertyType';

export class ArgumentDefinition {
    public type: PropertyType;
    public minRepeat: number = 1;
    public MaxRepeat: number = 1;

    constructor(type: PropertyType) {
        this.type = type;
    }
}
