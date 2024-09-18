// Types
import type { ServiceBreif } from "../types";
// Assets
import TestImage from "../assets/img/service/719-1280x720.jpg"

const serviceBriefs: ServiceBreif[] = [
    {
        active: true,
        id: "general",
        image: TestImage,
        service: "General Security Services",
        link: "general-security",
        description: "EyeQ Security Services provides comprehensive security services that protect and preserve businesses and properties throughout Manitoba.We take pride in saying our quality security solutions never fail to deliver.Our efficacious security programmes and dedicated team will maximise your coverage and give your site supreme protection."
    },
    {
        id: "bank",
        link: "bank-security",
        image: TestImage,
        service: "Bank Security Services"
    },
    {
        id: "hospital-senior-living",
        link: "hospital-senior-living",
        image: TestImage,
        service: "Hospital & Senior Living Security Services",
        description: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence. Hospitals also typically maintain large inventories of drugs, some of which may have significant street value."
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
        description: ""

    },
    {
        id: "mall-retail",
        link: "mall-security",
        image: TestImage,
        service: "Shopping Mall & Retail Security Services",
        description: ""
    },
    {
        id: "school",
        link: "school-security",
        image: TestImage,
        service: "School Security Services",
        description: "School Security officers play a critical role by inspecting and patrolling premises regularly, monitoring property entrances, authorizing entrance of people and vehicles, reporting any suspicious behavior and happenings, securing all exit doors and windows, monitoring surveillance cameras, responding to alarms and reacting promptly, assisting people in need, and submitting reports of daily surveillance activities. Trust us for the safety of your employees and property."
    },
    {
        id: "pubs-clubs",
        link: "pubs-clubs-security",
        image: TestImage,
        service: "Pubs & Clubs Security Services",
    },
    {
        id: "event",
        image: TestImage,
        service: "Event Security Services",
        link: "event-security",
        description: "Hotel security is responsible for reporting all suspicious activity to their supervisors or hotel management. Usually, hotel security should report current events in real-time through their radio and document events that have already been resolved."
    },
    {
        id: "executive",
        link: "executive-protection",
        image: TestImage,
        service: "Executive Proctection Security Services",
        description: ""
    },
    {
        id: "parking",
        link: "parking-enforcement",
        image: TestImage,
        service: "Parking Enforcement Services",
        description: ""
    },
    {
        id: "mobile-patrol",
        link: "mobile-patrol",
        image: TestImage,
        service: "Mobile Patrol",
        description: "We understand at EyeQ Security Services that since parking lots are usually 24/7 operations, you might not want to invest in having security guards physically present all that time. Not only is that an expensive enterprise, but it's a lot to keep track of."
    },

    {
        id: "security-audit",
        link: "security-audit",
        image: TestImage,
        service: "Security Audit Services",
        description: ""
    },
    {
        id: "threat-risk",
        image: TestImage,
        service: "Threat and Risk Mangement Services"
    }
]

export default serviceBriefs;