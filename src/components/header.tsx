import { Icon } from "@/img/icon";
import { Name } from "@/img/name";

export function Header(){
  return(
    <div className='flex flex-col gap-8 items-center'>
      <Icon />
      <Name />
    </div>
  )
}