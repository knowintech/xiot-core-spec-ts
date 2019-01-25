import {DataFormat} from '../../spec/definition/property/data/DataFormat';
import {ValueRange} from '../../spec/definition/property/ValueRange';

export class ValueRangeCodec {

  static decode(format: DataFormat, range: any[]): ValueRange {
    return new ValueRange(format, range);
  }
}
