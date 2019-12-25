import {UnitDTO} from '../../typedef/dto/UnitDTO';
import {DescriptionCodec, Spec} from '../../../../..';

export class UnitDTOCodec {

    static decodeArray(list: any[]): UnitDTO[] {
        const array: UnitDTO[] = [];

        list.forEach(o => {
            array.push(UnitDTOCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): UnitDTO {
        const ns = o.ns;
        const name = o.name;
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new UnitDTO(ns, name, description);
    }

    static encode(def: UnitDTO): any {
        return  {
            ns: def.ns,
            name: def.name,
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: UnitDTO[]): any[] {
        return list.map(x => UnitDTOCodec.encode(x));
    }
}
