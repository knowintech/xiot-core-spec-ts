import {Property} from '../instance/Property';
import {PropertyOperation} from '../operation/PropertyOperation';
import {OperationStatus} from '../status/OperationStatus';

export class PropertyOperable extends Property {

  tryRead(o: PropertyOperation) {
    if (this.value == null) {
      return;
    }

    if (this.access.isReadable) {
      o.value = this.value.currentValue;
    } else {
      o.status = (<number>OperationStatus.PROPERTY_CANNOT_READ);
    }
  }

  tryWrite(o: PropertyOperation, save: boolean) {
    if (this.access.isWritable) {
      if (save) {
        this.update(o);
      } else {
        if (super.trySetValue(o.value)) {
          o.status = (<number>OperationStatus.COMPLETED);
        } else {
          o.status = (<number>OperationStatus.PROPERTY_VALUE_INVALID);
        }
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_CANNOT_WRITE);
    }
  }

  update(o: PropertyOperation) {
    if (this.setValue(o.value)) {
      o.status = (<number>OperationStatus.COMPLETED);
    } else {
      o.status = (<number>OperationStatus.PROPERTY_VALUE_INVALID);
    }
  }

  onPropertiesChanged(o: PropertyOperation) {
    if (this.access.isNotifiable) {
      this.update(o);
    } else {
      o.status = (<number>OperationStatus.PROPERTY_CANNOT_NOTIFY);
    }
  }
}
