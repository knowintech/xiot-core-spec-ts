import {Device} from '../instance/Device';
import {PropertyOperation} from '../operation/PropertyOperation';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';
import {OperableService} from './OperableService';
import {DeviceType} from '../definition/urn/DeviceType';

export class OperableDevice extends Device {

  constructor(type: DeviceType,
              description: Map<string, string>,
              services: OperableService[]) {
    super(type, description, services);
  }

  getOperableServices(): OperableService[] {
    return super.getServices()
        .filter(x => x instanceof OperableService)
        .map(x => <OperableService>x);
  }

  tryRead(list: Array<PropertyOperation>) {
    for (const o of list) {
      this.tryReadProperty(o);
    }
  }

  tryWrite(list: Array<PropertyOperation>, save: boolean) {
    for (const o of list) {
      this.tryWriteProperty(o, save);
    }
  }

  tryInvoke(o: ActionOperation) {
    do {
      if (o.aid == null) {
        break;
      }

      const s = this.services.get(o.aid.siid);
      if (s == null) {
        o.status = (<number>OperationStatus.SERVICE_NOT_FOUND);
        o.description = 'service not found';
        break;
      }

      if (s instanceof OperableService) {
        s.tryInvoke(o);
      } else {
        console.error('typeof s: ', typeof(s));
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'service not instanceof OperableService';
      }
    } while (false);
  }

  private tryReadProperty(o: PropertyOperation): void {
    do {
      if (o.pid == null) {
        break;
      }

      const s = this.services.get(o.pid.siid);
      if (s == null) {
        o.status = (<number>OperationStatus.SERVICE_NOT_FOUND);
        o.description = 'service not found';
        break;
      }

      if (s instanceof OperableService) {
        s.tryRead(o);
      } else {
        console.error('typeof s: ', typeof(s));
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'service not instanceof OperableService';
      }
    } while (false);
  }

  private tryWriteProperty(o: PropertyOperation, save: boolean): void {
    do {
      if (o.pid == null) {
        break;
      }

      const s = this.services.get(o.pid.siid);
      if (s == null) {
        o.status = (<number>OperationStatus.SERVICE_NOT_FOUND);
        o.description = 'service not found';
        break;
      }

      if (s instanceof OperableService) {
        s.tryWrite(o, save);
      } else {
        console.error('typeof s: ', typeof(s));
        o.status = (<number>OperationStatus.UNDEFINED);
        o.description = 'service not instanceof OperableService';
      }
    } while (false);
  }
}
