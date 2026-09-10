import { useState } from "react";

function App(){

  const playerName = 'Traveler'
  
  const [hasStarted, setHasStarted] = useState(false)
  
  return (
    <main>
      <h1>The Wayfinder</h1>
      <p>Welcome, {playerName}. Your journey through the Bible begins here.</p>

      <button onClick={() => setHasStarted(true)}>
        Begin Journey
      </button>

      <p>
        Has the journey started? {hasStarted ? 'Yes' : 'No'}
      </p>
      
    </main>
  )
}

export default App