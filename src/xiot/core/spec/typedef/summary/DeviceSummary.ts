import {DeviceType} from '../definition/urn/DeviceType';

export class DeviceSummary {
  public did = '';
  public type: DeviceType | null = null;
  public name = '';
  public category = '';
}

