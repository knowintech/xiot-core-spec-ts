import {DeviceType} from '../definition/urn/DeviceType';

export class DeviceDetail {
  public did: string = '';
  public type: DeviceType | null = null;
  public name: string = '';
  public serialNumber: string = '';
  public online: boolean = false;
  public roomId: string = '';
}
