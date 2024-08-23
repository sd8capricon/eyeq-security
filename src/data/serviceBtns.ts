import { type ServiceBtnProps } from "../types";

const ServiceBtns: ServiceBtnProps[] = [
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
        target: "#tab-pane-9",
        icon: "fa-hard-hat",
        service: "Construction"
    },
    {
        target: "#tab-pane-10",
        icon: "fa-building",
        service: "Corporate & Property"
    },
    {
        target: "#tab-pane-11",
        icon: "fa-users",
        service: "55+ Senior Living Center"
    },
    {
        target: "#tab-pane-12",
        icon: "fa-car-side",
        service: "Mobile Patrol"
    },
    {
        target: "#tab-pane-13",
        icon: "fa-exclamation-triangle",
        service: "Crisis and Eviction Mangement"
    }
]

export default ServiceBtns;