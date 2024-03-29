import { Disclosure } from "@headlessui/react";
import { Plus } from "./svg/plus";
import { Minus } from "./svg/minus";
import { AcordeonProps } from "../types.d";

export function Acordeon({ question, answer, firstquestion } : AcordeonProps) {
    return (
        <div className="border-b border-[#EAECF0] w-4/5 py-4 ">
           {/* Componente Disclosure para manejar el estado de abrir/cerrar */}
      <Disclosure defaultOpen={firstquestion === 0} >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-none px-4 py-2 text-left text-lg font-medium text-[#101828] focus:outline-none focus-visible:ring">
              <span>{question}</span>
              {open ? (
                <Minus  />
                
              ) : (
                <Plus  />
              )}
            </Disclosure.Button>
              {/* Contenido del acordeón, visible solo cuando está abierto */}
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-left text-[#475467]">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      </div> 
    );
  }