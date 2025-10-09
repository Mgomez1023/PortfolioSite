import { Main } from './components/Main.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { useIsMobile } from './utils/useIsMobile.ts'
import  Spacer  from './components/Spacer.tsx'
import Intro from './components/Intro.tsx'
import EducationSegment from './components/EducationSegment.tsx'
import MobileEducationSegment from './components/Mobile/MobileEducationSegment.tsx'
import MobileHero from './components/Mobile/MobileHero.tsx'
import MobileIntro from './components/Mobile/MobileIntro.tsx'
import './App.css'

function App() {
  const isMobile = useIsMobile()

  return (
    <>
      {isMobile ? <MobileHero /> : <Hero />}
        <Spacer />
      {isMobile ? <MobileIntro /> : <Intro />}
        <Spacer />
      {isMobile ? <MobileEducationSegment /> : <EducationSegment />}
        <Spacer />
      <Main />

    </>

  )
}

export default App
