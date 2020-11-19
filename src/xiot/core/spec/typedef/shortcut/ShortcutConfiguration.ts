import {Shortcut} from './Shortcut';
import {DeviceType} from '../definition/urn/DeviceType';

export class ShortcutConfiguration {

    type: DeviceType;
    shortcuts: Array<Shortcut>;

    constructor(type: string, shortcuts: Shortcut[]) {
        this.type = new DeviceType(type);
        this.shortcuts = shortcuts;
    }
}
