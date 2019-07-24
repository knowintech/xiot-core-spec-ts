import {DeviceType} from '../../../../../index';
import {Shortcut} from './Shortcut';

export class ShortcutConfiguration {

    version: number;
    type: DeviceType;
    shortcuts: Array<Shortcut>;

    constructor(type: string, version: number, shortcuts: Shortcut[]) {
        this.type = new DeviceType(type);
        this.version = version;
        this.shortcuts = shortcuts;
    }
}
