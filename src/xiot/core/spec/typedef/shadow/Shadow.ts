export class Shadow {

    public siid: number;
    public piid: number;
    public value: any;
    public status: number;
    public description: string;

    constructor(siid: number, piid: number, value: any, status: number, description: string) {
        this.siid = siid;
        this.piid = piid;
        this.value = value;
        this.status = status;
        this.description = description;
    }
}
