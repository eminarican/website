import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {say} from "cowsay2";

export default class CowsayCommand extends Command {

    public constructor() {
        super("cowsay", "utility", "cowsay [message]");
    }

    public override execute(args: Array<string>): CommandOutput {
        if (args.length == 0) {
            args.push("...");
        }

        return this.cowsay(args.join(" "));
    }

    public cowsay(message: string): CommandOutput {
        return CommandOutput.notices(say(message).split("\n"));
    }
}
