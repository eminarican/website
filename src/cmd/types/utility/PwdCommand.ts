import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {print} from "../../../terminal/Util";
import {directory, history} from "../../../terminal/Store";

export default class PwdCommand extends Command {

    public constructor() {
        super("pwd", "utility");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        history.subscribe((history) => {
            directory.subscribe((directory) => {
                print(history, CommandOutput.info(`/${directory.join("/")}`));
            });
        });
        return CommandOutput.empty();
    }
}
