<div class="h-screen w-screen flex justify-center items-center p-4 select-none" on:click={() => state.input.focus()}>
    <Terminal bind:input={state.input} on:command={command}/>
</div>

<script lang="ts">
    import {commands, history} from "../terminal/Store.ts";
    import {onMount} from "svelte";

    import CommandOutput from "../terminal/command/CommandOutput";
    import CommandMap from "../terminal/command/CommandMap";
    import Terminal from "../parts/Terminal.svelte";
    import History from "../terminal/History";

    let state = {
        input: undefined,
        commands: new CommandMap(),
    };

    commands.subscribe((value) => {
        state.commands = value;
    });

    function command(event: CustomEvent) {
        let input = event.detail as string;
        if (input == "") return;

        let command = state.commands.get(input);
        history.update(value => {
            value.addRecord(`eminarican@github ~ > ${input}`);

            if (command === undefined) {
                printOutput(value, CommandOutput.error(`unknown command "${input}", use help command`));
            } else {
                printOutput(value, command.execute());
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
