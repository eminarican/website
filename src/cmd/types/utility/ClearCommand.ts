import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

import {updateHistory} from "../../../terminal/Store";

export default class ClearCommand extends Command {

    public constructor() {
        super("clear", "utility");
    }

    public override execute(args: Array<string>, flags: Array<string>): CommandOutput {
        updateHistory((history) => {
            history.clear();
        });

        return CommandOutput.empty();
    }
}
