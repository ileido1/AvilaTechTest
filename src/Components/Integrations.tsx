
import { ToolsList } from "./Tools";
import { toolsData } from "../Const";
// Componente funcional para la sección de integraciones
export default function Integrations() {
 
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  -mt-16  sm:mt-8">
      <div className="flex justify-center flex-col items-center text-center">
        <span className="inline-flex items-center rounded-md bg-[#F9F5FF] px-2 py-1 text-xs font-medium text-[#6941C6] ring-1 ring-inset ring-gray-500/10">
          Integrations
        </span>
        <h1 className="text-[#101828] sm:leading-[90px] text-3xl mt-4 sm:text-4xl font-semibold leading-12">
          Get more value from your tools <br></br>{" "}
        </h1>

        <p className="text-[##475467] m-3 sm:text-xl text-lg max-w-3xl">
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </p>
{/* Lista de herramientas renderizada con el componente ToolsList */}
        <ToolsList tools={toolsData}/>
      </div>
    </div>
  );
}
