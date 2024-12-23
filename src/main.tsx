
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer,Slide } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import {BrowserRouter}  from 'react-router-dom'
import store from './store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <>
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar
    newestOnTop={true}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Slide}
    />
    </BrowserRouter>
  </Provider>
    </>
)
