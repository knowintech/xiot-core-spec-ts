import {ManipulateConfiguration} from '../../../typedef/configuration/manipulate/ManipulateConfiguration';
import {Manipulate} from '../../../typedef/configuration/manipulate/Manipulate';
import {ManipulateCodec} from './ManipulateCodec';

export class ManipulateConfigurationCodec {

    static decodeArray(list: any[]): ManipulateConfiguration[] {
        const array: ManipulateConfiguration[] = [];

        list.forEach(o => {
            array.push(ManipulateConfigurationCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ManipulateConfiguration {
        const type = o.type;
        const version: number = o.version;
        const manipulates: Manipulate[] = ManipulateCodec.decodeArray(o.manipulates);
        return new ManipulateConfiguration(type, version, manipulates);
    }

    static encode(def: ManipulateConfiguration): any {
        return {
            type: def.type.toString(),
            version: def.version,
            manipulates: ManipulateCodec.encodeArray(def.manipulates),
        };
    }

    static encodeArray(list: ManipulateConfiguration[]): any[] {
        return list.map(x => ManipulateConfigurationCodec.encode(x));
    }
}
