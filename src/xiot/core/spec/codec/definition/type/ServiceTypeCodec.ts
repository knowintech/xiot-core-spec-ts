import {ServiceType} from '../../../typedef/definition/urn/ServiceType';

export class ServiceTypeCodec {

    static decodeArray(array: any[]): ServiceType[] {
        const list: ServiceType[] = [];

        if (array != null) {
            for (const v of array) {
                list.push(new ServiceType(v));
            }
        }
  
      return list;
    }

    static encodeArray(actions: ServiceType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
