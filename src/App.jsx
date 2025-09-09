import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PropertyDetailsPage from './components/PropertyDetailsPage'
import UserContext from './Contexts/UserContext'

function App() {
  const [properties, setProperties] = useState([])

  return (
    <UserContext>
      <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage properties={properties} setProperties={setProperties} />} />
            <Route path='/properties/:id' element={<PropertyDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </UserContext>
  )
}

export default App
