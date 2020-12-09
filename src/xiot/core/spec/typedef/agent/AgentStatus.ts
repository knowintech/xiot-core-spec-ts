export enum AgentStatus {
    UNDEFINED = 'undefined',
    STOPPED = 'stopped',
    STARTED = 'started',
}

export function AgentStatusFromString(s: string): AgentStatus {
    const keys: (keyof typeof AgentStatus)[] = <(keyof typeof AgentStatus)[]>Object.keys((AgentStatus));

    for (const key of keys) {
        const status = AgentStatusToString(AgentStatus[key]);
        if (s === status) {
            return AgentStatus[key];
        }
    }

    return AgentStatus.UNDEFINED;
}

export function AgentStatusToString(status: AgentStatus) {
    return status.toString();
}



