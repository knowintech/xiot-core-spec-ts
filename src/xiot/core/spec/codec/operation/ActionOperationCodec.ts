import {ActionOperation} from '../../typedef/operation/ActionOperation';
import {AID} from '../../typedef/xid/AID';
import {Spec} from '../../typedef/constant/Spec';
import {ArgumentOperationCodec} from './ArgumentOperationCodec';

export class ActionOperationCodec {

    /**
     * query
     */
    static decodeQuery(query: any): ActionOperation[] {
        if (query != null) {
            return ActionOperationCodec.decodeQueryArray(query['actions']);
        }

        return [];
    }

    static decodeQueryArray(array: any[]): ActionOperation[] {
        if (array != null) {
            return array.map(x => ActionOperationCodec.decodeOneQuery(x));
        }

        return [];
    }

    static decodeOneQuery(query: any): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(query[Spec.AID]);
        o.setArgumentsIn(ArgumentOperationCodec.decodeArray(query[Spec.IN]));
        return o;
    }

    static encodeQuery(actions: ActionOperation[]): any {
        return {
            actions: ActionOperationCodec.encodeQueryArray(actions)
        };
    }

    static encodeQueryArray(actions: ActionOperation[]): any[] {
     return actions.map(x => ActionOperationCodec.encodeOneQuery(x));
    }

    static encodeOneQuery(action: ActionOperation): any {
        const object: any = {
            aid: action.aid != null ? action.aid.toString() : '',
        };

        if (action.oid !== '') {
            object[Spec.OID] = action.oid;
        }

        if (action.in.size > 0) {
            object[Spec.IN] = ArgumentOperationCodec.encodeArray(action.getArgumentsIn());
        }

        return object;
    }

    /**
     * result
     */

    static decodeResult(result: any): ActionOperation[] {
        if (result != null) {
            return ActionOperationCodec.decodeResultArray(result['actions']);
        }

        return [];
    }

    static decodeResultArray(array: any[]): ActionOperation[] {
        if (array != null) {
            return array.map(x => ActionOperationCodec.decodeOneResult(x));
        }

        return [];
    }

    static decodeOneResult(result: any): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(result[Spec.AID]);
        o.oid = result[Spec.OID] || '';
        o.status = result[Spec.STATUS];
        if (o.status === 0) {
            o.setArgumentsOut(ArgumentOperationCodec.decodeArray(result[Spec.OUT]));
        } else {
            o.description = result[Spec.DESCRIPTION];
        }

        return o;
    }

    static encodeResult(actions: ActionOperation[]): any {
        return {
            actions: ActionOperationCodec.encodeResultArray(actions)
        };
    }

    static encodeResultArray(actions: ActionOperation[]): any[] {
        return actions.map(x => ActionOperationCodec.encodeOneResult(x));
    }

    static encodeOneResult(action: ActionOperation): any {
        const object: any = {
            aid: action.aid != null ? action.aid.toString() : '',
            status: action.status
        };

        if (action.oid !== '') {
            object[Spec.OID] = action.oid;
        }

        if (action.status === 0) {
            if (action.out.size > 0) {
                object[Spec.OUT] = ArgumentOperationCodec.encodeArray(action.getArgumentsOut());
            }
        } else {
            object[Spec.DESCRIPTION] = action.description;
        }

        return object;
    }
}
