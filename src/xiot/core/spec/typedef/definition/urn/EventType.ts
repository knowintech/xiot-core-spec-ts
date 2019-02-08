import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class EventType extends Urn {

    static valueOf(string: string): EventType | null {
      let thiz = new EventType();

      if (!thiz.parse(UrnType.EVENT, string)) {
        return null;
      }

      return thiz;
    }
  }
