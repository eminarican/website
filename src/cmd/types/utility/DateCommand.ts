import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class DateCommand extends Command {

    public constructor() {
        super("date", "utility");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        return CommandOutput.notice(new Date().toString());
    }
}
