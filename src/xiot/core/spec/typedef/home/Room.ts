
export class Room {

    index = 0;
    name = '';
    iid = 0;
    hiid = 0;

    constructor(iid: number, name: string, hiid: number) {
        this.iid = iid;
        this.name = name;
        this.hiid = hiid;
    }
}
