export class Argument {
    public piid: number;
    public minRepeat: number = 1;
    public maxRepeat: number = 1;

    constructor(piid: number) {
        this.piid = piid;
    }
}
