import { SITEMAP } from "../Const";
import Apple from "./svg/AppleStore";
import { Logo } from "./svg/Logo";
import PlayStore from "./svg/PlayStore";
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-36">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-6">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full  col-span-2 sm:col-auto">
              <h1 className="text-[#101828] text-sm font-semibold">{title}</h1>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <li key={key} className="font-normal">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-[#6941C6] text-sm font-semibold"
                    >
                      {link.name} {link.badge && ( <span className="inline-flex items-center rounded-3xl bg-white px-2 py-1 text-xs font-medium border-[#6941C6] text-[#6941C6] ring-1 ring-inset  ring-[#6941C6]">
          {link.badge} 
        </span>)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full order-first sm:order-none col-span-6 sm:col-auto sm:col-start-6  flex justify-start flex-col items-start gap-4">
          <h1 className="text-[#101828] text-sm font-semibold">Get the app</h1>
            <div className="flex flex-row sm:flex-col gap-3">
            <a href="#">
              <Apple></Apple>
            </a>
            <a href="#">
                <PlayStore></PlayStore>
            </a>
            </div>
           
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4 sm:items-center justify-between border-t border-[#EAECF0] py-4 md:flex-row md:justify-between">
          <Logo />
          <p className="mb-4 text-center  md:mb-0 font-normal text-sm text-[#667085]">
            &copy; {currentYear} <a href="#" className=""> Untitled UI</a>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}