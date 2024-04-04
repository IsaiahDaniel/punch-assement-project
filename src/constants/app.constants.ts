import ShopifyIcon from "../assets/icons/shopify.svg";

export type TabType = "IT & Development" | "Design and Creative";

export const TABS = [{ id: 0, text: "IT & Development" }, { id: 1, text: "Design and Creative" }];


export const COURSES = [
    { id: 1, text: "Python Developer" },
    { id: 2, text: "Data Scientist" },
    { id: 3, text: "Shopify Developer" },
    { id: 4, text: "Front End Developer" },
    { id: 5, text: "Python Developer" },
    { id: 6, text: "MERN Stack Developer" },
    { id: 7, text: "Shopify Developer" },
    { id: 8, text: "Full Stack Developer" },
    { id: 9, text: "Full Stack Developer" },
    { id: 10, text: "Explore More" },
];

export const IT_CARD_DATA = [
    { id: 1, text: "Shopify Developer", icon: ShopifyIcon },
    { id: 2, text: "Shopify Developer", icon: ShopifyIcon },
    { id: 3, text: "Shopify Developer", icon: ShopifyIcon },
    { id: 4, text: "Shopify Developer", icon: ShopifyIcon },
    { id: 5, text: "Shopify Developer", icon: ShopifyIcon },
    { id: 6, text: "Shopify Developer", icon: ShopifyIcon },
];

export const VideoTABS = [
    { id: 1, step: "step 1", text: "Resume Screening", content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit." },
    { id: 2, step: "step 2", text: "Video Interview", content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit." },
    { id: 3, step: "step 3", text: "Technical Evaluation", content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit." },
    { id: 4, step: "step 4", text: "Application Review", content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit." },
    { id: 5, step: "step 5", text: "Lets get to work", content: "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit." },
];

export const FOOTER_DATA = [
    { header: "PLATFORM", items: ["Find Work", "Find Talent", "Articles", "About Us"] },
    { header: "CATEGORIES", items: ["Data Science", "IT & Networking", "Web & Mobile"] },
    { header: "HELP", items: ["Contact Us"] },
    { header: "GET IN TOUCH @", items: ["Instagram", "LinkedIn", "Twitter"] }
]