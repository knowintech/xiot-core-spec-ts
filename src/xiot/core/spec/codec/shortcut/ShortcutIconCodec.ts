import {ShortcutIcon} from '../../typedef/shortcut/ShortcutIcon';

export class ShortcutIconCodec {

    static decodeArray(list: any[]): ShortcutIcon[] {
        const array: ShortcutIcon[] = [];

        list.forEach(o => {
            array.push(ShortcutIconCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ShortcutIcon {
        return new ShortcutIcon(o.name, o.url);
    }

    static encode(def: ShortcutIcon): any {
        return {
            name: def.name,
            url: def.url,
        };
    }

    static encodeArray(list: ShortcutIcon[]): any[] {
        return list.map(x => ShortcutIconCodec.encode(x));
    }
}
