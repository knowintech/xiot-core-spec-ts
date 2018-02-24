import {DataValue} from './DataValue';
import {DataFormat} from './DataFormat';
import {Vbool} from './value/Vbool';
import {Vstring} from './value/Vstring';
import {Vfloat} from './value/Vfloat';
import {Vuint8} from './value/Vuint8';
import {Vuint16} from './value/Vuint16';
import {Vuint32} from './value/Vuint32';
import {Vint8} from './value/Vint8';
import {Vint16} from './value/Vint16';
import {Vint32} from './value/Vint32';
import {Vint64} from './value/Vint64';

export class DataValueFactory {

  static create(format: DataFormat, value: Object): DataValue {
    switch (format) {
      case DataFormat.BOOL:
        return Vbool.create(value);

      case DataFormat.STRING:
        return Vstring.create(value);

      case DataFormat.FLOAT:
        return Vfloat.create(value);

      case DataFormat.UINT8:
        return Vuint8.create(value);

      case DataFormat.UINT16:
        return Vuint16.create(value);

      case DataFormat.UINT32:
        return Vuint32.create(value);

      case DataFormat.INT8:
        return Vint8.create(value);

      case DataFormat.INT16:
        return Vint16.create(value);

      case DataFormat.INT32:
        return Vint32.create(value);

      case DataFormat.INT64:
        return Vint64.create(value);
    }

    throw new Error('format invalid: ' + format);
  }
}
