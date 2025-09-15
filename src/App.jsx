import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PropertyDetailsPage from './components/PropertyDetailsPage'
import UserContext from './Contexts/UserContext'
import useUsers from './hooks/useUsers'
import FavouritesPage from './components/FavouritesPage'
import ProfilePage from './components/ProfilePage'

function App() {
  const [properties, setProperties] = useState([])
  const { users } = useUsers()
  const [userIdSignedIn, setUserIdSignedIn] = useState(() => {
    return localStorage.getItem('userIdSignedIn') || undefined
  })

  useEffect(() => {
    if (userIdSignedIn === null) {
      localStorage.removeItem('userIdSignedIn')
    } else {
      localStorage.setItem('userIdSignedIn', userIdSignedIn)
    }
  }, [userIdSignedIn])

  return (
    <UserContext value={{ userIdSignedIn, setUserIdSignedIn }}>
      <BrowserRouter>
        <Header users={users} />
        <Routes>
          <Route path='/' element={<HomePage properties={properties} setProperties={setProperties} />} />
          <Route path='/properties/:id' element={<PropertyDetailsPage />} />
          <Route path='/user/:id/favourites' element={<FavouritesPage />} />
          <Route path='/user/:id/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  )
}

export default App
