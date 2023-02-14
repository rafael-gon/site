import { Background } from "@/components/background";
import { Repositories } from "@/screens/repositories";

export default function Projects(){
  return(
    <div className="min-h-screen bg-zinc-900">
      <Repositories />
      <Background />
    </div>
  )
}