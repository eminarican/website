import {Token, TokenType} from "./Token";

import type {Action} from "./Action";
import {CommandAction, PipeAction, ThenAction} from "./Action";

export default class Parser {

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

        let actions: Array<Action> = [];
        let current: CommandAction | null = null;

        tokens?.forEach((token) => {
            let data = token.data;

            switch (token.type) {
                case TokenType.Arg:
                    if (current == null) {
                        current = new CommandAction(data);
                    } else {
                        current.args.push(data);
                    }
                    return;
                case TokenType.Flag:
                    current?.flags.push(data);
                    return;
            }

            if (current != null) {
                actions.push(current);
                current = null;
            }

            switch (token.type) {
                case TokenType.Pipe:
                    actions.push(new PipeAction());
                    break;
                case TokenType.Then:
                    actions.push(new ThenAction());
            }
        });

        if (current != null) {
            actions.push(current);
        }

        return actions;
    }
}
