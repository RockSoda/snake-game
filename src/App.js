import Board from './Board/Board.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [isPoisonInvolved, setIsPoisonInvolved] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const handleOnClick = (choice) => {
    setIsPoisonInvolved(choice)
    setIsReady(true)
  }

  return (
    <div className="App">
      {!isReady &&
        <>
          <p>Poison Food Involved? (reverse current movement)</p>
          <tr>
            <td>
              <button className="btn" onClick={() => handleOnClick(true)}>Yes</button>
            </td>
            <td>
              <button className="btn" onClick={() => handleOnClick(false)}>No</button>
            </td>
          </tr>
        </>}
      {isReady && <Board isPoisonInvolved={isPoisonInvolved} />}
    </div>
  )
}

export default App;
