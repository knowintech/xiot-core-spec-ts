export class Access {
  public isReadable = false;
  public isWritable = false;
  public isNotifiable = false;

  static create(access: Array<String>): Access {
    const thiz = new Access();

    for (const v of access) {
      switch (v) {
        case 'read':
          thiz.isReadable = true;
          break;

        case 'write':
          thiz.isWritable = true;
          break;

        case 'notify':
          thiz.isNotifiable = true;
          break;
      }
    }

    return thiz;
  }

  toList(): Array<string> {
    const array = [];

    if (this.isReadable) {
      array.push('read');
    }

    if (this.isWritable) {
      array.push('write');
    }

    if (this.isNotifiable) {
      array.push('notify');
    }

    return array;
  }

  toString(): string {
    const array = [];

    if (this.isReadable) {
      array.push('R');
    }

    if (this.isWritable) {
      array.push('W');
    }

    if (this.isNotifiable) {
      array.push('N');
    }

    return array.join(' ');
  }
}
