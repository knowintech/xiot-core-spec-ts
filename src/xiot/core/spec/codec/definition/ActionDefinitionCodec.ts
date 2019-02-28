import {ActionDefinition} from '../../typedef/definition/ActionDefinition';
import {Spec} from '../../typedef/constant/Spec';
import {ActionType} from '../../typedef/definition/urn/ActionType';
import {ArgumentDefinitionCodec} from './ArgumentDefinitionCodec';
import {DescriptionCodec} from './DescriptionCodec';

export class ActionDefinitionCodec {

    static decodeArray(list: any[]): ActionDefinition[] {
        const array: ActionDefinition[] = [];

        list.forEach(o => {
            array.push(ActionDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): ActionDefinition {
        let type = new ActionType(o[Spec.TYPE]);
        let description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        let argumentsIn = ArgumentDefinitionCodec.decodeArray(o[Spec.IN]);
        let argumentsOut = ArgumentDefinitionCodec.decodeArray(o[Spec.OUT]);
        return new ActionDefinition(type, description, argumentsIn, argumentsOut);
    }

    static encode(def: ActionDefinition): any {
        const o: any = {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.type.description),
        };

        if (def.in.length > 0) {
            o[Spec.IN] = ArgumentDefinitionCodec.encodeArray(def.in);
        }

        if (def.out.length > 0) {
            o[Spec.OUT] = ArgumentDefinitionCodec.encodeArray(def.out);
        }

        return o;
    }

    static encodeArray(list: ActionDefinition[]): any[] {
        return list.map(x => ActionDefinitionCodec.encode(x));
    }
}
