import Image from "next/image";
import Link from "next/link";

export function Paper(props: any){
  return(
    <Link href={props.link} className="flex flex-col hover:brightness-110 transition-all gap-4">
      <div>
        <p className="md:text-2xl text-lg text-[#F5D0FE]">{props.title}</p>
        <p className="md:text-lg text-md text-[#d63efb]">{props.inst}</p>
      </div>
      <Image src={`/img/${props.image}`} alt="" width={790} height={550} className="rounded"/>
    </Link>
  )
}