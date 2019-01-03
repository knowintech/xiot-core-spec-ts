import {DeviceDetail} from '../../spec/summary/DeviceDetail';

export class DeviceDetailCodec {

  static decode(json: any): DeviceDetail[] {
    const array = [];

    const devices = json['device-information'];
    if (devices != null) {
      if (devices instanceof Array) {
        for (const device of devices) {
          const detail = new DeviceDetail();
          detail.did = device['id'];
          detail.name = device['name'];
          detail.serialNumber = device['serialNumber'];
          detail.online = device['online'];
          detail.roomId = device['rid'];
          array.push(detail);
        }
      }
    }

    return array;
  }

  static encode(detail: DeviceDetail): any {
    return {
      id: detail.did,
      type: detail.type != null ? detail.type.toString() : '',
      online: detail.online,
      name: detail.name,
      serialNumber: detail.serialNumber,
      rid: detail.roomId
    };
  }

  static encodeArray(summaries: DeviceDetail[]): any {
    return {
      'device-information': (summaries != null) ? summaries.map(s => DeviceDetailCodec.encode(s)) : []
    };
  }
}
