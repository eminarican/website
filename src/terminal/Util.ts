import {onMount} from "svelte";
import {updateHistory} from "./Store";

import type History from "./History";
import CommandOutput from "../cmd/CommandOutput";

export function wrapText(text: string, width: number): string {
    const regex = new RegExp(`(?![^\\n]{1,${width}}$)([^\\n]{1,${width}})\\s`, 'g');
    return text.replace(regex, "$1\n");
}

export function clearHtml(text: string): string {
    return text.replace(/<\S[^>]*>/g, "");
}

export function printWelcome(history: History) {
    print(history, CommandOutput.info("use help command to see available commands"));
}

export function print(history: History, output: CommandOutput) {
    history.addRecords(output.toArray());
}

export function onMountNewSession(callback: (history: History) => void) {
    onMountHistory((history) => {
        if (history.getRecords().length != 0) return;
        callback(history);
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
