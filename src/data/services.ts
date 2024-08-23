// Types
import type { GetStaticPaths } from "astro";

export const staticPaths = (() => {
    return [
        {
            params: { service: "general-security" },
            props: { title: "General Security Services" },
        },
    ];
}) satisfies GetStaticPaths;