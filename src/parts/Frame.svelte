<div class="flex flex-col h-full w-full">
    {#if header}
        <div class="w-full flex items-center h-7 bg-[#363a39] border border-b-0 border-[#7e8181]/75 rounded-t-xl px-1">
            <div class="h-3 w-3 mx-1 bg-[#ed6a5e] rounded-full"></div>
            <div class="h-3 w-3 mx-1 bg-[#f4be50] rounded-full"></div>
            <div class="h-3 w-3 mx-1 bg-[#61c554] rounded-full"></div>
            <div class="pr-[3.50rem] w-full flex justify-center text-white text-sm font-mono">eminarican - zsh</div>
        </div>
    {/if}
    {#if header}
        <div class="border-t-0 rounded-b-xl {style}">
            <slot></slot>
        </div>
    {:else}
        <div class="rounded-xl {style}">
            <slot></slot>
        </div>
    {/if}
</div>

<script lang="ts">
    export let header = false;
    const style = "overflow-hidden h-full w-full flex-col backdrop-filter backdrop-blur-lg bg-black-600/50 border border-[#7e8181]/75 bg-black/80";
</script>
