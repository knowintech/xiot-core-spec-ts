import {GroupType} from '../definition/urn/GroupType';
import {Position} from '../position/Position';

export class Group {

    id: string;
    type: GroupType;
    position: Position;
    members: string[];

    constructor(id: string, type: GroupType, position: Position, devices: string[]) {
        this.id = id;
        this.type = type;
        this.position = position;
        this.members = devices;
    }
}
