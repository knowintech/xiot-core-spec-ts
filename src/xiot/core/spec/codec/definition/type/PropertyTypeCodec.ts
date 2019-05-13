import {PropertyType} from '../../../typedef/definition/urn/PropertyType';
import { DescriptionCodec } from '../DescriptionCodec';

export class PropertyTypeCodec {

    static decodeArray(array: any[]): PropertyType[] {
        const list: PropertyType[] = [];

        if (array != null) {
            for (const v of array) {
                if (typeof v === 'string') {
                    list.push(new PropertyType(v));
                } else if (typeof v === 'object') {
                    const type = new PropertyType(v['type']);
                    type.description = DescriptionCodec.decode(v['description']);
                    list.push(type);
                }
            }
        }

      return list;
    }

    static encodeArray(types: PropertyType[]): any[] {
        const array: any[] = [];

        types.forEach((type) => {
            if (type.description.size === 0) {
                array.push(type.toString());
            } else {
                array.push({
                    type: type.toString(),
                    description: DescriptionCodec.encode(type.description)
                });
            }
        });

        return array;
    }
}
