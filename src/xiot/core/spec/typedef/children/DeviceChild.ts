import {Urn} from '../definition/urn/Urn';
import {Protocol} from '../protocol/Protocol';

export class DeviceChild {

  did: string;
  type: Urn;
  protocol: Protocol;

  constructor(did: string, type: Urn, protocol: Protocol) {
    this.did = did;
    this.type = type;
    this.protocol = protocol;
  }
}

