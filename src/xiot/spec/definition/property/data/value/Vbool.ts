import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vbool implements DataValue {

  private value: boolean = false;

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

    throw new Error('invalid value: ' + value + ' type: ' + typeof value);
  }

  static fromString(value: string): Vbool {
    if (value === 'true') {
      const v = new Vbool();
      v.value = true;
      return v;
    } else if (value === 'false') {
      const v = new Vbool();
      v.value = false;
      return v;
    }

    throw new Error('Vbool invalid value: ' + value);
  }

  lessEquals(maxValue: DataValue): boolean {
    return false;
  }

  validate(min: DataValue, max: DataValue): boolean {
    return false;
  }

  validateStep(min: DataValue, max: DataValue, step: DataValue | null): boolean {
    return false;
  }

  getObjectValue(): Object {
    return this.value;
  }

  getFormat(): DataFormat {
    return DataFormat.BOOL;
  }
}
