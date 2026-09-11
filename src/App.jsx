import { useState } from "react";

function App(){

  const playerName = 'Traveler'
  
  const [hasStarted, setHasStarted] = useState(false)

  const [hasExamined, setHasExamined] = useState(false)
  
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

          <button onClick={() => setHasExamined(true)}>Examine the parchment</button>

          {hasExamined && (
            <p>
              Faded symbols cover the parchment. Whatever this was,
              it appears to be part of something much larger.
            </p>
          )}
        </>
      )}
    </main>
  )
}

export default App