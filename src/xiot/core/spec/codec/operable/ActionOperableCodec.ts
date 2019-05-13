import {Spec} from '../../typedef/constant/Spec';
import {ActionOperable} from '../../typedef/operable/ActionOperable';
import {ActionType} from '../../typedef/definition/urn/ActionType';
import {ArgumentCodec} from '../instance/ArgumentCodec';
import {DescriptionCodec} from '../definition/DescriptionCodec';

export class ActionOperableCodec {

    static decodeArray(array: any[]): ActionOperable[] {
        const list: ActionOperable[] = [];

        if (array != null) {
            for (const o of array) {
                const iid = o[Spec.IID];
                const type = new ActionType(o[Spec.TYPE]);
                const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                const argumentsIn = ArgumentCodec.decodeArray(o[Spec.IN]);
                const argumentsOut = ArgumentCodec.decodeArray(o[Spec.OUT]);
                list.push(new ActionOperable(iid, type, description, argumentsIn, argumentsOut));
            }
        }

        return list;
    }
}
