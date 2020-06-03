export enum DeviceRecordType {
    UNDEFINED = 'undefined',
    ONLINE = 'online',
    OFFLINE = 'offline',
    PROPERTIES_CHANGED = 'properties-changed',
    EVENT_OCCURRED = 'event-occurred',
    CHILDREN_REMOVED = 'children-removed',
    CHILDREN_ADDED = 'children-added'
}

export function DeviceRecordTypeToString(type: DeviceRecordType): string {
    return type.toString();
}

export function DeviceRecordTypeFromString(type: string): DeviceRecordType {
    const keys: (keyof typeof DeviceRecordType)[] = <(keyof typeof DeviceRecordType)[]>Object.keys(DeviceRecordType);

    for (const key of keys) {
        const s = DeviceRecordTypeToString(DeviceRecordType[key]);
        if (s === type) {
            return DeviceRecordType[key];
        }
    }

    return DeviceRecordType.UNDEFINED;
}
