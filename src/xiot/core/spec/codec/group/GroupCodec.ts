import {Group} from '../../typedef/group/Group';
import {GroupType} from '../../typedef/definition/urn/GroupType';
import {Position, PositionFromString} from '../../typedef/position/Position';

export class GroupCodec {

    static decodeArray(list: any[]): Group[] {
        const array: Group[] = [];

        if (list != null) {
            list.forEach(o => array.push(GroupCodec.decode(o)));
        }

        return array;
    }

    static decode(o: any): Group {
        const id: string = o.id;
        const type: GroupType = new GroupType(o.type);
        const pos: Position = PositionFromString(o.position);
        const members: string[] = o.members;
        return new Group(id, type, pos, members);
    }

    static encode(o: Group): any {
        return {
            id: o.id,
            type: o.type.toString(),
            position: o.position.toString(),
            members: o.members
        };
    }

    static encodeArray(list: Group[]): any[] {
        const array: any[] = [];

        list.forEach((o) => {
            array.push(GroupCodec.encode(o));
        });

        return array;
    }
}
