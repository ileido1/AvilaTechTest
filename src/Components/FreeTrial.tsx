import img1 from "../assets/FreeTrial/trial1.png";
import img2 from "../assets/FreeTrial/trial2.png";
import img3 from "../assets/FreeTrial/trial3.png";
import img4 from "../assets/FreeTrial/trial4.png";
import img5 from "../assets/FreeTrial/trial5.png";
export function FreeTrial() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-36 mb-36 bg-[#F9FAFB]">
    <div className="grid grid-cols-1 sm:grid-cols-12  " >
      <div className="flex flex-col  sm:col-span-6  p-10  gap-6">
        <h1 className="text-black sm:leading-[90px] text-3xl sm:text-4xl font-semibold">
        No long-term contracts. <br></br>No catches.
        </h1>
        <p className="text-[#475467] text-base sm:text-xl max-w-3xl">
        Start your 30-day free trial today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row">
        <a
              className={
                "order-last sm:order-first bg-white text-center text-[#344054] rounded-md m-2 px-3 py-3 text-base font-medium cursor-pointer"
              }
            >
              Learn more
            </a>
            <a
              className={
                "order-first sm:order-last bg-[#7F56D9] text-center text-white rounded-md m-2 px-3 py-3 text-base font-medium cursor-pointer"
              }
            >
              Get started
            </a>
        </div>
      </div>

      <div className="sm:col-span-6 p-6 bg-cover bg-center " >
      <img src={img1} alt='gallery' className="w-auto h-auto" />
      <img src={img2} alt='gallery' className="w-auto h-auto" />
        <img src={img3} alt='gallery' className="w-auto h-auto" />
        <img src={img4} alt='gallery' className="w-auto h-auto" />
        <img src={img5} alt='gallery' className="w-auto h-auto" />
       
      </div>
    </div>
  </div>
  );
}