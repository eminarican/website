<Frame header={false}>
    <div class="absolute flex flex-row px-5 py-4 gap-x-5 font-mono text-sm text-white">
        <button class="underline underline-offset-2 cursor-pointer" on:click={() => exit()}>{"< exit"}</button>
        <button class="text-gray-400 cursor-default">home</button>
        <button class="text-gray-400 cursor-default">blogs</button>
    </div>
    <slot></slot>
</Frame>

<script lang="ts">
    import {goto} from "$app/navigation";

    import Frame from "../../parts/Frame.svelte";

    function exit() {
        goto("/");
    }
</script>
