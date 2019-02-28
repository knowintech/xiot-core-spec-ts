import {Urn} from './Urn';

export class ServiceType extends Urn {

  constructor(string: string) {
    super(string);
  }

  // static valueOf(string: string): ServiceType | null {
  //   let thiz = new ServiceType();

  //   if (!thiz.parse(UrnType.SERVICE, string)) {
  //     return null;
  //   }

  //   return thiz;
  // }
}
