export type Page = "home" | "about" | "services" | "blog" | "contact_us" | "careers";

export type LayoutProps = {
    page_title: Page;
    page_description: string;
}