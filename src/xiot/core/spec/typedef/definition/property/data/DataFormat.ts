export enum DataFormat {
  UNKNOWN = 'unknown',
  BOOL = 'bool',
  UINT8 = 'uint8',
  UINT16 = 'uint16',
  UINT32 = 'uint32',
  INT8 = 'int8',
  INT16 = 'int16',
  INT32 = 'int32',
  INT64 = 'int64',
  FLOAT = 'float',
  STRING = 'string',
  HEX = 'hex',
  TLV8 = 'tlv8'
}

export function DataFormatToString(format: DataFormat): string {
  return format.toString();
}

export function DataFormatFromString(format: string): DataFormat {
  const keys: (keyof typeof DataFormat)[] = <(keyof typeof DataFormat)[]>Object.keys(DataFormat);

  for (const key of keys) {
      const s = DataFormatToString(DataFormat[key]);
      if (s === format) {
          return DataFormat[key];
      }
  }

  return DataFormat.UNKNOWN;
}

export function getValueRangeEnabled(format: DataFormat): boolean {
  switch (format) {
    case DataFormat.UINT8:
    case DataFormat.UINT16:
    case DataFormat.UINT32:
    case DataFormat.INT8:
    case DataFormat.INT16:
    case DataFormat.INT32:
    case DataFormat.INT64:
    case DataFormat.FLOAT:
    case DataFormat.HEX:
      return true;

    default:
      return false;
  }
}

export function getValueListEnabled(format: DataFormat): boolean {
  switch (format) {
    case DataFormat.UINT8:
    case DataFormat.UINT16:
    case DataFormat.UINT32:
    case DataFormat.INT8:
    case DataFormat.INT16:
    case DataFormat.INT32:
    case DataFormat.INT64:
    case DataFormat.HEX:
      return true;

    default:
      return false;
  }
}
