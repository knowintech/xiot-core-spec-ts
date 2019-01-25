import {PropertyDefinition} from '../definition/PropertyDefinition';
import {PropertyValue} from './PropertyValue';
import {DataValueFactory} from '../definition/property/data/DataValueFactory';

export class Property {
  public iid: number = 0;
  public definition: PropertyDefinition | null = null;
  public value: PropertyValue | null = null;

  public valueToWrite: any | null = null;

  trySetValue(value: Object): boolean {
    if (this.definition == null) {
      return false;
    }

    if (this.value == null) {
      this.value = PropertyValue.create(this.definition.format);
    }

    return this.setDataValue(value, false);
  }

  setValue(value: Object): boolean {
    return this.setDataValue(value, true);
  }

  private setDataValue(newValue: Object, write: boolean): boolean {
    if (this.definition == null) {
      return false;
    }

    if (newValue == null) {
      return false;
    }

    const v = DataValueFactory.create(this.definition.format, newValue);

    if (! this.definition.validate(v)) {
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
