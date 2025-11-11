"use client";

export default function LogoBazmago() {
  return (
    <div className="flex items-center gap-1 select-none font-bold text-xl tracking-wide">
      <span className="text-[#1976D2]">BAZM</span>
      
      {/* A with dual flag */}
      <span className="relative text-[#1976D2]">
        A
        <span className="absolute right-[-6px] top-[3px] flex flex-col gap-[2px]">
          <span className="w-[8px] h-[3px] bg-[#1976D2] rounded-[1px]" />
          <span className="w-[8px] h-[3px] bg-[#1976D2] rounded-[1px]" />
        </span>
      </span>

      <span className="text-[#1976D2]">GO</span>
    </div>
  );
}
