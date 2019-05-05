import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vstring implements DataValue<string> {

    private value: string = '';

    static create(value: Object): Vstring {
      if (typeof(value) === 'string') {
        const v = new Vstring();
        v.value = <string>value;
        return v;
      }

      throw new Error('invalid value: ' + value + ' typeof(value): ' + typeof(value));
    }

    lessEquals(maxValue: DataValue<string>): boolean {
      return false;
    }

    validate(min: DataValue<string>, max: DataValue<string>): boolean {
      return false;
    }

    validateStep(min: DataValue<string>, max: DataValue<string>, step: DataValue<string> | null): boolean {
      return false;
    }

    getObjectValue(): string {
      return this.value;
    }

    getFormat(): DataFormat {
      return DataFormat.STRING;
    }
  }
