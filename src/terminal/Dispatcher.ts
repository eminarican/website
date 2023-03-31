import {commands, updateHistory} from "./Store";
import {print} from "./Util";

import Parser from "./parser/Parser";
import {CommandAction, PipeAction, ThenAction} from "./parser/Action";

import CommandOutput from "../cmd/CommandOutput";
import type CommandMap from "../cmd/CommandMap";

export default class Dispatcher {

    public static dispatch(input: string) {
        let actions = Parser.parse(input);

        updateHistory((history) => {
            history.addRecord(`eminarican@github ~ > ${input}`);
            history.addInput(input);
            history.resetCursor();

            if (!(actions[0] instanceof CommandAction)) {
                print(history, CommandOutput.error("first argument should be a command"));
                return;
            }

            if (actions.length == 1) {
                let action = actions[0] as CommandAction;

                this.execute(action.name, action.args, action.flags, () => {
                    print(history, CommandOutput.error(`unknown command "${action.name}", use help command`));
                });

                return;
            }

            for (let [index, action] of actions.entries()) {
                if (index % 2 == 0) {
                    if (!(action instanceof CommandAction)) {
                        print(history, CommandOutput.error("can't use an operator one after another"));
                        return;
                    }
                }
            }

            if (actions.length % 2 == 0) {
                print(history, CommandOutput.error("missing parameter after use of an operator"));
                return;
            }

            commands.subscribe((commands) => {
                let result = this.executeActionWith(
                    commands, actions[0] as CommandAction
                );

                for (let i = 1; i < actions.length; i += 2) {
                    if (result == null) {
                        let action = actions[i - 1] as CommandAction;
                        print(history, CommandOutput.error(`unknown command "${action.name}", use help command`));
                        return;
                    }

                    const command = actions[i + 1] as CommandAction;

                    switch (actions[i].constructor) {
                        case PipeAction:
                            command.args.push(result.toRawArray().join("\n"));
                            result = this.executeActionWith(
                                commands, command
                            );
                            break;
                        case ThenAction:
                            print(history, result);
                            result = this.executeActionWith(
                                commands, command
                            );
                            break;
                    }
                }

                if (result != null) {
                    print(history, result);
                }
            });
        });
    }

    public static execute(
        name: string, args: Array<string>, flags: Array<string>,
        onError: () => void = () => {}
    ) {
        updateHistory((history) => {
            commands.subscribe((commands) => {
                let output = this.executeWith(
                    commands, name, args, flags
                );
                if (output != null) {
                    history.addRecords(output.toArray());
                } else {
                    onError();
                }
            });
        });
    }

    private static executeActionWith(
        commands: CommandMap, action: CommandAction
    ): CommandOutput | null {
        return this.executeWith(
            commands,
            action.name, action.args, action.flags
        );
    }

    private static executeWith(
        commands: CommandMap, name: string, args: Array<string>, flags: Array<string>
    ): CommandOutput | null {
        let command = commands.get(name);
        if (command == null) return null;

        return command.execute(args, flags);
    }
}
