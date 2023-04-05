<div class="h-screen w-screen select-none">
    <slot></slot>
</div>

<script>
    import "../app.css";

    import {onMountNewSession} from "../terminal/Util";

    onMountNewSession(); // needed for initialization
</script>
