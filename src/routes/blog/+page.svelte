<Frame header={false}>
    <div class="flex flex-col h-full w-full justify-center items-center">
        <div class="whitespace-pre-line text-yellow-300 text-3xl font-mono font-bold text-center">
            BLOG IS
            UNDER CONSTRUCTION
            <div class="text-lg text-gray-300">press ctrl-c to escape</div>
        </div>
    </div>
</Frame>

<script lang="ts">
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    import Frame from "../../parts/Frame.svelte";

    onMount(() => {
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
        };
    });

    function onKey(event: KeyboardEvent) {
        if (event.ctrlKey && event.key === "c") {
            goto("/");
        }
    }
</script>
