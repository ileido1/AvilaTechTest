import { ToolsList } from "./Tools";
import DeliverInstant from "../assets/Deliver.png";
import Manage from "../assets/Manage.png";
import ShareTeamBox from "../assets/Share.png";

export function Features () {
    const tools = [
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
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  sm:mt-8">
      <div className="flex justify-center flex-col items-center text-center">
        <span className="inline-flex items-center rounded-md bg-[#F9F5FF] px-2 py-1 text-xs font-medium text-[#6941C6] ring-1 ring-inset ring-gray-500/10">
          Features
        </span>
        <h1 className="text-black sm:leading-[90px] text-3xl mt-4 sm:text-4xl font-semibold leading-12">
        Cutting-edge features for advanced analytics
        </h1>
        <p className="text-[#475467] text-base sm:text-xl max-w-3xl">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <ToolsList tools={tools} />
    </div>
  );
}