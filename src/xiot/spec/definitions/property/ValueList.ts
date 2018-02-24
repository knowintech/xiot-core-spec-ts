import {ConstraintValue} from './ConstraintValue';
import {ValueDefinition} from './ValueDefinition';
import {DataValue} from './data/DataValue';

export class ValueList implements ConstraintValue {

  public values: Array<ValueDefinition>;

  constructor() {
    this.values = [];
  }

  validate(value: DataValue): boolean {
    for (const v of this.values) {
      if (v.value === value) {
        return true;
      }
    }

    return false;
  }
}
