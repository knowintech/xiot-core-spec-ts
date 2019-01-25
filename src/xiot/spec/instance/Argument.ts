export class Argument {
    public iid: number;
    public minRepeat: number = 1;
    public MaxRepeat: number = 1;

    constructor(iid: number) {
        this.iid = iid;
    }
}
