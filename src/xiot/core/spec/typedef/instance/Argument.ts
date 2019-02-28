export class Argument {
    
    piid: number;
    minRepeat: number = 1;
    maxRepeat: number = 1;
    values: any[] = [];

    constructor(piid: number) {
        this.piid = piid;
    }
}
