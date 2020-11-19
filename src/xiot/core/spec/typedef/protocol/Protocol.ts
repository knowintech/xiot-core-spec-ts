export enum Protocol {
  UNDEFINED = 'undefined',
  ZIGBEE = 'zigbee',
  BTMESH = 'btmesh',
  WIFI = 'wifi',
  VIRTUAL = 'virtual',
}

export function ProtocolToString(protocol: Protocol): string {
  return protocol.toString();
}

export function ProtocolFromString(protocol: string): Protocol {
  const keys: (keyof typeof Protocol)[] = <(keyof typeof Protocol)[]>Object.keys(Protocol);

  for (const key of keys) {
      const s = ProtocolToString(Protocol[key]);
      if (s === protocol) {
          return Protocol[key];
      }
  }

  return Protocol.UNDEFINED;
}
