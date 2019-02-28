import {Urn} from './Urn';

export class DeviceType extends Urn {

  constructor(string: string) {
    super(string);
  }

    // static valueOf(string: string): DeviceType | null {
    //   let thiz = new DeviceType();

    //   if (!thiz.parse(UrnType.DEVICE, string)) {
    //     return null;
    //   }

    //   return thiz;
    // }
}
