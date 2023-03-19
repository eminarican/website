import CommandOutput from "../CommandOutput";
import Command from "../Command";

export default class SocialCommand extends Command {

    public constructor() {
        super("social");
    }

    public override execute(): CommandOutput {
        let output = new CommandOutput();

        output.info("my social accounts are:");
        output.notices([
            `<i class="fa-brands fa-github"></i> <a class="underline underline-offset-2" href="https://github.com/eminarican" target=_blank>github</a>`,
            `<i class="fa-brands fa-twitter"></i> <a class="underline underline-offset-2" href="https://twitter.com/eminarican" target=_blank>twitter</a>`,
            `<i class="fa-brands fa-discord"></i> <a class="underline underline-offset-2" href="https://discord.com/users/784013663186059324" target=_blank>discord</a>`,
        ]);

        return output;
    }
}
