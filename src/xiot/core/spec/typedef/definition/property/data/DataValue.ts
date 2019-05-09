import {DataFormat} from './DataFormat';

export interface DataValue<T> {

  equals(other: DataValue<T>): boolean;

  lessEquals(maxValue: DataValue<T>): boolean;

  validate(min: DataValue<T>, max: DataValue<T>): boolean;

  validateStep(min: DataValue<T>, max: DataValue<T>, step: DataValue<T> | null): boolean;

  getObjectValue(): T;

  getFormat(): DataFormat;
}
