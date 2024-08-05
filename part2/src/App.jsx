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
      <p>{props.part2} {props.excersices3}</p>
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
  const part1 = 'fundametals of react';
  const excersices1 = 10;
  const part2 = 'fundametals of react';
  const excersices2 = 7;
  const part3 = 'fundametals of react';
  const excersices3 = 14;

  return (
    <div>
      <Header course={course}/>
      <Header course= "if you dont understand can you learn again pleace"/>
      <Content part1= {part1} excersices1={excersices1} />
      <Content part1= {part2} excersices1={excersices2} />
      <Content part1= {part3} excersices1={excersices3} />
      <Total Total={(excersices1)+(excersices2)+(excersices3)}/>
    </div>
    
  )
}

export default App
