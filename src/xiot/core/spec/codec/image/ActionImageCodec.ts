import {Spec} from '../../typedef/constant/Spec';
import {ActionImage} from '../../typedef/image/ActionImage';
import {ActionType} from '../../typedef/definition/urn/ActionType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {OperableArgumentCodec} from './ArgumentImageCodec';

export class ActionImageCodec {

    static decodeArray(array: any[]): ActionImage[] {
        const list: ActionImage[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new ActionType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const argumentsIn = OperableArgumentCodec.decodeArray(o[Spec.IN]);
                const argumentsOut = OperableArgumentCodec.decodeArray(o[Spec.OUT]);
                list.push(new ActionImage(iid, type, description, argumentsIn, argumentsOut));
            }
        }

        return list;
    }
}
