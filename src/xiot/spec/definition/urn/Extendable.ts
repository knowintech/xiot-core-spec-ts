
export class Extendable {

    // private _values: Map<string, any> = new Map<string, any>();

    // constructor() {
    // }

    // get(key: string): any | null {
    //     return this._values.get(key);
    // }

    // set(key: string, value: any) {
    //     this._values.set(key, value);
    // }

    public _name: string | null = null;
    public _optional: boolean = false;
    public _property_addable: boolean = false;
    public _action_addable: boolean = false;
    public _event_addable: boolean = false;
    public _just_added: boolean = false;
}