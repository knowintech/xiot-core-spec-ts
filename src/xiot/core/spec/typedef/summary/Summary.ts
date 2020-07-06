import {Urn} from '../definition/urn/Urn';
import {Protocol} from '../protocol/Protocol';

export class Summary {

    type: Urn | null = null;
    online: Boolean = false;
    cloudId: string | null = null;
    parentId: string | null = null;
    groups: string[] = [];
    interoperations: string[] = [];
    protocol: Protocol = Protocol.UNDEFINED;
    accesspoint = '';
}
