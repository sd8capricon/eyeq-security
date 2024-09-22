// Types
import type { GetStaticPaths } from "astro";


const TempImage: ImageMetadata = {} as ImageMetadata;
TempImage.src = "https://via.placeholder.com/700x600"


export const staticPaths = (() => {
    const paths = [
        {
            params: { service: "general-security" },
            props: {
                title: "General Security Services",
                italic_para: "EyeQ Security Services provides comprehensive security services that protect and preserve businesses and properties throughout Manitoba.We take pride in saying our quality security solutions never fail to deliver.Our efficacious security programmes and dedicated team will maximise your coverage and give your site supreme protection.",
                second_para: "We offer unarmed uniform security guards services to Private Enterprises, Educational Institutions, Retail and shopping malls, Leisure and Amusement Parks, Industrial and Construction projects.Warehouses, Homes and Residential Properties, Labor Camps, etc.We follow highest standards of integrity and excellence at every level.To us, integrity and professionalism are of utmost importance.As an organization committed to excellence, we maintain the highest industry standards for security officer's training, honor, loyalty, and character.All of our security officers will be highly trained and are subject to constant site supervision and random inspections to effectively meet the demands of the market.",
                img: TempImage
            },
        },
        {
            params: { service: "bank-security" },
            props: {
                title: "Bank Security Services",
                first_para: "Banks are probably the riskiest and most sensitive businesses, and they need 24/7 comprehensive security and surveillance.EyeQ personnel assigned to banks are adequately trained for the banking environment and will ensure that all individuals entering the bank are scanned and have a legitimate reason for being within the banking premises.We have trained and fully equipped our security personnel to match these standards to provide highly proactive security and deliver beyond our clients&#39; expectations for all types of banking institutions.Our security guards will be stationed at highly visible places within the banking premises, which lowers the likelihood of crime.",
                second_para: "We have trained and fully equipped our security personnel to match these standards to provide highly proactive security and deliver beyond our clients' expectations for all types of banking institutions.Our security guards will be stationed at highly visible places within the banking premises, which lowers the likelihood of crime.",
                img: TempImage
            }
        },
        {
            params: { service: "hospital-senior-living" },
            props: {
                title: "Hospital & 55+ Seniors living Security Services",
                first_para: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and Seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence.Hospitals also typically maintain large inventories of drugs, some of which may have significant street value.Healthcare employees, likewise, are also vulnerable as targets of violence for both patients and family members alike.A hospital security officer is charged with maintaining the peace in a hospital & amp; seniors living centers and working to safeguard the people and items within its walls.",
                img: TempImage
            }
        },
        {
            params: { service: "hotel-security" },
            props: {
                title: "Hotel Security",
                first_para: "With a highly trained, fully licensed team security professionals, EyeQ Security can provide you with manned guarding security for the safety and security of your clients and customers.",
                img: { ...TempImage, src: "https://via.placeholder.com/1280x720" },
                feature_title_top: "What's Included",
                feature_title_main: "Duties of Hotel Security",
                features: [
                    {
                        feature: "Perfom Surveillance",
                        description: "The bulk of hotel security's day is filled with patrolling hotel grounds, parking lots, lobbies, restaurants, and hallways.They provide a sense of security to both hotel staff and guests simply by being present.Depending on hotel resources and size, some hotel security may be assigned to a surveillance room, where they monitor the hotel via security cameras"
                    },
                    {
                        feature: "Escort People In/Out of the Hotel (if needed)",
                        description: "Hotel security is also responsible for escorting guests and hotel staff to and from the hotel. If valet parking is unavailable late at night, hotel security may escort guests and staff in order to protect them. Additionally, hotel security may need to escort belligerent guests off hotel property, especially in hotels that have bars."
                    },
                    {
                        feature: "Maintain Order",
                        description: "Hotels that have conference centers or are near conference centers often hold concurrent conferences or conventions. During these times, the hotel experiences a high volume of guests. Hotel security is often expected to maintain order among the different groups of guests."
                    },
                    {
                        feature: "Report to Supervisors and Management",
                        description: "Hotel security is responsible for reporting all suspicious activity to their supervisors or hotel management. Usually, hotel security should report current events in real-time through their radio and document events that have already been resolved."
                    },
                    {
                        feature: "Investigate Disturbances",
                        description: "Hotel security must be on call anytime during their shift to investigate disturbances reported by hotel staff and guests. This can include things like excess noise coming from a guest's room or reports of suspicious people prowling the parking lot. Count on us in case you are looking to hire the best yet the most affordable security services in the region."
                    }
                ],
                feature_height: 225,
            }
        },
        {
            params: { service: "loss-prevention" },
            props: {
                title: "Loss Prevention Security",
                img: TempImage,
                first_para: "Retail crime costs Canadian firms over $5 billion each year. Independent retailers are a particularly vulnerable target, with 87.5 percent reporting at least one theft every year.When finances are tight, Canadian businesses can protect their earnings by ensuring a substantial loss prevention strategy.<p>Loss prevention is top of mind for many Canadian retailers as retail losses due to a rise in crime. But, is your security company meeting your expectations for service and dependability? If not, it's time to enlist the help of Canada's loss prevention experts.</p>",
                second_para: "Loss prevention professionals at EyeQ Security Services are experts in retail loss prevention and nonviolent crisis intervention. We can create a personalized security strategy that maximizes your coverage while working within your existing security regulations, regardless of the size of your retail store.<p>Loss Prevention security guards are a versatile and dependable crime deterrent. They continually scan their environment for signals of hazards, whether as door greeters, undercover agents, or store patrollers, before dealing with them subtly and professionally.</p>",
                feature_title_top: "What's Included",
                feature_title_main: "Our Loss Prevention Security comes in two variants",
                features: [
                    {
                        feature: "Uniformed",
                        description: "Petty crime is frequently opportunistic. Our uniformed loss prevention staff serve as a solid barrier to theft and a helpful liaison for your customers on the front lines. Our employees will keep your store safe, and they will also go through a comprehensive customer service training program to ensure that your customers receive the best possible service."
                    },
                    {
                        feature: "Plain Clothes",
                        description: "Our covert loss prevention team is second to none regarding retail theft prevention, trusted by some of Canada's major retailers. Our loss prevention agents will quietly patrol your store using the latest technology, reducing theft and guaranteeing a pleasant experience for both workers and consumers. Additionally, unlike other security firms, we collaborate with you to develop a loss prevention approach that meets your goals while staying within your budget."
                    }
                ],
                feature_height: 250,
                cta_text: "Contact us today and get a customized LPO program that meets and exceeds your needs."
            }
        },
        {
            params: { service: "mall-retail" },
            props: {
                title: "Shopping Mall & Retail Security",
                img: TempImage,
                first_para: "EyeQ Security Services has been a trusted security partner for some of the largest companies in Canadian retail since our debut. We've learned from working with notable companies that no two retail stores or shopping malls are alike and that each requires a custom security solution suited to its specific needs. <p>The Shopping Mall Security Team at EyeQ Security Services has been specially trained to deal with the specific challenges that crowded public places like malls, department stores, and shopping centers present. Our best-in-class program is part of customer service, crowd management, conflict resolution and de-escalation, loss prevention, OFA First Aid, and cultural/social sensitivity training. We believe that by using a multifaceted approach, our mall guards will manage any situation and provide the level of personalized care that our clients need while complying with our stringent security standards.</p>",
                second_para: "Whether threats occur within the mall, individual businesses, or outside in exposed areas such as parking lots, our customer- oriented approach to shopping mall security strives to defuse and discourage threats. <p><h4>Patrols on Wheels:</h4>Our Mobile Patrol personnel respond to alarms and work on randomized patrol schedules along pre-planned routes. To create a good shopping experience for consumers, our concierge and guest service specialists adopt a courteous customer service- focused approach. They can help with everything from giving directions to dealing with fire and emergency situations.</p>",
                feature_title_top: "What's Included",
                feature_title_main: "Our Mall Security Services",
                features: [
                    {
                        feature: "Uniformed Security Guards:",
                        description: "Our traditional frontline security guards maintain our clients' reputations while protecting their employees, tenants, and valuables. Our frontline security employees have deterred any unwanted action who are visible and well-trained. Despite their primary focus on security, our guards endeavor to maintain a secure and enjoyable retail environment for both staff and customers."
                    },
                    {
                        feature: "Guest Services and Concierge:",
                        description: "To create a good shopping experience for consumers, our concierge and guest service specialists adopt a courteous customer service-focused approach. They can help with everything from giving directions to dealing with fire and emergency situations."
                    },
                    {
                        feature: "Surveillance cameras and video surveillance:",
                        description: "Any concerns or threats that arise on the malls closed-circuit television systems are monitored, detected, and appropriately resolved/escalated by our CCTV Surveillance Specialists."
                    }
                ],
                feature_height: 225,
                cta_text: "Contact us today and get a customized Shopping Mall and Retail Security program that meets and exceeds your needs."
            }
        },
        {
            params: { service: "school-security" },
            props: {
                title: "School Security Service",
                first_para: "Hospitals exist to provide care to those who are ill or injured. This means that many people who reside in hospitals and Seniors living centers are vulnerable to exploitation, theft of their belongings, or even violence.Hospitals also typically maintain large inventories of drugs, some of which may have significant street value.Healthcare employees, likewise, are also vulnerable as targets of violence for both patients and family members alike.A hospital security officer is charged with maintaining the peace in a hospital & amp; seniors living centers and working to safeguard the people and items within its walls.",
                img: TempImage
            }
        },

        {
            params: { service: "event-security" },
            props: {
                title: "Event Security",
                img: TempImage,
                italic_para: "Learn about the best event security services in the industry!",
                first_para: "Security is an essential part of any event and can mean the difference between success and failure for your special occasion. Ensuring that you hire qualified, professional event security staff is crucial, and this is where we can help you.",
                second_para: "At EyeQ Security Services, the safety of your guests is our priority. Our highly trained, experienced, and well-equipped security personnel provide equipment protection services and crowd control to ensure the success of your event.<p>EyeQ Security guards protect everything, from your guests to your equipment. Using our event security services at your event gives you peace of mind so that you and your guests can enjoy your event.</p>",
                feature_title_top: "What's Included",
                feature_title_main: "EyeQ Security Services Can Assist",
                feature_para: "EyeQ Security Services makes event security a priority for your guests' enjoyment. You can count on us to provide expert security so that you can focus on the guest experience.<p>We have the tools to provide high-end event security services to ensure the success of your event.Our priority list includes the following:</p>",
                features: [
                    {
                        feature: "Crowd control:",
                        description: "Our security professionals know how to manage large crowds, provide access control, and ensure an orderly entrance and exit for the safety of all of your guests."
                    },
                    {
                        feature: "Health and safety:",
                        description: "Our security professionals know how to remain calm in an emergency and are skilled at determining the proper steps for every situation, including knowing when to evacuate the premises."
                    },
                    {

                        feature: "Threat analysis:",
                        description: "Our security personnel are capable of assessing threats. Moreover, we conduct location and threat analysis in the background. When necessary, we deploy additional security personnel to provide additional coverage without interfering with your event."
                    }
                ],
                cta_text: "Contact us today and get a customized event security program that meets and exceeds your needs.",
                feature_height: 200
            }
        },

        {
            params: { service: "mobile-patrol" },
            props: {
                title: "Mobile Patrol Security",
                first_para: "We understand at EyeQ Security Services that since parking lots are usually 24/7 operations, you might not want to invest in having security guards physically present all that time.Not only is that an expensive enterprise, but it's a lot to keep track of.",
                second_para: "This is why our mobile patrol security services exist. We can station parking lot security guards to come by at regularly or randomly scheduled intervals to do walk - throughs of your business and private property to ensure everything is in order.We can also have them stay aware of any alarm or security systems you have installed.This will let them know if a potential fire, gas leak, or invasion is taking place and will allow them to contact the relevant authorities, monitor the area, and keep anyone physically in your parking lot safe.",
                img: TempImage
            },
            cta_text: "Contact us today and get a customized parking lot security program that meets and exceeds your needs."
        },
        {
            params: { service: "manpower-solutions" },
            props: {
                title: "Manpower Solutions",
                first_para: "We work to alleviate human resource challenges that your business might be facing while remaining compliant with local labour laws and employment regulations. Our local knowledge, experience, professionalism, and mature processes enable us to deliver solutions quickly and cost-effectively to each of our clients",
                // hightlight_title: "Why Choose Our Manpower Solutions?",
                highlight_list: [
                    "Expert consultants in career building and human resources",
                    "Compliance with local labour laws and employment regulations",
                    "Cost-effective and timely solutions",
                    "Tailored candidates who reflect your organization's image and objectives",
                    " Proven track record of transforming business growth"
                ],
                second_para: "Our talented consultants are professionals in building careers, helping employees achieve their career goals, and boosting the human resource infrastructures of businesses of all sizes. The solutions we offer create a win-win situation for all parties involved, phenomenally transforming business growth<p>We owe our success to our competent staff, work culture, and innovative methods. Thanks to their efforts, we have established a name as one of the most trusted services in workforce management solutions.</p>",
                img: TempImage
            }
        }
    ];
    return paths;
}) satisfies GetStaticPaths;