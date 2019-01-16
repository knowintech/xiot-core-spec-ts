
export enum Unit {
    NONE = 'none',
    PERCENTAGE = 'percentage',
    CELSIUS = 'celsius',
    LUX = 'lux',
    UNITLESS = 'unitless',
    SECONDS = 'seconds',
    ARC_DEGREES = 'arcdegrees',
    PASCAL = 'pascal',
    KELVIN = 'kelvin',
    WATT = 'watt',
    METER_PRE_SECOND = 'meter_per_second',
    KM_PER_HOUR = 'km_per_hour',
    STEP_PER_SECOND = 'step_per_second',
    METER = 'meter',
    CAL = 'cal',
    MINUTES = 'minutes',
    HOURS = 'hours',
    DAYS = 'days',
    RGB = 'rgb',
}

export function UnitToString(type: Unit): string {
    return (type == Unit.NONE) ?  '' : type.toString();
}

export function getAllUnits(): Unit[] {
    let list: Unit[] = [];

    const keys: (keyof typeof Unit)[] = <(keyof typeof Unit)[]>Object.keys(Unit);
    for (const key of keys) {
        list.push(Unit[key]);
    }

    return list;
}

export function UnitFromString(type: string): Unit {
    const keys: (keyof typeof Unit)[] = <(keyof typeof Unit)[]>Object.keys(Unit);

    for (const key of keys) {
        const s = UnitToString(Unit[key]);
        if (s === type) {
            return Unit[key];
        }
    }

    return Unit.NONE;
}