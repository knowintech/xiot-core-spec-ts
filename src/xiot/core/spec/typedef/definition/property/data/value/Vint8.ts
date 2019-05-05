import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';
import {Vuint32} from './Vuint32';

export class Vint8 implements DataValue<number> {

    private value: number = 0;

    static create(value: Object): Vint8 {
      if (typeof(value) === 'number') {
        const v = new Vint8();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value + ' typeof(value): ' + typeof(value));
    }

    static fromString(value: string): Vint8 {
        const v = new Vint8();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue<number>): boolean {
      if (!(max instanceof Vint8)) {
        return false;
      }

      return this.value <= (<Vint8> max).value;
    }

    validate(min: DataValue<number>, max: DataValue<number>): boolean {
      if (!(min instanceof Vint8) || !(max instanceof Vint8)) {
        return false;
      }

      if (this.value < (<Vint8> min).value || this.value > (<Vint8> max).value) {
        return false;
      }

      return true;
    }

    validateStep(min: DataValue<number>, max: DataValue<number>, step: DataValue<number> | null): boolean {
      if (!(min instanceof Vint8) || !(max instanceof Vint8) || !(step instanceof Vint8)) {
        return false;
      }

      const minValue = (<Vint8> min).value;
      const maxValue = (<Vint8> max).value;
      const stepValue = (<Vint8> step).value;

      for (let v = minValue; v < maxValue; v += stepValue) {
        if (v === this.value) {
          return true;
        }
      }

      return false;
    }

    getObjectValue(): number {
      return this.value;
    }

    getFormat(): DataFormat {
      return DataFormat.INT8;
    }
  }
