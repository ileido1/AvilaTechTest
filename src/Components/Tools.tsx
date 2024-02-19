import { ToolsListProps } from "../types.d";
import { Tool } from "./Tool";

export const ToolsList: React.FC<ToolsListProps> = ({ tools }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8   mt-8">
     <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Tool key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
}
