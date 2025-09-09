import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PropertyDetailsPage from './components/PropertyDetailsPage'

function App() {
const [properties, setProperties] = useState([])

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage properties={properties} setProperties={setProperties}/>} />
          <Route path='/properties/:id' element={<PropertyDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
