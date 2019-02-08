import {ActionOperation} from '../../typedef/operation/ActionOperation';
import {AID} from '../../typedef/xid/AID';
import {Spec} from '../../typedef/constant/Spec';

export class ActionOperationCodec {

    static decodeQuery(query: any): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(query[Spec.AID]);
        o.in = query[Spec.IN];
        return o;
    }

    static decodeResult(result: any): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(result[Spec.AID]);
        o.oid = result[Spec.OID];
        o.status = result[Spec.STATUS];
        if (o.status === 0) {
            o.out = result[Spec.OUT];
        } else {
            o.description = result[Spec.DESCRIPTION];
        }

        return o;
    }

    static encodeQuery(action: ActionOperation): any {
        return {
            aid: action.aid !=null ? action.aid.toString() : '',
            in: action.in
        };
    }

    static encodeResult(action: ActionOperation): any {
        const object: any = {
            aid: action.aid != null ? action.aid.toString() : '',
            oid: action.oid,
            status: action.status
        };

        if (action.status === 0) {
            object[Spec.OUT] = action.out;
        } else {
            object[Spec.DESCRIPTION] = action.description;
        }

        return object;
    }
}
