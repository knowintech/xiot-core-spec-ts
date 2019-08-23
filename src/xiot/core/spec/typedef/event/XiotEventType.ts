export enum XiotEventType {
    UNDEFINED = 'undefined',
    DEVICE_ONLINE = 'device-online',
    DEVICE_OFFLINE = 'device-offline',
    DEVICE_PROPERTIES_CHANGED = 'device-properties-changed',
    DEVICE_EVENT_OCCURRED = 'device-event-occurred',
    DEVICE_CHILDREN_REMOVED = 'device-children-removed',
    DEVICE_CHILDREN_ADDED = 'device-children-added',
    DEVICE_BRIDGE_INITIALIZED = 'device-bridge-initialized',
    USER_DEVICE_ADDED = 'user-device-added',
    USER_DEVICE_REMOVED = 'user-device-removed',
    USER_DEVICE_CHANGED = 'user-device-changed',
    USER_HOME_ADDED = 'home-added',
    USER_HOME_REMOVED = 'home-removed',
    USER_HOME_CHANGED = 'home-changed',
    USER_ROOM_ADDED = 'room-added',
    USER_ROOM_REMOVED = 'room-changed',
    USER_ROOM_CHANGED = 'room-changed'
}

export function XiotEventTypeToString(type: XiotEventType): string {
    return type.toString();
}

export function XiotEventTypeFromString(type: string): XiotEventType {
    const keys: (keyof typeof XiotEventType)[] = <(keyof typeof XiotEventType)[]>Object.keys(XiotEventType);

    for (const key of keys) {
        const s = XiotEventTypeToString(XiotEventType[key]);
        if (s === type) {
            return XiotEventType[key];
        }
    }

    return XiotEventType.UNDEFINED;
}
