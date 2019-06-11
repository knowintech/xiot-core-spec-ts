import {Service} from '../instance/Service';
import {PropertyOperation} from '../operation/PropertyOperation';
import {ActionOperation} from '../operation/ActionOperation';
import {OperableProperty} from './OperableProperty';
import {OperationStatus} from '../status/OperationStatus';
import {OperableAction} from './OperableAction';
import {ServiceType} from '../definition/urn/ServiceType';
import {OperableEvent} from './OperableEvent';

export class OperableService extends Service {

  constructor(iid: number,
              type: ServiceType,
              description: Map<string, string>,
              properties: OperableProperty[],
              actions: OperableAction[],
              events: OperableEvent[]) {
    super(iid, type, description, properties, actions, events);
  }

  getOperablePropertys(): OperableProperty[] {
    return super.getProperties()
        .filter(x => x instanceof OperableProperty)
        .map(x => <OperableProperty>x);
  }

  getOperableActions(): OperableAction[] {
    return super.getActions()
        .filter(x => x instanceof OperableAction)
        .map(x => <OperableAction>x);
  }

  getOperableEvents(): OperableEvent[] {
    return super.getEvents()
        .filter(x => x instanceof OperableEvent)
        .map(x => <OperableEvent>x);
  }

  tryRead(o: PropertyOperation) {
    if (o.pid == null) {
      return;
    }

     const p = this.properties.get(o.pid.iid);
     if (p != null) {
       if (p instanceof OperableProperty) {
         p.tryRead(o);
       } else {
         o.status = (<number>OperationStatus.UNDEFINED);
         o.description = 'property not instanceof OperableProperty';
       }
     } else {
       o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
       o.description = 'property not found';
     }
  }

  tryWrite(o: PropertyOperation, save: boolean) {
    if (o.pid == null) {
      return;
    }

    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof OperableProperty) {
        p.tryWrite(o, save);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'property not instanceof OperableProperty';
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
      o.description = 'property not found';
    }
  }

  tryInvoke(o: ActionOperation) {
    if (o.aid == null) {
      return;
    }

    const a = this.actions.get(o.aid.iid);
    if (a != null) {
      if (a instanceof OperableAction) {
        a.tryInvoke(o, this.properties);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'action not instanceof OperableAction';
      }
    } else {
      o.status = (<number>OperationStatus.ACTION_NOT_FOUND);
      o.description = 'action not found';
    }
  }

  update(o: PropertyOperation) {
    if (o.pid == null) {
      return;
    }

    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof OperableProperty) {
        p.update(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'property not instanceof OperableProperty';
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
      o.description = 'property not found';
    }
  }

  onPropertiesChanged(o: PropertyOperation) {
    if (o.pid == null) {
      return;
    }

    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof OperableProperty) {
        p.onPropertiesChanged(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'property not instanceof OperableProperty';
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
      o.description = 'property not found';
    }
  }
}
