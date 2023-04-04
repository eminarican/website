import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class AboutCommand extends Command {

    public constructor() {
        super("about", "main");
    }

    public override execute(args: Array<string>, flags: Array<string>, piped: boolean): CommandOutput {
        return CommandOutput.infos([
            "hello ^^ i'm emin, a high school student",
            "who has been passionate about programming since 2015",
            "i can say that i'm addicted to research and prefer to",
            "spend my days improving myself in order to experience the",
            "satisfaction that comes with creating something",
            "however, i also have hobbies that i enjoy exploring in",
            "several different areas because i believe that engaging in",
            "multiple fields provides one with different perspectives.",
            "i hope to achieve my goals...",
        ]);
    }
}
