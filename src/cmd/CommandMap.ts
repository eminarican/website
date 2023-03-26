import type Command from "./Command";

import {
    AboutCommand, SocialCommand, InterestsCommand, LanguagesCommand, SourceCommand, BlogCommand,
    RandcatCommand, CowsayCommand, ClearCommand, EchoCommand, DateCommand, HelpCommand,
} from "./types";

export default class CommandMap {

    private map: Map<string, Command> = new Map();

    public constructor() {
        // main commands
        this.register(new AboutCommand());
        this.register(new SocialCommand());
        this.register(new InterestsCommand());
        this.register(new LanguagesCommand());
        this.register(new SourceCommand());
        this.register(new BlogCommand());

        // utility commands
        this.register(new RandcatCommand());
        this.register(new CowsayCommand());
        this.register(new ClearCommand());
        this.register(new EchoCommand());
        this.register(new DateCommand());
        this.register(new HelpCommand());
    }

    public get(name: string): Command | null {
        return this.map.get(name)?? null;
    }

    public register(command: Command) {
        this.map.set(command.name, command);
    }

    [Symbol.iterator](): IterableIterator<Command> {
        return this.map.values();
    }
}
