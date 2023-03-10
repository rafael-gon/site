import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import api from "@/providers/api";
import { Repository } from "@/components/repository";
import Head from "next/head";

interface repoInfo{
  name: string;
  description: string;
  html_url: string;
  language: string;
  map: any;
}

export default function Projects(){

  const [repo, setRepo] = useState<repoInfo>();

  useEffect(() => {
    api
      .get("/repos")
      .then((response) => setRepo(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return(
    <div className="min-h-screen bg-zinc-900">
      <Head><title>Rafael | Projects</title></Head>
      
      <div className='h-full text-zinc-200 flex flex-col justify-center items-center text-center gap-10 p-8'>
        <Link href="/" >
          <CaretLeft className="md:text-[5rem] md:m-8 text-2xl m-4 z-50 top-0 left-0 fixed text-[#F5D0FE] hover:text-[#d63efb] transition-all"/>
        </Link>
        {
          repo?.map((repo: { id: any; name: any; description: any; language: any; html_url: any; }) => (
            <Repository key={repo.id} name={repo?.name} desc={repo?.description} lang={repo?.language} html_url={repo?.html_url}/>
          ))
        }

      </div>
    </div>
  )
}