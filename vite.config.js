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
            "@Admin": path.resolve(__dirname, "resources/js/Admin"),
            "@User": path.resolve(__dirname, "resources/js/User"),
            "@Assets": path.resolve(__dirname, "resources/js/Assets"),
        },
    },
});
