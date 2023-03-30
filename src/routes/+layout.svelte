<div class="flex justify-center items-center h-screen w-screen p-4 select-none">
    <slot></slot>
</div>

<script>
    import "../app.css";

    import {onMountNewSession, printWelcome} from "../terminal/Util";

    onMountNewSession((history) => {
        printWelcome(history);
    });
</script>
