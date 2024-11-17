import type { SanityDocument } from "@sanity/client";
import { defineField, defineType } from "sanity";
// @ts-ignore
import { pt } from "@sanity/block-content-to-hyperscript";

export const postType = defineType({
    name: "post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" },
        }),
        defineField({
            name: "mainImage",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                },
            ],
        }),
        defineField({
            name: "categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
        }),
        defineField({
            name: "body",
            type: "blockContent",
        }),
        defineField({
            name: "bodyPreview",
            type: "string",
            description: "Generated preview from body",
            // A simple preview function to extract the first 150 characters of the body text
            // You can create a custom function to generate more sophisticated previews if needed
            readOnly: true, // Prevents users from editing it manually
        }),
    ],

    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
            bodyPreview: "bodyPreview",
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
});

const generatePreview = (body: any) => {
    // Convert rich text to plain text
    const plainText = pt(body);

    // Truncate to get first 200 characters
    return plainText.slice(0, 200) + '...';
};

export const postPreviewHook = async (document: SanityDocument) => {
    const bodyText = pt(document.body); // Convert block content to plain text
    const preview = bodyText.slice(0, 200) + '...'; // Limit to 200 characters

    return {
        ...document,
        bodyPreview: preview,
    };
};