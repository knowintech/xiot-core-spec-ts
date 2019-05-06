export class XcpUniversalDID {

    did = '';
    serialNumber = '';
    productId = 0;
    productVersion = 0;

    static create(udid: string): XcpUniversalDID {
        const a: string[] =  udid.split('/');
        if (a.length !== 2) {
            throw new Error('udid invalid: ' + udid);
        }

        const did = a[0];
        const b: string[] = did.split('@');
        if (b.length !== 2) {
            throw new Error('did invalid: ' + did);
        }

        const serialNumber = b[0];
        const productId = Number.parseInt(b[1], 10);
        const productVersion = Number.parseInt(a[1], 10);

        return new XcpUniversalDID(serialNumber, productId, productVersion);
    }

    constructor(serialNumber: string, productId: number, productVersion: number)  {
        this.serialNumber = serialNumber;
        this.productId = productId;
        this.productVersion = productVersion;
        this.did = serialNumber + '@' + productId;
    }

    toString(): string {
        return this.did + '/' + this.productVersion;
    }
}
