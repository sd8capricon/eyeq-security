import { type ServiceBtnProps } from "../types";

const serviceTitles: ServiceBtnProps[] = [
    {
        target: "#general",
        icon: "fa-shield-alt",
        service: "General",
        active: true
    }, {
        target: "#high-profile-vip",
        icon: "fa-user-shield",
        service: "High Profile VIP"
    },
    {
        target: "#hospital-health",
        icon: "fa-hospital",
        service: "Hospital & Health Care"
    },
    {
        target: "#hotel",
        icon: "fa-hotel",
        service: "Hotel"
    },
    {
        target: "#event",
        icon: "fa-calendar-check",
        service: "Event"

    },
    {
        target: "#school",
        icon: "fa-school",
        service: "School"
    },
    {
        target: "#retail",
        icon: "fa-store-alt",
        service: "Retail Shop"
    },
    // Right Side
    {
        target: "#mall",
        icon: "fa-shopping-cart",
        service: "Mall"
    },
    {
        target: "#construction",
        icon: "fa-hard-hat",
        service: "Construction"
    },
    {
        target: "#corporate-security",
        icon: "fa-building",
        service: "Corporate & Property"
    },
    {
        target: "#senior-living",
        icon: "fa-users",
        service: "55+ Senior Living Center"
    },
    {
        target: "#mobile-patrol",
        icon: "fa-car-side",
        service: "Mobile Patrol"
    },
    {
        target: "#crisis-eviction",
        icon: "fa-exclamation-triangle",
        service: "Crisis and Eviction Mangement"
    }
]

export default serviceTitles;