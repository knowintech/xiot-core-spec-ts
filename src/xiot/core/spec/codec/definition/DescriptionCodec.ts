import {Spec} from '../../typedef/constant/Spec';

export class DescriptionCodec {

    static decode(o: any): Map<String, String> {
        let description: Map<String, String> = new Map<String, String>();

        if (typeof o === 'string') {
            description.set(Spec.EN_US, o);
        } else if (typeof o === 'object') {
            Object.keys(o).forEach(x => description.set(x, o[x]));
        }

        return description;
    }

    static encode(description: Map<String, String>): any {      
        if (description.size == 0) {
            return '';
        }

        if (description.size == 1) {
            return description.get(Spec.EN_US);
        }

        let o = Object.create(null);
        description.forEach((v, k) => o[k.toString()] = v);
        return o;
    }
}
