export enum XepMessageType {
    UNDEFINED = 'undefined',
    PING = 'ping',
    PONE = 'pong',
    EVENT = 'event'
}

export function XepMessageTypeFromString(name: string): XepMessageType {
    const keys: (keyof typeof XepMessageType)[] = <(keyof typeof XepMessageType)[]>Object.keys(XepMessageType);

    for (const key of keys) {
        const s = XepMessageTypeToString(XepMessageType[key]);
        if (s === name) {
            return XepMessageType[key];
        }
    }

    return XepMessageType.UNDEFINED;
}

export function XepMessageTypeToString(type: XepMessageType) {
    return type.toString();
}
