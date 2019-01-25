import {PropertyType} from '../../../spec/definition/urn/PropertyType';

export class PropertyTypeCodec {

    static decodeArray(array: any[]): PropertyType[] {
        const list: PropertyType[] = [];

        if (array != null) {
            for (const v of array) {
              const t = PropertyType.valueOf(v);
              if (t != null) {
                  list.push(t);
              }
            }
        }
  
      return list;
    }

    static encodeArray(actions: PropertyType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
