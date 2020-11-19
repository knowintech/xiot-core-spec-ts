import {Argument} from '../instance/Argument';
import {Property} from '../instance/Property';

export class ArgumentImage extends Argument {

    properties: Property[] = [];

    constructor(piid: number) {
        super(piid);
    }
}
