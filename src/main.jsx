import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <ToastContainer position='bottom-right' autoClose={2000} closeOnClick={true} hideProgressBar={true}  />
    </BrowserRouter>
)