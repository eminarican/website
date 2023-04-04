import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {goto} from "$app/navigation";

export default class BlogCommand extends Command {

    public constructor() {
        super("blog", "main");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        goto("/blog").then();
        return CommandOutput.info("running blog program...");
    }
}
