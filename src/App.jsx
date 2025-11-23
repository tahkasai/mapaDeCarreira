import { useState } from 'react'
import './style/App.css'
import Hero from './components/sections/Hero/hero'
import AboutMe from './components/sections/AboutMe/AboutMe'
import Skills from './components/sections/Skills/Skills'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <AboutMe/>
      <Skills/>
    </>
  )
}