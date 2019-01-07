import {UrnType, UrnTypeFromString, UrnTypeToString} from './UrnType';
import {Extendable} from './Extendable';
import {UrnStyle} from './UrnStyle';

export class Urn extends Extendable {
    
    public ns: string = '';
    public type: UrnType = UrnType.UNDEFINED;
    public name: string = '';
    public value: number = 0;
    public groupId: string = '';
    public model: string = '';
    public version: number = 0;

    constructor() {
        super();
    }

    parseString(string: string): boolean {
        let ret: boolean = false;

        do {
            const a = string.split(':');

            if (a.length < 5) {
                break;
            }

            if (! this.init(a[0], a[1], a[2], a[3], a[4])) {
                break;
            }

            switch (a.length) {
                // specification type: urn:homekit-spec:device:fan:00000000
                case 5:
                    this.set('style', UrnStyle.SPEC);
                    ret = true;
                    break;

                // v1 instance type => urn:xxx-spec:device:fan:00000000:geek-fff
                case 6:
                    this.set('style', UrnStyle.V1);
                    ret = this.initGroupModelVersion(a[5]);
                    break;

                // v2 instance type style => urn:xxx-spec:device:fan:00000000:geek-fff:1
                case 7:
                    this.set('style', UrnStyle.V2);
                    ret = this.initGroupModelVersion2(a[5], a[6]);
                    break;

                // xiot instance type style => urn:homekit-spec:device:fan:00000000:geek:fff:1
                case 8:
                    this.set('style', UrnStyle.XIOT);
                    ret = this.initGroupModelVersion3(a[5], a[6], a[7]);
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

    private initGroupModelVersion(groupIdAndModel: string): boolean {
        const a = groupIdAndModel.split('-');
        if (a.length != 2) {
            return false;
        }

        return this.initGroupModelVersion3(a[0], a[1], '0');
    }

    private initGroupModelVersion2(groupIdAndModel: string, version: string): boolean  {
        const a = groupIdAndModel.split('-');
        if (a.length != 2) {
            return false;
        }
        this.set('style', 'v2');
        return this.initGroupModelVersion3(a[0], a[1], version);
    }

    private initGroupModelVersion3(groupId: string, model: string, version: string): boolean  {
        this.groupId = groupId;
        this.model = model;
        this.version = Number.parseInt(version, 10);
        return true;
    }

    parse(theType: UrnType, string: string): boolean {
        return this.parseString(string) && this.validateType(theType);
    }

    validateType(theType: UrnType): boolean {
        return (this.type === theType);
    }

    shortUUID(): string {
        const uuid = this.value.toString(16).toUpperCase();
        const length = 8 - uuid.length;
        let prefix = '';
        for (let i = 0; i < length; ++i) {
          prefix += '0';
        }
    
        return prefix + uuid;
    }

    displayName(): string {
        const n: string = this.get('name');
        if (n != null) {
            return n;
        }

        return this.name;
    }

    toString(): string {
        const uuid = this.value.toString(16).toUpperCase();
        const length = 8 - uuid.length;
        let prefix = '';
        for (let i = 0; i < length; ++i) {
            prefix += '0';
        }

        let s = 'urn:' + this.ns + ':' + UrnTypeToString(this.type) + ':' + this.name + ':' + prefix + uuid;

        const style = this.get('style') ;

        if (style == null || style == UrnStyle.XIOT) {
            if (this.groupId !== '' && this.model !== '' && this.version != 0) {
                s = s + ":" + this.groupId + ":" + this.model + ":" + this.version;
            }
        } else {
            if (this.groupId !== '' && this.model !== '') {
                if (this.version != 0) {
                    s = s + ":" + this.groupId + "-" + this.model + ":" + this.version;
                } else {
                    s = s + ":" + this.groupId + "-" + this.model;
                }
            }
        }

        return s;
    }
}
