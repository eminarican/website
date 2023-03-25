import type Command from "./Command";

import {HelpCommand, AboutCommand, SocialCommand, InterestsCommand, LanguagesCommand, CowsayCommand, ClearCommand} from "./types";

export default class CommandMap {

    private map: Map<string, Command> = new Map();

    public constructor() {
        this.register(new HelpCommand());
        this.register(new AboutCommand());
        this.register(new SocialCommand());
        this.register(new InterestsCommand());
        this.register(new LanguagesCommand());
        this.register(new CowsayCommand());
        this.register(new ClearCommand());
    }

    public get(name: string): Command | undefined {
        return this.map.get(name);
    }

    public register(command: Command) {
        this.map.set(command.name, command);
    }

    [Symbol.iterator](): IterableIterator<Command> {
        return this.map.values();
    }
}
