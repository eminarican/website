<Frame header={false}>
    <div class="absolute flex flex-row px-5 py-4 gap-x-5 font-mono text-sm text-white">
        <p class="underline underline-offset-2 cursor-pointer" on:click={() => exit()}>{"< exit"}</p>
        <p class="text-gray-400 cursor-default">home</p>
        <p class="text-gray-400 cursor-default">blogs</p>
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
