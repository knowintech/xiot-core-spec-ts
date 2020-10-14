export enum XepRecordType {
    UNDEFINED = 'undefined',
    DEVICE_ADDED = 'device-added',
    DEVICE_REMOVED = 'device-removed',
    DEVICE_SUMMARY_CHANGED = 'device-summary-changed',
    DEVICE_PROPERTIES_CHANGED = 'device-properties-changed',
    DEVICE_EVENT_OCCURRED = 'device-event-occurred',
    // INTEROPERATION_ADDED = 'interoperation-added',
    // INTEROPERATION_REMOVED = 'interoperation-removed',
    // INTEROPERATION_CHANGED = 'interoperation-changed',
}

export function XepRecordTypeFromString(name: string): XepRecordType {
    const keys: (keyof typeof XepRecordType)[] = <(keyof typeof XepRecordType)[]>Object.keys(XepRecordType);

    for (const key of keys) {
        const s = XepRecordTypeToString(XepRecordType[key]);
        if (s === name) {
            return XepRecordType[key];
        }
    }

    return XepRecordType.UNDEFINED;
}

export function XepRecordTypeToString(type: XepRecordType) {
    return type.toString();
}
