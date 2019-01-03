import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class PropertyType extends Urn {

  static valueOf(string: string): PropertyType | null {
    let thiz = new PropertyType();

    if (!thiz.parse(UrnType.PROPERTY, string)) {
      return null;
    }

    return thiz;
  }
}
