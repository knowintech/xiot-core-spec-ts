export enum Unit {

  NONE,
  PERCENTAGE,
  CELSIUS,
  LUX,
  UNITLESS,
  SECONDS,
  ARC_DEGREES,
  PASCAL,
}

const _UnitMapping: [Unit, string][] = [
  [Unit.PERCENTAGE, 'percentage'],
  [Unit.CELSIUS, 'celsius'],
  [Unit.LUX, 'lux'],
  [Unit.UNITLESS, 'unitless'],
  [Unit.SECONDS, 'seconds'],
  [Unit.ARC_DEGREES, 'arcdegrees'],
  [Unit.PASCAL, 'pascal'],
];

export function UnitToString(type: Unit): string {
  for (const t of _UnitMapping) {
    if (t[0] === type) {
      return t[1];
    }
  }

  return 'none';
}

export function UnitFromString(type: string): Unit {
  for (const t of _UnitMapping) {
    if (t[1] === type) {
      return t[0];
    }
  }

  return Unit.NONE;
}
