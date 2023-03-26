<Frame header={true}>
    <div class="overflow-y-scroll overflow-x-hidden h-full p-2" bind:this={panel}>
        {#each $history.getRecords() as record}
            <div class="flex items-center w-full text-white text-sm font-mono">
                {@html record}
            </div>
        {/each}
        <div class="flex flex-row w-full text-white text-sm font-mono">
            <p class="pr-2">eminarican@github ~ ></p>
            <input class="flex flex-1 bg-transparent outline-none" type="text" bind:this={input}/>
        </div>
    </div>
</Frame>

<script lang="ts">
    import {afterUpdate, createEventDispatcher, onMount} from "svelte";
    import {history} from "../terminal/Store";
    import Frame from "./Frame.svelte";

    let input: HTMLInputElement;
    let panel: HTMLDivElement;

    const dispatch = createEventDispatcher();

    onMount(() => {
        document.addEventListener("click", onClick);
        document.addEventListener("keydown", onEnter);
        document.addEventListener("keydown", onArrow);

        return () => {
            document.removeEventListener("click", onClick);
            document.removeEventListener("keydown", onEnter);
            document.removeEventListener("keydown", onArrow);
        };
    });

    function onClick(event: MouseEvent) {
        input.focus();
    }

    function onEnter(event: KeyboardEvent) {
        if (event.key != "Enter" || input.value == "") return;

        let args = input.value.split(" ");

        dispatch("command", {
            raw: input.value,
            name: args.shift().toLowerCase(),
            args: args,
        });

        input.value = "";
    }

    function onArrow(event: KeyboardEvent) {
        history.update((history) => {
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
            input.value = $history.currentInput();
            return history;
        });
    }

    afterUpdate(() => {
        panel.scrollTo(0, panel.scrollHeight);
    });
</script>
