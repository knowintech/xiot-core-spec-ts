import {PropertyType} from './urn/PropertyType';
import {DataFormat, DataFormatToString} from './property/data/DataFormat';
import {Access} from './property/Access';
import {Unit, UnitToString} from './property/Unit';
import {ConstraintValue} from './property/ConstraintValue';
import {DataValue} from './property/data/DataValue';
import {ValueList} from './property/ValueList';
import {ValueRange} from './property/ValueRange';

export class PropertyDefinition {

  type: PropertyType;
  format: DataFormat = DataFormat.BOOL;
  access: Access = new Access();
  constraintValue: ConstraintValue | null = null;
  unit: Unit = Unit.NONE;

  constructor(type: PropertyType, description: Map<string, string>) {
    this.type = type;

    if (description != null) {
      this.type.description = description;
    }
  }

  validate(value: DataValue<any>): boolean {
    if (value == null) {
      console.log('validate failed, value is null');
      return false;
    }

    if (this.format !== value.getFormat()) {
      console.log('validate failed, format not matched: ' + this.format.toString() + ' != ' + value.getFormat().toString());
      return false;
    }

    if (this.constraintValue == null) {
      return true;
    }

    if (this.constraintValue.validate(value)) {
      return true;
    }

    console.log('validate failed: ', this.constraintValue.toString() + ' invalid value: ' + value.getObjectValue());
    return false;
  }

  getFormatString(): string {
    return DataFormatToString(this.format);
  }

  isEditableTextValue(): boolean {
    if (this.valueList() != null) {
      return false;
    }

    if (this.format === DataFormat.BOOL) {
      return false;
    }

    if (! this.access.isWritable) {
      return false;
    }

    return true;
  }

  isReadOnlyTextValue(): boolean {
    if (this.valueList() != null) {
      return false;
    }

    if (this.format === DataFormat.BOOL) {
      return false;
    }

    if (this.access.isWritable) {
      return false;
    }

    if (! this.access.isReadable) {
      return false;
    }

    return true;
  }

  getUnitString(): string {
    return UnitToString(this.unit);
  }

  formatBoolean(): boolean {
    return this.format === DataFormat.BOOL;
  }

  formatNumber(): boolean {
    switch (this.format) {
      case DataFormat.UINT8:
      case DataFormat.UINT16:
      case DataFormat.UINT32:
      case DataFormat.INT8:
      case DataFormat.INT16:
      case DataFormat.INT32:
      case DataFormat.INT64:
      case DataFormat.FLOAT:
        return true;

      default:
        return false;
    }
  }

  formatString(): boolean {
    switch (this.format) {
      case DataFormat.STRING:
      case DataFormat.TLV8:
      case DataFormat.HEX:
        return true;

      default:
        return false;
    }
  }

  hasConstraintValue(): boolean {
    return (this.constraintValue != null);
  }

  hasValueRange(): boolean {
    if (this.constraintValue == null) {
      return false;
    }

    if (this.constraintValue instanceof ValueRange) {
      return true;
    }

    return false;
  }

  hasValueList(): boolean {
    if (this.constraintValue == null) {
      return false;
    }

    if (this.constraintValue instanceof ValueList) {
      return true;
    }

    return false;
  }

  valueRange(): ValueRange | null {
    if (this.constraintValue == null) {
      return null;
    }

    if (this.constraintValue instanceof ValueRange) {
      return this.constraintValue;
    }

    return null;
  }

  valueList(): ValueList | null {
    if (this.constraintValue !== null) {
      if (this.constraintValue instanceof ValueList) {
        return this.constraintValue;
      }
    }

    return null;
  }
}
