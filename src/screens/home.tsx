import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { Links } from '@/components/links'
import Link from 'next/link'

export function Home() {
  return (
    <div className='flex flex-col gap-8 items-center z-50'>
      <Header />
      <Link href="/buildPage">
        <Button title="Projects"/>
      </Link>
      <Link href="/buildPage">
        <Button title="Certificates"/>
      </Link>
      <Links />
      <Link href="https://www.buymeacoffee.com/rafaelgon" target={"_blank"}>
        <Button title="Suporte me"/>
      </Link>
    </div>
  )
}