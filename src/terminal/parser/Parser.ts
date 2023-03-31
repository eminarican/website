import {Token, TokenType} from "./Token";

import type {Action} from "./Action";
import {CommandAction, PipeAction, ThenAction} from "./Action";

export default class Parser {

    public actions: Array<Action>;
    public current: CommandAction | null;

    public constructor() {
        this.actions = [];
        this.current = null;
    }

    public static parse(input: string): Array<Action> {
        let tokens = input.match(/("[^"]+"|\S+)/g)?.map((parameter) => {
            switch (parameter) {
                case "|":
                    return new Token(TokenType.Pipe, parameter);
                case "&&":
                    return new Token(TokenType.Then, parameter);
            }

            if (parameter.startsWith("-")) {
                return new Token(TokenType.Flag, parameter);
            }

            return new Token(TokenType.Arg, parameter);
        });

        let parser = new Parser();

        tokens?.forEach((token) => {
            if (parser.parseCommand(token)) return;

            parser.append();
            parser.parseOperator(token);
        });

        parser.finish();
        console.log(parser.actions)
        return parser.actions;
    }

    public parseCommand(token: Token): boolean {
        switch (token.type) {
            case TokenType.Arg:
                if (this.current == null) {
                    this.current = new CommandAction(token.data);
                } else {
                    this.current.args.push(token.data);
                }
                return true;
            case TokenType.Flag:
                this.current?.flags.push(token.data);
                return true;
        }
        return false;
    }

    public parseOperator(token: Token) {
        switch (token.type) {
            case TokenType.Pipe:
                this.actions.push(new PipeAction());
                break;
            case TokenType.Then:
                this.actions.push(new ThenAction());
                break;
        }
    }

    public append() {
        if (this.current == null) return;
        this.actions.push(this.current);
        this.current = null;
    }

    public finish() {
        if (this.current != null) {
            this.actions.push(this.current);
        }
    }
}
