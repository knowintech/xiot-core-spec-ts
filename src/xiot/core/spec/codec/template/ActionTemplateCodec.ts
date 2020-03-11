import {Spec} from '../../typedef/constant/Spec';
import {ActionType} from '../../typedef/definition/urn/ActionType';
import {DescriptionCodec} from '../definition/DescriptionCodec';
import {ActionTemplate} from '../../typedef/template/ActionTemplate';
import {ArgumentCodec} from '../../../../..';

export class ActionTemplateCodec {

    static decodeArray(array: any[]): ActionTemplate[] {
        const list: ActionTemplate[] = [];

        if (array != null) {
            for (const o of array) {
                list.push(ActionTemplateCodec.decode(o));
            }
        }

        return list;
    }

    static decode(o: any): ActionTemplate {
        const iid = o[Spec.IID];
        const required = o[Spec.X_REQUIRED];
        const type = new ActionType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const argumentsIn = ArgumentCodec.decodeArray(o[Spec.IN]);
        const argumentsOut = ArgumentCodec.decodeArray(o[Spec.OUT]);
        return new ActionTemplate(iid, required, type, description, argumentsIn, argumentsOut);
    }

    static encode(template: ActionTemplate): any {
        const o: any = {
            iid: template.iid,
            type: template.type.toString(),
            description: DescriptionCodec.encode(template.description),
        };

        o[Spec.X_REQUIRED] = template.required;

        if (template.in.size > 0) {
            o[Spec.IN] = ArgumentCodec.encodeArray(template.getArgumentsIn());
        }

        if (template.out.size > 0) {
            o[Spec.OUT] = ArgumentCodec.encodeArray(template.getArgumentsOut());
        }

        return o;
    }

    static encodeArray(actions: Map<Number, ActionTemplate>): any[] {
        const array: any[] = [];

        actions.forEach((action, iid) => {
            array.push(ActionTemplateCodec.encode(action));
        });

        return array;
    }
}
