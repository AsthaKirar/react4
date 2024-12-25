
import { useState } from 'react'

const App = () => {
  let [counter,setCounter] = useState(15)
  const addValue =()=>{
    console.log("clicked",counter);
    counter = counter+1
    setCounter(counter)

  }

  const removeValue = ()=>{
    setCounter(counter-1)

  }
  return (
  
    <>
    <h1>me or react</h1>
    <h2>counter value {counter}</h2>
    <button onClick={addValue} >Add valuen {counter} </button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App