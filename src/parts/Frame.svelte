<div class="flex flex-col h-full w-full" bind:this={frame}>
    <div class="w-full flex items-center h-7 bg-[#363a39] border border-b-0 border-[#7e8181]/75 rounded-t-xl px-1">
        <div class="h-3 w-3 mx-1 bg-[#ed6a5e] rounded-full"></div>
        <div class="h-3 w-3 mx-1 bg-[#f4be50] rounded-full"></div>
        <div class="h-3 w-3 mx-1 bg-[#61c554] rounded-full"></div>
        <div class="pr-[3.50rem] w-full flex justify-center text-white text-sm font-mono">eminarican - zsh</div>
    </div>
    <div class="overflow-hidden h-full w-full flex-col bg-black-600/50 border border-t-0 border-[#7e8181]/75 backdrop-filter backdrop-blur-lg bg-black/80 rounded-b-xl">
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
    </div>
</div>

<script lang="ts">
    import {afterUpdate, createEventDispatcher, onMount} from "svelte";
    import {history} from "../terminal/Store";

    let input: HTMLInputElement;
    let panel: HTMLDivElement;
    let frame: HTMLDivElement;

    const dispatch = createEventDispatcher();

    onMount(() => {
        frame.addEventListener("click", (e) => {
            input.focus();
        });

        frame.addEventListener("keydown", (e) => {
            if (e.key != "Enter" || input.value == "") return;

            let args = input.value.split(" ");

            dispatch("command", {
                raw: input.value,
                name: args.shift(),
                args: args,
            });

            input.value = "";
        });

        frame.addEventListener("keydown", (e) => {
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
