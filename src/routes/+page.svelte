<Terminal on:command={command}/>

<script lang="ts">
    import "../app.css";

    import {onMount} from "svelte";
    import {history, commands} from "../terminal/Store";

    import CommandOutput from "../cmd/CommandOutput";
    import Terminal from "../parts/Terminal.svelte";
    import History from "../terminal/History.js";

    onMountHistory((history) => {
        if (history.getRecords().length != 0) return;
        print(history, CommandOutput.info("use help command to see available commands"));
    });

    function command(event: CustomEvent<CommandEvent>) {
        let payload = event.detail;
        let command = $commands.get(payload.name);

        history.update((history) => {
            history.addRecord(`eminarican@github ~ > ${payload.raw}`);
            history.addInput(payload.raw);

            if (command == null) {
                print(history, CommandOutput.error(`unknown command "${payload.name}", use help command`));
            } else {
                print(history, command.execute(payload.args));
            }

            history.resetCursor();
            return history;
        });
    }

    function onMountHistory(callback: (history: History) => void) {
        onMount(() => {
            history.update((history) => {
                callback(history);
                return history;
            });
        });
    }

    function print(history: History, output: CommandOutput) {
        for (let line of output) {
            history.addRecord(line);
        }
    }

    interface CommandEvent {
        raw: string,
        name: string,
        args: Array<string>
    }
</script>
