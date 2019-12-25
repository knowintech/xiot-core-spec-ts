import {PropertyDefinition} from '../../../../..';
import {Optional} from './Optional';

/**
 * ouyang
 */
export class PropertyTemplate extends Optional {

    definition: PropertyDefinition;

    constructor(iid: number,
                required: boolean,
                definition: PropertyDefinition) {
        super(iid, required);
        this.definition = definition;
    }
}
