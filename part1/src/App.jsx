import { useState } from "react"
const Display =({counter})=> <div>{counter}</div>
const Plus = ({onSmash, text})=><button onClick={onSmash}> {text} </button>

const App = () =>{
  const[counter,setCounter] = useState(0)
  const increaseNyOne=()=>setCounter(counter+1);
  const decreaseByOne=()=>setCounter(counter-1);
  const setZero =()=>setCounter(0);

  
  
  return (
     <div>
        <Display counter={counter}/>
        <Plus onClick ={increaseNyOne} text={'plus'}/>
        <Plus onClick={setZero} text={'zero'}/>
        <Plus onClick={decreaseByOne} text={'minus'}/>
     </div> 
  )
}
export default App
