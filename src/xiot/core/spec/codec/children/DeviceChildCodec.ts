import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {DeviceChild} from '../../typedef/children/DeviceChild';

export class DeviceChildCodec {

  static decodeArray(array: any[]): DeviceChild[] {
    return array ? array.map(x => DeviceChildCodec.decode(x)) : [];
  }

  static decode(o: any): DeviceChild {
    return new DeviceChild(o.did, new DeviceType(o.type));
  }

  static encode(child: DeviceChild): any {
    return {
      did: child.did,
      type: child.type.toString(),
    };
  }

  static encodeArray(children: DeviceChild[]): any[] {
    return (children != null) ? children.map(s => DeviceChildCodec.encode(s)) : [];
  }
}
