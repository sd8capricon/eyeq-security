// Types 
import type { BlogCardProps } from "../../types"

export default function BlogCard({ thumbnail, topic, date, author, title, content_preview, slug }: BlogCardProps) {
    return (
        <div className="blog-item bg-cosmic-latte rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src={thumbnail} alt="" />
                <a
                    className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                    href=""
                >
                    {topic}
                </a>
            </div>
            <div className="p-4">
                <div className="d-flex mb-3">
                    <small className="me-3">
                        <i className="far fa-user text-primary me-2"></i>{author}
                    </small>
                    <small>
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        {date}
                    </small>
                </div>
                <h4 className="mb-3">{title}</h4>
                <p>
                    {content_preview}
                </p>
                <a className="text-uppercase" href={`/blog/${slug}`}>
                    Read More
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>

    )
}