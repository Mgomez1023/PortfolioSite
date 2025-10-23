import { Main } from './components/Main.tsx'
import { Hero } from './components/Hero.tsx'
import { useRef } from 'react'
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
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      const top = featuresRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ 
        top: top - 100, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {isMobile ? <MobileHero onScrollClick={scrollToFeatures}/> : <Hero onScrollClick={scrollToFeatures} />}
        <Spacer />
      {isMobile ? <MobileIntro /> : <Intro />}
        <Spacer />
      {isMobile ? <MobileEducationSegment ref={featuresRef} /> : <EducationSegment ref={featuresRef} />}
        <Spacer />
      <Main />

    </>

  )
}

export default App
