import './App.css'
import FormPage from './Components/FormPage'
import SecondPage from './Components/SecondPage'
import { Routes,Route, Form } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Internship Assignment</h1>
      <Routes>
        <Route  path='/' Component={FormPage}/>
        <Route path='/secondpage' Component={SecondPage}/>
      </Routes>
    </>
  )
}

export default App
