import CommandOutput from "../CommandOutput";
import Command from "../Command";

import {commands} from "../../terminal/Store";

export default class HelpCommand extends Command {

    public constructor() {
        super("help");
    }

    public override execute(args: Array<string>): CommandOutput {
        let output = new CommandOutput();

        commands.subscribe((commands) => {
            output.info("available commands:");
            for (let command of commands) {
                output.notice(`- ${command.name}`);
            }
        });

        return output;
    }
}
