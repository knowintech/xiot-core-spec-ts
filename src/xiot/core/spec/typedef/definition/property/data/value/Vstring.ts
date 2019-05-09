import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vstring implements DataValue<string> {

    private value = '';

    static create(value: Object): Vstring {
        const type = typeof value;
        if (type === 'string') {
            const v = new Vstring();
            v.value = <string>value;
            return v;
        }

        throw new Error('invalid value: ' + value + ' typeof(value): ' + type);
    }

    equals(other: DataValue<string>): boolean {
        return (this.value === other.getObjectValue());
    }

    lessEquals(maxValue: DataValue<string>): boolean {
        return false;
    }

    validate(min: DataValue<string>, max: DataValue<string>): boolean {
        return false;
    }

    validateStep(min: DataValue<string>, max: DataValue<string>, step: DataValue<string> | null): boolean {
        return false;
    }

    getObjectValue(): string {
        return this.value;
    }

    getFormat(): DataFormat {
        return DataFormat.STRING;
    }
}
