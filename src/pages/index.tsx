import { CircleBotton, CircleTop } from '@/components/circles'
import { Home } from '@/screens/home'

export default function Index() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-zinc-200 flex flex-col justify-center items-center text-center'>
      <Home/>
      <CircleTop />
      <CircleBotton />
    </div>
  )
}