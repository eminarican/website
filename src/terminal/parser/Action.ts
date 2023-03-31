export interface Action {}

export class PipeAction implements Action {}

export class ThenAction implements Action {}

export class CommandAction implements Action {

    public name: string;
    public args: Array<string>;
    public flags: Array<string>;

    public constructor(name: string, args: Array<string> = [], flags: Array<string> = []) {
        this.name = name;
        this.args = args;
        this.flags = flags;
    }
}
