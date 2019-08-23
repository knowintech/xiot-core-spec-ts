import {Home} from './Home';
import {Room} from './Room';
import {DeviceSummary} from '../../../../..';

export class HomeGraph {

    homes: Home[] = [];
    rooms: Room[] = [];
    devices: DeviceSummary[] = [];

    constructor(homes: Home[], rooms: Room[], devices: DeviceSummary[]) {
        this.homes = homes;
        this.rooms = rooms;
        this.devices = devices;
    }
}
