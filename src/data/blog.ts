// Types

import type { GetStaticPaths } from "astro";

export const blogStaticPaths = (() => {
    return [
        {
            params: { slug: "blog1" },
            props: {
                title: "Blog Title"
            }
        }
    ]
}) satisfies GetStaticPaths