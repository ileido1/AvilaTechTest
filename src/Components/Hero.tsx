import Graph from "./svg/Graph";
import HelpIcon from "./svg/Help";

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8   mt-8">
      <div className="bg-[#53389E] text-center flex justify-center items-center flex-col rounded-3xl px-3 sm:px-24 py-12 pb-32 sm:pb-40 sm:pt-20">
        <div className="gap-6 mb-5">
          <h1 className="text-white sm:leading-[90px] text-4xl sm:text-7xl font-semibold leading-12">
            Grow your users. <br></br>{" "}
            <span className="text-[#E9D7FE]">Smarter.</span>
          </h1>

          <p className="text-[#E9D7FE] m-3 sm:text-xl text-base">
            Powerful, self-serve product and growth analytics to help you
            convert, engage,<br></br> and retain more users. Trusted by over
            4,000 startups.
          </p>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col m-3 sm:m-0">
                <div className="relative  rounded-md shadow-sm">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-3 pl-3 pr-36 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center ">
                    <HelpIcon></HelpIcon>
                  </div>
                </div>
                <p className="text-[#E9D7FE] text-sm text-left sm:hidden">
                  We care about your data in our <span>privacy policy.</span>
                </p>
              </div>

              <a
                className={
                  "transition-transform hover:scale-105 hover:text-white bg-[#7F56D9] text-white rounded-md m-2 mb-0 mt-0 px-5 py-3 text-sm font-medium cursor-pointer"
                }
              >
                Get started
              </a>
            </div>
            <p className="text-[#E9D7FE] text-sm text-left hidden sm:block">
              We care about your data in our <span>privacy policy.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-56 sm:-mt-32">
        <Graph></Graph>
      </div>
    </div>
  );
}
