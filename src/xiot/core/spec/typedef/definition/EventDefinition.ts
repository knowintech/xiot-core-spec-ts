import {EventType} from './urn/EventType';
import {ArgumentDefinition} from './ArgumentDefinition';

export class EventDefinition {

  type: EventType;
  arguments: ArgumentDefinition[] = [];

  constructor(type: EventType,
              description: Map<string, string>,
              a: ArgumentDefinition[]) {
    this.type = type;

    if (description != null) {
      this.type.description = description;
    }

    if (arguments != null) {
      this.arguments = a;
    }
  }
}
