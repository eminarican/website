import type CommandOutput from "./CommandOutput";

export default abstract class Command {

    public name: string;
    public group: string;
    public usage: string;

    protected constructor(name: string, group: string, usage: string = name) {
        this.name = name;
        this.group = group;
        this.usage = usage;
    }

    public abstract execute(args: Array<string>): CommandOutput;
}
