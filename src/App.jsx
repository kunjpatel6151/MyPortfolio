import { useState } from 'react'
import './styles/globals.css'
import LoadingScreen from './components/LoadingScreen'
import Portfolio from './components/Portfolio'

function App() {
  const [showLoader, setShowLoader] = useState(true)

  return (
    <>
      {/* Portfolio is ALWAYS mounted so it paints during the loading screen. */}
      <Portfolio />

      {/* Loading screen is a fixed overlay on top. When it finishes its own
          fade-out animation it calls onComplete, and we unmount it. */}
      {showLoader && (
        <LoadingScreen onComplete={() => setShowLoader(false)} />
      )}
    </>
  )
}

export default App
