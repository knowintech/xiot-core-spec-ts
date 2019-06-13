import {EID} from '../../typedef/xid/EID';
import {Spec} from '../../typedef/constant/Spec';
import {ArgumentOperationCodec} from './ArgumentOperationCodec';
import {EventOperation} from '../../../../..';

export class EventOperationCodec {

    /**
     * query
     */
    static decodeQuery(query: any): EventOperation[] {
        if (query != null) {
            return EventOperationCodec.decodeQueryArray(query['events']);
        }

        return [];
    }

    static decodeQueryArray(array: any[]): EventOperation[] {
        if (array != null) {
            return array.map(x => EventOperationCodec.decodeOneQuery(x));
        }

        return [];
    }

    static decodeOneQuery(query: any): EventOperation {
        const o = new EventOperation();
        o.eid = EID.parseString(query[Spec.EID]);
        o.setArguments(ArgumentOperationCodec.decodeArray(query[Spec.ARGUMENTS]));
        return o;
    }

    static encodeQuery(actions: EventOperation[]): any {
        return {
            actions: EventOperationCodec.encodeQueryArray(actions)
        };
    }

    static encodeQueryArray(actions: EventOperation[]): any[] {
     return actions.map(x => EventOperationCodec.encodeOneQuery(x));
    }

    static encodeOneQuery(o: EventOperation): any {
        const object: any = {
            eid: o.eid != null ? o.eid.toString() : '',
        };

        if (o.oid !== '') {
            object[Spec.OID] = o.oid;
        }

        if (o.arguments.size > 0) {
            object[Spec.ARGUMENTS] = ArgumentOperationCodec.encodeArray(o.getArguments());
        }

        return object;
    }

    /**
     * result
     */

    static decodeResult(result: any): EventOperation[] {
        if (result != null) {
            return EventOperationCodec.decodeResultArray(result['events']);
        }

        return [];
    }

    static decodeResultArray(array: any[]): EventOperation[] {
        if (array != null) {
            return array.map(x => EventOperationCodec.decodeOneResult(x));
        }

        return [];
    }

    static decodeOneResult(result: any): EventOperation {
        const o = new EventOperation();
        o.eid = EID.parseString(result[Spec.EID]);
        o.oid = result[Spec.OID] || '';
        o.status = result[Spec.STATUS];
        if (o.status !== 0) {
            o.description = result[Spec.DESCRIPTION];
        }

        return o;
    }

    static encodeResult(actions: EventOperation[]): any {
        return {
            actions: EventOperationCodec.encodeResultArray(actions)
        };
    }

    static encodeResultArray(actions: EventOperation[]): any[] {
        return actions.map(x => EventOperationCodec.encodeOneResult(x));
    }

    static encodeOneResult(o: EventOperation): any {
        const object: any = {
            eid: o.eid != null ? o.eid.toString() : '',
            status: o.status
        };

        if (o.oid !== '') {
            object[Spec.OID] = o.oid;
        }

        if (o.status !== 0) {
            object[Spec.DESCRIPTION] = o.description;
        }

        return object;
    }
}
