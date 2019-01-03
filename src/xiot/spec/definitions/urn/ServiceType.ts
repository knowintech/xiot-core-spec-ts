import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class ServiceType extends Urn {

  static valueOf(string: string): ServiceType | null {
    let thiz = new ServiceType();

    if (!thiz.parse(UrnType.SERVICE, string)) {
      return null;
    }

    return thiz;
  }
}
