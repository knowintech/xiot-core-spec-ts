import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vuint32 implements DataValue {

    private value: number;

    static create(value: Object): Vuint32 {
      if (typeof(value) === 'number') {
        const v = new Vuint32();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    lessEquals(max: DataValue): boolean {
      if (!(max instanceof Vuint32)) {
        return false;
      }

      return this.value < (<Vuint32> max).value;
    }

    validate(min: DataValue, max: DataValue): boolean {
      if (!(min instanceof Vuint32) || !(max instanceof Vuint32)) {
        return false;
      }

      if (this.value < (<Vuint32> min).value || this.value > (<Vuint32> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
      if (!(min instanceof Vuint32) || !(max instanceof Vuint32) || !(step instanceof Vuint32)) {
        return false;
      }

      const minValue = (<Vuint32> min).value;
      const maxValue = (<Vuint32> max).value;
      const stepValue = (<Vuint32> step).value;

      for (let v = minValue; v < maxValue; v += stepValue) {
        if (v === this.value) {
          return true;
        }
      }

      return false;
    }

    getObjectValue(): Object {
      return this.value;
    }

    getFormat(): DataFormat {
      return DataFormat.UINT32;
    }
  }
