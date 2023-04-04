import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class SocialCommand extends Command {

    public constructor() {
        super("social", "main");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        let output = new CommandOutput();

        output.info("my social accounts are:");
        output.notices([
            this.link("github", "fa-brands fa-github", "https://github.com/eminarican"),
            this.link("twitter", "fa-brands fa-twitter", "https://twitter.com/eminarican"),
            this.link("discord", "fa-brands fa-discord", "https://discord.com/users/784013663186059324"),
        ]);

        return output;
    }

    private link(name: string, icon: string, href: string): string {
        return `- <i class="${icon}"></i> <a class="underline underline-offset-2" href="${href}" target=_blank>${name}</a>`;
    }
}
