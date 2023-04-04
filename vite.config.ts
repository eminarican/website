import {defineConfig} from "vite";
import {sveltekit} from "@sveltejs/kit/vite";
import {ViteRsw} from "vite-plugin-rsw";

export default defineConfig({
    plugins: [sveltekit(), ViteRsw()],
    server: {
        fs: {
            allow: ["./wasm"]
        }
    }
});
