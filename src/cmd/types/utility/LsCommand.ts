import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class LsCommand extends Command {

    public constructor() {
        super("ls", "utility");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        return CommandOutput.empty();
    }
}
