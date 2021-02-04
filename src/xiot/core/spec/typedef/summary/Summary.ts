import {Urn} from '../definition/urn/Urn';
import {Protocol} from '../protocol/Protocol';
import {SummaryPrivate} from './SummaryPrivate';
import {SummaryExtra} from './SummaryExtra';

export class Summary {

    type: Urn | null = null;
    online: Boolean = false;
    cloudId: string | null = null;
    parentId: string | null = null;
    groups: string[] = [];
    interoperations: string[] = [];
    protocol: Protocol = Protocol.UNDEFINED;
    accesspoint = '';
    _private: SummaryPrivate | null = null;
    _extra: SummaryExtra | null = null;
}
