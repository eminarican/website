<Frame header={false}>
    <Text className="absolute flex flex-row px-5 py-4 gap-x-5">
        <button class="cursor-pointer underline underline-offset-2" on:click={() => goto("/")}>{"< exit"}</button>
        <button class="cursor-default text-gray-400">home</button>
        <button class="cursor-default text-gray-400">blogs</button>
    </Text>
    <slot></slot>
</Frame>

<script lang="ts">
    import {goto} from "$app/navigation";

    import Frame from "../../parts/Frame.svelte";
    import Text from "../../parts/Text.svelte";
</script>
