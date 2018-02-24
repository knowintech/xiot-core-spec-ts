import {DataFormat} from '../../spec/definitions/property/data/DataFormat';
import {ValueList} from '../../spec/definitions/property/ValueList';
import {ValueRange} from '../../spec/definitions/property/ValueRange';
import {PropertyType} from '../../spec/definitions/urn/PropertyType';
import {ServiceType} from '../../spec/definitions/urn/ServiceType';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {EventType} from '../../spec/definitions/urn/EventType';
import {ValueDefinition} from '../../spec/definitions/property/ValueDefinition';

export class DefinitionCodec {

  static decodeValueList(format: DataFormat, array: Array<Object>): ValueList {
    const list = new ValueList();

    for (const v of array) {
      if (v.hasOwnProperty('value') && v.hasOwnProperty('description')) {
        console.log('v: ' + v.toString());
        // const def = new ValueDefinition(format, v.get('value'), v.get('description'));
        // list.values.push(def);
      }
    }

    return list;
  }

  static decodeValueRange(format: DataFormat, range: Array<Object>): ValueRange {
    return new ValueRange(format, range);
  }

  static decodeProperties(array: Array<string>): Array<PropertyType> {
    const list = [];

    for (const v of array) {
      list.push(PropertyType.valueOf(v));
    }

    return list;
  }

  static decodeServices(array: Array<string>): Array<ServiceType> {
    const list = [];

    for (const v of array) {
      list.push(ServiceType.valueOf(v));
    }

    return list;
  }

  static decodeActions(array: Array<string>): Array<ActionType> {
    const list = [];

    for (const v of array) {
      list.push(ActionType.valueOf(v));
    }

    return list;
  }

  static decodeEvents(array: Array<string>): Array<EventType> {
    const list = [];

    for (const v of array) {
      list.push(EventType.valueOf(v));
    }

    return list;
  }
}
