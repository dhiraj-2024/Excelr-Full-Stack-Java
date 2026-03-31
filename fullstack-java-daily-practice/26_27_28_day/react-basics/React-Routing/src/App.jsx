import { Router,Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { News } from "./pages/News"
import { Navbar } from "./components/Navbar"
import AppRouter from "./routes"
import { College } from "./pages/College"
import { Student } from "./pages/Student"
import { Department } from "./pages/Department"


function App() {


  return (
    // <div>
    //   {/* <AppRouter/> */}
    // </div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/college" element={<College />}>
        <Route path="student" element={<Student/>} />
        <Route path="department" element={<Department/>} />
        </Route>
      {/* <Route path="*" element={<h1>page not found</h1>} /> */}
      <Route path="/*" element={<h1>page not found</h1>} />
      </Routes>

  )
}

export default App
