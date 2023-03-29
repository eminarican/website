import {writable} from "svelte/store";

import History from "./History";
import CommandMap from "../cmd/CommandMap";

export const history = writable<History>(new History());
export const commands = writable<CommandMap>(new CommandMap());

export function updateHistory(callback: (history: History) => void) {
    history.update((history) => {
        callback(history);
        return history;
    });
}
