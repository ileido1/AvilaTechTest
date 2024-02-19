import bg from "../assets/Testimonial.png";
import Stars from "./svg/Starts";
export function Testimonial() {
    return (
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-36 mb-36">
        <div className="grid grid-cols-1 sm:grid-cols-12  " >

        <div className="sm:col-span-4 bg-white p-6 bg-cover bg-center rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl h-72 sm:h-auto" style={{ backgroundImage: `url(${bg})` }}>
           
           </div>
          <div className="flex flex-col  sm:col-span-8 bg-[#53389E] p-10  rounded-b-3xl sm:rounded-l-none sm:rounded-r-3xl gap-6">
            <Stars></Stars>
            <h1 className="text-white  text-3xl sm:text-4xl font-semibold">
            Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.
            </h1>
            <p className="text-white font-semibold text-base sm:text-xl max-w-3xl">
            — Renee Wells
            </p>
            <p className="text-[#E9D7FE] text-base font-normal sm:text-sm max-w-3xl">
            Product Designer, Quotient
            </p>
            
          </div>
  
       
        </div>
      </div>
    );
  }
  