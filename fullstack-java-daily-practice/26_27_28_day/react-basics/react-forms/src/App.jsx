import { useState } from "react"
import { Clock } from "./components/Clock/Clock"
import { Form1 } from "./components/Forms/Form1"
import { Form2Multiform } from "./components/Forms/Form2Multiform"
import { Form3Validation } from "./components/Forms/Form3.Validation"
import Nav from "./components/Header/Nav"
import { Table } from "./components/Table/Table"


function App() {

  const [color, setColor] = useState("green")


  return (
    <>
      <Nav />
      <select name="color" id="color" onChange={(e)=>{setColor(e.target.value)}}>
        <option value={"red"}>Red</option>
        <option value={"orange"}>Orange</option>
        <option value={"blue"}>Blue</option>
      </select>
      <Clock color={color} />
      <hr />
      <Table />
      <hr />
      <Form1 />
      <hr />
      <Form2Multiform />
      <hr />
      <Form3Validation />
      <hr />
    </>
  )
}

export default App
