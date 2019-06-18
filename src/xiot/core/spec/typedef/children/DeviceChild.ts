import {DeviceType} from '../definition/urn/DeviceType';

export class DeviceChild {

  did: string;
  type: DeviceType;

  constructor(did: string, type: DeviceType) {
    this.did = did;
    this.type = type;
  }
}

