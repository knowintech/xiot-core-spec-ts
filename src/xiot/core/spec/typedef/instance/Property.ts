import {PropertyDefinition} from '../definition/PropertyDefinition';
import {PropertyValue} from './PropertyValue';
import {DataValueFactory} from '../definition/property/data/DataValueFactory';
import {ValueDefinition} from '../definition/property/ValueDefinition';

export class Property extends PropertyDefinition {

  iid = 0;
  value: PropertyValue;

  status = 0;
  description = '';

  constructor(iid: number, def: PropertyDefinition) {
    super(def.type, def.type.description);
    this.iid = iid;
    this.format = def.format;
    this.access = def.access;
    this.constraintValue = def.constraintValue;
    this.unit = def.unit;
    this.value = new PropertyValue(this.format);
    this.fixDefaultValue();
  }

  fixDefaultValue(): void {
    if (this.hasConstraintValue()) {
      const list = this.valueList();
      const range = this.valueRange();

      if (list != null) {
        const v: ValueDefinition = list.values[0];
        if (v != null) {
          this.value.currentValue = v.value;
        }
      } else if (range != null) {
        const v = range.minValue;
        if (v != null) {
          this.value.currentValue = v;
        }
      }
    }
  }

  trySetValue(value: Object): boolean {
    if (this.value == null) {
      return false;
    }

    return this.setDataValue(value, false);
  }

  trySetValues(values: any[]): boolean {
    for (const o of values) {
        if (! this.trySetValue(o)) {
            return false;
        }
    }

    return true;
  }

  setValue(value: Object): boolean {
    return this.setDataValue(value, true);
  }

  private setDataValue(newValue: Object, write: boolean): boolean {
    if (newValue == null) {
      console.log('setDataValue failed: newValue is null');
      return false;
    }

    const v = DataValueFactory.create(this.format, newValue);

    if (! this.validate(v)) {
      console.log('setDataValue failed, validate failed: ', v);
      return false;
    }

    if (this.value == null) {
      console.log('setDataValue failed, property.value is null');
      return false;
    }

    if (write) {
      return this.value.update(v);
    }

    return true;
  }
}
