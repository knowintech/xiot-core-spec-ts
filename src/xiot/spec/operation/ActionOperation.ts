import {AbstractOperation} from './AbstractOperation';
import {AID} from '../xid/AID';

export class ActionOperation extends AbstractOperation {
  public aid: AID | null = null;
  public in: any[] = [];
  public out: any[] = [];
}
