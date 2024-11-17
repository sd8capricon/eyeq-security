import { useEffect, useState } from "react";
// Types
import type { SanityDocument } from "@sanity/client";
import type { BlogCardProps } from "../../types";
// Utils
import { loadQuery } from "../../sanity/lib/load-query";
import { urlForImage } from "../../sanity/lib/urlForImage";
// Components
import BlogCard from "./BlogCard";

// Fetch Blogs in Range
// *[_type == "post"] | order(_createdAt desc) [startIndex...endIndex]

const blogsPerPage = 1;

const fetchInRange = async (start: number, end: number) => {
    const { data } = await loadQuery<SanityDocument>({
        query: `*[_type == "post"] | order(_createdAt desc) [${start}...${end}] {title, slug, mainImage, publishedAt, categories[]->{title}, author->, bodyPreview}`
    });
    return data
}

const fetchBlogCount = async (): Promise<number> => {
    const { data } = await loadQuery({
        query: `count(*[_type == "post"])`
    })
    return data as number
}

const map2BlogCard = (blog: SanityDocument) => {
    const blogCard: BlogCardProps = {
        thumbnail: urlForImage(blog.mainImage).format("webp").url(),
        topic: blog.categories[0].title,
        title: blog.title,
        author: blog.author.name,
        date: blog.publishedAt,
        content_preview: "",
    }
    return blogCard
}

export default function BlogGrid() {
    // startIndex and endIndex
    const [currentPage, setCurrentPage] = useState(1)
    const [range, setRange] = useState([0, blogsPerPage])
    const [blogs, setBlogs] = useState<BlogCardProps[]>([])
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchInRange(range[0], range[1]);
            const posts = data.map((p: SanityDocument) => map2BlogCard(p));
            const blogCounts = await fetchBlogCount();

            const maxPages = Math.ceil(blogCounts / blogsPerPage);

            setTotalPages(maxPages);
            setBlogs(posts);
        }
        fetchData();
    }, [])

    const handlePageChange = async (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            let newRange = []

            if (newPage - currentPage === 1)
                newRange = [range[0] + blogsPerPage, range[1] + blogsPerPage];
            else
                newRange = [range[0] - blogsPerPage, range[1] - blogsPerPage];

            const newData = await fetchInRange(newRange[0], newRange[1]);
            const newBlogs = newData.map((p: SanityDocument) => map2BlogCard(p));

            setRange(newRange);
            setBlogs(newBlogs);
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="row g-5">
            {
                blogs.map((blog, i) =>
                    <div key={i} className="col-md-6 wow slindeInUp" data-wow-delay="0.1s">
                        <BlogCard {...blog} />
                    </div>
                )
            }

            <div className="pagination align-items-center justify-content-center">
                <div className={"page-item me-4" + (currentPage === 1 ? " disabled" : "")}>
                    <button
                        className="page-link rounded-0"
                        aria-label="previous"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </div>
                <span className="me-4">Page {currentPage} of {totalPages}</span>
                <div className={"page-item" + (currentPage === totalPages ? " disabled" : "")}>
                    <button
                        className="page-link rounded-0"
                        aria-label="next"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}