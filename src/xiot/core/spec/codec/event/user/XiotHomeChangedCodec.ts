import {XiotHomeChanged} from '../../../../../..';
import {HomeCodec} from '../../home/HomeCodec';

export class XiotHomeChangedCodec {

    static encode(event: XiotHomeChanged): any {
        return {
            homes: HomeCodec.encodeArray(event.homes),
        };
    }

    static decode(o: any): XiotHomeChanged {
        const event = new XiotHomeChanged();
        event.homes = HomeCodec.decodeArray(o.homes);
        return event;
    }
}
