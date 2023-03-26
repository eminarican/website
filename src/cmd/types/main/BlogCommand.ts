import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {goto} from "$app/navigation";
import {history} from "../../../terminal/Store";

export default class BlogCommand extends Command {

    public constructor() {
        super("blog", "main");
    }

    public override execute(args: Array<string>): CommandOutput {
        goto("/blog").then(() => this.printExitMessage());
        return CommandOutput.empty();
    }

    private printExitMessage() {
        history.update((history) => {
            for (let line of CommandOutput.info("exited program with code 0")) {
                history.addRecord(line);
            }
            return history;
        });
    }
}
