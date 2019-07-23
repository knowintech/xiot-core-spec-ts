import {ActionDefinition, ActionType, ArgumentDefinitionCodec, DescriptionCodec, Spec} from '../../../../../..';
import {Manipulate} from '../../../typedef/configuration/manipulate/Manipulate';

export class ManipulateCodec {

    static decodeArray(list: any[]): Manipulate[] {
        const array: Manipulate[] = [];

        list.forEach(o => {
            array.push(ManipulateCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): Manipulate {
        const index: number = o.index;
        const siid: number = o.siid;
        const piid: number = o.piid;
        const value: any = o.value;
        const icon: string = o.icon;
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new Manipulate(index, siid, piid, value, icon, description);
    }

    static encode(def: Manipulate): any {
        return {
            index: def.index,
            siid: def.siid,
            piid: def.piid,
            value: def.value,
            icon: def.icon,
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: Manipulate[]): any[] {
        return list.map(x => ManipulateCodec.encode(x));
    }
}
