import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {goto} from "$app/navigation";
import {print} from "../../../terminal/Util";
import {updateHistory} from "../../../terminal/Store";

export default class BlogCommand extends Command {

    public constructor() {
        super("blog", "main");
    }

    public override execute(args: Array<string>): CommandOutput {
        goto("/blog").then(() => this.printExitMessage());
        return CommandOutput.empty();
    }

    private printExitMessage() {
        updateHistory((history) => {
            print(history, CommandOutput.info("exited program with code 0"));
        });
    }
}
