import {PropertyOperationCodec, XiotPropertiesChanged} from '../../../../../..';

export class XiotPropertiesChangedCodec {

    static encode(event: XiotPropertiesChanged): any {
        return {
            properties: PropertyOperationCodec.encodeQuerySET(event.properties),
        };
    }

    static decode(o: any): XiotPropertiesChanged {
        const array = o.properties;
        const properties = PropertyOperationCodec.decodeValues(array);
        return new XiotPropertiesChanged(properties);
    }
}
