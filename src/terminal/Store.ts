import {writable} from 'svelte/store';

import History from "./History";
import CommandMap from "./command/CommandMap";

export const history = writable(new History());
export const commands = writable(new CommandMap());
