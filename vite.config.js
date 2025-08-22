import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "resources/js/Assets"),
            "@components": path.resolve(__dirname, "resources/js/Components"),
            "@layouts": path.resolve(__dirname, "resources/js/Layouts"),
            "@pages": path.resolve(__dirname, "resources/js/Pages"),
            "@utils": path.resolve(__dirname, "resources/js/Utils"),
        },
    },
});
