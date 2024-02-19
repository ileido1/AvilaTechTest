import notionImage from "../assets/notion.png";
import slackImage from "../assets/slack.png";
import googleDriveImage from "../assets/drive.png";
import intercomImage from "../assets/intercom.png";
import jiraImage from "../assets/jira.png";
import dropboxImage from "../assets/dropbox.png";
import { ToolsList } from "./Tools";

export default function Integrations() {
  const tools = [
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
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  -mt-16  sm:mt-8">
      <div className="flex justify-center flex-col items-center text-center">
        <span className="inline-flex items-center rounded-md bg-[#F9F5FF] px-2 py-1 text-xs font-medium text-[#6941C6] ring-1 ring-inset ring-gray-500/10">
          Integrations
        </span>
        <h1 className="text-black sm:leading-[90px] text-3xl mt-4 sm:text-4xl font-semibold leading-12">
          Get more value from your tools <br></br>{" "}
        </h1>

        <p className="text-[##475467] m-3 sm:text-xl text-lg max-w-3xl">
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </p>

        <ToolsList tools={tools}/>
      </div>
    </div>
  );
}
