import {Action} from '../../spec/instance/Action';
import {Spec} from '../../spec/constant/Spec';
import {ActionOperable} from '../../spec/operable/ActionOperable';
import {ActionType} from '../../spec/definition/urn/ActionType';
import {ArgumentCodec} from './ArgumentCodec';

export class ActionCodec {

    static decode(array: any[]): Action[] {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Action();
                a.iid = o[Spec.IID];
                a.type = ActionType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.in = ArgumentCodec.decodeArray(o[Spec.IN]);
                a.out = ArgumentCodec.decodeArray(o[Spec.OUT]);

                if (a.type != null) {
                    if (o[Spec.X_NAME] != null) {
                        a.type._name = o[Spec.X_NAME];
                    }

                    if (o[Spec.X_OPTIONAL] != null) {
                        a.type._optional = o[Spec.X_OPTIONAL];
                    }
                }

                list.push(a);
            }
        }

        return list;
    }

    static decodeOperable(array: any[]): ActionOperable[] {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new ActionOperable();
                a.iid = o[Spec.IID];
                a.type = ActionType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.in = ArgumentCodec.decodeArray(o[Spec.IN]);
                a.out = ArgumentCodec.decodeArray(o[Spec.OUT]);
                list.push(a);
            }
        }

        return list;
    }

    static encode(action: Action): any {
        const o: any = {
            iid: action.iid,
            type: action.type != null ? action.type.toString() : '',
            description: action.description
        };

        if (action.type != null) {
            if (action.type._name != null) {
                o[Spec.X_NAME] = action.type._name;
            }

            if (action.type._optional) {
                o[Spec.X_OPTIONAL] = true;
            }
        }

        if (action.in.length > 0) {
            o[Spec.IN] = ArgumentCodec.encodeArray(action.in);
        }
        
        if (action.out.length > 0) {
            o[Spec.OUT] = ArgumentCodec.encodeArray(action.out);
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
