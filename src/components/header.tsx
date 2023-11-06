import Image from 'next/image'

export default function Header() {
  return (
    <div className="shadow-background fixed top-0 z-50 flex w-screen items-center justify-evenly py-2 shadow-md backdrop-blur-xl">
      <Image
        src="/assets/Logo.svg"
        alt=""
        width={80}
        height={80}
        draggable="false"
      />
    </div>
  )
}
