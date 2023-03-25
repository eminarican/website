import CommandOutput from "../CommandOutput";
import Command from "../Command";

import {say} from "cowsay2";

export default class CowsayCommand extends Command {

    public constructor() {
        super("cowsay");
    }

    public override execute(args: Array<string>): CommandOutput {
        if (args.length == 0) {
            return CommandOutput.error("command usage: cowsay [message]");
        }

        return CommandOutput.notices(say(args.join(" ")).split("\n"));
    }
}
