import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux_toolkit/store.jsx'
import { Provider } from "react-redux"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <App />
        <Footer />
      </Router>
    </Provider>
  </StrictMode >,
)
