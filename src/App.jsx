import { useState } from "react";
import './App.css'
import Parchment from './components/Parchment'

function App(){

  const playerName = 'Traveler'
  
  const [hasStarted, setHasStarted] = useState(false)

  const [hasExamined, setHasExamined] = useState(false)

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  
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

          <button onClick={() => setHasExamined(true)}>
            Examine the parchment
          </button>

          {hasExamined && (
            <>
              <p>
                Faded symbols cover the parchment. Whatever this was,
                it appears to be part of something much larger.
              </p>

              <Parchment solved={selectedAnswer === 'reference'}/>

              <h2>What do these markings look like?</h2>

              <button onClick={() => setSelectedAnswer('name')}>
                A person's name
              </button>

              <button onClick={() => setSelectedAnswer('place')}>
                A place
              </button>

              <button onClick={() => setSelectedAnswer('reference')}>
                A Bible reference
              </button>

              {selectedAnswer === 'name' && (
                <p>Not quite. Look at the pattern again.</p>
              )}

              {selectedAnswer === 'place' && (
                <p>Not quite. These markings seem more structured than a place name.</p>
              )}

              {selectedAnswer === 'reference' && (
                <p>
                  Correct! The markings form a Bible reference!
                </p>
              )}
            </>
          )}
        </>
      )}
    </main>
  )
}

export default App