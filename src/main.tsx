
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import {BrowserRouter}  from 'react-router-dom'
import store from './store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <>
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <ToastContainer/>
    </BrowserRouter>
  </Provider>
    </>
)
