<div class="{full} flex flex-col">
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
    <div class="{full} bg-black/80 backdrop-blur-lg overflow-hidden {containerStyle()}">
        <div class="{full} border border-[#7e8181]/75 {containerStyle()}">
            <slot></slot>
        </div>
    </div>
</div>

<script lang="ts">
    import Text from "./Text.svelte";

    export let header = false;
    const full = "h-full w-full";

    function containerStyle(): string {
        if (header) {
            return "border-t-0 rounded-b-xl";
        }
        return "rounded-xl";
    }
</script>
