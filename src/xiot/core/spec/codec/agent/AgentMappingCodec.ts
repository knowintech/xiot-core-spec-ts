import {AgentMapping} from '../../typedef/agent/AgentMapping';

export class AgentMappingCodec {

    public static encode(mapping: AgentMapping): any {
        return {
            remotePort: mapping.remotePort,
            localPort: mapping.localPort
        };
    }

    public static decode(o: any): AgentMapping {
        const remotePort = o.remotePort;
        const localPort = o.localPort;
        return new AgentMapping(remotePort, localPort);
    }
}
