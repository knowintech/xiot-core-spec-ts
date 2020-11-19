import {UrnStyle} from '../definition/urn/UrnStyle';
import {ServiceTemplate} from '../template/ServiceTemplate';
import {PropertyTemplate} from '../template/PropertyTemplate';
import {ActionTemplate} from '../template/ActionTemplate';
import {EventTemplate} from '../template/EventTemplate';
import {DeviceTemplate} from '../template/DeviceTemplate';

export class DeviceHelper {

    static updateService(service: ServiceTemplate, groupId: string, model: string, version: number): void  {
      if (service.type != null) {
        service.type.groupId = groupId;
        service.type.model = model;
        service.type.version = version;
        service.type.style = UrnStyle.XIOT;
        service.getProperties().forEach(p => DeviceHelper.updateProperty(p, groupId, model, version));
        service.getActions().forEach(a => DeviceHelper.updateAction(a, groupId, model, version));
        service.getEvents().forEach(e => DeviceHelper.updateEvent(e, groupId, model, version));
      }
    }

    static updateProperty(p: PropertyTemplate, groupId: string, model: string, version: number): void  {
      if (p.type != null) {
        p.type.groupId = groupId;
        p.type.model = model;
        p.type.version = version;
        p.type.style = UrnStyle.XIOT;
      }
    }

    static updateAction(a: ActionTemplate, groupId: string, model: string, version: number): void  {
      if (a.type != null) {
        a.type.groupId = groupId;
        a.type.model = model;
        a.type.version = version;
        a.type.style = UrnStyle.XIOT;
      }
    }

    static updateEvent(a: EventTemplate, groupId: string, model: string, version: number): void  {
      if (a.type != null) {
        a.type.groupId = groupId;
        a.type.model = model;
        a.type.version = version;
        a.type.style = UrnStyle.XIOT;
      }
    }

    static alreadyAddedItems(device: DeviceTemplate): boolean  {
      for (const s of device.getServices()) {
        if (s.type != null) {
          if (s.type._just_added) {
            return true;
          }
        }
      }

      for (const s of device.getServices()) {
        for (const p of s.getProperties()) {
          if (p.type != null) {
            if (p.type._just_added) {
              return true;
            }
          }
        }

        for (const a of s.getActions()) {
          if (a.type != null) {
            if (a.type._just_added) {
              return true;
            }
          }
        }

        for (const e of s.getEvents()) {
          if (e.type != null) {
            if (e.type._just_added) {
              return true;
            }
          }
        }
      }

      return false;
    }

    static alreadyChanged(device: DeviceTemplate): boolean  {
      for (const s of device.getServices()) {
        if (s.type != null) {
          if (s.type._just_added || s.type._changed) {
            return true;
          }
        }
      }

      for (const s of device.getServices()) {
        for (const p of s.getProperties()) {
          if (p.type != null) {
            if (p.type._just_added || p.type._changed) {
              return true;
            }
          }
        }

        for (const a of s.getActions()) {
          if (a.type != null) {
            if (a.type._just_added || a.type._changed) {
              return true;
            }
          }
        }

        for (const e of s.getEvents()) {
          if (e.type != null) {
            if (e.type._just_added || e.type._changed) {
              return true;
            }
          }
        }
      }

      return false;
    }

    static addServices(device: DeviceTemplate, services: ServiceTemplate[]): void {
      services.forEach(s => DeviceHelper.addService(device, s));
    }

    static addService(device: DeviceTemplate, service: ServiceTemplate): void {
      DeviceHelper.reconstructService(device, service);

        if (service.type != null) {
            service.type._just_added = true;
            service.type._optional = true;
        }

        device.services.set(service.iid, service);
    }

    static addProperties(device: DeviceTemplate, siid: number, properties: PropertyTemplate[]): void {
      properties.forEach(p => DeviceHelper.addProperty(device, siid, p));
    }

    static addProperty(device: DeviceTemplate, siid: number, property: PropertyTemplate): void {
      DeviceHelper.reconstructProperty(device, siid, property);

      if (property.type != null) {
        property.type._just_added = true;
        property.type._optional = true;
      }

      const s = device.services.get(siid);
      if (s != null) {
        s.properties.set(property.iid, property);
      }
    }

    static addActions(device: DeviceTemplate, siid: number, actions: ActionTemplate[]): void {
      actions.forEach(a => DeviceHelper.addAction(device, siid, a));
    }

    static addAction(device: DeviceTemplate, siid: number, action: ActionTemplate): void {
      DeviceHelper.reconstructAction(device, siid, action);

      if (action.type != null) {
        action.type._just_added = true;
        action.type._optional = true;
      }

      const s = device.services.get(siid);
      if (s != null) {
        s.actions.set(action.iid, action);
      }
    }

    static addEvents(device: DeviceTemplate, siid: number, events: EventTemplate[]): void {
      events.forEach(e => DeviceHelper.addEvent(device, siid, e));
    }

    static addEvent(device: DeviceTemplate, siid: number, event: EventTemplate): void {
      DeviceHelper.reconstructEvent(device, siid, event);

      if (event.type != null) {
        event.type._just_added = true;
        event.type._optional = true;
      }

      const s = device.services.get(siid);
      if (s != null) {
        s.events.set(event.iid, event);
      }
    }

    private static reconstructProperty(device: DeviceTemplate, siid: number, property: PropertyTemplate) {
      if (device.type == null) {
        return;
      }

      if (device.type.ns === 'homekit-spec') {
        property.iid = DeviceHelper.newHomeKitIID(device);
      } else {
        property.iid = DeviceHelper.newPropertyIID(device, siid);
      }
    }

    private static reconstructAction(device: DeviceTemplate, siid: number, action: ActionTemplate) {
      if (device.type == null) {
        return;
      }

      action.iid = DeviceHelper.newActionIID(device, siid);
    }

    private static reconstructEvent(device: DeviceTemplate, siid: number, event: EventTemplate) {
      if (device.type == null) {
        return;
      }

      event.iid = DeviceHelper.newEventIID(device, siid);
    }

    private static reconstructService(device: DeviceTemplate, service: ServiceTemplate): void {
        let piid = 0;

        if (device.type == null) {
            return;
        }

        if (device.type.ns === 'homekit-spec') {
          service.iid = DeviceHelper.newHomeKitIID(device);
          piid = service.iid + 1;
        } else {
          service.iid = DeviceHelper.newServiceIID(device);
          piid = 1;
        }

        service.getProperties().forEach(p => {
          if (p.type != null) {
            p.type._just_added = true;
          }

          p.iid = piid ++;
        });

        const properties = service.getProperties();
        service.properties.clear();
        properties.forEach(p => service.properties.set(p.iid, p));
    }

    private static newHomeKitIID(device: DeviceTemplate): number {
        let iid = 0;

        device.getServices().forEach(s => {
          if (iid < s.iid) {
            iid = s.iid;
          }

          s.getProperties().forEach(p => {
            if (iid < p.iid) {
              iid = p.iid;
            }
          });
        });

        return iid + 1;
    }

    private static newServiceIID(device: DeviceTemplate): number {
        let iid = 0;

        device.getServices().forEach(s => {
          if (iid < s.iid) {
            iid = s.iid;
          }
        });

        return iid + 1;
      }

    private static newPropertyIID(device: DeviceTemplate, siid: number): number {
        let iid = 0;

        const s = device.services.get(siid);
        if (s != null) {
          s.getProperties().forEach(p => {
            if (iid < p.iid) {
              iid = p.iid;
            }
          });
        }

        return iid + 1;
    }

    private static newActionIID(device: DeviceTemplate, siid: number): number {
      let iid = 0;

      const s = device.services.get(siid);
      if (s != null) {
        s.getActions().forEach(p => {
          if (iid < p.iid) {
            iid = p.iid;
          }
        });
      }

      return iid + 1;
  }

  private static newEventIID(device: DeviceTemplate, siid: number): number {
    let iid = 0;

    const s = device.services.get(siid);
    if (s != null) {
      s.getEvents().forEach(p => {
        if (iid < p.iid) {
          iid = p.iid;
        }
      });
    }

    return iid + 1;
  }
}
