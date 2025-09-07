import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './components/Header'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
