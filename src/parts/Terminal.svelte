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

    function onMountEvents(events: Array<EventHandler>) {
        onMount(() => {
            iterateEvents(events, (name, func) => {
                document.addEventListener(name, func);
            });

            return () => {
                iterateEvents(events, (name, func) => {
                    document.removeEventListener(name, func);
                });
            };
        });
    }

    function iterateEvents(
        events: Array<EventHandler>,
        callback: (name: string, func: (Event) => void) => void
    ) {
        for (let event of events) {
            for (let name of Object.keys(event)) {
                callback(name, event[name]);
            }
        }
    }

    interface EventHandler {
        [key: string]: (Event) => void;
    }
</script>
