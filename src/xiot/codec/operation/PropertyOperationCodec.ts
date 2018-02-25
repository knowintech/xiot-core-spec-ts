import {PropertyOperation} from "../../spec/operation/PropertyOperation";
import {PID} from "../../spec/xid/PID";
import {Spec} from "../../spec/constant/Spec";

export class PropertyOperationCodec {

    static decodePIDs(pids: string): Array<PropertyOperation> {
        let array = [];

        if (pids != null) {
            pids.split(',').forEach(pid => {
                let o = new PropertyOperation();
                o.pid = PID.parseString(pid);
            });
        }

        return array;
    }

    static decodePIDArray(pids: Array<string>): Array<PropertyOperation> {
        let array = [];

        if (pids != null) {
            pids.forEach(pid => {
                let o = new PropertyOperation();
                o.pid = PID.parseString(pid);
            });
        }

        return array;
    }

    static decodeValues(values: Array<Object>): Array<PropertyOperation> {
        let array = [];

        if (values != null) {
            values.forEach(value => {
                let o = new PropertyOperation();
                o.pid = PID.parseString(o[Spec.PID]);
                o.status = o[Spec.STATUS];
                if (o.status == 0) {
                    o.value = o[Spec.VALUE];
                }
                else {
                    o.description = o[Spec.DESCRIPTION];
                }
            });
        }

        return array;
    }

    static decodeStatus(values: Array<Object>): Array<PropertyOperation> {
        let array = [];

        if (values != null) {
            values.forEach(value => {
                let o = new PropertyOperation();
                o.pid = PID.parseString(o[Spec.PID]);
                o.status = o[Spec.STATUS];
                if (o.status != 0) {
                    o.description = o[Spec.DESCRIPTION];
                }
            });
        }

        return array;
    }

    static encodeQueryGETtoString(list: Array<PropertyOperation>): string {
        return list.map(p => p.pid.toString()).join(',');
    }

    static encodeQueryGETtoArray(list: Array<PropertyOperation>): Array<Object> {
        return list.map(p => p.pid.toString());
    }

    static encodeResultGET(list: Array<PropertyOperation>): Array<Object> {
        return list.map(p => {
            const object = Object.assign({
                pid: p.pid.toString(),
                status: p.status
            });

            if (p.status == 0) {
                object[Spec.VALUE] = p.value;
            }
            else {
                object[Spec.DESCRIPTION] = p.description;
            }

            return object;
        });
    }

    static encodeQuerySET(list: Array<PropertyOperation>): Array<Object> {
        return list
            .filter(p => p.status == 0)
            .map(p => Object.assign({pid: p.pid.toString(), value: p.value}));
    }

    static encodeResultSET(list: Array<PropertyOperation>): Array<Object> {
        return list.map(p => {
            const object = Object.assign({
                pid: p.pid.toString(),
                status: p.status
            });

            if (p.status != 0) {
                object[Spec.DESCRIPTION] = p.description;
            }

            return object;
        });
    }
}