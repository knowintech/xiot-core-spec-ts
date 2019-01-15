import {Action} from '../../spec/instance/Action';
import {Spec} from '../../spec/constant/Spec';
import {ActionOperable} from '../../spec/operable/ActionOperable';
import {ActionType} from '../../spec/definition/urn/ActionType';

export class ActionCodec {

    static decode(array: any[]): Action[] {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Action();
                a.iid = o[Spec.IID];
                a.type = ActionType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.in = o[Spec.IN];
                a.out = o[Spec.OUT];

                if (a.type != null) {
                    if (o[Spec.X_NAME] != null) {
                        a.type.set(Spec.X_NAME, o[Spec.X_NAME]);
                    }

                    if (o[Spec.X_OPTIONAL] != null) {
                        a.type.set(Spec.X_OPTIONAL, o[Spec.X_OPTIONAL]);
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
                a.in = o[Spec.IN];
                a.out = o[Spec.OUT];
                list.push(a);
            }
        }

        return list;
    }

    static encode(action: Action): any {
        const o: any = {
            iid: action.iid,
            type: action.type != null ? action.type.toString() : '',
            description: action.description,
            in: action.in,
            out: action.out
        };

        if (action.type != null) {
            if (action.type.get(Spec.X_NAME) != null) {
                o[Spec.X_NAME] = action.type.get(Spec.X_NAME);
            }

            if (action.type.get(Spec.X_OPTIONAL) != null) {
                o[Spec.X_OPTIONAL] = action.type.get(Spec.X_OPTIONAL);
            }
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
