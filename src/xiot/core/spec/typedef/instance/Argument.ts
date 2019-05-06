export class Argument {

    piid: number;
    minRepeat = 1;
    maxRepeat = 1;
    values: any[] = [];

    constructor(piid: number) {
        this.piid = piid;
    }
}
