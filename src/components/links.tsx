import { GithubLogo, EnvelopeSimple, LinkedinLogo } from "phosphor-react"
export function Links(){
  return(
    <div className="flex gap-12 justify-center items-center text-center">
      <a href="mailto:contato@rafaelgoncalves.tech" target={"_blank"}
        className="text-[#F5D0FE] text-2xl hover:text-[#fbe9ff] transition-colors"
      >
        <EnvelopeSimple />
      </a>
      <a href="https://github.com/rafael-gon/" target={"_blank"}
        className="text-[#F5D0FE] text-2xl hover:text-[#fbe9ff] transition-colors"
      >
        <GithubLogo />
      </a>
      <a href="https://www.linkedin.com/in/rafael-gon%C3%A7alves-52a146190/" target={"_blank"}
        className="text-[#F5D0FE] text-2xl hover:text-[#fbe9ff] transition-colors"
      >
        <LinkedinLogo />
      </a>
    </div>
  )
}