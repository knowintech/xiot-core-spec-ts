import {XepRecord} from '../../typedef/xep/XepRecord';
import set = Reflect.set;
import {XepMessage} from '../../typedef/xep/impl/XepMessage';
import {XepRecordCodec} from './XepRecordCodec';
import {XepMessageTypeFromString} from '../../typedef/xep/XepMessageType';

export class XepMessageCodec {

    public static encodeObject(message: XepMessage): any {
        const o: any = {};
        set(o, 'type', message.type.toString());
        if (message.record) {
            set(o, 'content', XepRecordCodec.encodeObject(message.record));
        }

        return o;
    }


    public static decodeObject(o: any): XepMessage {
        const type = XepMessageTypeFromString(o.type);
        const record = o.content;
        let xepRecord: XepRecord | null = null;

        if (record) {
            xepRecord = XepRecordCodec.decodeObject(record);
        }

        return new XepMessage(type, xepRecord);
    }
}
