<div class="h-screen w-screen select-none">
    <slot></slot>
</div>

<script>
    import "../app.css";

    import {onMountNewSession, printWelcome} from "../terminal/Util";

    onMountNewSession((history) => {
        printWelcome(history);
    });
</script>
