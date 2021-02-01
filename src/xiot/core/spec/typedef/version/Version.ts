export class Version {

    major: number;
    minor: number;
    patch: number;

    constructor(major: number, minor: number, patch: number) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
    }

    static fromString(version: string): Version {
        const split = version.split('.');
        const x: number = parseInt(split[0], 10);
        const y: number = parseInt(split[1], 10);
        const z: number = parseInt(split[2], 10);
        return new Version(x, y, z);
    }

    toString(): string {
        return this.major + '.' + this.minor + '.' + this.patch;
    }
}
