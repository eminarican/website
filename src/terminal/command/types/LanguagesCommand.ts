import CommandOutput from "../CommandOutput";
import Command from "../Command";

export default class LanguagesCommand extends Command {

    public constructor() {
        super("languages");
    }

    public override execute(): CommandOutput {
        let output = new CommandOutput();

        output.info("languages that i use more frequently:");
        output.notices([
            `<i class="fa-brands fa-golang"></i> go`,
            `<i class="fa-brands fa-rust"></i> rust`,
            `<i class="fa-solid fa-c"></i> c/c++`,
            `<i class="fa-brands fa-square-js"></i> js/ts`,
            `<i class="fa-brands fa-java"></i> java/kotlin`,
        ]);

        return output;
    }
}
