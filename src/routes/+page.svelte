<Terminal on:command={command}/>

<script lang="ts">
    import "../app.css";

    import {history} from "../terminal/Store";
    import {print, executeCommand, printWelcome, onMountNewSession} from "../terminal/Util";

    import CommandOutput from "../cmd/CommandOutput";
    import Terminal from "../parts/Terminal.svelte";

    onMountNewSession((history) => {
        printWelcome(history);
    });

    function command(event: CustomEvent<CommandEvent>) {
        let payload = event.detail;

        executeCommand(payload.name, payload.args, () => {
            print($history, CommandOutput.error(`unknown command "${payload.name}", use help command`));
        });
    }

    interface CommandEvent {
        raw: string,
        name: string,
        args: Array<string>
    }
</script>
