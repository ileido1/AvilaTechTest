import { ToolProps } from "../types.d";
import Arrow from "./svg/Arrow";
// Componente funcional para representar una herramienta individual
export const Tool: React.FC<ToolProps> = ({ tool }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-3">
      <img src={tool.img} alt={tool.name} className="w-12 h-12" />
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[#101828] text-xl font-semibold">{tool.name}</h1>
        <p className="text-[#475467] text-base mt-3">{tool.description}</p>
        <a href={tool.url} className="transition-transform hover:scale-105 text-[#6941C6] text-base mt-3 font-semibold flex justify-center items-center gap-2 cursor-pointer">View integration <Arrow></Arrow></a>
      </div>
    </div>
  );
}