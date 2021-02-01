import {MessageCodec} from '../../MessageCodec';
import {OwnerRecordCodec, OwnerRecordTypeFromString} from '../../../../../../..';
import {Message} from '../../../../typedef/stanza/message/Message';
import {OwnerMessage} from '../../../../typedef/stanza/message/owner/OwnerMessage';

export class OwnerMessageCodec implements MessageCodec {

    private payloadCodec = new OwnerRecordCodec();

    encode(message: Message): any {
        if (message instanceof OwnerMessage) {
            return this.payloadCodec.encode(message.payload);
        }
    }

    decode(id: string, type: string, payload: Object): Message {
        const record = this.payloadCodec.decode(type, payload);
        return new OwnerMessage(id, OwnerRecordTypeFromString(type), record);
    }
}
