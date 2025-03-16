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
            city_uname: "Calgary",
            address: "T3J 0L5",
            phone: "+1 204 202-7287",
            email: "info@eyeqsecurity.ca"
        }
    ],
    bc: [
        {
            position: 1,
            city: "Surrey, BC",
            city_uname: "Surrey",
            address: "V3R2J6",
            phone: "+1 204 202-7287",
            email: "info@eyeqsecurity.ca"
        }
    ],
    on: [
        {
            position: 1,
            city: "Toronto, ON",
            city_uname: "Toronto1",
            address: "M6K 3M9",
            phone: "+1 204 202-7287",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 2,
            city: "Toronto, ON",
            city_uname: "Toronto2",
            address: "7711 Yonge St Markham Unit 201C ON L3T1Z5",
            phone: "+1 647 614-3937",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "Sudbury, ON",
            city_uname: "Sudbury",
            address: "128 Dufferin St Greater Sudbury ON P3C4W6",
            phone: "+1 647 614-3937",
            email: "info@eyeqsecurity.ca"
        }
    ],
    mb: [
        {
            position: 1,
            city: "Winnipeg, MB",
            city_uname: "Winnipeg",
            address:
                "Corporate Headquarters: 1800 Logan Ave, Unit #2, Winnipeg, Manitoba. R2R 0H3",
            phone: "+1 204 202-7287, +1 204 881-1947",
            email: "info@eyeqsecurity.ca",
        },
        {

            position: 2,
            city: "Brandon, MB",
            city_uname: "Brandon",
            address: "229 12 St #2, Brandon, MB R7A 4L9",
            phone: "+1 431 373 3680",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "The Pas, MB",
            city_uname: "The Pas",
            address: "601 Settee Ave #6 The Pas, MB",
            phone: "+1 204 881 1947",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 4,
            city: "Thompson, MB",
            city_uname: "Thompson",
            address: "7-17waterloo Ave Thompson mb R8N 0J6",
            phone: "+1 204 204 881-1947",
            email: "info@eyeqsecurity.ca",
        }
    ],
    sk: [
        {
            position: 1,
            city: "Regina, SK",
            city_uname: "Regina",
            address: "1102 8th Ave, Unit 325, Regina, SK",
            phone: "+1 306 999 1947",
            email: "info@eyeqsecurity.ca"
        },
        {

            position: 2,
            city: "Saskatoon, SK",
            city_uname: "Saskatoon",
            phone: "+1 431 373 3680",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "Saskatoon, SK",
            city_uname: "Saskatoon2",
            address: "130 Idylwyld Dr N Unit 101",
            phone: "+1 647 614-3937",
            email: "info@eyeqsecurity.ca"
        },
        {
            position: 3,
            city: "Prince Albert, SK",
            city_uname: "Prince Albert",
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
        Toronto1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3474448571287!2d-79.41882337382386!3d43.64093912110267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3502ef7e6a27%3A0xe041d7e1f59812d4!2sToronto%2C%20ON%20M6K%203M9%2C%20Canada!5e0!3m2!1sen!2sin!4v1731698010993!5m2!1sen!2sin",
        Toronto2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071.402206613385!2d-79.42698004469725!3d43.81609947885458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c8a9361bcb5%3A0x12fb0662f9c15ee5!2s7711%20Yonge%20St%20%23201c%2C%20Markham%2C%20ON%20L3T%201Z5%2C%20Canada!5e0!3m2!1sen!2sin!4v1742119017532!5m2!1sen!2sin",
        Sudbury: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.2578585564584!2d-81.0060744373336!3d46.49653877645819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2faae21a102423%3A0x2c6b362f6c27961c!2s128%20Dufferin%20St%2C%20Greater%20Sudbury%2C%20ON%20P3C%204W6%2C%20Canada!5e0!3m2!1sen!2sin!4v1742118533709!5m2!1sen!2sin"
    },
    MB: {
        Winnipeg:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6109.534040336647!2d-97.19767461195563!3d49.92240515687383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea72528a568b1d%3A0x33d6ef69a8a991e5!2s1800%20Logan%20Ave%2C%20Winnipeg%2C%20MB%20R2R%200H3%2C%20Canada!5e0!3m2!1sen!2sin!4v1742118473643!5m2!1sen!2sin",
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
        Saskatoon2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6917.694122938623!2d-106.67921473227211!3d52.192976744123335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f617b4980d69%3A0x1fb0186a0ab96107!2s130%20Idylwyld%20Dr%20N%20%23101%2C%20Saskatoon%2C%20SK%20S7R%201C9%2C%20Canada!5e0!3m2!1sen!2sin!4v1742118308340!5m2!1sen!2sin",
        "Prince Albert":
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13823.277804995025!2d-104.60743422049124!3d50.45881711970631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1f141de8de75%3A0x596cab01873e08df!2sEyeQ%20Security%20Services%20Inc.!5e0!3m2!1sen!2sin!4v1724408929505!5m2!1sen!2sin",
    }
};

export default locations