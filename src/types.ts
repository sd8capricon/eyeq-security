export type Page = "home" | "about" | "services" | "blog" | "contact" | "careers";

export type LayoutProps = {
    page_title: Page;
    page_description: string;
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