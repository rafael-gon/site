import Image from "next/image"
import Link from "next/link"

export function Repository(props: any){

  let link = ""

  if (props.lang != null){
    link = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.lang.toLowerCase()}/${props.lang.toLowerCase()}-plain.svg`
    if (props.lang == "CSS"){
      link = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    } else if (props.lang == "HTML"){
      link = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
    }
  } else link = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
  
  return(
    <Link href={props.html_url} target={"_blank"}
      className="sm:w-[40rem] sm:p-16 p-8 w-full z-40 flex flex-col gap-4 items-center border-2 shadow-xl border-[#F5D0FE] text-[#F5D0FE] backdrop-blur-3xl rounded hover:text-[#d63efb] hover:border-[#d63efb] transition-all"
    >

      <Image src={link} alt="linguage icon" width={100} height={100}/>
          
      <div>
        <h1 className="md:text-2xl text-lg text-[#d63efb] font-bold  mt-4">{props.name}</h1>
        <p className="text-[#F5D0FE]">{props.desc}</p>
      </div>
    </Link>
  )
}