import { CircleBotton, CircleTop } from "@/components/circles"
import { InBuild } from "@/screens/inBuild"

export default function BuildPage(){
  return(
    <div className='w-full h-screen bg-zinc-900 text-zinc-200 flex flex-col justify-center items-center text-center'>
      <InBuild />
      <CircleTop />
      <CircleBotton />
    </div>
  )
}