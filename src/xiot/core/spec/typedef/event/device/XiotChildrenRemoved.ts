import {XiotEvent} from '../XiotEvent';
import {XiotChild} from './XiotChild';
import {XiotEventType} from '../XiotEventType';

export class XiotChildrenRemoved extends XiotEvent {

    children: XiotChild[] = [];

    constructor() {
        super(XiotEventType.DEVICE_CHILDREN_ADDED);
    }
}
