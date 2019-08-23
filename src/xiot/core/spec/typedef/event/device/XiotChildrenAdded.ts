import {XiotEvent} from '../XiotEvent';
import {XiotEventType} from '../XiotEventType';
import {XiotChild} from './XiotChild';

export class XiotChildrenAdded extends XiotEvent {

    children: XiotChild[] = [];

    constructor() {
        super(XiotEventType.DEVICE_CHILDREN_ADDED);
    }
}
