import {AgentServer} from '../../typedef/agent/AgentServer';

export class AgentServerCodec {

    public static encode(server: AgentServer): any {
        return {
            host: server.host,
            port: server.port,
            user: server.user,
            password: server.password
        };
    }

    public static decode(o: any): AgentServer {
        const host = o.host;
        const port = o.port;
        const user = o.user;
        const password = o.password;
        return new AgentServer(host, port, user, password);
    }
}
