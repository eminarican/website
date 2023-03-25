import CommandOutput from "../CommandOutput";
import Command from "../Command";

import {history} from "../../terminal/Store";

export default class ClearCommand extends Command {

    public constructor() {
        super("clear");
    }

    public override execute(args: Array<string>): CommandOutput {
        history.update((value) => {
            value.clear();
            return value;
        })

        return CommandOutput.empty();
    }
}
