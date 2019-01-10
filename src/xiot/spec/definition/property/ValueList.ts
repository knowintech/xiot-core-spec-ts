import {ConstraintValue} from './ConstraintValue';
import {ValueDefinition} from './ValueDefinition';
import {DataValue} from './data/DataValue';
import {Spec} from '../../constant/Spec';

export class ValueList implements ConstraintValue {

  public values: ValueDefinition[] = [];

  validate(value: DataValue): boolean {
    for (const v of this.values) {
      if (v.value === value) {
        return true;
      }
    }

    return false;
  }

  toJsonArray(): any[] {
      const array: any[] = [];

      for (const v of this.values) {
          const o: any = {};
          o[Spec.VALUE] = v.value.getObjectValue();
          o[Spec.DESCRIPTION] = v.description;
          array.push(o);
      }

      return array;
  }

  toString(): string {
    const array = [];

    for (const v of this.values) {
      array.push(v.value.getObjectValue());
    }

    return array.join(' ');
  }
}
