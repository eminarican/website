<div class="h-full w-full absolute flex flex-col p-4"
     out:fly={{x: direction() * window.innerWidth, duration: 1500, opacity: 1}}
     in:fly={{x: -direction() * window.innerWidth, duration: 1500, opacity: 1}}
>
    {#if header}
        <div class="flex items-center h-7 px-2 bg-[#363a39] border border-b-0 border-[#7e8181]/75 rounded-t-xl">
            <div class="absolute flex h-3 gap-x-2">
                <div class="w-3 bg-[#ed6a5e] rounded-full"></div>
                <div class="w-3 bg-[#f4be50] rounded-full"></div>
                <div class="w-3 bg-[#61c554] rounded-full"></div>
            </div>
            <div class="flex justify-center w-full">
                <Text>eminarican - zsh</Text>
            </div>
        </div>
    {/if}
    <div class="h-full w-full bg-black/80 border border-[#7e8181]/75 overflow-hidden {containerStyle()}">
        <slot></slot>
    </div>
</div>

<script lang="ts">
    import {fly} from "svelte/transition";

    import Text from "./Text.svelte";

    export let header = false;

    function containerStyle(): string {
        if (header) {
            return "border-t-0 rounded-b-xl";
        }
        return "rounded-xl";
    }

    function direction(): number {
        if (window.location.pathname != "/") {
            return -1;
        }
        return 1;
    }
</script>
