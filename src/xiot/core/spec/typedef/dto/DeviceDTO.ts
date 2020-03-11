
export class DeviceDTO {

    ns: string;
    name: string;
    uuid: number;
    description: Map<string, string> = new Map<string, string>();

    constructor(ns: string, name: string, uuid: number, description: Map<string, string>) {
        this.ns = ns;
        this.name = name;
        this.uuid = uuid;
        this.description = description;
    }
}
