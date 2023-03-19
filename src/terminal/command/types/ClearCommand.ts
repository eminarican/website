import CommandOutput from "../CommandOutput";
import Command from "../Command";

import {history} from "../../Store";

export default class ClearCommand extends Command {

    public constructor() {
        super("clear");
    }

    public override execute(): CommandOutput {
        history.update((value) => {
            value.clear();
            return value;
        })

        return CommandOutput.empty();
    }
}
