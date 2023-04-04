import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class TouchCommand extends Command {

    public constructor() {
        super("touch", "utility", "");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        return CommandOutput.empty();
    }
}
