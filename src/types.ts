import type { HTMLAttributes } from "astro/types";

export type Page = "home" | "about" | "services" | "blog" | "contact" | "careers" | string;

export type LayoutProps = {
    page_title: Page;
    page_description: string;
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