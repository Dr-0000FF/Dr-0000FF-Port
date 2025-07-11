import { useEffect, useState } from 'react'
import './index.css'

const App = () => {
  const [slideUp, setSlideUp] = useState(false)
  const [slideDn, setSlideDn] = useState(false)

  // Slide black up after 500ms
  useEffect(() => {
    const timer = setTimeout(() => setSlideUp(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Slide white down after 1500ms
  useEffect(() => {
    const timer = setTimeout(() => setSlideDn(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Black Overlay */}
      <div
        className={`w-full h-full absolute top-0 left-0 z-20 bg-black transition-transform duration-[500ms] ease-in-out
        ${slideUp ? "-translate-y-full" : "translate-y-0"}`}
      />

      {/* White Overlay */}
      <div
        className={`w-full h-full absolute top-0 left-0 z-10 bg-white transition-transform duration-[1000ms] ease-in-out
        ${slideDn ? "translate-y-full" : "translate-y-0"}`}
      />

      {/* Gradient Background */}
      <div className="w-full h-full absolute top-0 left-0 z-0
        bg-[linear-gradient(123deg,_rgba(0,_0,_255,_1)_0%,_rgba(27,_152,_224,_1)_31%,_rgba(189,_237,_224,_1)_74%)]">
        {/* Site content goes here */}
      </div>
    </div>
  )
}

export default App
