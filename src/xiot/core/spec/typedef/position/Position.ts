export enum Position {
  UNDEFINED = 'undefined',
  ZIGBEE = 'zigbee',
  BTMESH = 'btmesh',
  EDGE = 'edge'
}

export function PositionToString(type: Position): string {
  return type.toString();
}

export function PositionFromString(type: string): Position {
  const keys: (keyof typeof Position)[] = <(keyof typeof Position)[]>Object.keys(Position);

  for (const key of keys) {
      const s = PositionToString(Position[key]);
      if (s === type) {
          return Position[key];
      }
  }

  return Position.UNDEFINED;
}
