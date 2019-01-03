import {AbstractOperation} from './AbstractOperation';
import {PID} from '../xid/PID';

export class PropertyOperation extends AbstractOperation {
  public pid: PID | null = null;
  public value: any | null = null;
}
