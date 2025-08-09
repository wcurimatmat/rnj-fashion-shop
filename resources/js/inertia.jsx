import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob(
            ["./Admin/Pages/**/*.jsx", "./User/Pages/**/*.jsx"],
            { eager: true }
        );

        const pageMap = Object.fromEntries(
            Object.entries(pages).map(([path, module]) => {
                const shortName = path
                    .replace("./User/Pages/", "")
                    .replace("./Admin/Pages/", "")
                    .replace(".jsx", "");
                return [shortName, module];
            })
        );

        return pageMap[name];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
