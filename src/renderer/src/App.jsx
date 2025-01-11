import { useEffect, useRef, useState } from 'react'
import { useElectron } from './useElectron'
import Button from './components/Button'
import IconButton from './components/IconButton'

function App() {
  const { eventBus } = useElectron()
  const [counter, setCounter] = useState(0)
  const dialogRef = useRef(null)

  useEffect(() => {
    eventBus.on('pong', () => setCounter((c) => c + 1))
  }, [eventBus])

  return (
    <>
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center gap-2">
        <p className="font-extrabold text-2xl">Hello world</p>
        <p>Counter: {counter}</p>
        <Button onClick={() => eventBus.send('ping')} width={256}>
          <p className="material-symbols-outlined">done</p>
        </Button>
        <Button onClick={() => dialogRef.current.showModal()} width={256}>
          <p className="material-symbols-outlined">question_mark</p>
        </Button>
      </div>
      <dialog ref={dialogRef} className="w-full h-full">
        <p>Dialog</p>
        <IconButton onClick={() => dialogRef.current.close()} iconName="close" theme="red"></IconButton>
      </dialog>
    </>
  )
}

export default App
