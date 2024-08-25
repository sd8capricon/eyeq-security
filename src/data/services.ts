// Types
import type { GetStaticPaths } from "astro";


const TempImage: ImageMetadata = {} as ImageMetadata;
TempImage.src = "https://via.placeholder.com/700x600"


export const staticPaths = (() => {
    const paths = [
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
        },
        {
            params: { service: "hospital-security" },
            props: {
                title: "Hospital & 55+ Seniors living Security Services",
                first_para_italic: false,
                first_para: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence. Hospitals also typically maintain large inventories of drugs, some of which may have significant street value.",
                highlight_title: "Our Security Focuses On:",
                highlight_list: [
                    "Protecting vulnerable patients and residents",
                    "Safeguarding hospital inventories",
                    "Preventing theft and violence",
                    "Ensuring safety for healthcare employees",
                    "Maintaining peace within healthcare facilities"
                ],
                second_para: "Healthcare employees are also vulnerable as targets of violence, both from patients and family members alike. A hospital security officer is charged with maintaining the peace in a hospital & seniors living centers and working to safeguard the people and items within its walls",
                img: TempImage
            }
        },
        {
            params: { service: "school-security" },
            props: {
                title: "School Security Service",
                first_para_italic: false,
                first_para: "School Security officers play a critical role by inspecting and patrolling premises regularly, monitoring property entrances, authorizing entrance of people and vehicles, reporting any suspicious behavior and happenings, securing all exit doors and windows, monitoring surveillance cameras, responding to alarms and reacting promptly, assisting people in need, and submitting reports of daily surveillance activities. Trust us for the safety of your employees and property",
                highlight_title: "Our Key Responsibilities Include: ",
                highlight_list: [
                    "Inspecting and patrolling school premises",
                    "Monitoring property entrances",
                    "Authorizing entrance of people and vehicles",
                    "Securing all exits and windows",
                    "Monitoring surveillance cameras",
                    "Responding to alarms promptly",
                    "Assisting people in need",
                    "Reporting daily surveillance activities"
                ],
                img: TempImage
            }
        },
        {
            params: { service: "mobile-patrol" },
            props: {
                title: "Mobile Patrol Security",
                first_para_italic: false,
                first_para: "We understand at EyeQ Security Services that since parking lots are usually 24/7 operations, you might not want to invest in having security guards physically present all that time. Not only is that an expensive enterprise, but it's a lot to keep track of.",
                hightlight_title: "Why Choose Our Mobile Patrol? Service",
                highlight_list: [
                    "Regular or random walk-throughs of your business and private property",
                    "Monitoring of alarm and security systems",
                    "Immediate response to potential fires, gas leaks, or invasions",
                    "Ensuring the safety of individuals in your parking lots",
                    "Cost-effective security solution"
                ],
                second_para: "Our mobile patrol security services are designed to provide flexible and effective security coverage for your parking lots. We can station security guards to perform regular or random inspections, ensuring that everything is in order and that any potential threats are addressed promptly.<p>Our personnel are trained to respond swiftly to alarms, potential fires, gas leaks, or any signs of invasion, ensuring the safety of your property and anyone on-site</p>",
                img: TempImage
            }
        },
        {
            params: { service: "manpower-solutions" },
            props: {
                title: "Manpower Solutions",
                first_para_italic: false,
                first_para: "We work to alleviate human resource challenges that your business might be facing while remaining compliant with local labour laws and employment regulations. Our local knowledge, experience, professionalism, and mature processes enable us to deliver solutions quickly and cost-effectively to each of our clients",
                hightlight_title: "Why Choose Our Manpower Solutions?",
                highlight_list: [
                    "Expert consultants in career building and human resources",
                    "Compliance with local labour laws and employment regulations",
                    "Cost-effective and timely solutions",
                    "Tailored candidates who reflect your organization's image and objectives",
                    " Proven track record of transforming business growth"
                ],
                second_para: "Our talented consultants are professionals in building careers, helping employees achieve their career goals, and boosting the human resource infrastructures of businesses of all sizes. The solutions we offer create a win-win situation for all parties involved, phenomenally transforming business growth<p>We owe our success to our competent staff, work culture, and innovative methods. Thanks to their efforts, we have established a name as one of the most trusted services in workforce management solutions.</p>",
                img: TempImage
            }
        },
        {
            params: { service: "hotel-security" },
            props: {
                title: "Hotel Security",
                first_para_italic: false,
                first_para: "With a highly trained, fully licensed team security professionals, EyeQ Security can provide you with manned guarding security for the safety and security of your clients and customers.",
                img: TempImage,
                feature_title_top: "What's Included",
                feature_title_main: "Hotel Security Duties",
                features: [
                    {
                        feature: "Perfom Surveillance",
                        description: "The bulk of hotel security's day is filled with patrolling hotel grounds, parking lots, lobbies, restaurants, and hallways. They provide a sense of security to both hotel staff and guests simply by being present. Depending on hotel resources and size, some hotel security may be assigned to a surveillance room, where they monitor the hotel via security cameras"
                    },
                    {
                        feature: "Escort People In/Out of the Hotel (if needed)",
                        description: "Hotel security is also responsible for escorting guests and hotel staff to and from the hotel. If valet parking is unavailable late at night, hotel security may escort guests and staff in order to protect them. Additionally, hotel security may need to escort belligerent guests off hotel property, especially in hotels that have bars."
                    },
                    {
                        feature: "Maintain Order",
                        description: "Hotels that have conference centers or are near conference centers often hold concurrent conferences or conventions. During these times, the hotel experiences a high volume of guests. Hotel security is often expected to maintain order among the different groups of guests."
                    },
                    {
                        feature: "Report to Supervisors and Management",
                        description: "Hotel security is responsible for reporting all suspicious activity to their supervisors or hotel management. Usually, hotel security should report current events in real-time through their radio and document events that have already been resolved."
                    },
                    {
                        feature: "Investigate Disturbances",
                        description: "Hotel security must be on call anytime during their shift to investigate disturbances reported by hotel staff and guests. This can include things like excess noise coming from a guest's room or reports of suspicious people prowling the parking lot. Count on us in case you are looking to hire the best yet the most affordable security services in the region."
                    }
                ]
            }
        }
    ];
    return paths;
}) satisfies GetStaticPaths;