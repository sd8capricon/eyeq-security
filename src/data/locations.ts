// types
import { type Location } from "../types";
type LocationLayout = {
    mb: Location[];
    sk: Location[];
};

const locations: LocationLayout = {
    mb: [
        {
            position: 1,
            city: "Winnipeg, MB",
            address:
                "Corporate Headquarters: 1479 Buffalo Pl, unit 105, Winnipeg, Manitoba",
            phone: "+204 202-7287, +204 881-1947",
            email: "info@eyeqsecurity.ca",
        },
        {

            position: 2,
            city: "Brandon, MB",
            address: "229 12 St #2, Brandon, MB R7A 4L9",
            phone: "431 373 3680",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "The Pas, MB",
            address: "601 Settee Ave #6 The Pas, MB",
            phone: "204 881 1947",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 4,
            city: "Thompson, MB",
            address: "7-17waterloo Ave Thompson mb R8N 0J6",
            phone: "204 204 881-1947",
            email: "info@eyeqsecurity.ca",
        }
    ],
    sk: [
        {
            position: 1,
            city: "Regina, SK",
            address: "1102 8th Ave, Unit 325, Regina, SK",
            phone: "306 999 1947",
            email: "infosk@eyeqsecurity.ca"
        },
        {

            position: 2,
            city: "Saskatoon, SK",
            phone: "431 373 3680",
            email: "infosk@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "Prince Albert, SK",
            phone: "306 999 1947",
            email: "infosk@eyeqsecurity.ca"
        }
    ],
};

export default locations