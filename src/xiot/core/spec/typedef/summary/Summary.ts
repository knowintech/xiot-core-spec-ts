import {Urn} from '../definition/urn/Urn';
import {Protocol} from '../protocol/Protocol';

export class Summary {

  type: Urn | null = null;
  online: Boolean = false;
  protocol: Protocol = Protocol.UNDEFINED;
  groups: string[] = [];
  dependencies: string[] = [];
  interoperations: string[] = [];
}

