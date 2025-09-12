import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PropertyDetailsPage from './components/PropertyDetailsPage'
import UserContext from './Contexts/UserContext'
import useUsers from './hooks/useUsers'

function App() {
  const [properties, setProperties] = useState([])
  const { users } = useUsers()
  const [userIdSignedIn, setUserIdSignedIn] = useState()

  return (
    <UserContext value={{userIdSignedIn, setUserIdSignedIn}}>
        <Header users={users}/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage properties={properties} setProperties={setProperties} />} />
            <Route path='/properties/:id' element={<PropertyDetailsPage />} />
          </Routes>
        </BrowserRouter>
    </UserContext>
  )
}

export default App
