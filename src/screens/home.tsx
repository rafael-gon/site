import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { Links } from '@/components/links'
import Link from 'next/link'

export function Home() {
  return (
    <div className='flex flex-col gap-8 items-center z-50 backdrop-blur-sm shadow-2xl p-16 rounded border-2 border-[#F5D0FE]'>
      <Header />
      <Link href="/projects">
        <Button title="Projects"/>
      </Link>
      <Link href="/certificates">
        <Button title="Certificates"/>
      </Link>

      <Links />
      
      <Link href="https://www.buymeacoffee.com/rafaelgon" target={"_blank"}>
        <Button title="Suporte me"/>
      </Link>
    </div>
  )
}