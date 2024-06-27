import './App.css'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add-employee' element={<AddEmployee/>}/>
          <Route path='/edit-employee/:id' element={<EditEmployee/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
