import {Urn} from './Urn';

export class ActionType extends Urn {

    constructor(string: string) {
        super(string);
    }

    // static valueOf(string: string): ActionType | null {
    //     let thiz = new ActionType();

    //     if (!thiz.parse(UrnType.ACTION, string)) {
    //         return null;
    //     }

    //     return thiz;
    // }
}
