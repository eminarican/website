<Frame header={true}>
    <div class="h-full p-2 overflow-y-scroll overflow-x-hidden" bind:this={panel}>
        {#each $history.getRecords() as record}
            <Text className="flex items-center w-full">
                {@html record}
            </Text>
        {/each}
        <Text className="flex flex-row w-full gap-x-2">
            <Text className="whitespace-nowrap">eminarican@github ~ ></Text>
            <input class="w-full bg-transparent outline-none" bind:this={input}/>
        </Text>
    </div>
</Frame>

<script lang="ts">
    import {afterUpdate, createEventDispatcher} from "svelte";
    import {history, updateHistory} from "../terminal/Store";
    import {onMountEvents} from "../terminal/Util";

    import Frame from "./Frame.svelte";
    import Text from "./Text.svelte";

    const dispatch = createEventDispatcher();

    let input: HTMLInputElement;
    let panel: HTMLDivElement;

    onMountEvents([
        {"click": onClick},
        {"keydown": onEnter},
        {"keydown": onArrow},
    ]);

    afterUpdate(() => {
        panel.scrollTo(0, panel.scrollHeight);
    });

    function onClick(_event: MouseEvent) {
        input.focus();
    }

    function onEnter(event: KeyboardEvent) {
        if (event.key != "Enter" || input.value.trim() == "") return;

        let args = input.value.split(" ");

        dispatch("command", {
            raw: input.value,
            name: args.shift().toLowerCase(),
            args: args,
        });

        input.value = "";
    }

    function onArrow(event: KeyboardEvent) {
        updateHistory((history) => {
            switch (event.key) {
                case "ArrowUp":
                    history.incrementCursor();
                    break;
                case "ArrowDown":
                    history.decrementCursor();
                    break;
                default:
                    return history;
            }
            input.value = history.currentInput();
        });
    }
</script>
