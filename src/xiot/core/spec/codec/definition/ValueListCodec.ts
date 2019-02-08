import {DataFormat} from '../../typedef/definition/property/data/DataFormat';
import {ValueList} from '../../typedef/definition/property/ValueList';
import {ValueDefinition} from '../../typedef/definition/property/ValueDefinition';
import {Spec} from '../../typedef/constant/Spec';

export class ValueListCodec {

  static decode(format: DataFormat, array: any[]): ValueList {
    const list = new ValueList();

      if (array != null) {
          for (const v of array) {
              if (v.hasOwnProperty('value') && v.hasOwnProperty('description')) {
                  list.values.push(new ValueDefinition(format, v[Spec.VALUE], v[Spec.DESCRIPTION]));
              }
          }
      }

    return list;
  }
}
