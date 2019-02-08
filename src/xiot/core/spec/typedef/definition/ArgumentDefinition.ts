import {PropertyType} from './urn/PropertyType';

export class ArgumentDefinition {
    public type: PropertyType;
    public minRepeat: number = 1;
    public maxRepeat: number = 1;

    constructor(type: PropertyType) {
        this.type = type;
    }
}
