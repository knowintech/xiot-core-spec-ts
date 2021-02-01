import {AgentMapping} from '../../typedef/agent/AgentMapping';

export class AgentMappingCodec {

    public static encode(mapping: AgentMapping): any {
        return {
            'remote-port': mapping.remotePort,
            'local-port': mapping.localPort
        };
    }

    public static decode(o: any): AgentMapping {
        const remotePort = o['remote-port'];
        const localPort = o['local-port'];
        return new AgentMapping(remotePort, localPort);
    }
}
