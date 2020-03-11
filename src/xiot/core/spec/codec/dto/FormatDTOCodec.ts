import {FormatDTO} from '../../typedef/dto/FormatDTO';
import {DescriptionCodec, Spec} from '../../../../..';

export class FormatDTOCodec {

    static decodeArray(list: any[]): FormatDTO[] {
        const array: FormatDTO[] = [];

        list.forEach(o => {
            array.push(FormatDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): FormatDTO {
        const ns = o.ns;
        const name = o.name;
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new FormatDTO(ns, name, description);
    }

    static encode(def: FormatDTO): any {
        return  {
            ns: def.ns,
            name: def.name,
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: FormatDTO[]): any[] {
        return list.map(x => FormatDTOCodec.encode(x));
    }
}
