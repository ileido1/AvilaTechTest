import { FeaturesData } from "../Const";
import { ToolsList } from "./Tools";


export function Features () {
   
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  sm:mt-8">
      <div className="flex justify-center flex-col items-center text-center">
        <span className="inline-flex items-center rounded-md bg-[#F9F5FF] px-2 py-1 text-xs font-medium text-[#6941C6] ring-1 ring-inset ring-gray-500/10">
          Features
        </span>
        <h1 className="text-[#101828] sm:leading-[90px] text-3xl mt-4 sm:text-4xl font-semibold leading-12">
        Cutting-edge features for advanced analytics
        </h1>
        <p className="text-[#475467] text-base sm:text-xl max-w-3xl">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <ToolsList tools={FeaturesData} />
    </div>
  );
}