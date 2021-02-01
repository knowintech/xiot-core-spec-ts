import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {QueryGetDevice, ResultGetDevice} from '../../../../../typedef/stanza/iq/device/manager/GetDevices';
import {ChildCodec} from '../../../../../../../..';

export class GetDevicesCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetDevice) {
            return {
                devices: ChildCodec.encodeArray(result.devices)
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        return new QueryGetDevice(id);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const devices = content['devices'];
        return new ResultGetDevice(id, ChildCodec.decodeArray(devices));
    }
}

