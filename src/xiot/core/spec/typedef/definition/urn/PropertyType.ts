import {Urn} from './Urn';

export class PropertyType extends Urn {

  constructor(string: string) {
    super(string);
  }

  // static valueOf(string: string): PropertyType | null {
  //   let thiz = new PropertyType();

  //   if (!thiz.parse(UrnType.PROPERTY, string)) {
  //     return null;
  //   }

  //   return thiz;
  // }
}
