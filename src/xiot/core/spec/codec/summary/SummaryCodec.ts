import {Urn} from '../../typedef/definition/urn/Urn';
import {Summary} from '../../typedef/summary/Summary';
import {ProtocolFromString, UrnType} from '../../../../..';

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
    summary.dependencies = o['dependencies'];
    summary.interoperations = o['interoperations'];
    return summary;
  }

  static encode(summary: Summary): any {
    return {
      type: summary.type != null ? summary.type.toString() : '',
      online: summary.online,
      protocol: summary.protocol.toString(),
      groups: summary.groups,
      dependencies: summary.dependencies,
      interoperations: summary.interoperations,
    };
  }

  static encodeArray(summaries: Array<Summary>): any {
    return {
      devices: (summaries != null) ? summaries.map(s => SummaryCodec.encode(s)) : []
    };
  }
}
