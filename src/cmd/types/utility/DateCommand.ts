import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class DateCommand extends Command {

    public constructor() {
        super("date", "utility", "date");
    }

    public override execute(args: Array<string>): CommandOutput {
        return CommandOutput.notice(new Date().toString());
    }
}
