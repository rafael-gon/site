import { Paper } from "@/components/paper";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";

export function Attest(){
  return(
    <div className="z-50 flex flex-col gap-10 m-8">
      <Link href="/" >
        <CaretLeft className="md:text-[5rem] md:m-8 text-2xl m-4 z-50 top-0 left-0 fixed text-[#F5D0FE] hover:text-[#d63efb] transition-all"/>
      </Link>
      <Paper image="Programador.jpg" link="https://drive.google.com/file/d/1AoGKsGbW8piFyjxQZUr8AzlkxTdZ2weQ/view?usp=share_link" title="Qualificação em Programador de Sistemas" inst="Senac"/>
      <Paper image="Python.jpg" link="https://drive.google.com/file/d/1f-Nr-k8pDbID9K_5fIMOdVWfetXpI014/view?usp=share_link" title="Programação em Python do básico ao avançado" inst="Geek University"/>
      <Paper image="Conectar.jpg" link="https://drive.google.com/file/d/12DmmlEjCv_tDAiEEgXwSxd0HzQmR7QgV/view?usp=share_link" title="Trilha Conectar do Discover" inst="Rocketseat"/>
      <Paper image="Fundamentar.jpg" link="https://drive.google.com/file/d/1KPbtN6WSYxdI7vYpVt2Lc3uxGbJHgWEF/view?usp=share_link" title="Trilha Conectar do Discover" inst="Rocketseat"/>
    </div>
  )
}
