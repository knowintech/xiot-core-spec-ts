import {DataFormat} from '../definition/property/data/DataFormat';
import {DataValue} from '../definition/property/data/DataValue';
import {DataValueFactory} from '../definition/property/data/DataValueFactory';

export class PropertyValue {

  format: DataFormat = DataFormat.BOOL;
  isChanged: boolean = false;
  oldValue: DataValue<any> | null = null;
  currentValue: DataValue<any>;

  constructor(format: DataFormat) {
    this.format = format;
    this.isChanged = false;
    this.oldValue = null;
    this.currentValue = DataValueFactory.createDefaultValue(format);
  }

  update(newValue: DataValue<any>) {
    if (newValue == null) {
      throw new Error('update failed: newValue is null');
    }

    if (this.format !== newValue.getFormat()) {
      throw new Error('update failed: newValue invalid format');
    }

    if (this.currentValue == null) {
      this.currentValue = newValue;
      this.isChanged = true;
    }

    if (this.currentValue === newValue) {
      return;
    }

    this.oldValue = this.currentValue;
    this.currentValue = newValue;
    this.isChanged = true;
  }
}