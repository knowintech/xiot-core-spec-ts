import {PropertyDefinition} from '../definitions/PropertyDefinition';
import {PropertyValue} from './PropertyValue';

export class Property {

  public iid: number;
  public definition: PropertyDefinition;
  public value: PropertyValue;

  trySetValue(value: Object): boolean {
    return false;
  }

  setValue(value: Object): boolean {
    return false;
  }
}
