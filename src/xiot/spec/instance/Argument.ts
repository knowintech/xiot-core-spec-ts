export class Argument {
    public iid: number;
    public minRepeat: number = 1;
    public maxRepeat: number = 1;

    constructor(iid: number) {
        this.iid = iid;
    }
}
