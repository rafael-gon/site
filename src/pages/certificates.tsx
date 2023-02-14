import { Background } from '@/components/background'
import { Attest } from '@/screens/attest'

export default function Certificates() {
  return (
    <div className='min-h-screen bg-zinc-900 flex flex-col items-center text-center'>
      <Attest/>
      <Background />
    </div>
  )
}