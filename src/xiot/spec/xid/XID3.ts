export class XID3 {
    public iid: number;
    public siid: number;
    public did: string;
    public value: string;

    static parseString(value: string): XID3 {
        let xid = new XID3();
        xid.value = value;

        let id = value.split('.');
        if (id.length == 3) {
            xid.did = id[0];
            xid.siid = Number.parseInt(id[1], 10);
            xid.iid = Number.parseInt(id[2], 10);
        }

        return xid;
    }

    toString(): string {
        if (this.value == null) {
            this.value = this.did + '.' + this.siid + '.' + this.iid;
        }

        return this.value;
    }
}