import { useState } from 'react'
import './style/App.css'
import Hero from './components/sections/Hero/hero'
import AboutMe from './components/sections/AboutMe/AboutMe'
import Skills from './components/sections/Skills/Skills'
import Map from './components/sections/Map/Map'
import Contact from './components/sections/Contact/Contact'
import Footer from './components/layout/Footer/Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Map/>
      <Contact/>
      <Footer/>
    </>
  )
}