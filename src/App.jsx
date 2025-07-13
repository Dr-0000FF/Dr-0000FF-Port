import { useState, useEffect } from 'react'
import './index.css'
import StartSlide from './frgs/startSlide'
import Nav from './frgs/nav'
import BgVideo from './frgs/bgvid'




const App = () => {

  const [showHeroText, setShowHeroText] = useState(false)

  useEffect(() => {
    // Trigger after overlays (700ms last slide + buffer)
    const timer = setTimeout(() => {
      setShowHeroText(true)
    }, 1100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Section */}
      {/* Background Video */}
      <BgVideo />

      {/* Hero Text */}
      <div className={`absolute top-1/2 left-12 transform -translate-y-1/2 z-20 text-left text-white
  font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight
  select-none pointer-events-none transition-opacity duration-1000
  ${showHeroText ? 'opacity-100' : 'opacity-0'}`}>


        <h1>Welcome to Dr.0000FF</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Your gateway to the world of tech and creativity
        </p>
      </div>


      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full z-10
        bg-[linear-gradient(123deg,_rgba(0,_0,_255,_0.90)_0%,_rgba(27,_152,_224,_0.90)_31%,_rgba(0,0,0,0.5)_74%)]
        mix-blend-multiply pointer-events-none animate-gradient-x transition-all duration-1000 ease-in-out" />
      {/* Nav */}
      <Nav />



      {/*Overlays */}
      <StartSlide
        delay={85}
        color="bg-stone-950"
        zIndex={"z-40"}
        direction="down"
      />
      {/*Overlays */}
      <StartSlide
        delay={175}
        color="bg-stone-700"
        zIndex={"z-30"}
        direction="left"
      />
      {/*Overlays */}
      <StartSlide
        delay={350}
        color="bg-stone-400"
        zIndex={"z-20"}
        direction="up"
      />
      {/*Overlays */}
      <StartSlide
        delay={700}
        color="bg-stone-50"
        zIndex={"z-10"}
        direction="right"
      />
    </div>
  )
}

export default App
