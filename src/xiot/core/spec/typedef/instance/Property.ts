import {PropertyDefinition} from '../definition/PropertyDefinition';
import {PropertyValue} from './PropertyValue';
import {DataValueFactory} from '../definition/property/data/DataValueFactory';
import {ValueDefinition} from '../definition/property/ValueDefinition';

export class Property extends PropertyDefinition {
  public iid: number = 0;
  public value: PropertyValue;
  public status: number = 0;
  public description: string = '';

  constructor(def: PropertyDefinition, iid: number) {
    super();
    this.type = def.type;
    this.format = def.format;
    this.description = def.description;
    this.access = def.access;
    this.constraintValue = def.constraintValue;
    this.unit = def.unit;
    this.iid = iid;
    this.value = new PropertyValue(this.format);
    this.fixDefaultValue();
  }

  fixDefaultValue(): void {
    if (this.hasConstraintValue()) {
      let list = this.valueList();
      let range = this.valueRange();

      if (list != null) {
        let v: ValueDefinition = list.values[0];
        if (v != null) {
          this.value.currentValue = v.value;
        }
      } else if (range != null) {
        let v = range.minValue;
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
    for (let o of values) {
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
      return false;
    }

    const v = DataValueFactory.create(this.format, newValue);

    if (! this.validate(v)) {
      return false;
    }

    if (this.value == null) {
      return false;
    }

    if (write) {
      this.value.update(v);
    }

    return true;
  }
}
