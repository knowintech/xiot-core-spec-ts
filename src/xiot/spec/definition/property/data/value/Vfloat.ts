import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vfloat implements DataValue<number> {
    private value: number = 0;

    static create(value: Object): Vfloat {
      if (typeof(value) === 'number') {
        const v = new Vfloat();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vfloat {
      const v = new Vfloat();
      v.value = Number.parseFloat(value);
      return v;
    }

    lessEquals(max: DataValue<number>): boolean {
      if (!(max instanceof Vfloat)) {
        return false;
      }

      return this.value < (<Vfloat> max).value;
    }

    validate(min: DataValue<number>, max: DataValue<number>): boolean {
      if (!(min instanceof Vfloat) || !(max instanceof Vfloat)) {
        return false;
      }

      if (this.value < (<Vfloat> min).value || this.value > (<Vfloat> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue<number>, max: DataValue<number>, step: DataValue<number> | null): boolean {
      if (!(min instanceof Vfloat) || !(max instanceof Vfloat) || !(step instanceof Vfloat)) {
        return false;
      }

      const minValue = (<Vfloat> min).value;
      const maxValue = (<Vfloat> max).value;
      const stepValue = (<Vfloat> step).value;

      for (let v = minValue; v < maxValue; v += stepValue) {
        if ((v - this.value) < 0.00001) {
          return true;
        }
      }

      return false;
    }

    getObjectValue(): number {
      return this.value;
    }

    getFormat(): DataFormat {
      return DataFormat.FLOAT;
    }
}
