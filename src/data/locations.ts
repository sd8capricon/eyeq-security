// types
import { type Location } from "../types";
type LocationLayout = {
    ab: Location[],
    bc: Location[],
    on: Location[];
    mb: Location[];
    sk: Location[];
};
type LocationSrcLayout = {
    [key: string]: {
        [key: string]: string;
    };
};

const locations: LocationLayout = {
    ab: [
        {
            position: 1,
            city: "Calgary, AB",
            address: "T3J 0L5",
            phone: "+1 204 202-7287",
            email: "info@eyeqsecurity.ca"
        }
    ],
    bc: [
        {
            position: 1,
            city: "Surrey, BC",
            address: "V3R2J6",
            phone: "+1 204 202-7287",
            email: "info@eyeqsecurity.ca"
        }
    ],
    on: [
        {
            position: 1,
            city: "Toronto, ON",
            address: "M6K 3M9",
            phone: "+1 204 202-7287",
            email: "info@eyeqsecurity.ca"
        }
    ],
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
            email: "info@eyeqsecurity.ca"
        },
        {

            position: 2,
            city: "Saskatoon, SK",
            phone: "+1 431 373 3680",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "Prince Albert, SK",
            phone: "+1 306 999 1947",
            email: "info@eyeqsecurity.ca"
        }
    ],
};

export const locationSrc: LocationSrcLayout = {
    AB: {
        Calgary: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007.185474489431!2d-113.9353596522974!3d51.134419786923225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163efd09c8a1b%3A0x50b448ec49fba91c!2sCalgary%2C%20AB%20T3J%200L5%2C%20Canada!5e0!3m2!1sen!2sin!4v1731698689182!5m2!1sen!2sin"
    },
    BC: {
        Surrey: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5213.157869932919!2d-122.84214350275032!3d49.20854678552681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d796b0d2f123%3A0x370565093f9ce854!2sSurrey%2C%20BC%20V3R%202J6%2C%20Canada!5e0!3m2!1sen!2sin!4v1731699049102!5m2!1sen!2sin"
    },
    ON: {
        Toronto: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3474448571287!2d-79.41882337382386!3d43.64093912110267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3502ef7e6a27%3A0xe041d7e1f59812d4!2sToronto%2C%20ON%20M6K%203M9%2C%20Canada!5e0!3m2!1sen!2sin!4v1731698010993!5m2!1sen!2sin",
    },
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