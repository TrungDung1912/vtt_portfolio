import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Video5 from './example/Video5'
import Video7 from './example/Video7'
import Video9 from './example/Video9'
import Video10 from './example/Video10/Video10'
import Video13 from './example/Video13'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        {/* <Video13
          // age={25}
          name={'DungBum'}
        // address={'DungBum'}
        /> */}
        <Video10
          defaultName={'Dung'}
          defaultAge={20}
        />
      </p>
    </div>
  )
}

export default App
