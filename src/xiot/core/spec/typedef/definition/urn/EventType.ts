import {Urn} from './Urn';

export class EventType extends Urn {

    constructor(string: string) {
      super(string);
    }

    // static valueOf(string: string): EventType | null {
    //   let thiz = new EventType();

    //   if (!thiz.parse(UrnType.EVENT, string)) {
    //     return null;
    //   }

    //   return thiz;
    // }
}