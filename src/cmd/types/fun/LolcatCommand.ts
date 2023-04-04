import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class LolcatCommand extends Command {

    public constructor() {
        super("lolcat", "fun", "[text]");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        if (args.length == 0) {
            return CommandOutput.empty();
        }

        return this.lolcat(args.join(" "));
    }

    private lolcat(text: string): CommandOutput {
        return CommandOutput.notices(lolcat(text).split("\n"));
    }
}

function lolcat(input: string) {
    let output = "";
    let freq = 0.1;

    input.split("\n").forEach((line, index, lines) => {
        for (let i = 0; i < line.length; i++) {
            if (line[i] == " ") {
                output += " ";
            } else {
                output += `${rainbow(freq, index + i)}${line[i]}</span>`;
            }
        }
        if (index != lines.length - 1) {
            output += "\n";
        }
    });

    return output;
}


function rainbow(freq: number, i: number) {
    const r = Math.round(Math.abs(Math.sin(freq * i)) * 255);
    const g = Math.round(Math.abs(Math.sin(freq * i + (2 * Math.PI) / 3)) * 255);
    const b = Math.round(Math.abs(Math.sin(freq * i + (4 * Math.PI) / 3)) * 255);
    return `<span style="color:rgb(${r},${g},${b})">`;
}
