import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>How high are you? {props.name} {props.num}</p>
    </div>
  )
}
const Hella = (props) => {
    return (
      <div>
        <p>{props.name}: It's Hi. How are you on scale {props.num} to {props.num2}</p>
      </div>
    )
  }
  
  const App = () => {
const numero = 17

    return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Officer" num= {numero} />
        <Hella name="Me an intelectual" num="1" num2="2" />
        
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))