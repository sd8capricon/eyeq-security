import { type ServiceBtnProps } from "../types";

const serviceTitles: ServiceBtnProps[] = [
    {
        target: "#general",
        icon: "fa-shield-alt",
        service: "General",
        active: true
    },
    {
        target: "#bank",
        icon: "fa-university",
        service: "Bank"
    },
    {
        target: "#hospital-senior-living",
        icon: "fa-hospital",
        service: "Hospital & Senior Living"
    },
    {
        target: "#hotel",
        icon: "fa-hotel",
        service: "Hotel"
    },
    {
        target: "#loss",
        icon: "fa-lock",
        service: "Loss Prevention"
    },
    {
        target: "#mall-retail",
        icon: "fa-store-alt",
        service: "Shopping Mall & Retail"
    },
    {
        target: "#school",
        icon: "fa-school",
        service: "School"
    },
    // Right Side
    {
        target: "#pubs-clubs",
        icon: "fa-cocktail",
        service: "Pubs & Clubs"
    },
    {
        target: "#event",
        icon: "fa-calendar-check",
        service: "Event"

    },
    {
        target: "#executive",
        icon: "fa-user-shield",
        service: "Executive Proctection"
    },
    {
        target: "#parking",
        icon: "fa-parking",
        service: "Parking Enforcement"
    },
    {
        target: "#mobile-patrol",
        icon: "fa-car-side",
        service: "Mobile Patrol"
    },
    {
        target: "#security-audit",
        icon: "fa-search",
        service: "Security Audit"
    },
    {
        target: "#threat-risk",
        icon: "fa-exclamation-triangle",
        service: "Threat and Risk Mangement"
    }
]

export default serviceTitles;