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
        link: "/general-security",
        description: "EyeQ Security Services provides comprehensive security services that protect and preserve businesses and properties throughout Manitoba.We take pride in saying our quality security solutions never fail to deliver.Our efficacious security programmes and dedicated team will maximise your coverage and give your site supreme protection."
    },
    {
        id: "high-profile-vip",
        image: TestImage,
        service: "High Profile VIP Security Services"
    },
    {
        id: "hospital-health",
        image: TestImage,
        service: "Hospital and Health Care Secuirty Services",
        link: "hospital-security",
        description: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence. Hospitals also typically maintain large inventories of drugs, some of which may have significant street value."
    },
    {
        id: "hotel",
        image: TestImage,
        service: "Hotel Security Services",
        link: "hotel-security",
        description: "With a highly trained, fully licensed team security professionals, EyeQ Security can provide you with manned guarding security for the safety and security of your clients and customers."
    },
    {
        id: "event",
        image: TestImage,
        service: "Event Security Services",
        link: "event-security",
        description: "Hotel security is responsible for reporting all suspicious activity to their supervisors or hotel management. Usually, hotel security should report current events in real-time through their radio and document events that have already been resolved."
    },
    {
        id: "school",
        image: TestImage,
        service: "School Security Services",
        link: "school-security",
        description: "School Security officers play a critical role by inspecting and patrolling premises regularly, monitoring property entrances, authorizing entrance of people and vehicles, reporting any suspicious behavior and happenings, securing all exit doors and windows, monitoring surveillance cameras, responding to alarms and reacting promptly, assisting people in need, and submitting reports of daily surveillance activities. Trust us for the safety of your employees and property."
    },
    {
        id: "retail",
        image: TestImage,
        service: "Retail Shop Security"
    },
    {
        id: "mall",
        image: TestImage,
        service: "Mall Security"
    }
]

export default serviceBriefs;