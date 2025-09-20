import { Main } from './components/Main'
import { Header } from './components/Header.tsx'
import  Spacer  from './components/Spacer.tsx'
import Intro from './components/Intro.tsx'
import EducationSegment from './components/EducationSegment.tsx'
import './App.css'

function App() {

  return (
    <>

      <Header />
      <Spacer />
      <Intro />
      <Spacer />
      <EducationSegment />
      <Spacer />
      <Main />

    </>
  )
}

export default App
