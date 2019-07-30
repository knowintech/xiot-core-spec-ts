import {ShortcutConfiguration} from '../../typedef/shortcut/ShortcutConfiguration';
import {Shortcut} from '../../typedef/shortcut/Shortcut';
import {ShortcutCodec} from './ShortcutCodec';

export class ShortcutConfigurationCodec {

    static decodeArray(list: any[]): ShortcutConfiguration[] {
        const array: ShortcutConfiguration[] = [];

        list.forEach(o => {
            array.push(ShortcutConfigurationCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ShortcutConfiguration {
        const type = o.type;
        const shortcuts: Shortcut[] = ShortcutCodec.decodeArray(o.shortcuts);
        return new ShortcutConfiguration(type, shortcuts);
    }

    static encode(def: ShortcutConfiguration): any {
        return {
            type: def.type.toString(),
            shortcuts: ShortcutCodec.encodeArray(def.shortcuts),
        };
    }

    static encodeArray(list: ShortcutConfiguration[]): any[] {
        return list.map(x => ShortcutConfigurationCodec.encode(x));
    }
}
