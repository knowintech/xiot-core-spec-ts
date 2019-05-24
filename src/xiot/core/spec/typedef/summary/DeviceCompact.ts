import {DeviceType} from '../definition/urn/DeviceType';

export class DeviceCompact {
  public did = '';
  public type: DeviceType | null = null;
  public name = '';
  public online = false;
}
