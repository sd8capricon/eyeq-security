// Types
import type { GetStaticPaths } from "astro";
import type { SanityDocument } from "@sanity/client";

// Utils
import { loadQuery } from "../sanity/lib/load-query";

export const blogStaticPaths = (async () => {
    const { data: posts } = await loadQuery<SanityDocument[]>({
        query: `*[_type == "post"]`,
    });


    const paths = posts.map(post => {
        return {
            params: { slug: post.slug.current },
        }
    })

    return paths
}) satisfies GetStaticPaths