import type CommandOutput from "./CommandOutput";

export default abstract class Command {

    public name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    public abstract execute(): CommandOutput
}
