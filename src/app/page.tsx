'use client'
import React, { useEffect, useState } from 'react'
import AboutMe from '@/components/aboutMe'
import Header from '@/components/header'

export default function Home() {

  return (
    <div className="bg-photo text-foreground flex min-h-screen select-none flex-col items-center justify-center gap-8 bg-fixed bg-center bg-no-repeat">
      <Header />
      <AboutMe />

      <div className="flex h-screen justify-center">
        <div className="flex w-screen flex-wrap items-center gap-32 overflow-y-scroll px-8">
          <h1 className="bg-accents text-[300px]">Projects</h1>
        </div>
      </div>
    </div>
  )
}
