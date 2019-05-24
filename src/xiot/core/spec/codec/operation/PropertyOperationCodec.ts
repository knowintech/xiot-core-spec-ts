import {PropertyOperation} from '../../typedef/operation/PropertyOperation';
import {PID} from '../../typedef/xid/PID';
import {Spec} from '../../typedef/constant/Spec';

export class PropertyOperationCodec {

    static decodePIDs(pids: string): PropertyOperation[] {
        const array: PropertyOperation[] = [];

        if (pids != null) {
            pids.split(',').forEach(pid => {
                const o = new PropertyOperation();
                o.pid = PID.parseString(pid);
                array.push(o);
            });
        }

        return array;
    }

    static decodePIDArray(pids: string[]): PropertyOperation[] {
        const array: PropertyOperation[] = [];

        if (pids != null) {
            pids.forEach(pid => {
                const o = new PropertyOperation();
                o.pid = PID.parseString(pid);
                array.push(o);
            });
        }

        return array;
    }

    static decodeValues(json: any): PropertyOperation[] {
      const array: PropertyOperation[] = [];

      const properties = json['properties'];
      if (properties != null) {
        if (properties instanceof Array) {
          properties.forEach(property => {
            const o = new PropertyOperation();
            o.pid = PID.parseString(property[Spec.PID]);
            o.status = property[Spec.STATUS];

            if (o.status == null) {
              o.status = 0;
            }

            if (o.status === 0) {
              o.value = property[Spec.VALUE];
            } else {
              o.description = property[Spec.DESCRIPTION];
            }

            o.message = property;

            array.push(o);
          });
        }
      }

      return array;
    }

    // static decodeValuesByArray(values: Array<Object>): Array<PropertyOperation> {
    //     const array = [];
    //
    //     if (values != null) {
    //         values.forEach(value => {
    //             const o = new PropertyOperation();
    //             o.pid = PID.parseString(o[Spec.PID]);
    //             o.status = o[Spec.STATUS];
    //             if (o.status === 0) {
    //                 o.value = o[Spec.VALUE];
    //             } else {
    //                 o.description = o[Spec.DESCRIPTION];
    //             }
    //
    //             array.push(o);
    //         });
    //     }
    //
    //     return array;
    // }

    static decodeStatus(json: any): PropertyOperation[] {
        const array: PropertyOperation[] = [];

        const properties: any[] = json['properties'];

        if (properties != null) {
          properties.forEach(value => {
                const o = new PropertyOperation();
                o.pid = PID.parseString(value[Spec.PID]);
                o.status = value[Spec.STATUS];
                if (o.status !== 0) {
                    o.description = value[Spec.DESCRIPTION];
                }

                array.push(o);
            });
        }

        return array;
    }

    // static decodeStatusByArray(values: Array<Object>): Array<PropertyOperation> {
    //     const array = [];
    //
    //     if (values != null) {
    //         values.forEach(value => {
    //           const o = new PropertyOperation();
    //             o.pid = PID.parseString(o[Spec.PID]);
    //             o.status = o[Spec.STATUS];
    //             if (o.status !== 0) {
    //                 o.description = o[Spec.DESCRIPTION];
    //             }
    //
    //             array.push(o);
    //         });
    //     }
    //
    //     return array;
    // }

    static encodeQueryGETtoString(list: Array<PropertyOperation>): string {
        return list.map(p => p.pid != null ? p.pid.toString() : '').join(',');
    }

    static encodeQueryGETtoArray(list: Array<PropertyOperation>): any[] {
        return list.map(p => p.pid != null ? p.pid.toString() : '');
    }

    static encodeResultGET(list: Array<PropertyOperation>): any[] {
        return list.map(p => {
            const object: any = {
                pid: p.pid != null ? p.pid.toString() : '',
                status: p.status
            };

            if (p.status === 0) {
                object[Spec.VALUE] = p.value;
            } else {
                object[Spec.DESCRIPTION] = p.description;
            }

            return object;
        });
    }

    static encodeSetProperty(property: PropertyOperation): any {
        return {pid: property.pid != null ? property.pid.toString() : '', value: property.value};
    }

    static encodeQuerySET(list: PropertyOperation[]): any[] {
        return list
            .filter(p => p.status === 0)
            .map(p => PropertyOperationCodec.encodeSetProperty(p));
    }

    static encodeResultSET(list: PropertyOperation[]): any[] {
        return list.map(p => {
            const object: any = {
                pid: p.pid != null ? p.pid.toString() : '',
                status: p.status
            };

            if (p.status !== 0) {
                object[Spec.DESCRIPTION] = p.description;
            }

            return object;
        });
    }
}
