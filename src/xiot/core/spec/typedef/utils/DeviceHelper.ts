import {Device} from '../instance/Device';
import {Service} from '../instance/Service';
import {Property} from '../instance/Property';
import {Action} from '../instance/Action';
import {Event} from '../instance/Event';
import {UrnStyle} from '../definition/urn/UrnStyle';

export class DeviceHelper {
  
    static updateService(service: Service, groupId: string, model: string, version: number): void  {
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

    static updateProperty(p: Property, groupId: string, model: string, version: number): void  {
      if (p.type != null) {
        p.type.groupId = groupId;
        p.type.model = model;
        p.type.version = version;
        p.type.style = UrnStyle.XIOT;
      }
    }

    static updateAction(a: Action, groupId: string, model: string, version: number): void  {
      if (a.type != null) {
        a.type.groupId = groupId;
        a.type.model = model;
        a.type.version = version;
        a.type.style = UrnStyle.XIOT;
      }
    }

    static updateEvent(a: Event, groupId: string, model: string, version: number): void  {
      if (a.type != null) {
        a.type.groupId = groupId;
        a.type.model = model;
        a.type.version = version;
        a.type.style = UrnStyle.XIOT;
      }
    }

    static alreadyAddedItems(device: Device): boolean  {
      for (let s of device.getServices()) {
        if (s.type != null) {
          if (s.type._just_added) {
            return true;
          }
        }
      }

      for (let s of device.getServices()) {
        for (let p of s.getProperties()) {
          if (p.type != null) {
            if (p.type._just_added) {
              return true;
            }
          }
        }

        for (let a of s.getActions()) {
          if (a.type != null) {
            if (a.type._just_added) {
              return true;
            }
          }
        }

        for (let e of s.getEvents()) {
          if (e.type != null) {
            if (e.type._just_added) {
              return true;
            }
          }
        }
      }

      return false;
    }

    static alreadyChanged(device: Device): boolean  {
      for (let s of device.getServices()) {
        if (s.type != null) {
          if (s.type._just_added || s.type._changed) {
            return true;
          }
        }
      }

      for (let s of device.getServices()) {
        for (let p of s.getProperties()) {
          if (p.type != null) {
            if (p.type._just_added || p.type._changed) {
              return true;
            }
          }
        }

        for (let a of s.getActions()) {
          if (a.type != null) {
            if (a.type._just_added || a.type._changed) {
              return true;
            }
          }
        }

        for (let e of s.getEvents()) {
          if (e.type != null) {
            if (e.type._just_added || e.type._changed) {
              return true;
            }
          }
        }
      }

      return false;
    }

    static addServices(device: Device, services: Service[]): void {
      services.forEach(s => DeviceHelper.addService(device, s));
    }

    static addService(device: Device, service: Service): void {
      DeviceHelper.reconstructService(device, service);

        if (service.type != null) {
            service.type._just_added = true;
            service.type._optional = true;
        }

        device.services.set(service.iid, service);
    }
    
    static addProperties(device: Device, siid: number, properties: Property[]): void {
      properties.forEach(p => DeviceHelper.addProperty(device, siid, p));
    }

    static addProperty(device: Device, siid: number, property: Property): void {
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

    static addActions(device: Device, siid: number, actions: Action[]): void {
      actions.forEach(a => DeviceHelper.addAction(device, siid, a));
    }
    
    static addAction(device: Device, siid: number, action: Action): void {
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

    static addEvents(device: Device, siid: number, events: Event[]): void {
      events.forEach(e => DeviceHelper.addEvent(device, siid, e));
    }

    static addEvent(device: Device, siid: number, event: Event): void {
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

    private static reconstructProperty(device: Device, siid: number, property: Property) {
      if (device.type == null) {
        return;
      }

      if (device.type.ns === 'homekit-spec') {
        property.iid = DeviceHelper.newHomeKitIID(device);
      } else {
        property.iid = DeviceHelper.newPropertyIID(device, siid);
      }
    }

    private static reconstructAction(device: Device, siid: number, action: Action) {
      if (device.type == null) {
        return;
      }

      action.iid = DeviceHelper.newActionIID(device, siid);
    }

    private static reconstructEvent(device: Device, siid: number, event: Event) {
      if (device.type == null) {
        return;
      }

      event.iid = DeviceHelper.newEventIID(device, siid);
    }

    private static reconstructService(device: Device, service: Service): void {
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

    private static newHomeKitIID(device: Device): number {
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

    private static newServiceIID(device: Device): number {
        let iid = 0;
    
        device.getServices().forEach(s => {
          if (iid < s.iid) {
            iid = s.iid;
          }
        });
    
        return iid + 1;
      }
    
    private static newPropertyIID(device: Device, siid: number): number {
        let iid = 0;
    
        let s = device.services.get(siid);
        if (s != null) {
          s.getProperties().forEach(p => {
            if (iid < p.iid) {
              iid = p.iid;
            }
          });
        }
    
        return iid + 1;
    }

    private static newActionIID(device: Device, siid: number): number {
      let iid = 0;
  
      let s = device.services.get(siid);
      if (s != null) {
        s.getActions().forEach(p => {
          if (iid < p.iid) {
            iid = p.iid;
          }
        });
      }
  
      return iid + 1;
  }

  private static newEventIID(device: Device, siid: number): number {
    let iid = 0;

    let s = device.services.get(siid);
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