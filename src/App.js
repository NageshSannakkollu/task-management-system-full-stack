import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./components/HomePage"
import AddTask from "./components/AddTask"
import UpdateTask from "./components/UpdateTask"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/add-task" element={<AddTask/>} />
      <Route exact path="/update-task/:id" element={<UpdateTask/>}/>
    </Routes>
  </BrowserRouter>
)

export default App