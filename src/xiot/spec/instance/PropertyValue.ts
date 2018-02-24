import {DataFormat} from '../definitions/property/data/DataFormat';
import {DataValue} from '../definitions/property/data/DataValue';

export class PropertyValue {

  public format: DataFormat;
  public isChanged: boolean;
  public oldValue: DataValue;
  public currentValue: DataValue;
}
