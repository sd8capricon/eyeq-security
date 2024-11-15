// Types
import type { ServiceBreif } from "../types";
// Assets
import TestImage from "../assets/img/service/719-1280x720.jpg";
import General from "../assets/img/service/general.jpg";
import Bank from "../assets/img/service/bank.jpg";
import Hospital from "../assets/img/service/hospital.jpg";
import Retail from "../assets/img/service/retail.jpg";
import Pubs from "../assets/img/service/pub.jpg";
import Event from "../assets/img/service/event.jpg";
import MobilePatrol from "../assets/img/service/mobile_patrol.jpg";

const serviceBriefs: ServiceBreif[] = [
    {
        active: true,
        id: "general",
        image: General,
        service: "General Security Services",
        link: "general-security",
        description: "We offer unarmed uniform security guards services to Private Enterprises, Educational Institutions, Retail and shopping malls, Leisure and Amusement Parks, Industrial and Construction projects.Warehouses, Homes and Residential Properties, Labor Camps, etc.We follow highest standards of integrity and excellence at every level.To us, integrity and professionalism are of utmost importance.As an organization committed to excellence, we maintain the highest industry standards for security officer's training, honor, loyalty, and character.All of our security officers will be highly trained and are subject to constant site supervision and random inspections to effectively meet the demands of the market."
    },
    {
        id: "bank",
        link: "bank-security",
        image: Bank,
        service: "Bank Security Services",
        description: "Banks are probably the riskiest and most sensitive businesses, and they need 24/7 comprehensive security and surveillance.EyeQ personnel assigned to banks are adequately trained for the banking environment and will ensure that all individuals entering the bank are scanned and have a legitimate reason for being within the banking premises.We have trained and fully equipped our security personnel to match these standards to provide highly proactive security and deliver beyond our clients&#39; expectations for all types of banking institutions.Our security guards will be stationed at highly visible places within the banking premises, which lowers the likelihood of crime."
    },
    {
        id: "hospital-senior-living",
        link: "hospital-senior-living",
        image: Hospital,
        service: "Hospital & Senior Living Security Services",
        description: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and Seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence.Hospitals also typically maintain large inventories of drugs, some of which may have significant street value.Healthcare employees, likewise, are also vulnerable as targets of violence for both patients and family members alike.A hospital security officer is charged with maintaining the peace in a hospital & amp; seniors living centers and working to safeguard the people and items within its walls."
    },
    {
        id: "hotel",
        image: TestImage,
        link: "hotel-security",
        service: "Hotel Security Services",
        description: "With a highly trained, fully licensed team security professionals, EyeQ Security can provide you with manned guarding security for the safety and security of your clients and customers."
    },
    {
        id: "loss",
        image: TestImage,
        service: "Loss Prevenion Security",
        link: "loss-prevention",
        description: "Retail crime costs Canadian firms over $5 billion each year. Independent retailers are a particularly vulnerable target, with 87.5 percent reporting at least one theft every year.When finances are tight, Canadian businesses can protect their earnings by ensuring a substantial loss prevention strategy."

    },
    {
        id: "mall-retail",
        link: "mall-security",
        image: Retail,
        service: "Shopping Mall & Retail Security Services",
        description: "EyeQ Security Services has been a trusted security partner for some of the largest companies in Canadian retail since our debut. We've learned from working with notable companies that no two retail stores or shopping malls are alike and that each requires a custom security solution suited to its specific needs."
    },
    {
        id: "school",
        link: "school-security",
        image: TestImage,
        service: "School Security Services",
        description: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and Seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence.Hospitals also typically maintain large inventories of drugs, some of which may have significant street value.Healthcare employees, likewise, are also vulnerable as targets of violence for both patients and family members alike.A hospital security officer is charged with maintaining the peace in a hospital & amp; seniors living centers and working to safeguard the people and items within its walls."
    },
    {
        id: "pubs-clubs",
        link: "pubs-clubs",
        image: Pubs,
        service: "Pubs & Clubs Security Services",
        description: "Pub and club security is essential for maintaining a safe and enjoyable environment for patrons and staff alike. At EyeQ Security Services, we understand the unique challenges faced by establishments in the nightlife industry, and our comprehensive security services are tailored to meet these needs."
    },
    {
        id: "event",
        image: Event,
        service: "Event Security Services",
        link: "event-security",
        description: "Security is an essential part of any event and can mean the difference between success and failure for your special occasion. Ensuring that you hire qualified, professional event security staff is crucial, and this is where we can help you."
    },
    {
        id: "executive",
        link: "executive-protection",
        image: TestImage,
        service: "Executive Proctection Security Services",
        description: "Public figures, high-net-worth individuals, and VIPs may be exposed to heightened personal risk due to their status, careers, affiliations, geography, or net worth. With strategic risk assessment and advanced planning, experienced security teams protect these high-risk individuals from physical, financial, and reputational harm."
    },
    {
        id: "parking",
        link: "parking-enforcement",
        image: TestImage,
        service: "Parking Enforcement Services",
        description: "Maintaining a parking lot can be stressful, as patrons pay you to protect their vehicles. Since cars don't come cheap, it's of the utmost importance that you're able to keep them safe from harm while in your parking garage or parking lot. At EyeQ Security, we recognise that parking lot safety isn't always easy."
    },
    {
        id: "mobile-patrol",
        link: "mobile-patrol",
        image: MobilePatrol,
        service: "Mobile Patrol",
        description: "We understand at EyeQ Security Services that since parking lots are usually 24/7 operations, you might not want to invest in having security guards physically present all that time.Not only is that an expensive enterprise, but it's a lot to keep track of."
    },

    {
        id: "security-audit",
        link: "security-audit",
        image: TestImage,
        service: "Security Audit Services",
        description: "A security assessment identifies weak points in building security. EyeQ's security consulting team will provide Threat and Risk Assessments (TRAs) to a variety of clients across the Dubai area, enabling EyeQ's clients to take action and protect their properties and communities from liability."
    },
    {
        id: "threat-risk",
        link: "threat-risk-management",
        image: TestImage,
        service: "Threat and Risk Mangement Services",
        description: "While knowing how to respond to threats should be a priority, there's one thing that's more important and effective at protecting your property: prevention."
    }
]

export default serviceBriefs;