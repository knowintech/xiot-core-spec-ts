import {MessageCodec} from '../../MessageCodec';
import {DeviceRecordCodec, DeviceRecordTypeFromString} from '../../../../../../..';
import {Message} from '../../../../typedef/stanza/message/Message';
import {DeviceMessage} from '../../../../typedef/stanza/message/device/DeviceMessage';

export class DeviceMessageCodec implements MessageCodec {

    private payloadCodec = new DeviceRecordCodec();

    encode(message: Message): any {
        if (message instanceof DeviceMessage) {
            return this.payloadCodec.encode(message.payload);
        }
    }

    decode(id: string, type: string, payload: Object): Message {
        const record = this.payloadCodec.decode(type, payload);
        return new DeviceMessage(id, DeviceRecordTypeFromString(type), record);
    }
}
