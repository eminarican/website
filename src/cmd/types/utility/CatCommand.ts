import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class CdCommand extends Command {

    public constructor() {
        super("cat", "utility", "[file]");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        return CommandOutput.empty();
    }
}
