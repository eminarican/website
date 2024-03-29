import type CommandOutput from "./CommandOutput";

export default abstract class Command {

    public name: string;
    public group: string;
    public usage: string;

    protected constructor(name: string, group: string, usage: string = "") {
        this.name = name;
        this.group = group;
        this.usage = usage;
    }

    public abstract execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput;
}
