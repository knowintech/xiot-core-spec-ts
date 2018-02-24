import {ServiceType} from './urn/ServiceType';
import {DataFormat} from './property/data/DataFormat';
import {Access} from './property/Access';
import {Unit} from './property/Unit';
import {ConstraintValue} from './property/ConstraintValue';
import {DataValue} from './property/data/DataValue';

export class PropertyDefinition {
  public type: ServiceType;
  public description: string;
  public format: DataFormat;
  public access: Access;
  public constraintValue: ConstraintValue;
  public unit: Unit;

  validate(value: DataValue): boolean {
    if (value == null) {
      return false;
    }

    if (this.format === value.getFormat()) {
      return false;
    }

    if (this.constraintValue != null) {
      return this.constraintValue.validate(value);
    }

    return true;
  }
}
