import {IqCodec} from '../../../IqCodec';
import {IQQuery} from '../../../../../typedef/stanza/iq/IQQuery';
import {IQResult} from '../../../../../typedef/stanza/iq/IQResult';
import {Shadow, ShadowCodec} from '../../../../../../../..';
import {QueryGetShadows, ResultGetShadows} from '../../../../../typedef/stanza/iq/device/manager/GetShadows';

export class GetShadowsCodec implements IqCodec {

    encodeQueryContent(query: IQQuery): any | null {
        if (query instanceof QueryGetShadows) {
            return {
                devices: query.devices
            };
        }

        return null;
    }

    encodeResultContent(result: IQResult): any | null {
        if (result instanceof ResultGetShadows) {
            const devices: any = [];

            result.shadows.forEach((value, key) => {
                devices.push(
                    {
                        did: key,
                        shadows: ShadowCodec.encodeArray(value)
                    });
            });

            return {
                devices: devices
            };
        }

        return null;
    }

    decodeQuery(id: string, content: any): IQQuery | null {
        const devices = content['devices'];
        return new QueryGetShadows(id, devices);
    }

    decodeResult(id: string, content: any): IQResult | null {
        const devices: Map<string, Shadow[]> = new Map();
        const array: any = content['devices'];

        if (array) {
            for (const obj of array) {
                const did: string = obj['did'];
                const shadows: any [] = obj['shadows'];
                devices.set(did, ShadowCodec.decodeArray(shadows));
            }
        }

        return new ResultGetShadows(id, devices);
    }
}

