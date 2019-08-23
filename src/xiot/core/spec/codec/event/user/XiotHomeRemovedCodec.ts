import {XiotHomeRemoved} from '../../../../../..';
import {HomeCodec} from '../../home/HomeCodec';

export class XiotHomeRemovedCodec {

    static encode(event: XiotHomeRemoved): any {
        return {
            homes: HomeCodec.encodeArray(event.homes),
        };
    }

    static decode(o: any): XiotHomeRemoved {
        const event = new XiotHomeRemoved();
        event.homes = HomeCodec.decodeArray(o.homes);
        return event;
    }
}
