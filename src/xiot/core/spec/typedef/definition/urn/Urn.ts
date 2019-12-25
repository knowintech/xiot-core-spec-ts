import {UrnType, UrnTypeFromString, UrnTypeToString} from './UrnType';
import {Extendable} from './Extendable';
import {UrnStyle} from './UrnStyle';

export class Urn extends Extendable {

    public ns = '';
    public type: UrnType = UrnType.UNDEFINED;
    public name = '';
    public value = 0;

    public v1modified = '';
    public v2modified = '';
    public v2template = '';

    public groupId = '';
    public model = '';
    public version = 0;

    public style: UrnStyle = UrnStyle.SPEC;
    // public description: Map<string, string> = new Map<string, string>();
    public valid = false;

    static getShortUUID(value: number): string {
        const uuid = value.toString(16).toUpperCase();
        const length = 8 - uuid.length;
        let prefix = '';
        for (let i = 0; i < length; ++i) {
            prefix += '0';
        }

        return prefix + uuid;
    }

    constructor(string: string) {
        super();
        this.valid = this.parseString(string);
    }

    parseString(string: string): boolean {
        let ret = true;

        do {
            const a = string.split(':');

            if (a.length < 5) {
                ret = false;
                break;
            }

            if (! this.init(a[0], a[1], a[2], a[3], a[4])) {
                ret = false;
                break;
            }

            switch (a.length) {
                // specification type: urn:homekit-spec:device:fan:00000000
                case 5:
                    this.style = UrnStyle.SPEC;
                    break;

                // v1 instance type => urn:xxx-spec:device:fan:00000000:geek-fff-aaa
                case 6:
                    this.style = UrnStyle.V1;
                    this.v1modified = a[5];
                    break;

                // v2 instance type style => urn:xxx-spec:device:fan:00000000:geek-fff-xxf:1
                case 7:
                    this.style = UrnStyle.V2;
                    this.v2modified = a[5];
                    this.version = Number.parseInt(a[6], 10);
                    break;

                case 8:
                    if (a[7].startsWith('0000')) {
                        // v2 instance type with template => urn:xxx-spec:device:fan:00000000:geek-fff:1:00008C07
                        this.style = UrnStyle.V2_TEMPLATE;
                        this.v2modified = a[5];
                        this.version = Number.parseInt(a[6], 10);
                        this.v2template = a[7];
                    } else {
                        // xiot instance type style => urn:homekit-spec:device:fan:00000000:geek:fff:1
                        this.style = UrnStyle.XIOT;
                        this.groupId = a[5];
                        this.model = a[6];
                        this.version = Number.parseInt(a[7], 10);
                    }
                    break;

                default:
                    break;
            }

        } while (false);

        return ret;
    }

    private init(magic: string, ns: string, type: string, name: string, value: string): boolean {
        if (magic !== 'urn') {
            return false;
        }

        this.ns = ns;
        this.type = UrnTypeFromString(type);
        this.name = name;
        this.value =  Number.parseInt(value, 16);

        if (this.type === UrnType.UNDEFINED) {
            return false;
        }

        return true;
    }

    parse(theType: UrnType, string: string): boolean {
        return this.parseString(string) && this.validateType(theType);
    }

    validateType(theType: UrnType): boolean {
        return (this.type === theType);
    }

    shortUUID(): string {
        return Urn.getShortUUID(this.value);
    }

    toString(): string {
        let s = 'urn:' + this.ns + ':' + UrnTypeToString(this.type) + ':' + this.name + ':' + this.shortUUID();

        switch (this.style) {
            case UrnStyle.SPEC:
                break;

            case UrnStyle.V1:
                s = s + ':' + this.v1modified;
                break;

            case UrnStyle.V2:
                s = s + ':' + this.v2modified + ':' + this.version;
                break;

            case UrnStyle.V2_TEMPLATE:
                s = s + ':' + this.v2modified + ':' + this.version + ':' + this.v2template;
                break;

            case UrnStyle.XIOT:
                s = s + ':' + this.groupId + ':' + this.model + ':' + this.version;
                break;
        }

        return s;
    }
}
