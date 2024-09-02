import { useState } from "react";

// Types
import type { BlogCardProps } from "../../types";

// Components
import BlogCard from "./BlogCard";

// Fetch Blogs in Range
// *[_type == "post"] | order(_createdAt desc) [startIndex...endIndex]

const TempBlog: BlogCardProps = {
    thumbnail: "https://picsum.photos/seed/f/500/350",
    topic: "Blog Topic",
    title: "Blog Title",
    author: "John Doe",
    date: "01 Jan, 2045",
    content_preview:
        "Dolor et eos labore stet justo sed est sed sed sed dolor stet amet",
};

const blogs: BlogCardProps[] = [];

for (let index = 0; index < 50; index++)
    blogs.push({ ...TempBlog, title: `Blog Title ${index}` });

const blogsPerPage = 10;

const maxPages = Math.floor(blogs.length / blogsPerPage);

export default function BlogGrid() {
    // startIndex and endIndex
    const [currentPage, setCurrentPage] = useState(1)
    const [range, setRange] = useState([0, blogsPerPage])

    const handleNext = () => {
        if (currentPage >= maxPages) return
        let newRange = [range[0] + blogsPerPage, range[1] + blogsPerPage]
        const newPage = currentPage + 1;
        setRange(newRange)
        setCurrentPage(newPage)
    }

    const handlePrevious = () => {
        if (currentPage <= 1) return
        let newRange = [range[0] - blogsPerPage, range[1] - blogsPerPage]
        const newPage = currentPage - 1;
        setRange(newRange)
        setCurrentPage(newPage)
    }

    const handleN = (N: number) => {
        const diff = (N - currentPage) * blogsPerPage
        let newRange = [range[0] + diff, range[1] + diff]
        setRange(newRange)
        setCurrentPage(N)
    }

    return (
        <div className="row g-5">
            {
                blogs.slice(range[0], range[1]).map((blog, i) =>
                    <div key={i} className="col-md-6 wow slindeInUp" data-wow-delay="0.1s">
                        <BlogCard {...blog} />
                    </div>
                )
            }
            <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                <nav aria-label="Page navigation">
                    <ul className="pagination pagination-lg m-0">
                        <li className={"page-item" + (currentPage == 1 ? " disabled" : "")}>
                            <button
                                className="page-link rounded-0"
                                aria-label="Previous"
                                onClick={handlePrevious}
                            >
                                <span aria-hidden="true">
                                    <i className="bi bi-arrow-left"></i>
                                </span>
                            </button>
                        </li>
                        {
                            currentPage > 1 &&
                            <li className="page-item">
                                <button className="page-link" onClick={handlePrevious}>{currentPage - 1}</button>
                            </li>
                        }
                        <li className="page-item active">
                            <button className="page-link">{currentPage}</button>
                        </li>
                        {
                            currentPage <= maxPages - 1 &&
                            <li className="page-item">
                                <button className="page-link" onClick={handleNext}>{currentPage + 1}</button>
                            </li>
                        }
                        {
                            currentPage <= maxPages - 2 &&
                            <li className="page-item">
                                <button className="page-link" onClick={() => handleN(currentPage + 2)}>{currentPage + 2}</button>
                            </li>
                        }
                        <li className={"page-item" + (currentPage == maxPages ? " disabled" : "")}>
                            <button className="page-link rounded-0" aria-label="Next" onClick={handleNext}>
                                <span aria-hidden="true">
                                    <i className="bi bi-arrow-right"></i>
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}