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
        document.addEventListener("click", (e) => {
            input.focus();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key != "Enter" || input.value == "") return;

            let args = input.value.split(" ");

            dispatch("command", {
                raw: input.value,
                name: args.shift(),
                args: args,
            });

            input.value = "";
        });

        document.addEventListener("keydown", (e) => {
            history.update((history) => {
                switch (e.key) {
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
        });
    });

    afterUpdate(() => {
        panel.scrollTo(0, panel.scrollHeight);
    });
</script>
