import './App.css'
import { Routes,Route } from 'react-router-dom'
import FormPage from './Components/FormPage'
import SecondPage from './Components/SecondPage'

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
