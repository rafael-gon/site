import Link from "next/link"
import { GithubLogo, EnvelopeSimple, LinkedinLogo } from "phosphor-react"
export function Links(){
  return(
    <div className="flex gap-12 justify-center items-center text-center">
      <Link href="mailto:contato@rafaelgoncalves.tech" target={"_blank"} aria-label="Mande um email para mim"
        className="text-[#F5D0FE] text-2xl hover:text-[#d63efb] transition-colors"
      >
        <EnvelopeSimple />
      </Link>
      <Link href="https://github.com/rafael-gon" target={"_blank"} aria-label="acesse minha pagina do GitHub"
        className="text-[#F5D0FE] text-2xl hover:text-[#d63efb] transition-colors"
      >
        <GithubLogo />
      </Link>
      <Link href="https://www.linkedin.com/in/rafael-gon%C3%A7alves-52a146190" target={"_blank"} aria-label="acesse minha pagina do Linkedin"
        className="text-[#F5D0FE] text-2xl hover:text-[#d63efb] transition-colors"
      >
        <LinkedinLogo />
      </Link>
    </div>
  )
}