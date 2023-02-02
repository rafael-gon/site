import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { Links } from '@/components/links'

export function Home() {
  return (
    <div className='flex flex-col gap-8 items-center'>
      <Header />
      <a href="/buildPage">
        <Button title="Projects"/>
      </a>
      <a href="/buildPage">
        <Button title="Certificates"/>
      </a>
      <Links />
      <a href="https://www.buymeacoffee.com/rafaelgon" target={'_blank'}>
        <Button title="Suporte me"/>
      </a>
    </div>
  )
}