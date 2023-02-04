import Image from "next/image"
import Link from "next/link"

export function Repositorie(props: any){

  let leng = props.leng
  let link = ""

  if (leng != null){
    leng = leng.toLowerCase()
    link = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${leng}/${leng}-plain.svg`
    if (leng == "css"){
      leng = "css3"
      link = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${leng}/${leng}-plain.svg`

    }else if (leng == "html"){
      leng = "html5"
      link = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${leng}/${leng}-plain.svg`

    }
  }else{
    leng = "markdown"
    link = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${leng}/${leng}-original.svg`
  }
  
  return(
    <Link href={props.html_url} className="sm:w-[40rem] sm:p-16 p-8 w-full z-40 flex flex-col gap-4 items-center border-2 border-[#F5D0FE] text-[#F5D0FE] backdrop-blur-3xl rounded hover:border-[#d63efb] transition-all">

      <Image src={link} alt="linguage icon" width={100} height={100}/>
          
      <div>
        <h1 className="md:text-2xl text-lg text-[#d63efb] font-bold  mt-4">{props.name}</h1>
        <p className="text-[#F5D0FE]">{props.desc}</p>
      </div>
    </Link>
  )
}