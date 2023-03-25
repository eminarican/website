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

    private printGroup(group: string, output: CommandOutput) {
        commands.subscribe((commands) => {
            output.info(`${group} commands:`);
            for (let command of commands) {
                if (command.group != group) continue;

                output.notice(`- ${command.name}`);
            }
        });
    }

    private printGroups(groups: Array<string>, output: CommandOutput) {
        for (let group of groups) {
            this.printGroup(group, output);
        }
    }
}
