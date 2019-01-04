
export class Extendable {

    private _values: Map<string, any> = new Map<string, any>();

    constructor() {
    }

    get(key: string): any | null {
        return this._values.get(key);
    }

    set(key: string, value: any) {
        this._values.set(key, value);
    }
}