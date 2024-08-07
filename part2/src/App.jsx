const Header = (props) =>{
  return(
  <div>
    <p>{props.course}</p>
  </div>
  )
}

const Content = (props) => {
  
  return(
    <div>
      <p>{props.part1} {props.excersices1}</p>
      <p>{props.part2} {props.excersices2}</p>
      <p>{props.part3} {props.excersices3}</p>
    

    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>number of exercises {props.Total}</p>
    </div>
  )
}


const App = () => {
  const course = 'half stack application development';
 const parts =[
    { name1 :'fundametals of react',
    excersices1 : 10},
    {name2:'fundametals of react',
    excersices2 : 7},
    {name3:'fundametals of react',
    excersices3 : 14},
 ]
 const [part1,part2,part3]=parts; 

 
 

  return (
    <div>
      <Header course={course}/>
      <Header course= "if you dont understand can you learn again pleace"/>
      <Content part1= {part1.name1} excersices1={part1.excersices1} />
      <Content part2= {part2.name2} excersices2={part2.excersices2} />
      <Content part3= {part3.name3} excersices3={part3.excersices3} />
      
      <Total Total={(part1.excersices1)+(part2.excersices2)+(part3.excersices3)}/>
    </div>
    
  )
}

export default App
