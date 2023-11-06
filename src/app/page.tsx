'use client'
import React, { useEffect, useState } from 'react'
import AboutMe from '@/components/aboutMe'
import Header from '@/components/header'

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState('AboutMe')
  const [whereIAm, setWhereIAm] = useState('')

  useEffect(() => {
    function updateScrollPosition() {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        if (window.scrollY >= projectsSection.offsetTop) {
          setScrollPosition('Projects')
          setWhereIAm('AboutMe')
        } else {
          setScrollPosition('AboutMe')
          setWhereIAm('Projects')
        }
      }
    }

    window.addEventListener('scroll', updateScrollPosition)
    updateScrollPosition()

    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
    }
  }, [])

  function GoTo(page: string) {
    if (page === 'Projects') {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (page === 'AboutMe') {
      const aboutMeSection = document.getElementById('AboutMe')
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="bg-photo text-foreground flex min-h-screen select-none flex-col items-center justify-center gap-8 bg-fixed bg-center bg-no-repeat">
      <Header />
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div className="text-foreground fixed bottom-4 left-4 z-50">
        <p>{scrollPosition}</p>
      </div>

      <div className="bg-accents text-foreground fixed bottom-4 right-4 z-50">
        <a onClick={() => GoTo(whereIAm)}>{whereIAm}</a>
      </div>

      <div className="flex h-screen justify-center" id="projects">
        <div className="flex w-screen flex-wrap items-center gap-32 overflow-y-scroll px-8">
          <h1 className="bg-accents text-[300px]">Projects</h1>
        </div>
      </div>
    </div>
  )
}
