import {ActionDefinition} from '../../spec/definition/ActionDefinition';
import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definition/urn/ActionType';
import {ArgumentDefinitionCodec} from './ArgumentDefinitionCodec';

export class ActionDefinitionCodec {

    static decodeArray(list: any[]): ActionDefinition[] {
        const array: ActionDefinition[] = [];

        list.forEach(o => {
            array.push(ActionDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ActionDefinition {
        const def = new ActionDefinition();
        def.type = ActionType.valueOf(o[Spec.TYPE]);
        def.description = o[Spec.DESCRIPTION];
        def.in = ArgumentDefinitionCodec.decodeArray(o[Spec.IN]);
        def.out = ArgumentDefinitionCodec.decodeArray(o[Spec.OUT]);

        if (def.type != null) {
            if (o[Spec.X_NAME] != null) {
                def.type._name = o[Spec.X_NAME];
            }
        }

        return def;
    }

    static encode(def: ActionDefinition): any {
        const o: any = {
            type: (def.type != null) ? def.type.toString() : '',
            description: def.description,
        };

        // console.log('def.in.length: ', def.in.length);
        // console.log('def.out.length: ', def.in.length);

        if (def.in.length > 0) {
            o[Spec.IN] = ArgumentDefinitionCodec.encodeArray(def.in);
        }

        if (def.out.length > 0) {
            o[Spec.OUT] = ArgumentDefinitionCodec.encodeArray(def.out);
        }

        if (def.type != null) {
            if (def.type._name != null) {
                o[Spec.X_NAME] = def.type._name;
            }
        }

        return o;
    }

    static encodeArray(list: ActionDefinition[]): any[] {
        return list.map(x => ActionDefinitionCodec.encode(x));
    }
}
