import {onMount} from "svelte";
import {updateHistory} from "./Store";

import type History from "./History";
import type CommandOutput from "../cmd/CommandOutput";

export function print(history: History, output: CommandOutput) {
    history.addRecords(output.toArray());
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
