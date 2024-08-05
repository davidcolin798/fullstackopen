const Hello = (props) =>{
  return(
    <div>
      <p>Hello {props.name}, your are {props.age}</p>
    </div>
  )
} 


const App = () =>{
  const name ='peter';
  const age = 10;
  
  return (
      <div>
        <h1>Greetings</h1>
      <Hello name='george' age={20+10}/>
      <Hello name={name} age={age}/>
      </div>     
  )
}
export default App
