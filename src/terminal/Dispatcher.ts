import {commands, updateHistory} from "./Store";

import type History from "./History";
import type CommandMap from "../cmd/CommandMap";
import CommandOutput from "../cmd/CommandOutput";

import init, {eval_bash} from "wasm";
import {clearText} from "./Util";

export default class Dispatcher {

    public static async dispatch(input: string) {
        await init();

        this.updateHistoryCommands((history, commands) => {
            history.addRecord(`eminarican@github ~ > ${input}`);
            history.addInput(input);
            history.resetCursor();

            let result = eval_bash(input, (name: string, args: Array<string>) => {
                let result = this.executeWith(commands, name, args.map((arg, index) => {
                    const res = clearText(arg);
                    return res + (res !== arg && index < args.length - 1 ? "\n" : "");
                }), [])?.toArray();

                return result ?? CommandOutput.error(`unknown command "${name}, use help command"`).toArray();
            });

            history.addRecords(result);
        });
    }

    public static execute(
        name: string, args: Array<string>, flags: Array<string>,
        onError: () => void = () => {}
    ) {
        this.updateHistoryCommands((history, commands) => {
            let output = this.executeWith(
                commands, name, args, flags
            );
            if (output != null) {
                history.addRecords(output.toArray());
            } else {
                onError();
            }
        });
    }

    private static executeWith(
        commands: CommandMap, name: string, args: Array<string>, flags: Array<string>
    ): CommandOutput | null {
        let command = commands.get(name);
        if (command == null) return null;

        return command.execute(args, flags);
    }

    private static updateHistoryCommands(callback: (history: History, commands: CommandMap) => void) {
        updateHistory((history) => {
            commands.subscribe((commands) => {
                callback(history, commands);
            });
        });
    }
}
