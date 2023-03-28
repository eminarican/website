<div class="flex flex-col h-full w-full justify-center items-center">
    <Text size="3xl" color="yellow-300" className="font-bold text-center whitespace-pre-line">
        BLOG IS
        UNDER CONSTRUCTION
    </Text>
    <Text size="lg" color="gray-300">
        press ctrl-c or click exit to escape
    </Text>
</div>

<script lang="ts">
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    import Text from "../../parts/Text.svelte";

    onMount(() => {
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
        };
    });

    function onKey(event: KeyboardEvent) {
        if (event.ctrlKey && event.key == "c") goto("/");
    }
</script>
