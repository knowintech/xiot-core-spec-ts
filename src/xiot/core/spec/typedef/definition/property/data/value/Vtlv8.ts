import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vtlv8 implements DataValue<string> {

    private value = '';

    static create(value: Object): Vtlv8 {
      if (typeof(value) === 'string') {
        const v = new Vtlv8();
        v.value = <string>value;
        return v;
      }

      throw new Error('invalid value: ' + value + ' typeof(value): ' + typeof(value));
    }

    static fromString(value: string): Vtlv8 {
        const v = new Vtlv8();
        v.value = value;
        return v;
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
      return DataFormat.TLV8;
    }
  }
