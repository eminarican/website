<Frame header={false}>
    <Text className="absolute flex flex-row px-5 py-4 gap-x-5">
        <button class="cursor-pointer underline underline-offset-2" on:click={() => goto("/")}>{"< exit"}</button>
        <button class="cursor-default text-gray-400">home</button>
        <button class="cursor-default text-gray-400">blogs</button>
    </Text>
    <slot></slot>
</Frame>

<script lang="ts">
    import {onMountNewSession, printWelcome} from "../../terminal/Util";
    import {goto} from "$app/navigation";

    import Text from "../../parts/Text.svelte";
    import Frame from "../../parts/Frame.svelte";
    import Dispatcher from "../../terminal/Dispatcher";

    onMountNewSession((history) => {
        printWelcome(history);
        Dispatcher.dispatch("blog");
    });
</script>
