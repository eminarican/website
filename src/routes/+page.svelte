<div class="h-screen w-screen flex justify-center items-center p-4 select-none">
    <Frame on:command={command}/>
</div>

<script lang="ts">
    import "../app.css";

    import {onMount} from "svelte";
    import {history, commands} from "../terminal/Store";

    import CommandOutput from "../cmd/CommandOutput";
    import Frame from "../parts/Frame.svelte";

    onMount(() => {
        print(CommandOutput.info("use help command to see available commands"));
    });

    function command(event: CustomEvent<CommandEvent>) {
        let payload = event.detail;
        let command = $commands.get(payload.name);

        printRaw(`eminarican@github ~ > ${payload.raw}`);
        addInput(payload.raw);

        if (command == undefined) {
            print(CommandOutput.error(`unknown command "${payload.name}", use help command`));
        } else {
            print(command.execute(payload.args));
        }

        resetCursor();
    }

    function print(output: CommandOutput) {
        for (let line of output) {
            printRaw(line);
        }
    }

    function printRaw(message: string) {
        history.update((history) => {
            history.addRecord(message);
            return history;
        });
    }

    function addInput(input: string) {
        history.update((history) => {
            history.addInput(input);
            return history;
        });
    }

    function resetCursor() {
        history.update((history) => {
            history.resetCursor();
            return history;
        });
    }

    interface CommandEvent {
        raw: string,
        name: string,
        args: Array<string>
    }
</script>
