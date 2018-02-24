import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vbool implements DataValue {

  private value: boolean;

  static create(value: Object): Vbool {
    if (typeof(value) === 'boolean') {
      const v = new Vbool();
      v.value = <boolean>value;
      return v;
    }

    if (typeof value === 'number') {
      const v = new Vbool();
      v.value = (<number>value) === 1;
      return v;
    }

    throw new Error('invalid value: ' + value);
  }

  lessEquals(maxValue: DataValue): boolean {
    return undefined;
  }

  validate(min: DataValue, max: DataValue): boolean {
    return undefined;
  }

  validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
    return undefined;
  }

  getObjectValue(): Object {
    return this.value;
  }

  getFormat(): DataFormat {
    return DataFormat.BOOL;
  }
}
