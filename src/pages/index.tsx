import { Background } from '@/components/background'
import { Home } from '@/screens/home'

export default function Index() {
  return (
    <div className='min-h-screen bg-zinc-900 flex flex-col justify-center items-center text-center'>
      <Home/>
      <Background />
    </div>
  )
}