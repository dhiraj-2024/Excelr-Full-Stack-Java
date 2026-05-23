import { AddUser } from "./pages/AddUser";
import { Home } from "./pages/Home";
import {Route ,Routes} from "react-router"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser/> } />
    </Routes>
    </>
  )
}
export default App;