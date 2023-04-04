import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class MkdirCommand extends Command {

    public constructor() {
        super("mkdir", "utility", "");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        return CommandOutput.empty();
    }
}
