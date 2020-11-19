import {Urn} from '../../typedef/definition/urn/Urn';
import {Summary} from '../../typedef/summary/Summary';
import {UrnType} from '../../typedef/definition/urn/UrnType';
import {Protocol, ProtocolFromString} from '../../typedef/protocol/Protocol';

export class SummaryCodec {

    static decodeArray(json: any): Summary[] {
        const array = [];

        const devices = json['devices'];
        if (devices != null) {
            if (devices instanceof Array) {
                for (const device of devices) {
                    array.push(SummaryCodec.decodeObject(device));
                }
            }
        }

        return array;
    }

    static decodeObject(o: any): Summary {
        const summary = new Summary();
        summary.type = new Urn([UrnType.DEVICE, UrnType.GROUP], o['type']);
        summary.online = o['online'];
        summary.protocol = ProtocolFromString(o['protocol']);
        summary.groups = o['groups'];
        summary.cloudId = o['cloudId'];
        summary.parentId = o['parentId'];
        summary.interoperations = o['interoperations'];
        summary.accesspoint = o['accesspoint'];
        return summary;
    }

    static encodeObject(s: Summary): any {
        const o: any = {
            type: s.type != null ? s.type.toString() : '',
            online: s.online
        };

        if (s.parentId != null) {
            o.parentId = s.parentId;
        }

        if (s.cloudId != null) {
            o.cloudId = s.cloudId;
        }

        if (s.groups != null) {
            o.groups = s.groups;
        }

        if (s.interoperations != null) {
            o.interoperations = s.interoperations;
        }

        if (s.protocol != null) {
            if (s.protocol !== Protocol.UNDEFINED) {
                o.protocol = s.protocol;
            }
        }

        if (s.accesspoint != null) {
            o.accesspoint = s.accesspoint;
        }

        return o;
    }

    static encodeArray(summaries: Array<Summary>): any {
        return {
            devices: (summaries != null) ? summaries.map(s => SummaryCodec.encodeObject(s)) : []
        };
    }
}
