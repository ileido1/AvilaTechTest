import bg from "../assets/bg-cta.png";
export function Cta() {
    return (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-36 mb-36">
        <div className="grid grid-cols-1 sm:grid-cols-12  " >
          <div className="flex flex-col  sm:col-span-8 bg-[#53389E] p-10  rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl gap-6">
            <h1 className="text-white sm:leading-[90px] text-3xl sm:text-4xl font-semibold">
              Get more value from your tools <br />{" "}
            </h1>
            <p className="text-[#E9D7FE] text-base sm:text-xl max-w-3xl">
              Connect your tools, connect your teams. With over 100 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row">
            <a
                  className={
                    "transition-transform hover:scale-105 order-last sm:order-first bg-white text-center text-[#344054] rounded-md m-2 px-3 py-3 text-base font-medium cursor-pointer"
                  }
                >
                  Learn more
                </a>
                <a
                  className={
                    "transition-transform hover:scale-105 order-first sm:order-last bg-[#7F56D9] text-center text-white rounded-md m-2 px-3 py-3 text-base font-medium cursor-pointer"
                  }
                >
                  Get started
                </a>
            </div>
          </div>
  
          <div className="sm:col-span-4 bg-white p-6 bg-cover bg-center rounded-b-3xl sm:rounded-bl-none sm:rounded-r-3xl h-72  sm:h-auto" style={{ backgroundImage: `url(${bg})` }}>
           
          </div>
        </div>
      </div>
    );
  }
  