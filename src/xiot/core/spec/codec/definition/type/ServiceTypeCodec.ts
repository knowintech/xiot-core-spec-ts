import {ServiceType} from '../../../typedef/definition/urn/ServiceType';
import { DescriptionCodec } from '../DescriptionCodec';

export class ServiceTypeCodec {

    static decodeArray(array: any[]): ServiceType[] {
        const list: ServiceType[] = [];

        if (array != null) {
            for (const v of array) {
                if (typeof v === 'string') {
                    list.push(new ServiceType(v));
                } else if (typeof v === 'object') {
                    const type = new ServiceType(v['type']);
                    type.description = DescriptionCodec.decode(v['description']);
                    list.push(type);
                }
            }
        }

      return list;
    }

    static encodeArray(actions: ServiceType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
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
