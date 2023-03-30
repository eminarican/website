import {onMount} from "svelte";
import {commands, updateHistory} from "./Store";

import type History from "./History";
import CommandOutput from "../cmd/CommandOutput";

export function printWelcome(history: History) {
    print(history, CommandOutput.info("use help command to see available commands"));
}

export function print(history: History, output: CommandOutput) {
    history.addRecords(output.toArray());
}

export function redirectNewSession(command: string, args: Array<string> = []) {
    onMountHistory((history) => {
        if (history.getRecords().length != 0) return;

        printWelcome(history);
        executeCommand(command, args);
    });
}

export function executeCommand(
    name: string, args: Array<string> = [],
    onError: (history: History) => void = (_) => {}
) {
    updateHistory((history) => {
        let raw = `${name} ${args.join(" ")}`;

        history.addInput(raw);
        history.addRecord(`eminarican@github ~ > ${raw}`);

        commands.subscribe((commands) => {
            let command = commands.get(name);

            if (command == null) {
                onError(history);
                return;
            }

            print(history, command.execute(args));
        });

        history.resetCursor();
    });
}

export function onMountHistory(callback: (history: History) => void) {
    onMount(() => {
        updateHistory((history) => {
            callback(history);
        });
    });
}

export function onMountEvents(events: Array<EventHandler>) {
    onMount(() => {
        iterateEvents(events, (name, func) => {
            document.addEventListener(name, func);
        });

        return () => {
            iterateEvents(events, (name, func) => {
                document.removeEventListener(name, func);
            });
        };
    });
}

function iterateEvents(
    events: Array<EventHandler>,
    callback: (name: string, func: (event: Event) => void) => void
) {
    events.forEach((event) => {
        Object.keys(event).forEach((name) => {
            callback(name, event[name]);
        });
    });
}

interface EventHandler {
    [key: string]: (event: Event) => void;
}

interface Event {
    readonly type: string;
}
