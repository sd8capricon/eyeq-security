import type { BlogCardProps } from "../types"


const ClientBlogCard = ({ author, content_preview, date, thumbnail, title, topic }: BlogCardProps) => {
    `<div class="blog-item bg-cosmic-latte rounded overflow-hidden">
    <div class="blog-img position-relative overflow-hidden">
        <img class="img-fluid" src=${thumbnail} alt="" />
        <a
            class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
            href=""
        >
            ${topic}
        </a>
    </div>
    <div class="p-4">
        <div class="d-flex mb-3">
            <small class="me-3">
                <i class="far fa-user text-primary me-2"></i>${author}
            </small>
            <small>
                <i class="far fa-calendar-alt text-primary me-2"></i>
                ${date}
            </small>
        </div>
        <h4 class="mb-3">${title}</h4>
        <p>
            ${content_preview}
        </p>
        <a class="text-uppercase" href="">
            Read More
            <i class="bi bi-arrow-right"></i>
        </a>
    </div>
</div>
`
}

export default ClientBlogCard