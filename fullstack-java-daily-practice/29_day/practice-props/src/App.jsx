import User from "./components/User"

function App() {

  const name = "dhiraj"

  const greet = () => {
   return(
     <h1>Heloo good morning</h1>
   )
}

  return (
    <>
      <h1>Welcom to the App</h1>
      <User
        name={name}
        city="nashik"
        greet={greet()}
      />
    </>
  )
}

export default App
