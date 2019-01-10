import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vstring implements DataValue {

    private value: string = '';

    static create(value: Object): Vstring {
      if (typeof(value) === 'string') {
        const v = new Vstring();
        v.value = <string>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
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
      return DataFormat.STRING;
    }
  }
