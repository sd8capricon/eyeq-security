import type { HTMLAttributes } from "astro/types";

export type Page = "home" | "about" | "services" | "blogs" | "contact" | "careers";

export type LayoutProps = {
    page_title: string;
    page_description: string;
    nav_active: Page
}

export type ServiceBtnProps = {
    target: string;
    icon: string;
    service: string;
    active?: boolean;
}

export interface ServiceBreif extends HTMLAttributes<'div'> {
    id: string;
    image: ImageMetadata;
    service: string;
    description?: string
    active?: boolean;
    link?: string;
}

export type Location = {
    position: number;
    city: string;
    address?: string;
    email: string;
    phone: string;
};

export type Job = {
    position: string;
    description: string;
    location: string;
    department: string;
};

export type ServiceFeature = {
    feature: string;
    description: string;
    height: number;
}