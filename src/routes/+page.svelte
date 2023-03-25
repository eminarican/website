<div class="h-screen w-screen flex justify-center items-center p-4 select-none" on:click={() => state.input.focus()}>
    <Terminal bind:input={state.input} on:command={command}/>
</div>

<script lang="ts">
    import "../app.css";

    import {history} from "../terminal/Store.ts";
    import {onMount} from "svelte";

    import CommandOutput from "../cmd/CommandOutput";
    import Terminal from "../parts/Terminal.svelte";
    import History from "../terminal/History";
    import Command from "../cmd/Command";

    let state = {
        input: undefined,
    };

    function command(event: CustomEvent<CommandEvent>) {
        let detail = event.detail;
        let command = detail.command;

        history.update(value => {
            value.addRecord(`eminarican@github ~ > ${detail.input}`);

            if (command === undefined) {
                printOutput(value, CommandOutput.error(`unknown command "${detail.name}", use help command`));
            } else {
                printOutput(value, command.execute(detail.args));
            }
            return value;
        })
    }

    onMount(() => {
        history.update(value => {
            printOutput(value, CommandOutput.info("use help command to see available commands"));
            return value;
        })
    });

    function printOutput(history: History, output: CommandOutput) {
        for (let line of output) {
            history.addRecord(line);
        }
    }

    interface CommandEvent {
        command: Command | undefined,
        input: string,
        args: Array<string>,
        name: string,
    }
</script>
