import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class InterestsCommand extends Command {

    public constructor() {
        super("interests", "main");
    }

    public override execute(args: Array<string>): CommandOutput {
        let output = new CommandOutput();

        output.info("my main interests are:");
        output.notices([
            `- <i class="fa-solid fa-laptop"></i> computer science`,
            `- <i class="fa-solid fa-brain"></i> philosophy`,
            `- <i class="fa-solid fa-book"></i> languages`,
            `- <i class="fa-solid fa-earth-americas"></i> physics`,
            `- <i class="fa-solid fa-calculator"></i> maths`,
        ]);

        output.info("my programming field interests are:");
        output.notices([
            `- <i class="fa-solid fa-cube"></i> graphics programming`,
            `- <i class="fa-brands fa-docker"></i> distributed systems`,
            `- <i class="fa-solid fa-screwdriver-wrench"></i> reverse engineering`,
            `- <i class="fa-solid fa-bolt"></i> embedded systems`,
            `- <i class="fa-solid fa-server"></i> networking`
        ]);

        return output;
    }
}
