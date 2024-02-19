import { Disclosure } from "@headlessui/react";
import { Plus } from "./svg/plus";
import { Minus } from "./svg/minus";

export function Acordeon({ question, answer, firstquestion }) {
    return (
        <div className="border-b border-[#EAECF0] w-4/5 py-4 ">
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
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-left text-[#475467]">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      </div> 
    );
  }