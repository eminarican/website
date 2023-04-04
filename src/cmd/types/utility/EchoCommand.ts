import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class EchoCommand extends Command {

    public constructor() {
        super("echo", "utility", "[text]");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        if (args.length == 0) {
            args.push("");
        }

        return CommandOutput.notices(args.join(" ").split("\n"));
    }
}
