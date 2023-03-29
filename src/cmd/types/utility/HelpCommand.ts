import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {commands} from "../../../terminal/Store";

export default class HelpCommand extends Command {

    public constructor() {
        super("help", "utility");
    }

    public override execute(args: Array<string>): CommandOutput {
        let output = new CommandOutput();

        this.printGroups([
            "main", "utility"
        ], output);

        return output;
    }

    private printGroups(groups: Array<string>, output: CommandOutput) {
        groups.forEach((group) => this.printGroup(group, output));
    }

    private printGroup(group: string, output: CommandOutput) {
        output.info(`${group} commands:`);

        commands.subscribe((commands) => {
            commands.forEach((command) => {
                if (command.group != group) return;
                output.notice(`- ${command.usage}`);
            });
        });
    }
}
