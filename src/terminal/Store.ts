import {writable} from 'svelte/store';

import History from "./History";
import CommandMap from "../cmd/CommandMap";

export const history = writable<History>(new History());
export const commands = writable<CommandMap>(new CommandMap());
