import React from 'react'
import { Navbar } from '../components/Navbar'
import About1 from '../components/About1'
import { TextForm } from '../components/TextForm'

export default function Home() {
  return (
    <div>
        <Navbar />
        <TextForm />
        <About1 />
    </div>
  )
}
