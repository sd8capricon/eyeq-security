// types
import { type Location } from "../types";
type LocationLayout = {
    mb: Location[];
    sk: Location[];
};
type LocationSrcLayout = {
    [key: string]: {
        [key: string]: string;
    };
};

const locations: LocationLayout = {
    mb: [
        {
            position: 1,
            city: "Winnipeg, MB",
            address:
                "Corporate Headquarters: 1800 Logan Ave, Unit #2, Winnipeg, Manitoba. R2R 0H3",
            phone: "+1 204 202-7287, +1 204 881-1947",
            email: "info@eyeqsecurity.ca",
        },
        {

            position: 2,
            city: "Brandon, MB",
            address: "229 12 St #2, Brandon, MB R7A 4L9",
            phone: "+1 431 373 3680",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "The Pas, MB",
            address: "601 Settee Ave #6 The Pas, MB",
            phone: "+1 204 881 1947",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 4,
            city: "Thompson, MB",
            address: "7-17waterloo Ave Thompson mb R8N 0J6",
            phone: "+1 204 204 881-1947",
            email: "info@eyeqsecurity.ca",
        }
    ],
    sk: [
        {
            position: 1,
            city: "Regina, SK",
            address: "1102 8th Ave, Unit 325, Regina, SK",
            phone: "+1 306 999 1947",
            email: "infosk@eyeqsecurity.ca"
        },
        {

            position: 2,
            city: "Saskatoon, SK",
            phone: "+1 431 373 3680",
            email: "infosk@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "Prince Albert, SK",
            phone: "+1 306 999 1947",
            email: "infosk@eyeqsecurity.ca"
        }
    ],
};

export const locationSrc: LocationSrcLayout = {
    MB: {
        Winnipeg:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82345.63809626097!2d-97.2539841!3d49.836798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7169b40e3fed%3A0x6d81a36c5a258f4f!2sEyeQ%20Security%20Services!5e0!3m2!1sen!2sin!4v1724404906959!5m2!1sen!2sin",
        Brandon:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.8959108443555!2d-99.96650749999999!3d49.8444133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52e79786ba1d7775%3A0xbe5593dd500688dd!2sEyeQ%20Security%20Services%20Inc.!5e0!3m2!1sen!2sin!4v1724407385738!5m2!1sen!2sin",
        "The Pas":
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.265078985661!2d-101.2453333!3d53.8203599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52f9ebbb677ce271%3A0x74d611af3dc2228e!2sEyeQ%20Security%20Services%20Inc.!5e0!3m2!1sen!2sin!4v1724407452627!5m2!1sen!2sin",
        Thompson:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d82345.63809626097!2d-97.2539841!3d49.836798!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7169b40e3fed%3A0x6d81a36c5a258f4f!2sEyeQ%20Security%20Services!5e0!3m2!1sen!2sin!4v1724404906959!5m2!1sen!2sin",
    },
    SK: {
        Regina: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13823.277804995025!2d-104.60743422049124!3d50.45881711970631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f141de8de75%3A0x596cab01873e08df!2sEyeQ%20Security%20Services%20Inc.!5e0!3m2!1sen!2sin!4v1724408929505!5m2!1sen!2sin",
        Saskatoon:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13823.277804995025!2d-104.60743422049124!3d50.45881711970631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f141de8de75%3A0x596cab01873e08df!2sEyeQ%20Security%20Services%20Inc.!5e0!3m2!1sen!2sin!4v1724408929505!5m2!1sen!2sin",
        "Prince Albert":
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13823.277804995025!2d-104.60743422049124!3d50.45881711970631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f141de8de75%3A0x596cab01873e08df!2sEyeQ%20Security%20Services%20Inc.!5e0!3m2!1sen!2sin!4v1724408929505!5m2!1sen!2sin",
    }
};

export default locations