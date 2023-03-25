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

    let state = {
        input: undefined,
    };

    function command(event: CustomEvent) {
        let command = event.detail.command;

        history.update(value => {
            value.addRecord(`eminarican@github ~ > ${event.detail.input}`);

            if (command === undefined) {
                printOutput(value, CommandOutput.error(`unknown command "${event.detail.name}", use help command`));
            } else {
                printOutput(value, command.execute(event.detail.args));
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
</script>
