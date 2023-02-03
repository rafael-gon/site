import { Header } from "@/components/header";
import { GearSix } from "phosphor-react";

export function InBuild(){
  return(
    <div className='flex flex-col gap-8 items-center z-50'>
      <Header />
      <div className="animate-pulse flex flex-col gap-2 items-center">
        <GearSix className="animate-spin-slow text-[#F5D0FE]" size={80}/>
        <p className="text-xl text-[#F5D0FE] font-bold">IN BUILD</p>
      </div>
    </div>
  )
}