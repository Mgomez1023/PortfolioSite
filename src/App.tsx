import { Main } from './components/Main.tsx'
import { Header } from './components/Header.tsx'
import { useIsMobile } from './utils/useIsMobile.ts'
import  Spacer  from './components/Spacer.tsx'
import Intro from './components/Intro.tsx'
import EducationSegment from './components/EducationSegment.tsx'

import MobileEducationSegment from './components/Mobile/MobileEducationSegment.tsx'
import MobileIntro from './components/Mobile/MobileIntro.tsx'
import './App.css'

function App() {
  const isMobile = useIsMobile()

  return (
    <>

      <Header />
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
