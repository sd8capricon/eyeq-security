// Types
import type { ServiceBreif } from "../types";
// Assets
import TestImage from "../assets/img/service/719-1280x720.jpg"

const serviceBriefs: ServiceBreif[] = [
    {
        active: true,
        id: "general",
        image: TestImage,
        service: "General Security Services"
    },
    {
        id: "high-profile-vip",
        image: TestImage,
        service: "High Profile VIP Security Services"
    },
    {
        id: "hospital-health",
        image: TestImage,
        service: "Hospital and Health Care Secuirty Services"
    },
    {
        id: "hotel",
        image: TestImage,
        service: "Hotel Security Services"
    },
    {
        id: "event",
        image: TestImage,
        service: "Event Security Services"
    },
    {
        id: "school",
        image: TestImage,
        service: "School Security Services"
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