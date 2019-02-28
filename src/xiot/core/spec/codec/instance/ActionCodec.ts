import {Action} from '../../typedef/instance/Action';
import {Spec} from '../../typedef/constant/Spec';
import {ActionOperable} from '../../typedef/operable/ActionOperable';
import {ActionType} from '../../typedef/definition/urn/ActionType';
import {ArgumentCodec} from './ArgumentCodec';
import {DescriptionCodec} from '../definition/DescriptionCodec';

export class ActionCodec {

    static decode(array: any[]): Action[] {
        const list: Action[] = [];

        if (array != null) {
            for (const o of array) {
                let iid = o[Spec.IID];
                let type = new ActionType(o[Spec.TYPE]);
                let description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                let argumentsIn = ArgumentCodec.decodeArray(o[Spec.IN]);
                let argumentsOut = ArgumentCodec.decodeArray(o[Spec.OUT]);

                if (o[Spec.X_OPTIONAL] != null) {
                    type._optional = o[Spec.X_OPTIONAL];
                }

                list.push(new Action(iid, type, description, argumentsIn, argumentsOut));
            }
        }

        return list;
    }

    static decodeOperable(array: any[]): ActionOperable[] {
        const list: ActionOperable[] = [];

        if (array != null) {
            for (const o of array) {
                let iid = o[Spec.IID];
                let type = new ActionType(o[Spec.TYPE]);
                let description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
                let argumentsIn = ArgumentCodec.decodeArray(o[Spec.IN]);
                let argumentsOut = ArgumentCodec.decodeArray(o[Spec.OUT]);
                list.push(new ActionOperable(iid, type, description, argumentsIn, argumentsOut));
            }
        }

        return list;
    }

    static encode(action: Action): any {
        const o: any = {
            iid: action.iid,
            type: action.type.toString(),
            description: DescriptionCodec.encode(action.type.description),
        };

        if (action.type._optional) {
            o[Spec.X_OPTIONAL] = true;
        }

        if (action.in.size > 0) {
            o[Spec.IN] = ArgumentCodec.encodeArray(action.getArgumentsIn());
        }
        
        if (action.out.size > 0) {
            o[Spec.OUT] = ArgumentCodec.encodeArray(action.getArgumentsOut());
        }

        return o;
    }

    static encodeArray(actions: Map<Number, Action>): any[] {
        const array: any[] = [];

        actions.forEach((action) => {
            array.push(ActionCodec.encode(action));
        });

        return array;
    }
}
