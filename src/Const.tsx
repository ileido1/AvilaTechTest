import { NavigationItem, Question, SiteMapItem, Tool } from "./types.d";
import notionImage from "./assets/notion.png";
import slackImage from "./assets/slack.png";
import googleDriveImage from "./assets/drive.png";
import intercomImage from "./assets/intercom.png";
import jiraImage from "./assets/jira.png";
import dropboxImage from "./assets/dropbox.png";
import DeliverInstant from "./assets/Deliver.png";
import Manage from "./assets/Manage.png";
import ShareTeamBox from "./assets/Share.png";

 const navigation: NavigationItem[] = [
    { name: "Home", href: "#", current: true },
    { name: "Products", href: "#", current: false },
    { name: "Resources", href: "#", current: false },
    { name: "Pricing", href: "#", current: false },
  ];
  
  export default navigation;
  

export const toolsData: Tool[] = [
    {
      name: "Notion integration",
      description:
        "Work faster and smarter by integrating directly with Notion, right in the app.",
      img: notionImage,
      url: "#",
    },
    {
      name: "Slack integration",
      description:
        "Work faster and smarter by integrating directly with Slack, right in the app.",
      img: slackImage,
      url: "#",
    },
    {
      name: "Google Drive integration",
      description:
        "Work faster and smarter by integrating directly with Google Drive, right in the app.",
      img: googleDriveImage,
      url: "#",
    },
    {
      name: "Intercom integration",
      description:
        "Work faster and smarter by integrating directly with Intercom, right in the app.",
      img: intercomImage,
      url: "#",
    },
    {
      name: "Jira integration",
      description:
        "Work faster and smarter by integrating directly with Jira, right in the app.",
      img: jiraImage,
      url: "#",
    },
    {
      name: "Dropbox integration",
      description:
        "Work faster and smarter by integrating directly with Dropbox, right in the app.",
      img: dropboxImage,
      url: "#",
    },
  ];

 export const FeaturesData : Tool[] = [
    {
      name: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      img: ShareTeamBox,
      url: "#",
    },
    {
      name: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      img: DeliverInstant,
      url: "#",
    },
    {
      name: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
      img: Manage,
      url: "#",
    },
    
  ];

 export const Questiondata: Question[] = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "No.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "No.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "No.",
    },
    {
      question: "How do I change my account email?",
      answer: "No.",
    },
    // Agrega más objetos al array según sea necesario
  ];

  export const SITEMAP: SiteMapItem[] = [
    {
      title: "Product",
      links: [
        { name: "Overview", badge: null },
        { name: "Features", badge: null },
        { name: "Solutions", badge: "New" },
        { name: "Tutorials", badge: null },
        { name: "Pricing", badge: null },
        { name: "Releases", badge: null },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", badge: null },
        { name: "Careers", badge: null },
        { name: "Press", badge: null },
        { name: "News", badge: null },
        { name: "Media kit", badge: null },
        { name: "Contact", badge: null },
      ],
    },
  ];