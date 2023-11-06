import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="flex h-screen items-center justify-center gap-12">
      <div className="shadow-background bg-background flex flex-col gap-12 rounded-2xl px-8 py-16 shadow-md backdrop-blur-xl">
        <div className="flex flex-row gap-8">
          <Image
            src="/assets/Rafael.png"
            alt="My photo"
            height={300}
            width={300}
            draggable="false"
            className="shadow-background bg-accents h-72 w-72 rounded-full bg-opacity-25 shadow-md backdrop-blur-xl"
          />
          <div className="flex w-[32rem] flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-black uppercase">Rafael Gonçalves</p>
              <p className="text-accents text-lg font-normal">
                Fullstack Developer
              </p>
            </div>
            <div className="flex flex-col gap-4 text-justify">
              <p>
                My passion lies in web and mobile development, and I have
                practical experience with technologies like JavaScript, Node.js,
                React, and React Native. Furthermore, I maintain an advanced
                knowledge of Python, which expands my skill set.
              </p>
              <p>
                I&apos;m a natural problem solver and constantly seek creative
                ways to tackle technological challenges. I&apos;m dcommitted to
                continuous learning and always open to collaborating on
                innovative projects.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <a
            href="https://linkedin.com/in/rafael-gon"
            target="_blank"
            className="bg-accents rounded bg-opacity-5 px-4 py-2 backdrop-blur transition-all hover:brightness-125"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/rafael-gon"
            target="_blank"
            className="bg-accents rounded bg-opacity-5 px-4 py-2 backdrop-blur transition-all hover:brightness-125"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  )
}
