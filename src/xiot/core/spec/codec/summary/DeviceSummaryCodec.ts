import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {DeviceSummary} from '../../typedef/summary/DeviceSummary';

export class DeviceSummaryCodec {

  static decodeArray(json: any): DeviceSummary[] {
    const array = [];

    const devices = json['devices'];
    if (devices != null) {
      if (devices instanceof Array) {
        for (const device of devices) {
          array.push(DeviceSummaryCodec.decodeObject(device));
        }
      }
    }

    return array;
  }

  static decodeObject(o: any): DeviceSummary {
    const summary = new DeviceSummary();
    summary.did = o['did'];
    summary.category = o['category'];
    summary.name = o['name'];
    summary.type = new DeviceType(o['type']);
    return summary;
  }

  static encode(summary: DeviceSummary): any {
    return {
      did: summary.did,
      type: summary.type != null ? summary.type.toString() : '',
      name: summary.name,
      category: summary.category
    };
  }

  static encodeArray(summaries: Array<DeviceSummary>): any {
    return {
      devices: (summaries != null) ? summaries.map(s => DeviceSummaryCodec.encode(s)) : []
    };
  }
}
