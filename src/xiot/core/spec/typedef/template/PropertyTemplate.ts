/**
 * ouyang
 */
import {PropertyDefinition} from '../definition/PropertyDefinition';

export class PropertyTemplate extends PropertyDefinition {

    iid: number;
    required: boolean;

    constructor(iid: number, required: boolean, def: PropertyDefinition) {
        super(def.type, def.description);
        this.iid = iid;
        this.required = required;
        this.format = def.format;
        this.access = def.access;
        this.constraintValue = def.constraintValue;
        this.unit = def.unit;
    }
}
