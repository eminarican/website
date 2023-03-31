<Terminal on:command={command}/>

<script lang="ts">
    import Terminal from "../parts/Terminal.svelte";
    import Dispatcher from "../terminal/Dispatcher";

    function command(event: CustomEvent<CommandEvent>) {
        let payload = event.detail;

        Dispatcher.dispatch(payload.raw);
    }

    interface CommandEvent {
        raw: string,
        name: string,
        args: Array<string>
    }
</script>
