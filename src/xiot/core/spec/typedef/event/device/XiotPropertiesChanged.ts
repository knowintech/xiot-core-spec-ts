import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {PropertyOperation} from '../../../../../..';

export class XiotPropertiesChanged extends XiotEvent {

    properties: PropertyOperation[] = [];

    constructor(properties: PropertyOperation[]) {
        super(XiotEventType.DEVICE_PROPERTIES_CHANGED);
        this.properties = properties;
    }
}
