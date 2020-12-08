
export  class AgentMapping {


    remotePort: number;
    localPort:  number;

    constructor(remotePort: number, localPort: number) {
        this.remotePort = remotePort;
        this.localPort = localPort;
    }
}
