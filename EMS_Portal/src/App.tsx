import './App.css'
import AddEmployee from './components/AddEmployee'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add-employee' element={<AddEmployee/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
