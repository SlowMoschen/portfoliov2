import HeroSection from './sections/hero/HeroSection'
import { ScreenSizeContextProvider } from './utils/context/ScreenSize.context'

function App() {

  return (
    <>
      <ScreenSizeContextProvider>
        <HeroSection />
      </ScreenSizeContextProvider>
    </>
  )
}

export default App
