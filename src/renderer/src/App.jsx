import { useEffect, useState } from 'react'
import { useElectron } from './useElectron'

function App() {
  const { eventBus } = useElectron()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    eventBus.on('pong', () => setCounter((c) => c + 1))
  }, [eventBus])

  return (
    <div className="p-4 w-[100vw] h-[100vh] flex flex-col items-center justify-center space-y-4">
      <p>Hello world</p>
      <p>Counter: {counter}</p>
      <button className="bg-green-400 p-2 rounded-xl hover:scale-110 transition-all duration-200" onClick={() => eventBus.send('ping')}>
        Ping
      </button>
    </div>
  )
}

export default App
