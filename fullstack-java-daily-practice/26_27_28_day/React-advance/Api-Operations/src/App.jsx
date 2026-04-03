
import { Navbar } from "./components/Navbar"
import { Posts } from "./pages/Posts";
import { DummyDataUser } from "./pages/DummyDataUser"
import {UserData} from './pages/UserData'
import { Route,Routes } from "react-router";
import { Home } from "./pages/Home";
import { UserAdd } from "./pages/UserAdd";
import { EditUser } from "./pages/EditUser";



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="posts" element={<Posts/> } />
        <Route path="dummy-data" element={<DummyDataUser />} />
        <Route path="users" element={<UserData />} />
        <Route path="add" element={<UserAdd/>} />
        <Route path="edit/:id" element={<EditUser/>} />
      </Routes>
    </>
)
}

export default App;
