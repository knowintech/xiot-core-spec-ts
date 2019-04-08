import {Spec} from '../../typedef/constant/Spec';

export class DescriptionCodec {

    static decode(o: any): Map<string, string> {
        let description: Map<string, string> = new Map<string, string>();

        if (typeof o === 'string') {
            description.set(Spec.EN_US, o);
        } else if (typeof o === 'object') {
            Object.keys(o).forEach(x => description.set(x.replace('-', '_'), o[x]));
        }

        return description;
    }

    static encode(description: Map<string, string>): any {      
        if (description.size == 0) {
            return '';
        }

        if (description.size == 1) {
            return Array.from(description.values())[0];
        }

        let o = Object.create(null);
        description.forEach((value, key) => o[key.toString().replace('_', '-')] = value);
        return o;
    }
}
