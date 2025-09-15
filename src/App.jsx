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
import { fetchUserById } from './utils/apiCalls'

function App() {
  const [properties, setProperties] = useState([])
  const [bookings, setBookings] = useState([])
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { users } = useUsers()
  const [userIdSignedIn, setUserIdSignedIn] = useState(() => {
    return localStorage.getItem('userIdSignedIn') || undefined
  })

  useEffect(() => {
    setIsLoading(true)
    fetchUserById(userIdSignedIn).then((response) => {
      setProfile(response.data.user)
      setError('')
    }).catch((error) => {
      setError(error.response.data.msg)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [userIdSignedIn])

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
          <Route path='/properties/:id' element={<PropertyDetailsPage profile={profile} />} />
          <Route path='/user/:id/favourites' element={<FavouritesPage />} />
          <Route path='/user/:id/profile' element={<ProfilePage profile={profile} setProfile={setProfile} bookings={bookings} setBookings={setBookings} error={error} isLoading={isLoading} />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  )
}

export default App
