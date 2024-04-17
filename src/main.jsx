import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextpages from './Context/Contextpages.jsx'
import NextPage from './components/NextPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextpages>
      <App />
      <NextPage />
    </Contextpages>
  </React.StrictMode>,
)
