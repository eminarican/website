import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class InterestsCommand extends Command {

    public constructor() {
        super("interests", "main");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        let output = new CommandOutput();

        output.info("my main interests are:");
        output.notices([
            this.interest("computer science", "fa-solid fa-laptop"),
            this.interest("philosophy", "fa-solid fa-brain"),
            this.interest("languages", "fa-solid fa-book"),
            this.interest("physics", "fa-solid fa-earth-americas"),
            this.interest("maths", "fa-solid fa-calculator"),
        ]);

        output.info("my programming field interests are:");
        output.notices([
            this.interest("graphics programming", "fa-solid fa-cube"),
            this.interest("distributed systems", "fa-brands fa-docker"),
            this.interest("reverse engineering", "fa-solid fa-screwdriver-wrench"),
            this.interest("embedded systems", "fa-solid fa-bolt"),
            this.interest("networking", "fa-solid fa-server"),
        ]);

        return output;
    }

    private interest(name: string, icon: string): string {
        return `- <i class="${icon}"></i> ${name}`;
    }
}
