// Types
import type { BlogCardProps } from "../types";

console.log("Glo");



let startIndex = 0;
let endIndex = 10;

const TempBlog: BlogCardProps = {
    thumbnail: "https://picsum.photos/seed/idk/500/350",
    topic: "Blog Topic",
    title: "Blog Title",
    author: "John Doe",
    date: "01 Jan, 2045",
    content_preview:
        "Dolor et eos labore stet justo sed est sed sed sed dolor stet amet",
};

class BlogGrid extends HTMLElement {
    constructor() {
        super();
        let blogs = this.dataset.blogs
        console.log(blogs);

    }
}

customElements.define('blog-grid', BlogGrid)