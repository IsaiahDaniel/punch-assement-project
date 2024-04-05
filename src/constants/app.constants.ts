import ShopifyIcon from "../assets/icons/shopify.svg";
import MagentoIcon from "../assets/icons/magento.svg";
import DataScienceIcon from "../assets/icons/data-science.svg";
import WebFlowIcon from "../assets/icons/webflow.svg";
import DotNetIcon from "../assets/icons/dotnet.svg";
import ZIcon from "../assets/icons/z.svg";

import FigmaIcon from "../assets/icons/figma.svg";
import PhotoShopIcon from "../assets/icons/photoshop.svg";
import IllustratorIcon from "../assets/icons/adobe-illustrator.svg";

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
    { id: 2, text: "Magento Developer", icon: MagentoIcon },
    { id: 3, text: "Data Scientist", icon: DataScienceIcon },
    { id: 4, text: "Webflow Developer", icon: WebFlowIcon },
    { id: 5, text: "Dot Net Developer", icon: DotNetIcon },
    // { id: 6, text: "", icon: ZIcon },
];

export const IT_CARD_DATA_TWO = [
    { id: 1, text: "UX Designer", icon: FigmaIcon },
    { id: 2, text: "Graphics Designer", icon: PhotoShopIcon },
    { id: 3, text: "Illustration Artist", icon: IllustratorIcon },
    { id: 4, text: "Unreal Engine", icon: WebFlowIcon },
    { id: 5, text: "Cinema 4D", icon: DotNetIcon },
    // { id: 6, text: "", icon: ZIcon },
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