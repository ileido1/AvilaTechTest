import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logo } from "./svg/Logo";
import { NavbarProps } from "../types.d";
 


// Función de utilidad para aplicar clases de CSS condicionalmente
function classNames(...classes : (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
// Componente funcional para la barra de navegación (Navbar)
export const  Navbar: React.FC<NavbarProps> = ({navigation}) => {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo></Logo>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "" : "button-header ",
                          "rounded-md px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  className={
                    "button-header   hover:bg-gray-700 hover:text-white rounded-md px-3 m-2 py-2 text-sm font-medium text-button-header cursor-pointer"
                  }
                >
                  Log in
                </a>
                <a
                  className={
                    " hover:bg-gray-700 hover:text-white bg-header-primary text-white rounded-md m-2 px-3 py-2 text-sm font-medium cursor-pointer"
                  }
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={
                    "button-header block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                  }
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <a
                className={
                  "button-header block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                }
              >
                Log in
              </a>
              <a
                className={
                  " block  hover:bg-gray-700 hover:text-white bg-header-primary text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                }
              >
                Sign up
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
