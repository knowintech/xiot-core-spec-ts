import { XiotBridgeInitialized } from '../../../../../..';

export class XiotBridgeInitializedCodec {

    static encode(event: XiotBridgeInitialized): any {
        return {
            did: event.did,
        };
    }

    static decode(o: any): XiotBridgeInitialized {
        return new XiotBridgeInitialized(o.did);
    }
}
