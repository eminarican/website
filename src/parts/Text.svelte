<p class="font-mono text-{size} text-{color} {className}">
    <slot></slot>
</p>

<script lang="ts">
    export let className;
    export let size = "sm";
    export let color = "white";
</script>
