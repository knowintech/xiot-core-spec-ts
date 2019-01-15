
import {Device} from '../instance/Device';
import {Service} from '../instance/Service';
import {Property} from '../instance/Property';
import {Action} from '../instance/Action';
import {Event} from '../instance/Event';
import {Spec} from '../constant/Spec';

export class DeviceHelper {
  
    static addServices(device: Device, services: Service[]): void {
      services.forEach(s => DeviceHelper.addService(device, s));
    }

    static addService(device: Device, service: Service): void {
      DeviceHelper.reconstructService(device, service);

        if (service.type != null) {
            service.type.set('just-added', true);
            service.type.set(Spec.X_OPTIONAL, true);
        }

        device.services.set(service.iid, service);
    }
    
    static addProperties(device: Device, siid: number, properties: Property[]): void {
      properties.forEach(p => DeviceHelper.addProperty(device, siid, p));
    }

    static addProperty(device: Device, siid: number, property: Property): void {
      DeviceHelper.reconstructProperty(device, siid, property);
      
      if (property.definition != null) {
        if (property.definition.type != null) {
          property.definition.type.set('just-added', true);
          property.definition.type.set(Spec.X_OPTIONAL, true);
        }
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
        action.type.set('just-added', true);
        action.type.set(Spec.X_OPTIONAL, true);
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
        event.type.set('just-added', true);
        event.type.set(Spec.X_OPTIONAL, true);
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
          if (p.definition != null) {
            if (p.definition.type != null) {
              p.definition.type.set('just-added', true);
            }
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