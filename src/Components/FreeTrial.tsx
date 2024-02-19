import img1 from "../assets/FreeTrial/trial1.png";
import img1mobile from "../assets/FreeTrial/trial1mobile.png";
import img2 from "../assets/FreeTrial/trial2.png";
import img3 from "../assets/FreeTrial/trial3.png";
import img4 from "../assets/FreeTrial/trial4.png";
import img5 from "../assets/FreeTrial/trial5.png";
import img2mobile from "../assets/FreeTrial/trial2mobile.png";
import img3mobile from "../assets/FreeTrial/trial3mobile.png";
import img4mobile from "../assets/FreeTrial/trial4mobile.png";
import img5mobile from "../assets/FreeTrial/trial5mobile.png";
export function FreeTrial() {

  
  
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-36 mb-36 bg-[#F9FAFB]">
      <div className="grid grid-cols-1 sm:grid-cols-12  py-11 ">
        <div className="flex flex-col  sm:col-span-6  p-10  gap-6 justify-center">
          <h1 className="text-[#101828] text-3xl sm:text-4xl font-semibold">
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

        <div className="sm:col-span-6 p-6 bg-cover bg-center ">
          <div className="grid grid-cols-1 sm:grid-cols-12  sm:px-20">
            <div className="flex flex-col  sm:col-span-6  p-2 justify-end">
              <img 
               srcSet={`${img1mobile} 600w, ${img1} 1024w`}
               sizes="(max-width: 600px) 600px, 1024px"
              src={img1}         
              alt="gallery" className="w-auto h-auto hidden sm:block" />
              <img 
              src={img1mobile}         
              alt="gallery" className="w-auto h-auto sm:hidden " />
            </div>
            <div className="flex flex-col  sm:col-span-6  p-2  gap-6">
              <img  src={img5mobile}
              srcSet={`${img5mobile} 480w, ${img5} 1024w`}
              sizes="(max-width: 600px) 480px, 1024px" alt="gallery" className="w-auto h-auto hidden sm:block" />
              <img 
              src={img5mobile}         
              alt="gallery" className="w-auto h-auto sm:hidden " />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12  ">
            <div className="flex flex-col  sm:col-span-4  p-2  gap-6">
              <img src={img3mobile}
              srcSet={`${img3mobile} 480w, ${img3} 1024w`}
              sizes="(max-width: 600px) 480px, 1024px"  alt="gallery" className="w-auto h-auto hidden sm:block" />
              <img 
              src={img3mobile}         
              alt="gallery" className="w-auto h-auto sm:hidden " />
            </div>
            <div className="flex flex-col  sm:col-span-4  p-2 gap-6">
              <img src={img2mobile}
              srcSet={`${img2mobile} 480w, ${img2} 1024w`}
              sizes="(max-width: 600px) 480px, 1024px" alt="gallery" className="w-auto h-auto hidden sm:block" />
              <img 
              src={img2mobile}         
              alt="gallery" className="w-auto h-auto sm:hidden " />
            </div>
            <div className="flex flex-col  sm:col-span-4  p2  gap-6">
              <img src={img4mobile}
              srcSet={`${img4mobile} 480w, ${img4} 1024w`}
              sizes="(max-width: 600px) 480px, 1024px" alt="gallery" className="w-auto h-auto hidden sm:block" />
              <img 
              src={img4mobile}         
              alt="gallery" className="w-auto h-auto sm:hidden " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
