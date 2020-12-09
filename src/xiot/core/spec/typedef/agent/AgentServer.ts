export class AgentServer {

    host: string;
    port: number;
    user: string;
    password: string;

    constructor(host: string, port: number, user: string, password: string) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
    }
}
