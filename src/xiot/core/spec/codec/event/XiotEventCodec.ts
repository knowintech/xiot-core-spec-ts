import {XiotBridgeInitializedCodec} from './device/XiotBridgeInitializedCodec';
import {
    XiotEvent,
    XiotEventType,
    XiotBridgeInitialized,
    XiotDeviceOffline,
    XiotDeviceOnline,
    XiotEventOccurred,
    XiotPropertiesChanged,
    XiotRoomChanged,
    XiotHomeChanged,
    XiotRoomRemoved,
    XiotRoomAdded,
    XiotHomeRemoved,
    XiotHomeAdded,
    XiotDeviceChanged,
    XiotDeviceRemoved,
    XiotDeviceAdded,
    XiotChildrenAdded,
    XiotChildrenRemoved,
} from '../../../../..';

import {XiotDeviceOnlineCodec} from './device/XiotDeviceOnlineCodec';
import {XiotDeviceOfflineCodec} from './device/XiotDeviceOfflineCodec';
import {XiotPropertiesChangedCodec} from './device/XiotPropertiesChangedCodec';
import {XiotEventOccurredCodec} from './device/XiotEventOccurredCodec';
import {XiotChildrenRemovedCodec} from './device/XiotChildrenRemovedCodec';
import {XiotChildrenAddedCodec} from './device/XiotChildrenAddedCodec';
import {XiotDeviceAddedCodec} from './user/XiotDeviceAddedCodec';
import {XiotDeviceRemovedCodec} from './user/XiotDeviceRemovedCodec';
import {XiotDeviceChangedCodec} from './user/XiotDeviceChangedCodec';
import {XiotHomeAddedCodec} from './user/XiotHomeAddedCodec';
import {XiotHomeRemovedCodec} from './user/XiotHomeRemovedCodec';
import {XiotRoomAddedCodec} from './user/XiotRoomAddedCodec';
import {XiotHomeChangedCodec} from './user/XiotHomeChangedCodec';
import {XiotRoomRemovedCodec} from './user/XiotRoomRemovedCodec';
import {XiotRoomChangedCodec} from './user/XiotRoomChangedCodec';

export class XiotEventCodec {

    static encode(event: XiotEvent): any {
        let o: any = {};

        switch (event.type) {
            case XiotEventType.DEVICE_BRIDGE_INITIALIZED:
                if (event instanceof XiotBridgeInitialized) {
                    o = XiotBridgeInitializedCodec.encode(event);
                }
                break;

            case XiotEventType.DEVICE_ONLINE:
                if (event instanceof XiotDeviceOnline) {
                    o = XiotDeviceOnlineCodec.encode(event);
                }
                break;

            case XiotEventType.DEVICE_OFFLINE:
                if (event instanceof XiotDeviceOffline) {
                    o = XiotDeviceOfflineCodec.encode(event);
                }
                break;

            case XiotEventType.DEVICE_PROPERTIES_CHANGED:
                if (event instanceof XiotPropertiesChanged) {
                    o = XiotPropertiesChangedCodec.encode(event);
                }
                break;

            case XiotEventType.DEVICE_EVENT_OCCURRED:
                if (event instanceof XiotEventOccurred) {
                    o = XiotEventOccurredCodec.encode(event);
                }
                break;

            case XiotEventType.DEVICE_CHILDREN_REMOVED:
                if (event instanceof XiotChildrenRemoved) {
                    o = XiotChildrenRemovedCodec.encode(event);
                }
                break;

            case XiotEventType.DEVICE_CHILDREN_ADDED:
                if (event instanceof XiotChildrenAdded) {
                    o = XiotChildrenAddedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_DEVICE_ADDED:
                if (event instanceof XiotDeviceAdded) {
                    o = XiotDeviceAddedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_DEVICE_REMOVED:
                if (event instanceof XiotDeviceRemoved) {
                    o = XiotDeviceRemovedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_DEVICE_CHANGED:
                if (event instanceof XiotDeviceChanged) {
                    o = XiotDeviceChangedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_HOME_ADDED:
                if (event instanceof XiotHomeAdded) {
                    o = XiotHomeAddedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_HOME_REMOVED:
                if (event instanceof XiotHomeRemoved) {
                    o = XiotHomeRemovedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_HOME_CHANGED:
                if (event instanceof XiotHomeChanged) {
                    o = XiotHomeChangedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_ROOM_ADDED:
                if (event instanceof XiotRoomAdded) {
                    o = XiotRoomAddedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_ROOM_REMOVED:
                if (event instanceof XiotRoomRemoved) {
                    o = XiotRoomRemovedCodec.encode(event);
                }
                break;

            case XiotEventType.USER_ROOM_CHANGED:
                if (event instanceof XiotRoomChanged) {
                    o = XiotRoomChangedCodec.encode(event);
                }
                break;

            default:
                break;
        }

        return o;
    }

    static decode(type: XiotEventType, o: any): XiotEvent | null {
        let event: XiotEvent | null = null;

        switch (type) {
            case XiotEventType.DEVICE_BRIDGE_INITIALIZED:
                event = XiotBridgeInitializedCodec.decode(o);
                break;

            case XiotEventType.DEVICE_ONLINE:
                event = XiotDeviceOnlineCodec.decode(o);
                break;

            case XiotEventType.DEVICE_OFFLINE:
                event = XiotDeviceOfflineCodec.decode(o);
                break;

            case XiotEventType.DEVICE_PROPERTIES_CHANGED:
                event = XiotPropertiesChangedCodec.decode(o);
                break;

            case XiotEventType.DEVICE_EVENT_OCCURRED:
                event = XiotEventOccurredCodec.decode(o);
                break;

            case XiotEventType.DEVICE_CHILDREN_REMOVED:
                event = XiotChildrenRemovedCodec.decode(o);
                break;

            case XiotEventType.DEVICE_CHILDREN_ADDED:
                event = XiotChildrenAddedCodec.decode(o);
                break;

            case XiotEventType.USER_DEVICE_ADDED:
                event = XiotDeviceAddedCodec.decode(o);
                break;

            case XiotEventType.USER_DEVICE_REMOVED:
                event = XiotDeviceRemovedCodec.decode(o);
                break;

            case XiotEventType.USER_DEVICE_CHANGED:
                event = XiotDeviceChangedCodec.decode(o);
                break;

            case XiotEventType.USER_HOME_ADDED:
                event = XiotHomeAddedCodec.decode(o);
                break;

            case XiotEventType.USER_HOME_REMOVED:
                event = XiotHomeRemovedCodec.decode(o);
                break;

            case XiotEventType.USER_HOME_CHANGED:
                event = XiotHomeChangedCodec.decode(o);
                break;

            case XiotEventType.USER_ROOM_ADDED:
                event = XiotRoomAddedCodec.decode(o);
                break;

            case XiotEventType.USER_ROOM_REMOVED:
                event = XiotRoomRemovedCodec.decode(o);
                break;

            case XiotEventType.USER_ROOM_CHANGED:
                event = XiotRoomChangedCodec.decode(o);
                break;

            default:
                break;
        }

        return event;
    }
}
