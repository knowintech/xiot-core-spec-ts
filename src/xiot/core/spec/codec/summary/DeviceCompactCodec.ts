import {DeviceCompact} from '../../typedef/summary/DeviceCompact';
import {DeviceType} from '../../../../..';

export class DeviceCompactCodec {

  static decode(json: any): DeviceCompact[] {
    const array = [];

    const devices = json['devices'];
    if (devices != null) {
      if (devices instanceof Array) {
        for (const device of devices) {
          const detail = new DeviceCompact();
          detail.did = device['id'];
          detail.type = new DeviceType(device['type']);
          detail.name = device['name'];
          detail.online = device['online'];
          array.push(detail);
        }
      }
    }

    return array;
  }

  static encode(detail: DeviceCompact): any {
    return {
      did: detail.did,
      type: detail.type != null ? detail.type.toString() : '',
      online: detail.online ? 1 : 0,
      name: detail.name,
    };
  }

  static encodeArray(summaries: DeviceCompact[]): any {
    return {
      'devices': (summaries != null) ? summaries.map(s => DeviceCompactCodec.encode(s)) : []
    };
  }
}
