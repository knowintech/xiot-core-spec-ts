import {PropertyDefinition} from '../../spec/definitions/PropertyDefinition';
import {Spec} from '../../spec/constant/Spec';
import {PropertyType} from '../../spec/definitions/urn/PropertyType';
import {DataFormatFromString} from '../../spec/definitions/property/data/DataFormat';
import {Access} from '../../spec/definitions/property/Access';
import {DefinitionCodec} from './DefinitionCodec';
import {UnitFromString} from '../../spec/definitions/property/Unit';

export class PropertyDefinitionCodec {

  static decode(value: string): PropertyDefinition {
    const json = JSON.parse(value);

    const def = new PropertyDefinition();
    def.type = PropertyType.valueOf(json.getString(Spec.TYPE, ''));
    def.description = json.getString(Spec.DESCRIPTION, '');
    def.format = DataFormatFromString(json.getString(Spec.FORMAT, ''));
    def.access = Access.create(json.get(Spec.ACCESS, ''));
    def.constraintValue = null;
    def.unit = UnitFromString(json.getString(Spec.UNIT, ''));

    if (json.hasOwnProperty(Spec.VALUE_LIST) && json.hasOwnProperty(Spec.VALUE_RANGE)) {
      throw new Error('value-list & value-range both exist!');
    }

    if (json.hasOwnProperty(Spec.VALUE_LIST)) {
      def.constraintValue = DefinitionCodec.decodeValueList(def.format, json.get(Spec.VALUE_LIST));
    }

    if (json.hasOwnProperty(Spec.VALUE_RANGE)) {
      def.constraintValue = DefinitionCodec.decodeValueRange(def.format, json.get(Spec.VALUE_RANGE));
    }

    return def;
  }

  static encode(def: PropertyDefinition): Object {
    return null;
  }
}
