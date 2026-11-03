import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <UserContext>
  <StrictMode>
    <App />
    <ToastContainer/>
  </StrictMode>
  </UserContext>
  </Provider>
)
