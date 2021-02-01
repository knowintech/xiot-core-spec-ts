export enum OwnerRecordType {
    /**
     * undefined
     */
    UNDEFINED = 'undefined',

    /**
     * device added
     */
    DEVICE_ADDED = 'device-added',

    /**
     * device removed
     */
    DEVICE_REMOVED = 'device-removed',

    /**
     * device summary changed
     */
    DEVICE_SUMMARY_CHANGED = 'device-summary-changed',

    /**
     * device properties changed
     */
    DEVICE_PROPERTIES_CHANGED = 'device-properties-changed',

    /**
     * device event occurred
     */
    DEVICE_EVENT_OCCURRED = 'device-event-occurred',

    /**
     * interoperation added
     */
    INTEROPERATION_ADDED = 'interoperation-added',

    /**
     * interoperation removed
     */
    INTEROPERATION_REMOVED = 'interoperation-removed',

    /**
     * interoperation changed
     */
    INTEROPERATION_CHANGED = 'interoperation-changed',

    /**
     * ownership taken
     */
    OWNERSHIP_TAKEN = 'ownership-taken',

    /**
     * ownership disclaimed
     */
    OWNERSHIP_DISCLAIMED = 'ownership-disclaimed',

    /**
     * device name changed
     */
    DEVICE_NAME_CHANGED = 'device-name-changed',

    /**
     * device space changed
     */
    DEVICE_SPACE_CHANGED = 'device-space-changed',

    /**
     * space created
     */
    SPACE_CREATED = 'space-created',

    /**
     * space deleted
     */
    SPACE_DELETED = 'space-deleted',

    /**
     * space modified
     */
    SPACE_MODIFIED = 'space-modified'
}

export function OwnerRecordTypeToString(type: OwnerRecordType): string {
    return type.toString();
}

export function OwnerRecordTypeFromString(type: string): OwnerRecordType {
    const keys: (keyof typeof OwnerRecordType)[] = <(keyof typeof OwnerRecordType)[]>Object.keys(OwnerRecordType);

    for (const key of keys) {
        const s = OwnerRecordTypeToString(OwnerRecordType[key]);
        if (s === type) {
            return OwnerRecordType[key];
        }
    }

    return OwnerRecordType.UNDEFINED;
}
