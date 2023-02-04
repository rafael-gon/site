import { Repositorie } from "@/components/repositorie";
import api from "@/providers/api";
import Link from "next/link";
import { CaretLeft } from "phosphor-react";
import React, { useEffect, useState } from "react";

interface repoInfo{
  name: string;
  description: string;
  html_url: string;
  language: string;
}

export function Repositories(){

  const [repo, setRepo] = useState<repoInfo>();

  useEffect(() => {
    api
      .get("/repos")
      .then((response) => setRepo(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  console.log(repo?.language)


  return(
    <div className='h-full bg-zinc-900 text-zinc-200 flex flex-col justify-center items-center text-center gap-10 p-8'>
      <Link href="/" >
        <CaretLeft className="md:text-[5rem] md:m-8 text-2xl m-4 z-50 top-0 left-0 fixed text-[#F5D0FE] hover:text-[#d63efb] transition-all"/>
      </Link>
      {
        repo?.map((repo) => (
          <Repositorie key={repo.id} name={repo?.name} desc={repo?.description} leng={repo?.language} html_url={repo?.html_url}/>
        ))
      }
    </div>
  )
}

// class Dog extends Component {



//   async componentDidMount() {
//       const response = await api.get('')
//   }


//   render() {
//       const { caes } = this.state;

//       return (
//           <div className='' >
//           </div>
//       )
//   }
// }

// export default Dog