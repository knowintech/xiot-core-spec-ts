
export class FormatDTO {

    ns: string;
    name: string;
    description: Map<string, string> = new Map<string, string>();

    _index_of_added = 0;
    _just_added = false;
    _changed = false;

    constructor(ns: string, name: string, description: Map<string, string> | null) {
        this.ns = ns;
        this.name = name;
        if (description != null) {
            this.description = description;
        }
    }
}
