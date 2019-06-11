import {Spec} from '../../typedef/constant/Spec';
import {OperableAction} from '../../typedef/operable/OperableAction';
import {ActionType} from '../../typedef/definition/urn/ActionType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {OperableArgumentCodec} from './OperableArgumentCodec';

export class OperableActionCodec {

    static decodeArray(array: any[]): OperableAction[] {
        const list: OperableAction[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new ActionType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const argumentsIn = OperableArgumentCodec.decodeArray(o[Spec.IN]);
                const argumentsOut = OperableArgumentCodec.decodeArray(o[Spec.OUT]);
                list.push(new OperableAction(iid, type, description, argumentsIn, argumentsOut));
            }
        }

        return list;
    }
}
