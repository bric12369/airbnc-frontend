import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'

function App() {
const [properties, setProperties] = useState([])

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage properties={properties} setProperties={setProperties}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
