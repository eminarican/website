<div class="flex flex-col h-full w-full justify-center items-center">
    <Text size="3xl" color="yellow-300" className="font-bold text-center whitespace-pre-line">
        BLOG IS
        UNDER CONSTRUCTION
        <Text size="lg" color="gray-300" className="font-bold">
            press ctrl-c or click exit to escape
        </Text>
    </Text>
</div>

<script lang="ts">
    import {onMountEvents} from "../../terminal/Util";
    import {goto} from "$app/navigation";

    import Text from "../../parts/Text.svelte";

    onMountEvents([
        {"keydown": onKey}
    ]);

    function onKey(event: KeyboardEvent) {
        if (event.ctrlKey && event.key == "c") goto("/");
    }
</script>
