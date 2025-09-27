import './App.css'
import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import PropertyDetailsPage from './components/PropertyDetailsPage'
import UserContext from './Contexts/UserContext'
import useUsers from './hooks/useUsers'
import FavouritesPage from './components/FavouritesPage'
import ProfilePage from './components/ProfilePage'
import { fetchUserById } from './utils/apiCalls'
import useProperties from './hooks/useProperties'
import HostPropertyDetailsPage from './components/HostPropertyDetailsPage'
import HostPropertyListings from './components/HostPropertyListings'

function App() {
  const [properties, setProperties] = useState([])
  const [bookings, setBookings] = useState([])
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { users } = useUsers()
  const [userIdSignedIn, setUserIdSignedIn] = useState(() => {
    return localStorage.getItem('userIdSignedIn')
  })

  const { propertiesLoading, setSearchParams } = useProperties(setProperties)

  useEffect(() => {
    if (userIdSignedIn === null) {
      localStorage.removeItem('userIdSignedIn')
    } else {
      localStorage.setItem('userIdSignedIn', userIdSignedIn)
      setIsLoading(true)
      fetchUserById(userIdSignedIn).then((response) => {
        setProfile(response.data.user)
        setError('')
      }).catch((error) => {
        setError(error.response.data.msg)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }, [userIdSignedIn])

  return (
    <UserContext value={{ userIdSignedIn, setUserIdSignedIn }}>
        <Header users={users} />
        <Routes>
          <Route path='/' element={<HomePage properties={properties} setSearchParams={setSearchParams} propertiesLoading={propertiesLoading} />} />
          <Route path='/properties/:id' element={<PropertyDetailsPage profile={profile} />} />
          <Route path='/user/:id/favourites' element={<FavouritesPage />} />
          <Route path='/user/:id/profile' element={<ProfilePage profile={profile} setProfile={setProfile} bookings={bookings} setBookings={setBookings} error={error} isLoading={isLoading} properties={properties} />} />
          <Route path='/user/properties/:id' element={<HostPropertyDetailsPage />} />
          <Route path='/properties/host/:id' element={<HostPropertyListings />} />
        </Routes>
    </UserContext>
  )
}

export default App
