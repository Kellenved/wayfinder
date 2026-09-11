import { useState } from "react";

function App(){

  const playerName = 'Traveler'
  
  const [hasStarted, setHasStarted] = useState(false)
  
  return (
    <main>
      {!hasStarted ? (
        <>
          <h1>The Wayfinder</h1>
          <p>Welcome, {playerName}. Your journey begins here.</p>

          <button onClick={() => setHasStarted(true)}>
            Begin Journey
          </button>
        </>
      ) : (
        <>
          <h1>Chapter 1: The Lost Scroll</h1>
          <p>
            The road is quiet as you enter a small town at the edge of the desert.
          </p>
          <p>
            Near the town gate, you notice torn pieces of parchment scattered in
            the dust.
          </p>

          <button>Examine the parchment</button>
        </>
      )}
    </main>
  )
}

export default App