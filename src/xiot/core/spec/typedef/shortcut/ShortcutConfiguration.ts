import {DeviceType} from '../../../../..';
import {Shortcut} from './Shortcut';

export class ShortcutConfiguration {

    type: DeviceType;
    shortcuts: Array<Shortcut>;

    constructor(type: string, shortcuts: Shortcut[]) {
        this.type = new DeviceType(type);
        this.shortcuts = shortcuts;
    }
}
