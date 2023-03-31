export default class CommandOutput {

    public lines: Array<Line> = [];

    private write(line: Line): CommandOutput {
        this.lines.push(line);
        return this;
    }

    public info(text: string): CommandOutput {
        return this.write(new Line(OutputType.Info, text));
    }

    public error(text: string): CommandOutput {
        return this.write(new Line(OutputType.Error, text));
    }

    public notice(text: string): CommandOutput {
        return this.write(new Line(OutputType.Notice, text));
    }

    public infos(lines: Array<string>): CommandOutput {
        lines.forEach((line) => this.info(line));
        return this;
    }

    public errors(lines: Array<string>): CommandOutput {
        lines.forEach((line) => this.error(line));
        return this;
    }

    public notices(lines: Array<string>): CommandOutput {
        lines.forEach((line) => this.notice(line));
        return this;
    }

    public toArray(): Array<string> {
        return this.lines.map((line) => line.toString());
    }

    public toRawArray(): Array<string> {
        return this.lines.map((line) => line.data);
    }

    public static empty(): CommandOutput {
        return new CommandOutput();
    }

    public static info(line: string): CommandOutput {
        return new CommandOutput().info(line);
    }

    public static error(line: string): CommandOutput {
        return new CommandOutput().error(line);
    }

    public static notice(line: string): CommandOutput {
        return new CommandOutput().notice(line);
    }

    public static infos(lines: Array<string>): CommandOutput {
        return new CommandOutput().infos(lines);
    }

    public static errors(lines: Array<string>): CommandOutput {
        return new CommandOutput().errors(lines);
    }

    public static notices(lines: Array<string>): CommandOutput {
        return new CommandOutput().notices(lines);
    }
}

enum OutputType {
    Info,
    Error,
    Notice,
}

class Line {

    public data: string;
    public type: OutputType;

    public constructor(type: OutputType, data: string) {
        this.type = type;
        this.data = data;
    }

    public toString() {
        switch (this.type) {
            case OutputType.Info:
                return `<div class="whitespace-pre-wrap text-yellow-300">[?] ${this.data}</div>`;
            case OutputType.Error:
                return `<div class="whitespace-pre-wrap text-red-400">[!] ${this.data}</div>`;
            case OutputType.Notice:
                return `<div class="whitespace-pre-wrap text-emerald-300">[+] ${this.data}</div>`;
        }
    }
}
