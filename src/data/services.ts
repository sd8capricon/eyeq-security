// Types
import type { GetStaticPaths } from "astro";

const TempImage: ImageMetadata = {} as ImageMetadata;
TempImage.src = "https://via.placeholder.com/700x600"

export const staticPaths = (() => {
    return [
        {
            params: { service: "general-security" },
            props: {
                title: "General Security Services",
                first_para_italic: true,
                first_para: "EyeQ Security Services provides comprehensive security services that protect and preserve businesses and properties throughout Manitoba.We take pride in saying our quality security solutions never fail to deliver.Our efficacious security programmes and dedicated team will maximise your coverage and give your site supreme protection.",
                highlight_title: "Our Services Include:",
                highlight_list: [
                    "Unarmed uniform security guards for Private Enterprises",
                    "Educational Institutions",
                    "Retail and shopping malls",
                    "Leisure and Amusement Parks",
                    "Industrial and Construction projects",
                    "Warehouses",
                    "Homes and Residential Properties",
                    "Labor Camps"
                ],
                second_para: "We follow highest standards of integrity and excellence at every level. To us, integrity and professionalism are of utmost importance.As an organization committed to excellence, we maintain the highest industry standards for security officer's training, honor, loyalty, and character.All of our security officers will be highly trained and are subject to constant site supervision and random inspections to effectively meet the demands of the market.",
                img: TempImage
            },
        },
        {
            params: { service: "bank-security" },
            props: {
                title: "Bank Security Services",
                first_para_italic: false,
                first_para: "Banks are probably the riskiest and most sensitive businesses. Ensuring Comprehensive Security and Surveillance 24/7",
                highlight_title: "Why Choose Us:",
                highlight_list: [
                    "Trained personnel for the banking environment",
                    "Comprehensive security and surveillance",
                    "Proactive security that exceeds expectations",
                    "High visibility to deter criminal activity"
                ],
                second_para: "We have trained and fully equipped our security personnel to match these standards to provide highly proactive security and deliver beyond our clients' expectations for all types of banking institutions.Our security guards will be stationed at highly visible places within the banking premises, which lowers the likelihood of crime.",
                img: TempImage
            }
        }
    ];
}) satisfies GetStaticPaths;