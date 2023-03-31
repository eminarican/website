import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class SourceCommand extends Command {

    public constructor() {
        super("source", "main");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        window.open("https://github.com/eminarican/website", "_blank");
        return CommandOutput.info("redirecting to github page");
    }
}
