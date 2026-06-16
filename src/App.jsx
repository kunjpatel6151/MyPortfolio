import { useState } from 'react'
import './styles/globals.css'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-rdr-charcoal text-rdr-parchment flex items-center justify-center font-body">
          <h1 className="text-4xl font-display text-rdr-red">Red Dead Redemption 2 Portfolio Setup Successful</h1>
        </div>
      )}
    </>
  )
}

export default App
