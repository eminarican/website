<Terminal on:command={command}/>

<script lang="ts">
    import "../app.css";

    import {commands, updateHistory} from "../terminal/Store";
    import {print, onMountHistory} from "../terminal/Util";

    import CommandOutput from "../cmd/CommandOutput";
    import Terminal from "../parts/Terminal.svelte";

    onMountHistory((history) => {
        if (history.getRecords().length != 0) return;
        print(history, CommandOutput.info("use help command to see available commands"));
    });

    function command(event: CustomEvent<CommandEvent>) {
        let payload = event.detail;
        let command = $commands.get(payload.name);

        updateHistory((history) => {
            history.addRecord(`eminarican@github ~ > ${payload.raw}`);
            history.addInput(payload.raw);

            if (command == null) {
                print(history, CommandOutput.error(`unknown command "${payload.name}", use help command`));
            } else {
                print(history, command.execute(payload.args));
            }

            history.resetCursor();
        });
    }

    interface CommandEvent {
        raw: string,
        name: string,
        args: Array<string>
    }
</script>
