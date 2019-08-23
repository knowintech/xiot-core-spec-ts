import {HomeCodec} from '../../home/HomeCodec';
import { XiotHomeAdded } from '../../../../../..';

export class XiotHomeAddedCodec {

    static encode(event: XiotHomeAdded): any {
        return {
            homes: HomeCodec.encodeArray(event.homes),
        };
    }

    static decode(o: any): XiotHomeAdded {
        const event = new XiotHomeAdded();
        event.homes = HomeCodec.decodeArray(o.homes);
        return event;
    }
}
