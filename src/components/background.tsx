import { CircleBotton, CircleTop } from "./circles";
import { Noise } from "./noise";

export function Background(props: any){
  return(
    <div {...props}>
      <Noise />
      <CircleTop />
      <CircleBotton />
    </div>
  )
}