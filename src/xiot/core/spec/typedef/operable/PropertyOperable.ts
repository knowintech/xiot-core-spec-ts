import {Property} from '../instance/Property';
import {PropertyOperation} from '../operation/PropertyOperation';
import {OperationStatus} from '../status/OperationStatus';
import {PropertyDefinition} from '../definition/PropertyDefinition';

export class PropertyOperable extends Property {

    constructor(iid: number, def: PropertyDefinition) {
        super(iid, def);
    }

    tryRead(o: PropertyOperation) {
        if (this.value == null) {
            return;
        }

        if (this.access.isReadable) {
            o.value = this.value.currentValue.getObjectValue();
        } else {
            o.status = (<number>OperationStatus.PROPERTY_CANNOT_READ);
            o.description = 'property cannot read';
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
                    o.description = 'property value invalid';
                }
            }
        } else {
            o.status = (<number>OperationStatus.PROPERTY_CANNOT_WRITE);
            o.description = 'property cannot write';
        }
    }

    update(o: PropertyOperation) {
        if (this.setValue(o.value)) {
            o.status = (<number>OperationStatus.COMPLETED);
        } else {
            o.status = (<number>OperationStatus.PROPERTY_VALUE_INVALID);
            o.description = 'property value invalid';
        }
    }

    onPropertiesChanged(o: PropertyOperation) {
        if (this.access.isNotifiable) {
            this.update(o);
        } else {
            o.status = (<number>OperationStatus.PROPERTY_CANNOT_NOTIFY);
            o.description = 'property cannot notify';
        }
    }
}
