import {DataFormat} from '../definition/property/data/DataFormat';
import {DataValue} from '../definition/property/data/DataValue';
import {DataValueFactory} from '../definition/property/data/DataValueFactory';

export class PropertyValue {

  format: DataFormat = DataFormat.BOOL;
  isChanged = false;
  oldValue: DataValue<any> | null = null;
  currentValue: DataValue<any>;

  currentStringValue = '';
  currentNumberValue = 0;
  currentBooleanValue = false;

  constructor(format: DataFormat) {
    this.format = format;
    this.isChanged = false;
    this.oldValue = null;
    this.currentValue = DataValueFactory.createDefaultValue(format);
    this.updateCurrentValue();
  }

  update(newValue: DataValue<any>): boolean {
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

    if (this.currentValue.getObjectValue() === newValue.getObjectValue()) {
      console.log('update failed, currentValue equals newValue, not change');
      return false;
    }

    this.oldValue = this.currentValue;
    this.currentValue = newValue;
    this.isChanged = true;
    this.updateCurrentValue();
    return true;
  }

  private updateCurrentValue(): void {
    switch (this.format) {
      case DataFormat.BOOL:
        this.currentBooleanValue = this.currentValue.getObjectValue();
        break;

      case DataFormat.FLOAT:
      case DataFormat.UINT8:
      case DataFormat.UINT16:
      case DataFormat.UINT32:
      case DataFormat.INT8:
      case DataFormat.INT16:
      case DataFormat.INT32:
      case DataFormat.INT64:
        this.currentNumberValue = this.currentValue.getObjectValue();
        break;

      case DataFormat.STRING:
        this.currentStringValue = this.currentValue.getObjectValue();
        break;

      case DataFormat.TLV8:
        this.currentStringValue = this.currentValue.getObjectValue();
        break;

      case DataFormat.HEX:
        this.currentStringValue = this.currentValue.getObjectValue();
        break;

      default:
        break;
    }
  }
}
