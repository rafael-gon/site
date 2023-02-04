import { Background } from '@/components/background'
import { Attest } from '@/screens/attest'

export default function Certificates() {
  return (
    <div className='bg-zinc-900 text-zinc-200 flex flex-col justify-center items-center text-center'>
      <Attest/>
      <Background />
    </div>
  )
}