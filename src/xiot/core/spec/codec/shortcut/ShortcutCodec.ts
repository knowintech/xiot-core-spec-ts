import {Shortcut} from '../../typedef/shortcut/Shortcut';
import {ShortcutIcon} from '../../typedef/shortcut/ShortcutIcon';
import {ShortcutIconCodec} from './ShortcutIconCodec';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {Spec} from '../../typedef/constant/Spec';

export class ShortcutCodec {

    static decodeArray(list: any[]): Shortcut[] {
        const array: Shortcut[] = [];

        list.forEach(o => {
            array.push(ShortcutCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): Shortcut {
        const index: number = o.index;
        const siid: number = o.siid;
        const piid: number = o.piid;
        const value: any = o.value;
        const icon: ShortcutIcon = ShortcutIconCodec.decode(o.icon);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        return new Shortcut(index, siid, piid, value, icon, description);
    }

    static encode(def: Shortcut): any {
        return {
            index: def.index,
            siid: def.siid,
            piid: def.piid,
            value: def.value,
            icon: ShortcutIconCodec.encode(def.icon),
            description: DescriptionCodec.encode(def.description),
        };
    }

    static encodeArray(list: Shortcut[]): any[] {
        return list.map(x => ShortcutCodec.encode(x));
    }
}
