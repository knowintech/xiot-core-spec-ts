
export class XiotChild {

    did = '';
    deviceType = '';
    accesspoint = '';
    bridge = '';

    constructor(did: string, deviceType: string, accesspoint: string, bridge: string) {
        this.did = did;
        this.deviceType = deviceType;
        this.accesspoint = accesspoint;
        this.bridge = bridge;
    }
}
