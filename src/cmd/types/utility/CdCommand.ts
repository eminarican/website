import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class CdCommand extends Command {

    public constructor() {
        super("cd", "utility", "[path]");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        return CommandOutput.empty();
    }
}
