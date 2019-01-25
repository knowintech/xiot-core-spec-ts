import {ServiceType} from '../../../spec/definition/urn/ServiceType';

export class ServiceTypeCodec {

    static decodeArray(array: any[]): ServiceType[] {
        const list: ServiceType[] = [];

        if (array != null) {
            for (const v of array) {
              const t = ServiceType.valueOf(v);
              if (t != null) {
                  list.push(t);
              }
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
