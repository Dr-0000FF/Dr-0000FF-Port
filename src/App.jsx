import './index.css'
import StartSlide from './frgs/startSlide'
import Nav from './frgs/nav'



const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      {/* Nav */}
      <Nav />
      {/* Gradient Background */}
      <div className="w-full h-full absolute top-0 left-0 z-0
        bg-[linear-gradient(123deg,_rgba(0,_0,_255,_1)_0%,_rgba(27,_152,_224,_1)_31%,_rgba(189,_237,_224,_1)_74%)]">
        {/* Nav */}
      </div>
    </div>
  )
}

export default App
