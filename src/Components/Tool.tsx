import Arrow from "./svg/Arrow";

export function Tool ({ tool }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-3">
      <img src={tool.img} alt={tool.name} className="w-12 h-12" />
      <div className="flex flex-col items-center text-center">
        <h1 className="text-black text-xl font-semibold">{tool.name}</h1>
        <p className="text-[#475467] text-base mt-3">{tool.description}</p>
        <a href={tool.url} className="text-[#6941C6] text-base mt-3 font-semibold flex justify-center items-center gap-2 cursor-pointer">View integration <Arrow></Arrow></a>
      </div>
    </div>
  );
}