import CommandOutput from "../../CommandOutput";
import Command from "../../Command";

export default class LanguagesCommand extends Command {

    public constructor() {
        super("languages", "main");
    }

    public override execute(args: Array<string>): CommandOutput {
        let output = new CommandOutput();

        output.info("languages that i use more frequently:");
        output.notices([
            this.language("go", "fa-brands fa-golang"),
            this.language("rust", "fa-brands fa-rust"),
            this.language("c/c++", "fa-solid fa-c"),
            this.language("js/ts", "fa-brands fa-square-js"),
            this.language("java/kotlin", "fa-brands fa-java"),
        ]);

        return output;
    }

    private language(name: string, icon: string): string {
        return `<i class="${icon}"></i> ${name}`;
    }
}
