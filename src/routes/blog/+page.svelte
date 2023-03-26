<div class="flex flex-col h-full w-full justify-center items-center">
    <div class="whitespace-pre-line text-yellow-300 text-3xl font-mono font-bold text-center">
        BLOG IS
        UNDER CONSTRUCTION
        <div class="text-lg text-gray-300">press ctrl-c or click exit to escape</div>
    </div>
</div>

<script lang="ts">
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    onMount(() => {
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
        };
    });

    function onKey(event: KeyboardEvent) {
        if (event.ctrlKey && event.key === "c") goto("/");
    }
</script>
