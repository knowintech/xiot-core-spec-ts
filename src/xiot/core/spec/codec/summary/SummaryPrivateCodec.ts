import {SummaryPrivate} from '../../typedef/summary/SummaryPrivate';

export class SummaryPrivateCodec {

    static decodeObject(o: any): SummaryPrivate {
        const summaryPrivate = new SummaryPrivate();
        summaryPrivate.localIp = o['localIp'];
        summaryPrivate.remoteIp = o['remoteIp'];
        summaryPrivate.location = o['location'];
        summaryPrivate.os = o['os'];
        summaryPrivate.sdk = o['sdk'];
        summaryPrivate.routerMac = o['routerMac'];
        return summaryPrivate;
    }

    static encodeObject(p: SummaryPrivate): any {
        const o: any = {};

        if (p.routerMac !== null) {
            o['routerMac'] = p.routerMac;
        }

        if (p.remoteIp !== null) {
            o['remoteIp'] = p.remoteIp;
        }

        if (p.localIp !== null) {
            o['localIp'] = p.localIp;
        }

        if (p.location !== null) {
            o['location'] = p.location;
        }

        if (p.os !== null) {
            o['os'] = p.os;
        }

        if (p.sdk !== null) {
            o['sdk'] = p.sdk;
        }

        return o;
    }
}
